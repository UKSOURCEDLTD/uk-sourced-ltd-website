import { VertexAI } from '@google-cloud/vertexai';
import * as admin from 'firebase-admin';

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
    admin.initializeApp();
}

const db = admin.firestore();

// Initialize Vertex AI
// Note: Requires Google Cloud Project ID to be set in environment variables or ADC.
// We use the public ID from env if available, or fallback to default.
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || process.env.GCLOUD_PROJECT;
const location = 'us-central1';

let vertexAI: VertexAI | null = null;
let model: any | null = null; // GenerativeModel

function getModel() {
    if (!model) {
        if (!projectId) {
            throw new Error("NEXT_PUBLIC_FIREBASE_PROJECT_ID is not set in environment variables.");
        }
        vertexAI = new VertexAI({ project: projectId, location });
        model = vertexAI.getGenerativeModel({ model: 'text-embedding-004' });
    }
    return model;
}

export interface KnowledgeChunk {
    id?: string;
    text: string;
    embedding: number[];
    metadata?: any;
}

/**
 * Generates an embedding for a given text using Vertex AI.
 */
export async function generateEmbedding(text: string): Promise<number[]> {
    try {
        const result = await getModel().embedContent(text);
        const embedding = result.embedding?.values;
        if (!embedding) throw new Error("No embedding returned");
        return embedding;
    } catch (error) {
        console.error("Error generating embedding:", error);
        throw error;
    }
}

/**
 * Stores a text chunk with its embedding in Firestore.
 */
export async function storeKnowledgeChunk(text: string, metadata: any = {}) {
    const embedding = await generateEmbedding(text);
    await db.collection('knowledge_base').add({
        text,
        embedding,
        metadata,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
}

/**
 * Calculates Cosine Similarity between two vectors.
 */
function cosineSimilarity(vecA: number[], vecB: number[]): number {
    let dotProduct = 0;
    let magnitudeA = 0;
    let magnitudeB = 0;
    for (let i = 0; i < vecA.length; i++) {
        dotProduct += vecA[i] * vecB[i];
        magnitudeA += vecA[i] * vecA[i];
        magnitudeB += vecB[i] * vecB[i];
    }
    return dotProduct / (Math.sqrt(magnitudeA) * Math.sqrt(magnitudeB));
}

/**
 * Searches the knowledge base for the most relevant chunks.
 * Note: Uses in-memory Cosine Similarity. For large datasets (>5k chunks), use Firestore Vector Search.
 */
export async function searchKnowledgeBase(query: string, limit: number = 3): Promise<KnowledgeChunk[]> {
    // 1. Generate embedding for query
    const queryEmbedding = await generateEmbedding(query);

    // 2. Fetch all chunks (Optimization: Cache this or use Vector Search for scale)
    const snapshot = await db.collection('knowledge_base').get();

    const chunks: { chunk: KnowledgeChunk, score: number }[] = [];

    snapshot.forEach(doc => {
        const data = doc.data() as KnowledgeChunk;
        if (data.embedding) {
            const score = cosineSimilarity(queryEmbedding, data.embedding);
            chunks.push({ chunk: { ...data, id: doc.id }, score });
        }
    });

    // 3. Sort by score (descending) and return top K
    chunks.sort((a, b) => b.score - a.score);

    return chunks.slice(0, limit).map(c => c.chunk);
}
