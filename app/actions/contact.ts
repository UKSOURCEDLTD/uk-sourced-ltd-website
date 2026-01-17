'use server'

import { triggerOutboundCall } from '@/lib/voice/outbound';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

import { redirect } from 'next/navigation';

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const projectDetails = formData.get('projectDetails') as string;

    if (!name || !email || !phone) {
        throw new Error('Missing required fields');
    }

    try {
        // 1. Save Lead to Firestore
        await addDoc(collection(db, "leads"), {
            name,
            email,
            phone,
            projectDetails,
            createdAt: serverTimestamp(),
            source: 'web_form',
            status: 'new'
        });

        // 2. Trigger Voice Agent Call (Immediate)
        await triggerOutboundCall(name, phone, projectDetails);

    } catch (error) {
        console.error("Form submission failed:", error);
        // In a real app, we'd want to return errors to the form, typically via useFormState
        // For now, we'll just log and let it fail.
        throw error;
    }

    redirect('/contact?submitted=true');
}
