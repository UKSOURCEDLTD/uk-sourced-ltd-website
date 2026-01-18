"use client";

import { useState, useRef, useEffect } from 'react';
import { Mic, Square, Loader2, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VoiceSandbox() {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [response, setResponse] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [audioSrc, setAudioSrc] = useState<string | null>(null);
    const recognitionRef = useRef<any>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
            const SpeechRecognition = (window as any).webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;
            recognitionRef.current.lang = 'en-GB';

            recognitionRef.current.onresult = (event: any) => {
                const text = event.results[0][0].transcript;
                setTranscript(text);
                handleSend(text);
            };

            recognitionRef.current.onend = () => {
                setIsListening(false);
            };
        }
    }, []);

    const toggleListening = () => {
        if (isListening) {
            recognitionRef.current?.stop();
        } else {
            setTranscript('');
            recognitionRef.current?.start();
            setIsListening(true);
        }
    };

    const handleSend = async (text: string) => {
        setIsProcessing(true);
        setResponse('');
        setAudioSrc(null);

        try {
            const res = await fetch('/api/agent/voice', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text }),
            });

            const data = await res.json();
            if (data.error) throw new Error(data.error);

            setResponse(data.text);
            if (data.audio) {
                const audioUrl = `data:audio/mp3;base64,${data.audio}`;
                setAudioSrc(audioUrl);
                const audio = new Audio(audioUrl);
                audio.play();
            }
        } catch (error: any) {
            console.error("Error:", error);
            setResponse(`Error: ${error.message}`);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 border border-border-subtle rounded-2xl bg-white/50 backdrop-blur-sm">
            <h2 className="text-2xl font-serif text-deep-charcoal mb-8">Voice Sandbox</h2>

            <motion.button
                onClick={toggleListening}
                className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all ${isListening ? 'bg-red-500/10 text-red-500 ring-2 ring-red-500' :
                    isProcessing ? 'bg-desaturated-teal/10 text-desaturated-teal ring-2 ring-desaturated-teal' :
                        'bg-deep-charcoal text-white hover:scale-105'
                    }`}
                whileTap={{ scale: 0.95 }}
            >
                {isProcessing ? (
                    <Loader2 className="w-8 h-8 animate-spin" />
                ) : isListening ? (
                    <Square className="w-8 h-8 fill-current" />
                ) : (
                    <Mic className="w-8 h-8" />
                )}

                {isListening && (
                    <motion.div
                        className="absolute inset-0 rounded-full border-4 border-red-500"
                        animate={{ scale: [1, 1.2], opacity: [1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                )}
            </motion.button>

            <div className="mt-8 text-center space-y-4 max-w-md w-full">
                <AnimatePresence mode='wait'>
                    {transcript && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="p-4 bg-gray-50 rounded-lg border border-border-subtle"
                        >
                            <p className="text-sm font-mono text-gray-500 mb-1">YOU SAID</p>
                            <p className="text-deep-charcoal">{transcript}</p>
                        </motion.div>
                    )}

                    {response && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 bg-desaturated-teal/5 rounded-lg border border-desaturated-teal/20"
                        >
                            <div className="flex items-center gap-2 mb-1 text-desaturated-teal">
                                <Volume2 className="w-4 h-4" />
                                <p className="text-sm font-mono">AGENT</p>
                            </div>
                            <p className="text-deep-charcoal font-medium">{response}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <p className="mt-8 text-xs text-gray-400 font-mono">
                Powered by Gemini 1.5 & Google Cloud TTS
            </p>
        </div>
    );
}
