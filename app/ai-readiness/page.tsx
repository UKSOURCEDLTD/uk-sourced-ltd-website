'use client';

import { motion } from 'framer-motion';
import DynamicImage from '@/components/DynamicImage';
import Link from 'next/link';
import { ArrowRight, Bot, Database, Network, Cpu, ShieldCheck } from 'lucide-react';
import BookingButton from '@/components/BookingButton';
import { useState } from 'react';
import BookingModal from '@/components/BookingModal';

export default function AiReadinessPage() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <main className="min-h-screen bg-soft-bg overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-8 border-b border-border-subtle">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-soft-bg/50 to-soft-bg"></div>
                </div>

                <div className="max-w-screen-xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-desaturated-teal/20 rounded-full bg-desaturated-teal/5"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-desaturated-teal opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-desaturated-teal"></span>
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-desaturated-teal font-bold">
                            Live Protocol: 2026 Ready • Powered by Google Antigravity
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-heading font-medium text-deep-charcoal mb-8 tracking-tight leading-none"
                    >
                        Stepping into 2026 with <br />
                        <span className="text-desaturated-teal italic">Google's Unified AI Stack</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-deep-charcoal/60 max-w-3xl mx-auto font-light leading-relaxed mb-12"
                    >
                        You sell on Amazon. Soon, machines will buy on Amazon. We help you sell to them.
                    </motion.p>
                </div>
            </section>

            {/* The Paradigm Shift */}
            <section className="py-32 px-8 bg-white">
                <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="space-y-12"
                    >
                        <div>
                            <span className="data-label text-desaturated-teal mb-4 block">The Paradigm Shift</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-medium text-deep-charcoal mb-6">
                                The Old Way vs. <span className="italic">The Future</span>.
                            </h2>
                            <p className="text-lg text-deep-charcoal/70 leading-relaxed">
                                For the last decade, selling on Amazon meant optimizing for human eyes: catchy titles, emotional imagery, and psychology-driven pricing. This was the "Human SEO" era.
                            </p>
                            <p className="text-lg text-deep-charcoal/70 leading-relaxed mt-4">
                                But in 2026, a massive shift occurs. Smart AI agents will begin purchasing on behalf of consumers. These "buying bots" don't care about pretty pictures. They care about data integrity, stock reliability, and price logic. This is <strong>Agentic Optimization</strong>, and it's what keeps your brand visible when the shopper isn't a human.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-border-subtle pt-8">
                            <div>
                                <h3 className="text-lg font-bold mb-2">Optimizing for Heads</h3>
                                <ul className="text-sm text-deep-charcoal/60 space-y-2 font-mono">
                                    <li>• "Clickbait" Titles</li>
                                    <li>• Emotional A+ Content</li>
                                    <li>• Psychology Pricing ($19.99)</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-desaturated-teal mb-2">Optimizing for Bots</h3>
                                <ul className="text-sm text-deep-charcoal/60 space-y-2 font-mono">
                                    <li>• Perfect Schema Data</li>
                                    <li>• 100% In-Stock Reliability</li>
                                    <li>• Algorithmic Value Logic</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative aspect-square lg:aspect-[4/5] bg-deep-charcoal rounded-sm overflow-hidden p-12 flex flex-col justify-between group">
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,128,128,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,128,128,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                        </div>
                        <Bot className="w-16 h-16 text-desaturated-teal relative z-10" />
                        <div className="relative z-10 space-y-4">
                            <div className="text-xs font-mono text-desaturated-teal uppercase tracking-widest">
                                System Status
                            </div>
                            <div className="text-4xl text-white font-mono">
                                OPTIMIZED
                            </div>
                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-desaturated-teal"
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Antigravity Section - NEW */}
            <section className="py-32 px-8 bg-deep-charcoal text-white relative overflow-hidden">
                {/* Abstract BG */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                    </svg>
                </div>

                <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
                    <div className="lg:col-span-12 text-center mb-8">
                        <span className="inline-block py-1 px-3 rounded border border-desaturated-teal/50 text-desaturated-teal text-xs font-mono tracking-widest uppercase mb-6">
                            Verified Technology Partner
                        </span>
                        <h2 className="text-4xl md:text-6xl font-heading font-medium mb-6">
                            What is <span className="text-desaturated-teal">Google Antigravity?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
                            It's the engine that lets us manage your Amazon account with superhuman speed.
                        </p>
                    </div>

                    <div className="lg:col-span-12 flex flex-col justify-center gap-12 max-w-4xl mx-auto text-center">
                        <p className="text-lg text-white/60 leading-relaxed">
                            Imagine having an account manager who never sleeps, watches every single competitor price change 24/7, and instantly predicts when you're about to run out of stock. That is what Antigravity does for your brand.
                        </p>
                        <p className="text-lg text-white/60 leading-relaxed">
                            We use Google's most advanced AI technology to scan thousands of data points—from global market trends to micro-competitor moves—in real-time. This allows our human experts to make decisions based on hard data, not just gut feeling.
                        </p>
                    </div>

                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <div className="relative rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                            <div className="font-mono text-xs text-desaturated-teal mb-4">/// SYSTEM_LOG: ANTIGRAVITY_CORE</div>
                            <div className="space-y-4 font-mono text-sm text-white/80">
                                <div className="flex gap-4">
                                    <span className="text-white/40">09:41:22</span>
                                    <span>Syncing with Global Market Data... [COMPLETE]</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-white/40">09:41:23</span>
                                    <span>Analyzing Competitor Pricing Models... [OPTIMIZED]</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-white/40">09:41:25</span>
                                    <span>Generating Strategic Growth Pathways... [READY]</span>
                                </div>
                                <div className="mt-8 p-4 bg-desaturated-teal/10 border border-desaturated-teal/30 rounded text-desaturated-teal">
                                    <span className="font-bold">STATUS:</span> AI-First Infrastructure Active.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Infrastructure & Experience */}
            <section className="py-32 px-8 bg-soft-bg border-y border-border-subtle">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="text-center mb-24 max-w-4xl mx-auto">
                        <span className="data-label text-desaturated-teal mb-4 block">The Perfect Balance</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-medium text-deep-charcoal mb-8">
                            How We Prepare You (The 4 Pillars)
                        </h2>
                        <p className="text-xl text-deep-charcoal/70 leading-relaxed">
                            Here is exactly how we ensure your Amazon business is ready for the age of AI.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Database,
                                title: "Structured Data",
                                desc: "We format your product listings so Amazon's algorithms perfectly understand exactly what you sell—boosting your search visibility automatically."
                            },
                            {
                                icon: Network,
                                title: "API-First Logistics",
                                desc: "We connect your warehouse directly to Amazon. This means you never accidentally oversell or run out of stock, keeping your 'seller rating' flawless."
                            },
                            {
                                icon: Cpu,
                                title: "Smart Repricing",
                                desc: "Our systems adjust your prices 24/7 to beat competitors to the 'Buy Box' without sacrificing your profit margins."
                            },
                            {
                                icon: ShieldCheck,
                                title: "Human Guardrails",
                                desc: "AI does the math, but our veteran experts make the final judgment calls. We ensure technology serves your brand, not the other way around."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 border border-border-subtle hover:border-desaturated-teal transition-colors group"
                            >
                                <div className="w-12 h-12 bg-soft-bg rounded-lg flex items-center justify-center mb-6 group-hover:bg-deep-charcoal transition-colors">
                                    <item.icon className="w-6 h-6 text-deep-charcoal group-hover:text-desaturated-teal transition-colors" />
                                </div>
                                <h3 className="text-xl font-heading font-medium mb-4">{item.title}</h3>
                                <p className="text-sm text-deep-charcoal/60 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Advantage & CTA */}
            <section className="py-32 px-8 bg-white border-t border-border-subtle relative overflow-hidden">
                <div className="max-w-screen-xl mx-auto text-center relative z-10 space-y-12">
                    <h2 className="text-4xl md:text-6xl font-heading font-medium">
                        Is Your Business Ready?
                    </h2>
                    <p className="text-xl text-deep-charcoal/60 max-w-2xl mx-auto font-light">
                        Don't get left behind as the market evolves. Partner with the agency that speaks the language of the future.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <BookingButton onClick={() => setIsBookingModalOpen(true)} />
                        <Link href="/contact" className="px-8 py-4 border border-deep-charcoal/20 hover:bg-deep-charcoal hover:text-white transition-all text-sm font-bold uppercase tracking-widest rounded-sm">
                            Contact Strategy Team
                        </Link>
                    </div>
                </div>
            </section>

            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
            />
        </main>
    );
}
