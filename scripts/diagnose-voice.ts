import { VertexAI } from '@google-cloud/vertexai';
import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load env
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || process.env.GCLOUD_PROJECT;

console.log("--- DIAGNOSTIC START ---");
console.log(`Project ID: ${projectId}`);

if (!projectId) {
    console.error("❌ CRTICAL: No Project ID found.");
    process.exit(1);
}

async function testVertex() {
    console.log("\nTesting Vertex AI (Embeddings)...");
    try {
        const vertexAI = new VertexAI({ project: projectId, location: 'us-central1' });
        const model = vertexAI.getGenerativeModel({ model: 'text-embedding-004' });
        const res = await (model as any).embedContent("Hello world");
        if (res.embedding) {
            console.log("✅ Vertex AI Connection Successful!");
        } else {
            console.error("⚠️ Vertex AI returned no embedding (unexpected).");
        }
    } catch (e: any) {
        console.error("❌ Vertex AI Failed:");
        console.error(`   Error: ${e.message}`);
        if (e.message.includes("API has not been used")) {
            console.error("   -> ACTION: Enable 'Vertex AI API' in Google Cloud Console.");
        }
        if (e.message.includes("credentials")) {
            console.error("   -> ACTION: Run 'gcloud auth application-default login' in your terminal.");
        }
    }
}

async function testTTS() {
    console.log("\nTesting Cloud TTS...");
    try {
        const client = new TextToSpeechClient();
        const [response] = await client.synthesizeSpeech({
            input: { text: "Hello" },
            voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
            audioConfig: { audioEncoding: 'MP3' },
        });
        if (response.audioContent) {
            console.log("✅ Cloud TTS Connection Successful!");
        }
    } catch (e: any) {
        console.error("❌ Cloud TTS Failed:");
        console.error(`   Error: ${e.message}`);
        if (e.message.includes("API has not been used")) {
            console.error("   -> ACTION: Enable 'Cloud Text-to-Speech API' in Google Cloud Console.");
        }
    }
}

async function run() {
    await testVertex();
    await testTTS();
    console.log("\n--- DIAGNOSTIC END ---");
}

run();
