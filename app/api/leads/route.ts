import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Basic validation
        if (!data) {
            return NextResponse.json({ success: false, error: 'No data provided' }, { status: 400 });
        }

        // Store in Firestore "leads" collection
        const docRef = await addDoc(collection(db, "leads"), {
            ...data,
            createdAt: serverTimestamp(),
            source: 'voice-agent_inbound'
        });

        return NextResponse.json({ success: true, id: docRef.id });
    } catch (error) {
        console.error('Error saving lead:', error);
        return NextResponse.json({ success: false, error: 'Failed to save lead' }, { status: 500 });
    }
}
