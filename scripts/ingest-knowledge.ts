import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

import { storeKnowledgeChunk } from '../lib/knowledge-base';

async function ingest() {
    console.log("Starting ingestion...");
    console.log("Current working directory:", process.cwd());
    const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || process.env.GCLOUD_PROJECT;
    console.log("Resolved Project ID:", projectId);

    if (!projectId) {
        console.error("ERROR: No Project ID found in environment variables.");
        console.error("Make sure .env.local exists and contains NEXT_PUBLIC_FIREBASE_PROJECT_ID.");
        process.exit(1);
    }


    // Read GEMINI.md as the source of truth
    const filePath = path.join(process.cwd(), 'GEMINI.md');
    if (!fs.existsSync(filePath)) {
        console.error("GEMINI.md not found!");
        process.exit(1);
    }

    const content = fs.readFileSync(filePath, 'utf-8');

    // Simple splitting by headers (Markdown)
    // This is a naive chunking strategy. For better results, use a recursive character splitter.
    const chunks = content.split(/^#+\s/gm).filter(c => c.trim().length > 0);

    for (const chunk of chunks) {
        // Add back the header context if needed, or just store the chunk
        // Here we just store the trimmed chunk
        const text = chunk.trim();
        if (text.length < 50) continue; // Skip very short chunks

        console.log(`Ingesting chunk: ${text.substring(0, 50)}...`);
        try {
            await storeKnowledgeChunk(text, { source: 'GEMINI.md' });
        } catch (e) {
            console.error("Failed to ingest chunk:", e);
        }
    }

    console.log("Ingestion complete!");
}

ingest().catch(console.error);
