import { NextResponse } from 'next/server';
import { checkAvailability } from '@/lib/tools/calendar';

export async function POST(req: Request) {
    const { message } = await req.json();
    const lowerMsg = message.toLowerCase();

    // Simple intent matching logic to simulate an agent
    if (lowerMsg.includes("book") || lowerMsg.includes("call") || lowerMsg.includes("appointment") || lowerMsg.includes("schedule")) {
        const slots = await checkAvailability();
        return NextResponse.json({
            message: {
                role: "agent",
                text: "I can certainly help with that. I've checked the founder's calendar. Here are a few available times for a 15-minute discovery call:",
                type: "slots",
                slots: slots
            }
        });
    }

    // Fallback conversational response
    return NextResponse.json({
        message: {
            role: "agent",
            text: "I understand. Our goal is to scale your Amazon business. Would you like to check availability for a strategy session?"
        }
    });
}
