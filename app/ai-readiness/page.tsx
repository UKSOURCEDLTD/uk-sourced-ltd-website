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
                            Live Protocol: 2026 Ready
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-heading font-medium text-deep-charcoal mb-8 tracking-tight leading-none"
                    >
                        Ready for the <br />
                        <span className="text-desaturated-teal italic">Algorithm of Tomorrow</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-deep-charcoal/60 max-w-3xl mx-auto font-light leading-relaxed mb-12"
                    >
                        Commerce is shifting from human-first to agent-first search.
                        We have built the infrastructure to ensure your brand is chosen when machines make the buying decisions.
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
                                From SEO to <span className="italic">AIO</span>.
                            </h2>
                            <p className="text-lg text-deep-charcoal/70 leading-relaxed">
                                Traditional SEO was about ranking for keywords on a results page.
                                <span className="font-semibold text-deep-charcoal"> Agentic Optimization (AIO)</span> is about being the single correct answer provided by an AI agent.
                            </p>
                            <p className="text-lg text-deep-charcoal/70 leading-relaxed mt-4">
                                By 2026, a significant portion of re-ordering and discovery will be handled by autonomous buying agents. If your data isn't structured for them, you don't exist.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-border-subtle pt-8">
                            <div>
                                <h3 className="text-lg font-bold mb-2">Human Era</h3>
                                <ul className="text-sm text-deep-charcoal/60 space-y-2 font-mono">
                                    <li>• Keywords & Backlinks</li>
                                    <li>• Visual Appeal Focus</li>
                                    <li>• 10 Blue Links</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-desaturated-teal mb-2">Agent Era</h3>
                                <ul className="text-sm text-deep-charcoal/60 space-y-2 font-mono">
                                    <li>• Structured Data & Schema</li>
                                    <li>• API Reliability</li>
                                    <li>• The "One Best" Answer</li>
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

            {/* Core Infrastructure */}
            <section className="py-32 px-8 bg-soft-bg border-y border-border-subtle">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="text-center mb-24">
                        <span className="data-label text-desaturated-teal mb-4 block">Our Infrastructure</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-medium text-deep-charcoal">
                            Built on the 4 Pillars of <br /> Agentic Readiness
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Database,
                                title: "Structured Data",
                                desc: "Granular schema implementation ensures agents understand your product's weight, dimensions, and benefits instantly."
                            },
                            {
                                icon: Network,
                                title: "API-First",
                                desc: "Real-time inventory and pricing feeds that integrate directly with major buying platforms and procurement bots."
                            },
                            {
                                icon: Cpu,
                                title: "Adaptive Pricing",
                                desc: "Algorithmic pricing strategies that react faster than competitors, securing the 'Buy Box' for automated purchases."
                            },
                            {
                                icon: ShieldCheck,
                                title: "Voice Authority",
                                desc: "Content optimized for Natural Language Processing (NLP) to dominate voice search queries on Alexa and Google."
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
            <section className="py-32 px-8 bg-deep-charcoal text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                <div className="max-w-screen-xl mx-auto text-center relative z-10 space-y-12">
                    <h2 className="text-4xl md:text-6xl font-heading font-medium">
                        Future-Proof Your Brand
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
                        Don't let the shift to AI leave your products invisible. Partner with the agency that is already speaking the language of the future.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <BookingButton onClick={() => setIsBookingModalOpen(true)} />
                        <Link href="/contact" className="px-8 py-4 border border-white/20 hover:bg-white hover:text-deep-charcoal transition-all text-sm font-bold uppercase tracking-widest rounded-sm">
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
