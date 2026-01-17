/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import clsx from "clsx";
import DynamicImage from "@/components/DynamicImage";

export default function ConsultingPage() {
    return (
        <div className="grid-lines min-h-screen">
            <main>
                <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-border-subtle">
                    <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10">
                        <div className="space-y-10">
                            <div className="data-label flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-desaturated-teal"></span>
                                Strategic Consulting
                            </div>
                            <h1 className="text-6xl md:text-8xl font-light leading-[1.1]">
                                Expert Consulting <br />
                                <span className="font-semibold text-desaturated-teal">for the Amazon Ecosystem</span>
                            </h1>
                            <p className="text-xl max-w-lg">
                                Navigating high-stakes marketplace dynamics with surgical precision. Our advisory layer provides the architectural blueprint for global dominance.
                            </p>
                            <div className="flex items-center gap-8 pt-6">
                                <a className="bg-desaturated-teal text-white px-10 py-5 font-bold uppercase tracking-widest text-[11px] rounded-sm hover:bg-deep-charcoal transition-all" href="#packages">Engagement Tiers</a>
                                <a className="text-deep-charcoal font-bold uppercase tracking-widest text-[11px] flex items-center gap-2 group" href="#framework">
                                    The Framework
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                        <div className="relative flex justify-center items-center">
                            <div className="relative w-[500px] h-[500px] bg-white pedestal-shadow rounded-2xl flex items-center justify-center p-1 border border-white group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-soft-bg to-transparent opacity-50"></div>
                                <DynamicImage
                                    slot="consulting_network_grid"
                                    alt="Glassmorphic Network Grid"
                                    fill
                                    className="object-cover rounded-xl opacity-90 mix-blend-multiply transition-transform duration-1000 group-hover:scale-110"
                                    fallbackSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBfigwmoRZmNFL23ceYUbc9gUxdKZn9BBCPoTJyzLaXcZykpVU-kb7Iz8e5IYp0yv6aUcStpKuvx_rKqFckfTLm0f0aimyPfbpShz1NcKJgAX621uekZG89h-pKbMQsV_0wQI7wc6x-u3fXBatcxSuRm4Z-n9_NU28iTpM-Hiq_1uNi2IZcQrmbX_6GOW7hAojSsnbGGUlgAa0Bl2_dtBlKGnCkufBRAQv4MQoS00fsXR-TFSpeWLHlF_9uC-xBB0xwD9pKcqzv2myM"
                                />
                                <div className="absolute -bottom-10 w-4/5 h-6 bg-deep-charcoal/5 blur-xl rounded-full"></div>
                                <div className="absolute top-8 left-8 glass-card p-4 rounded-lg space-y-2">
                                    <div className="data-label !text-[8px]">Network Scope</div>
                                    <div className="w-32 h-1 bg-deep-charcoal/10 rounded-full overflow-hidden">
                                        <div className="w-3/4 h-full bg-desaturated-teal"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-desaturated-teal/5 blur-[120px] rounded-full"></div>
                    </div>
                </section>

                <section className="py-32 px-8 max-w-screen-2xl mx-auto" id="framework">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                            <div className="data-label text-desaturated-teal mb-4">Our Approach</div>
                            <h2 className="text-5xl font-semibold mb-6">Core Services</h2>
                            <p className="text-lg">Specialized intervention modules designed for high-growth entities requiring immediate strategic clarity.</p>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
                        <div className="bento-item md:col-span-2 md:row-span-2 bg-white">
                            <span className="material-symbols-outlined text-desaturated-teal text-5xl mb-12">language</span>
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Market Entry Strategy</h3>
                                <p className="mb-8">Comprehensive roadmap for pan-regional expansion including fiscal setup, compliance, and localized positioning.</p>
                                <div className="flex gap-4">
                                    <span className="text-[10px] font-mono border border-border-subtle px-3 py-1 rounded-full">Global_EU</span>
                                    <span className="text-[10px] font-mono border border-border-subtle px-3 py-1 rounded-full">North_Am</span>
                                </div>
                            </div>
                        </div>
                        <div className="bento-item">
                            <span className="material-symbols-outlined text-desaturated-teal text-4xl">analytics</span>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Profitability Audits</h3>
                                <p className="text-sm">Granular COGS and fee structure analysis to recover lost margins.</p>
                            </div>
                        </div>
                        <div className="bento-item bg-deep-charcoal text-white">
                            <span className="material-symbols-outlined text-white/40 text-4xl">emergency_home</span>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Recovery Ops</h3>
                                <p className="text-sm text-white/60">Rapid response for listing suspensions and account health crises.</p>
                            </div>
                        </div>
                        <div className="bento-item md:col-span-2 bg-soft-bg/50 border-dashed">
                            <div className="flex justify-between items-start">
                                <span className="material-symbols-outlined text-desaturated-teal text-4xl">hub</span>
                                <span className="data-label">Integration: Full</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Supply Chain Optimization</h3>
                                <p className="text-sm">Structural redesign of your logistics flow to minimize FBA storage friction and maximize throughput.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-32 bg-white border-y border-border-subtle">
                    <div className="max-w-screen-2xl mx-auto px-8">
                        <div className="text-center mb-24">
                            <div className="data-label mb-4">Our Process</div>
                            <h2 className="text-4xl font-semibold">The Advisory Process</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                            <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-border-subtle -z-0"></div>
                            <div className="relative z-10 space-y-8 group">
                                <div className="w-20 h-20 rounded-full bg-white border border-border-subtle flex items-center justify-center text-xl font-mono group-hover:border-desaturated-teal group-hover:text-desaturated-teal transition-all">01</div>
                                <div>
                                    <h4 className="text-lg font-bold mb-3">Discovery</h4>
                                    <p className="text-sm">Deep-dive into current metrics, infrastructure, and 2026 objectives.</p>
                                </div>
                            </div>
                            <div className="relative z-10 space-y-8 group">
                                <div className="w-20 h-20 rounded-full bg-white border border-border-subtle flex items-center justify-center text-xl font-mono group-hover:border-desaturated-teal group-hover:text-desaturated-teal transition-all">02</div>
                                <div>
                                    <h4 className="text-lg font-bold mb-3">Diagnostic</h4>
                                    <p className="text-sm">Identification of structural bottlenecks and untapped revenue streams.</p>
                                </div>
                            </div>
                            <div className="relative z-10 space-y-8 group">
                                <div className="w-20 h-20 rounded-full bg-white border border-border-subtle flex items-center justify-center text-xl font-mono group-hover:border-desaturated-teal group-hover:text-desaturated-teal transition-all">03</div>
                                <div>
                                    <h4 className="text-lg font-bold mb-3">Blueprint</h4>
                                    <p className="text-sm">Architecting the strategic implementation plan with fixed milestones.</p>
                                </div>
                            </div>
                            <div className="relative z-10 space-y-8 group">
                                <div className="w-20 h-20 rounded-full bg-white border border-border-subtle flex items-center justify-center text-xl font-mono group-hover:border-desaturated-teal group-hover:text-desaturated-teal transition-all">04</div>
                                <div>
                                    <h4 className="text-lg font-bold mb-3">Execution</h4>
                                    <p className="text-sm">Supervised rollout and performance monitoring of new protocols.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-32 px-8 max-w-screen-2xl mx-auto" id="packages">
                    <div className="text-center mb-20">
                        <div className="data-label text-desaturated-teal mb-4">Engagement Options</div>
                        <h2 className="text-5xl font-semibold mb-6">Consulting Packages</h2>
                        <p className="text-lg max-w-2xl mx-auto">Structured advisory tiers designed for scalability and impact.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white border border-border-subtle p-12 flex flex-col justify-between hover:border-desaturated-teal transition-colors group">
                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <h3 className="text-2xl font-bold">Strategic Workshop</h3>
                                    <span className="material-symbols-outlined text-desaturated-teal/40">timer</span>
                                </div>
                                <p className="text-sm mb-10">Intensive 4-hour session targeting a specific operational bottleneck or growth goal.</p>
                                <ul className="space-y-4 mb-12">
                                    <li className="flex items-center gap-3 text-xs font-mono"><span className="w-1.5 h-1.5 bg-desaturated-teal rounded-full"></span> LIVE VIDEO SESSION</li>
                                    <li className="flex items-center gap-3 text-xs font-mono"><span className="w-1.5 h-1.5 bg-desaturated-teal rounded-full"></span> AUDIT SUMMARY REPORT</li>
                                    <li className="flex items-center gap-3 text-xs font-mono"><span className="w-1.5 h-1.5 bg-desaturated-teal rounded-full"></span> ACTIONABLE NEXT STEPS</li>
                                </ul>
                            </div>
                            <button className="w-full py-4 border border-deep-charcoal text-[11px] font-bold uppercase tracking-widest group-hover:bg-deep-charcoal group-hover:text-white transition-all">Book Session</button>
                        </div>
                        <div className="bg-deep-charcoal text-white p-12 flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-desaturated-teal text-[9px] font-mono px-6 py-2 rotate-45 translate-x-6 translate-y-2 uppercase">Recommended</div>
                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <h3 className="text-2xl font-bold">Full Audit</h3>
                                    <span className="material-symbols-outlined text-desaturated-teal">clinical_notes</span>
                                </div>
                                <p className="text-sm text-white/60 mb-10">A one-off, comprehensive structural audit of your entire Amazon operation across all regions.</p>
                                <ul className="space-y-4 mb-12">
                                    <li className="flex items-center gap-3 text-xs font-mono"><span className="w-1.5 h-1.5 bg-desaturated-teal rounded-full"></span> LOGISTICS EFFICIENCY</li>
                                    <li className="flex items-center gap-3 text-xs font-mono"><span className="w-1.5 h-1.5 bg-desaturated-teal rounded-full"></span> AD-TECH STACK AUDIT</li>
                                    <li className="flex items-center gap-3 text-xs font-mono"><span className="w-1.5 h-1.5 bg-desaturated-teal rounded-full"></span> PROFIT LEAK IDENTIFICATION</li>
                                </ul>
                            </div>
                            <button className="w-full py-4 bg-desaturated-teal text-white text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-deep-charcoal transition-all">Get Started</button>
                        </div>
                        <div className="bg-white border border-border-subtle p-12 flex flex-col justify-between hover:border-desaturated-teal transition-colors group">
                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <h3 className="text-2xl font-bold">Monthly Retainer</h3>
                                    <span className="material-symbols-outlined text-desaturated-teal/40">all_inclusive</span>
                                </div>
                                <p className="text-sm mb-10">Ongoing advisory partnership acting as your fractional Chief Strategy Officer for the marketplace.</p>
                                <ul className="space-y-4 mb-12">
                                    <li className="flex items-center gap-3 text-xs font-mono"><span className="w-1.5 h-1.5 bg-desaturated-teal rounded-full"></span> UNLIMITED ADVISORY</li>
                                    <li className="flex items-center gap-3 text-xs font-mono"><span className="w-1.5 h-1.5 bg-desaturated-teal rounded-full"></span> QBR STRATEGY SESSIONS</li>
                                    <li className="flex items-center gap-3 text-xs font-mono"><span className="w-1.5 h-1.5 bg-desaturated-teal rounded-full"></span> CRISIS MANAGEMENT</li>
                                </ul>
                            </div>
                            <button className="w-full py-4 border border-deep-charcoal text-[11px] font-bold uppercase tracking-widest group-hover:bg-deep-charcoal group-hover:text-white transition-all">Request Proposal</button>
                        </div>
                    </div>
                </section>

                <section className="py-32 bg-white border-t border-border-subtle" id="inquiry">
                    <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24">
                        <div>
                            <div className="data-label text-desaturated-teal mb-6">Contact Form</div>
                            <h2 className="text-5xl font-semibold mb-10">Contact Us</h2>
                            <p className="text-xl mb-14">Our consulting slots are limited to maintain peak performance for existing partners. Brief us on your requirements to begin the vetting process.</p>
                            <div className="p-8 border border-border-subtle space-y-8 bg-soft-bg/50">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-white flex items-center justify-center border border-border-subtle">
                                        <span className="material-symbols-outlined text-desaturated-teal">calendar_today</span>
                                    </div>
                                    <div>
                                        <div className="data-label">Availability</div>
                                        <div className="text-lg font-bold">November 2026</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-white flex items-center justify-center border border-border-subtle">
                                        <span className="material-symbols-outlined text-desaturated-teal">public</span>
                                    </div>
                                    <div>
                                        <div className="data-label">Global Support</div>
                                        <div className="text-lg font-bold">UTC / EST / JST</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-soft-bg p-12 border border-border-subtle relative">
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="data-label !text-[9px]">Name</label>
                                        <input className="w-full bg-white border-border-subtle focus:ring-1 focus:ring-desaturated-teal focus:border-desaturated-teal text-sm py-4 px-4 transition-all" placeholder="John Doe" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="data-label !text-[9px]">Email</label>
                                        <input className="w-full bg-white border-border-subtle focus:ring-1 focus:ring-desaturated-teal focus:border-desaturated-teal text-sm py-4 px-4 transition-all" placeholder="name@corporation.com" type="email" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="data-label !text-[9px]">Service Area</label>
                                    <select className="w-full bg-white border-border-subtle focus:ring-1 focus:ring-desaturated-teal focus:border-desaturated-teal text-sm py-4 px-4 transition-all appearance-none">
                                        <option>Market Entry Strategy</option>
                                        <option>Profitability Audit</option>
                                        <option>Troubleshooting & Recovery</option>
                                        <option>Full Retainer Inquiry</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="data-label !text-[9px]">Message</label>
                                    <textarea className="w-full bg-white border-border-subtle focus:ring-1 focus:ring-desaturated-teal focus:border-desaturated-teal text-sm py-4 px-4 transition-all resize-none" placeholder="Provide context on your 2026 directives..." rows={4}></textarea>
                                </div>
                                <div className="pt-4 border-t border-border-subtle">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="data-label">Preferred Time</span>
                                        <span className="text-[10px] font-mono opacity-40"></span>
                                    </div>
                                    <div className="grid grid-cols-5 gap-2">
                                        <div className="border border-border-subtle p-3 text-center bg-white text-[10px] font-mono opacity-30">MON</div>
                                        <div className="border border-desaturated-teal p-3 text-center bg-desaturated-teal/5 text-[10px] font-mono cursor-pointer hover:bg-desaturated-teal/10">TUE</div>
                                        <div className="border border-border-subtle p-3 text-center bg-white text-[10px] font-mono opacity-30">WED</div>
                                        <div className="border border-desaturated-teal p-3 text-center bg-desaturated-teal/5 text-[10px] font-mono cursor-pointer hover:bg-desaturated-teal/10">THU</div>
                                        <div className="border border-desaturated-teal p-3 text-center bg-desaturated-teal/5 text-[10px] font-mono cursor-pointer hover:bg-desaturated-teal/10">FRI</div>
                                    </div>
                                </div>
                                <button className="w-full bg-deep-charcoal text-white font-bold py-6 mt-4 hover:bg-desaturated-teal transition-all uppercase tracking-[0.2em] text-[11px] rounded-sm">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
