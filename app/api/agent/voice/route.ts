import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
import { searchKnowledgeBase } from '@/lib/knowledge-base';
import { VertexAI } from '@google-cloud/vertexai';
import { TextToSpeechClient } from '@google-cloud/text-to-speech';

// Initialize Vertex AI
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || process.env.GCLOUD_PROJECT;
const location = 'us-central1';
const vertexAI = new VertexAI({ project: projectId, location });
const model = vertexAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Initialize TTS
const ttsClient = new TextToSpeechClient();

export async function POST(req: Request) {
    console.log("Voice Agent: Request received");
    try {
        const body = await req.json();
        console.log("Voice Agent: Request body:", body);
        const { text, voiceId } = body;

        if (!text) {
            return NextResponse.json({ error: "Text is required" }, { status: 400 });
        }

        // 1. Retrieve Context from Knowledge Base
        const knowledgeChunks = await searchKnowledgeBase(text, 3);
        const context = knowledgeChunks.map(c => c.text).join("\n---\n");

        // 2. Generate Response using Gemini
        const systemPrompt = `You are the AI Voice Agent for UK Sourced Ltd. 
        Your tone is professional, minimalist, and elite ("Light Minimalist").
        Use the following context to answer the user's question. 
        If the answer is not in the context, politely say you don't know but can arrange a call.
        Keep your answer concise (suitable for voice).
        
        Context:
        ${context}`;

        const chat = model.startChat({
            history: [
                { role: 'user', parts: [{ text: systemPrompt }] },
                { role: 'model', parts: [{ text: "Understood. I am ready to represent UK Sourced Ltd." }] }
            ]
        });

        const result = await chat.sendMessage(text);
        const responseText = result.response.candidates?.[0].content.parts[0].text || "I apologize, I couldn't generate a response.";
        console.log("Voice Agent: Gemini Response:", responseText);

        // 3. Synthesize Speech using Google Cloud TTS
        const request = {
            input: { text: responseText },
            // Select the language and SSML voice gender (optional)
            voice: { languageCode: 'en-GB', name: 'en-GB-Neural2-B' }, // British Elite Voice
            audioConfig: { audioEncoding: 'MP3' as const },
        };

        const [response] = await ttsClient.synthesizeSpeech(request);
        const audioContent = response.audioContent;

        // Convert audio buffer to base64
        const audioBase64 = audioContent ? Buffer.from(audioContent).toString('base64') : null;

        return NextResponse.json({
            text: responseText,
            audio: audioBase64,
            contextUsed: knowledgeChunks // Debug info
        });

    } catch (error: any) {
        console.error("Voice Agent Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
