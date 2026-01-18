"use client";

import DynamicImage from "@/components/DynamicImage";
import { Search, TrendingUp, RefreshCw, BarChart3, FileSearch, Target, Settings, Briefcase } from "lucide-react";

export default function ConsultingPage() {
    return (
        <div className="grid-lines min-h-screen font-sans text-deep-charcoal selection:bg-desaturated-teal/20">
            <main>
                <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-border-subtle">
                    <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10">
                        <div className="space-y-10">
                            <div className="data-label flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-desaturated-teal"></span>
                                Consultancy Services
                            </div>
                            <h1 className="text-6xl md:text-8xl font-light leading-[1.1]">
                                Expert Amazon <br />
                                <span className="font-semibold text-desaturated-teal">Consultancy</span>
                            </h1>
                            <p className="text-xl max-w-lg">
                                Strategic guidance for brands looking to scale. We provide the architectural details and roadmap for your Amazon distribution and account management success.
                            </p>
                            <div className="flex items-center gap-8 pt-6">
                                <a className="bg-desaturated-teal text-white px-10 py-5 font-bold uppercase tracking-widest text-[11px] rounded-sm hover:bg-deep-charcoal transition-all" href="#packages">View Packages</a>
                                <a className="text-deep-charcoal font-bold uppercase tracking-widest text-[11px] flex items-center gap-2 group" href="#interventions">
                                    Our Framework
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                        <div className="relative flex justify-center items-center">
                            <div className="relative w-[500px] h-[500px] bg-white pedestal-shadow rounded-2xl flex items-center justify-center p-1 border border-white group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-soft-bg to-transparent opacity-50"></div>
                                <DynamicImage
                                    slot="consulting_network_grid"
                                    alt="Global Network Grid"
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

                {/* Strategic Interventions Section (Formerly Framework) */}
                <section className="py-32 px-8 max-w-screen-2xl mx-auto" id="interventions">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                            <div className="data-label text-desaturated-teal mb-4">SOP-Driven Strategy</div>
                            <h2 className="text-5xl font-semibold mb-6">Strategic Interventions</h2>
                            <p className="text-lg text-deep-charcoal/70">We don't offer generic "advice." We deploy specific, battle-tested protocols to solve critical growth blockers.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Intervention 1: Honeymoon Strategy */}
                        <div className="bg-white border border-border-subtle p-10 hover:border-desaturated-teal transition-all group">
                            <div className="w-14 h-14 bg-desaturated-teal/10 rounded-lg flex items-center justify-center mb-8 text-desaturated-teal group-hover:bg-desaturated-teal group-hover:text-white transition-colors">
                                <TrendingUp className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">The "Launch Phase" Protocol</h3>
                            <div className="text-[10px] font-mono text-desaturated-teal mb-4 uppercase tracking-widest">SOP 2.1: New Product Launch</div>
                            <p className="text-deep-charcoal/60 mb-6 text-sm leading-relaxed">
                                A 14-day pre-launch sequence designed to maximize algorithm ranking. Includes Reverse ASIN research, Vine enrollment, and aggressive Exact Match PPC to spike initial velocity.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-xs font-mono text-deep-charcoal/80">
                                    <span className="w-1.5 h-1.5 bg-desaturated-teal rounded-full"></span>
                                    VINE REVIEW ENROLLMENT
                                </li>
                                <li className="flex items-center gap-2 text-xs font-mono text-deep-charcoal/80">
                                    <span className="w-1.5 h-1.5 bg-desaturated-teal rounded-full"></span>
                                    KEYWORD RANKING SPIKES
                                </li>
                            </ul>
                        </div>

                        {/* Intervention 2: Profit Recovery */}
                        <div className="bg-white border border-border-subtle p-10 hover:border-desaturated-teal transition-all group">
                            <div className="w-14 h-14 bg-desaturated-teal/10 rounded-lg flex items-center justify-center mb-8 text-desaturated-teal group-hover:bg-desaturated-teal group-hover:text-white transition-colors">
                                <BarChart3 className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Profit Recovery Audit</h3>
                            <div className="text-[10px] font-mono text-desaturated-teal mb-4 uppercase tracking-widest">SOP 2.3: The "Bleeder" Cut</div>
                            <p className="text-deep-charcoal/60 mb-6 text-sm leading-relaxed">
                                We categorize your catalog into "Winners" and "Bleeders." Our forensic audit identifies wasted ad spend and storage fees, ruthlessly cutting costs to restore net margin.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-xs font-mono text-deep-charcoal/80">
                                    <span className="w-1.5 h-1.5 bg-desaturated-teal rounded-full"></span>
                                    SKU PROFITABILITY ANALYSIS
                                </li>
                                <li className="flex items-center gap-2 text-xs font-mono text-deep-charcoal/80">
                                    <span className="w-1.5 h-1.5 bg-desaturated-teal rounded-full"></span>
                                    UNPROFITABLE SPEND NEGATION
                                </li>
                            </ul>
                        </div>

                        {/* Intervention 3: Catalog Rehabilitation */}
                        <div className="bg-white border border-border-subtle p-10 hover:border-desaturated-teal transition-all group">
                            <div className="w-14 h-14 bg-desaturated-teal/10 rounded-lg flex items-center justify-center mb-8 text-desaturated-teal group-hover:bg-desaturated-teal group-hover:text-white transition-colors">
                                <RefreshCw className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Catalog Rehabilitation</h3>
                            <div className="text-[10px] font-mono text-desaturated-teal mb-4 uppercase tracking-widest">SOP 2.2: SEO Refresh</div>
                            <p className="text-deep-charcoal/60 mb-6 text-sm leading-relaxed">
                                Waking up dormant products. We overhaul images, fix broken variations via Flat Files, and re-index listings with fresh backend keywords to restart organic traffic.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-xs font-mono text-deep-charcoal/80">
                                    <span className="w-1.5 h-1.5 bg-desaturated-teal rounded-full"></span>
                                    FLAT FILE VARIATION FIXES
                                </li>
                                <li className="flex items-center gap-2 text-xs font-mono text-deep-charcoal/80">
                                    <span className="w-1.5 h-1.5 bg-desaturated-teal rounded-full"></span>
                                    IMAGE STACK OPTIMIZATION
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* The Executive Roadmap (Formerly Process) */}
                <section className="py-32 bg-soft-bg border-y border-border-subtle">
                    <div className="max-w-screen-2xl mx-auto px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                            <div className="lg:col-span-5 sticky top-32">
                                <div className="data-label text-desaturated-teal mb-4">The Methodology</div>
                                <h2 className="text-5xl font-semibold mb-8">The Executive Roadmap</h2>
                                <p className="text-lg text-deep-charcoal/70 mb-10">
                                    We don't guess. We follow a strict 4-stage implementation plan to transition your account from "Chaos" to "Protocol."
                                </p>
                                <a href="#inquiry" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest border-b border-deep-charcoal pb-1 hover:text-desaturated-teal hover:border-desaturated-teal transition-colors">
                                    Start The Process <span className="material-symbols-outlined text-sm">arrow_downward</span>
                                </a>
                            </div>

                            <div className="lg:col-span-7 space-y-4">
                                {/* Stage 1 */}
                                <div className="bg-white p-8 border border-border-subtle flex gap-6 group hover:border-desaturated-teal transition-all">
                                    <div className="w-12 h-12 bg-soft-bg flex items-center justify-center shrink-0 border border-border-subtle font-mono font-bold text-desaturated-teal/50">01</div>
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="text-xl font-bold">The Forensic Audit</h4>
                                            <FileSearch className="w-5 h-5 text-deep-charcoal/30" />
                                        </div>
                                        <p className="text-deep-charcoal/60 text-sm leading-relaxed">
                                            We rip apart every campaign, listing, and shipment log. We identify the "silent killers" of your profit margin: hidden fees, suppressed keywords, and bloated bids.
                                        </p>
                                    </div>
                                </div>

                                {/* Stage 2 */}
                                <div className="bg-white p-8 border border-border-subtle flex gap-6 group hover:border-desaturated-teal transition-all">
                                    <div className="w-12 h-12 bg-soft-bg flex items-center justify-center shrink-0 border border-border-subtle font-mono font-bold text-desaturated-teal/50">02</div>
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="text-xl font-bold">The 90-Day War Room</h4>
                                            <Target className="w-5 h-5 text-deep-charcoal/30" />
                                        </div>
                                        <p className="text-deep-charcoal/60 text-sm leading-relaxed">
                                            We define the battle plan. Which products are we defending? Which are we launching? We set hard KPI targets for revenue, TACOS, and Net Margin.
                                        </p>
                                    </div>
                                </div>

                                {/* Stage 3 */}
                                <div className="bg-white p-8 border border-border-subtle flex gap-6 group hover:border-desaturated-teal transition-all">
                                    <div className="w-12 h-12 bg-soft-bg flex items-center justify-center shrink-0 border border-border-subtle font-mono font-bold text-desaturated-teal/50">03</div>
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="text-xl font-bold">System Installation</h4>
                                            <Settings className="w-5 h-5 text-deep-charcoal/30" />
                                        </div>
                                        <p className="text-deep-charcoal/60 text-sm leading-relaxed">
                                            We install our SOPs into your business. Governance checks, reporting feedback loops, and inventory forecasting models are deployed to ensure stability.
                                        </p>
                                    </div>
                                </div>

                                {/* Stage 4 */}
                                <div className="bg-white p-8 border border-border-subtle flex gap-6 group hover:border-desaturated-teal transition-all">
                                    <div className="w-12 h-12 bg-soft-bg flex items-center justify-center shrink-0 border border-border-subtle font-mono font-bold text-desaturated-teal/50">04</div>
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="text-xl font-bold">Execution & Handover</h4>
                                            <Briefcase className="w-5 h-5 text-deep-charcoal/30" />
                                        </div>
                                        <p className="text-deep-charcoal/60 text-sm leading-relaxed">
                                            We execute the plan or hand over the keys. You receive a fully optimized machine with a clear operating manual for your internal team.
                                        </p>
                                    </div>
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
                                <p className="text-sm mb-10">A focused 4-hour session targeting a specific operational bottleneck or growth goal.</p>
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
                                <p className="text-sm text-white/60 mb-10">A comprehensive structural audit of your entire Amazon operation across all regions.</p>
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
                                    <h3 className="text-2xl font-bold">Ongoing Partnership</h3>
                                    <span className="material-symbols-outlined text-desaturated-teal/40">all_inclusive</span>
                                </div>
                                <p className="text-sm mb-10">Ongoing advisory partnership acting as your strategic partner for long-term growth.</p>
                                <ul className="space-y-4 mb-12">
                                    <li className="flex items-center gap-3 text-xs font-mono"><span className="w-1.5 h-1.5 bg-desaturated-teal rounded-full"></span> UNLIMITED ADVISORY</li>
                                    <li className="flex items-center gap-3 text-xs font-mono"><span className="w-1.5 h-1.5 bg-desaturated-teal rounded-full"></span> QUARTERLY STRATEGY SESSIONS</li>
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
                            <div className="data-label text-desaturated-teal mb-6">Partner Vetting</div>
                            <h2 className="text-5xl font-semibold mb-10">Start the Vetting Process</h2>
                            <p className="text-xl mb-14 text-deep-charcoal/70">
                                We are selective with our partners. We look for brands with strong product-market fit that are ready to adopt a high-performance operational framework.
                            </p>
                            <div className="p-8 border border-border-subtle space-y-8 bg-soft-bg/50">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-white flex items-center justify-center border border-border-subtle">
                                        <span className="material-symbols-outlined text-desaturated-teal">calendar_today</span>
                                    </div>
                                    <div>
                                        <div className="data-label">Availability</div>
                                        <div className="text-lg font-bold">Limited Spots for Q1</div>
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
                                        <input className="w-full bg-white border-border-subtle focus:ring-1 focus:ring-desaturated-teal focus:border-desaturated-teal text-sm py-4 px-4 transition-all" placeholder="name@company.com" type="email" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="data-label !text-[9px]">Interest</label>
                                    <select className="w-full bg-white border-border-subtle focus:ring-1 focus:ring-desaturated-teal focus:border-desaturated-teal text-sm py-4 px-4 transition-all appearance-none cursor-pointer">
                                        <option>Profit Recovery Audit</option>
                                        <option>New Product Launch (Launch Phase Strategy)</option>
                                        <option>Catalog Rehabilitation</option>
                                        <option>Full Retainer Inquiry</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="data-label !text-[9px]">Context</label>
                                    <textarea className="w-full bg-white border-border-subtle focus:ring-1 focus:ring-desaturated-teal focus:border-desaturated-teal text-sm py-4 px-4 transition-all resize-none" placeholder="Briefly describe your current blockers..." rows={4}></textarea>
                                </div>
                                <button className="w-full bg-deep-charcoal text-white font-bold py-6 mt-4 hover:bg-desaturated-teal transition-all uppercase tracking-[0.2em] text-[11px] rounded-sm">
                                    Submit for Review
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
