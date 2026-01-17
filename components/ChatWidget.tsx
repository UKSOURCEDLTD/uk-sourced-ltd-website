"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Mic, Send, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

type Message = {
    role: "user" | "agent";
    text: string;
    type?: "text" | "slots";
    slots?: { id: string; label: string }[];
};

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "agent", text: "Hello! I'm the UK Sourced lead specialist. Want to book a discovery call with the founder?" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = input;
        setInput("");
        setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
        setIsTyping(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMsg, history: messages }),
            });

            const data = await response.json();

            setIsTyping(false);
            setMessages((prev) => [...prev, data.message]);
        } catch (error) {
            console.error(error);
            setIsTyping(false);
            setMessages((prev) => [...prev, { role: "agent", text: "Sorry, I'm having trouble connecting to the calendar. Please try again." }]);
        }
    };

    const handleSlotValues = async (slotLabel: string) => {
        setMessages(prev => [...prev, { role: "user", text: `I'll take ${slotLabel}` }]);
        setIsTyping(true);

        // Simulate booking delay
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, { role: "agent", text: `Perfect. I've sent a calendar invitation for ${slotLabel}.` }]);
        }, 1500);
    }

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="bg-white border border-border-subtle shadow-2xl rounded-2xl w-[350px] md:w-[400px] h-[500px] flex flex-col overflow-hidden mb-4"
                    >
                        {/* Header */}
                        <div className="bg-deep-charcoal p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-8 h-8 rounded-full bg-desaturated-teal flex items-center justify-center">
                                        <Sparkles className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-deep-charcoal rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold">Lead Specialist</h3>
                                    <p className="text-[10px] opacity-70">Powered by Gemini</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-soft-bg">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={clsx(
                                        "max-w-[85%] p-3 text-sm rounded-lg",
                                        msg.role === "user"
                                            ? "bg-deep-charcoal text-white ml-auto rounded-br-none"
                                            : "bg-white border border-border-subtle text-deep-charcoal mr-auto rounded-bl-none shadow-sm"
                                    )}
                                >
                                    {msg.text}
                                    {msg.type === "slots" && msg.slots && (
                                        <div className="mt-3 space-y-2">
                                            {msg.slots.map(slot => (
                                                <button
                                                    key={slot.id}
                                                    onClick={() => handleSlotValues(slot.label)}
                                                    className="block w-full text-left p-2 text-xs font-mono border border-desaturated-teal/30 rounded hover:bg-desaturated-teal/10 transition-colors text-desaturated-teal font-bold"
                                                >
                                                    {slot.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex gap-1 text-deep-charcoal/40 ml-2">
                                    <span className="animate-bounce">●</span>
                                    <span className="animate-bounce delay-75">●</span>
                                    <span className="animate-bounce delay-150">●</span>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-3 border-t border-border-subtle bg-white flex gap-2">
                            <button className="p-2 text-desaturated-teal hover:bg-soft-bg rounded-full transition-colors">
                                <Mic className="w-5 h-5" />
                            </button>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                placeholder="Type a message..."
                                className="flex-1 text-sm bg-soft-bg border border-border-subtle rounded-full px-4 focus:outline-none focus:border-desaturated-teal transition-colors"
                            />
                            <button onClick={handleSend} className="p-2 bg-deep-charcoal text-white rounded-full hover:opacity-90 transition-opacity">
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={clsx(
                    "w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300",
                    isOpen ? "bg-deep-charcoal text-white" : "bg-desaturated-teal text-white animate-pulse"
                )}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </motion.button>
        </div>
    );
}
