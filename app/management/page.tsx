/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import clsx from "clsx";

export default function ManagementPage() {
    return (
        <div className="grid-lines mesh-gradient min-h-screen">
            <main>
                <section className="grid grid-cols-1 lg:grid-cols-12 min-h-[92vh] max-w-screen-2xl mx-auto items-stretch">
                    <div className="lg:col-span-7 p-8 md:p-24 flex flex-col justify-center border-r border-border-subtle">
                        <div className="mb-8 data-label flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-desaturated-teal"></span>
                            Operational Stream: Full Service Management
                        </div>
                        <h1 className="text-5xl md:text-8xl mb-10 font-light leading-[0.95] tracking-tighter">
                            Elite <br />
                            <span className="font-semibold text-desaturated-teal">Amazon Growth Partner</span>
                        </h1>
                        <p className="text-xl max-w-xl mb-14 text-deep-charcoal/70">
                            We don't just clear errors; we engineer dominance. UK Sourced Ltd combines elite strategic oversight with relentless operational execution to scale your brand on Amazon.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <Link
                                href="/contact"
                                className="bg-desaturated-teal text-white px-10 py-5 font-semibold hover:bg-deep-charcoal transition-all text-center rounded-sm shadow-xl shadow-desaturated-teal/10 uppercase tracking-widest text-xs"
                            >
                                Request Audit
                            </Link>
                            <Link
                                href="#"
                                className="border border-deep-charcoal/20 px-10 py-5 font-semibold hover:bg-deep-charcoal hover:text-white transition-all text-center rounded-sm uppercase tracking-widest text-xs"
                            >
                                View Case Studies
                            </Link>
                        </div>
                    </div>
                    <div className="lg:col-span-5 relative flex items-center justify-center bg-white/30 backdrop-blur-sm p-12 overflow-hidden">
                        <div className="relative w-full aspect-square flex items-center justify-center">
                            <div className="absolute w-[85%] h-[85%] border border-border-subtle rounded-3xl rotate-[15deg] opacity-20"></div>
                            <div className="absolute w-[80%] h-[80%] bg-soft-bg border border-border-subtle rounded-2xl rotate-12 translate-y-8 shadow-sm"></div>
                            <div className="glass-card absolute w-[85%] h-[65%] p-10 -rotate-3 transition-transform hover:-rotate-1 duration-700 group cursor-default">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="flex gap-4 items-center">
                                        <div className="w-14 h-14 bg-desaturated-teal/10 rounded-xl flex items-center justify-center">
                                            <span className="material-symbols-outlined text-desaturated-teal text-3xl">storefront</span>
                                        </div>
                                        <div>
                                            <div className="data-label text-[10px] opacity-60">Store ID</div>
                                            <div className="font-mono font-bold text-xs uppercase">AMZ_UK_026_S</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="data-label">Conversion</div>
                                        <div className="text-3xl font-mono font-bold text-desaturated-teal">24.8%</div>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <div className="space-y-3">
                                        <div className="flex justify-between data-label text-[10px]">
                                            <span>Listing Health</span>
                                            <span className="text-desaturated-teal">Optimized</span>
                                        </div>
                                        <div className="h-2 w-full bg-deep-charcoal/5 rounded-full overflow-hidden">
                                            <div className="progress-bar-fill w-[92%]"></div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border-subtle/50">
                                        <div className="space-y-1">
                                            <div className="data-label text-[8px] opacity-50">Reviews</div>
                                            <div className="font-mono text-sm font-bold">4.9★</div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="data-label text-[8px] opacity-50">CTR</div>
                                            <div className="font-mono text-sm font-bold text-desaturated-teal">3.4%</div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="data-label text-[8px] opacity-50">Rank</div>
                                            <div className="font-mono text-sm font-bold">#1</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="p-8 md:p-24 border-t border-border-subtle bg-white" id="ppc">
                    <div className="max-w-screen-2xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="data-label text-desaturated-teal mb-6">PPC & Advertising</div>
                                <h2 className="text-5xl mb-8 font-semibold">Precision Performance Marketing</h2>
                                <p className="text-lg mb-10 text-deep-charcoal/70">Stop burning budget. Our proprietary bidding architectures and daily manual optimizations ensure every pound spent acquires a high-value customer. We trade on data, not guesswork.</p>
                                <div className="grid grid-cols-2 gap-8 mb-12">
                                    <div className="border-l-2 border-desaturated-teal pl-6">
                                        <div className="data-label">Average ROAS</div>
                                        <div className="text-4xl font-mono font-bold">5.8x</div>
                                    </div>
                                    <div className="border-l-2 border-border-subtle pl-6">
                                        <div className="data-label">ACOS Target</div>
                                        <div className="text-4xl font-mono font-bold text-deep-charcoal/40">12%</div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded bg-desaturated-teal/5 flex items-center justify-center group-hover:bg-desaturated-teal group-hover:text-white transition-all">
                                            <span className="material-symbols-outlined text-sm">trending_up</span>
                                        </div>
                                        <span className="text-xs font-mono font-bold uppercase tracking-wider">Dynamic Bid Modulation</span>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded bg-desaturated-teal/5 flex items-center justify-center group-hover:bg-desaturated-teal group-hover:text-white transition-all">
                                            <span className="material-symbols-outlined text-sm">filter_alt</span>
                                        </div>
                                        <span className="text-xs font-mono font-bold uppercase tracking-wider">Negative Keyword Harvesting</span>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 glass-card p-10 relative overflow-hidden bg-white">
                                <div className="flex items-center justify-between mb-10">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-desaturated-teal"></span>
                                        <span className="data-label text-[10px]">Real-Time Performance Graphs</span>
                                    </div>
                                    <span className="text-[10px] font-mono opacity-40">Auto Scale Enabled</span>
                                </div>
                                <div className="h-64 flex items-end gap-2.5">
                                    <div className="flex-1 bg-desaturated-teal/10 h-[40%] hover:h-[45%] transition-all duration-300 rounded-t-sm relative group">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-deep-charcoal text-white px-2 py-1 text-[8px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">7.2k</div>
                                    </div>
                                    <div className="flex-1 bg-desaturated-teal/20 h-[60%] hover:h-[65%] transition-all duration-300 rounded-t-sm relative group">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-deep-charcoal text-white px-2 py-1 text-[8px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">10.4k</div>
                                    </div>
                                    <div className="flex-1 bg-desaturated-teal/15 h-[55%] hover:h-[60%] transition-all duration-300 rounded-t-sm relative group"></div>
                                    <div className="flex-1 bg-desaturated-teal/40 h-[85%] hover:h-[90%] transition-all duration-300 rounded-t-sm relative group">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-deep-charcoal text-white px-2 py-1 text-[8px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">15.1k</div>
                                    </div>
                                    <div className="flex-1 bg-desaturated-teal/25 h-[70%] hover:h-[75%] transition-all duration-300 rounded-t-sm relative group"></div>
                                    <div className="flex-1 bg-desaturated-teal h-[95%] hover:h-[100%] transition-all duration-300 rounded-t-sm relative group">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-deep-charcoal text-white px-2 py-1 text-[8px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">18.9k</div>
                                    </div>
                                    <div className="flex-1 bg-desaturated-teal/30 h-[65%] hover:h-[70%] transition-all duration-300 rounded-t-sm relative group"></div>
                                    <div className="flex-1 bg-desaturated-teal/20 h-[50%] hover:h-[55%] transition-all duration-300 rounded-t-sm relative group"></div>
                                </div>
                                <div className="mt-8 pt-8 border-t border-border-subtle flex justify-between">
                                    <div className="space-y-1">
                                        <div className="data-label text-[9px]">Impression Share</div>
                                        <div className="text-2xl font-mono font-bold">92.4%</div>
                                    </div>
                                    <div className="space-y-1 text-right">
                                        <div className="data-label text-[9px]">Click Velocity</div>
                                        <div className="text-2xl font-mono font-bold text-desaturated-teal">+14.2%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="p-8 md:p-24 bg-soft-bg relative overflow-hidden" id="inventory">
                    <div className="max-w-screen-2xl mx-auto">
                        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <div className="data-label text-desaturated-teal mb-4">Supply Chain</div>
                                <h2 className="text-5xl font-semibold">Supply Chain Synchronization</h2>
                            </div>
                            <p className="text-deep-charcoal/60 max-w-sm text-sm">Intelligent distribution logic that keeps your inventory moving across global borders without friction.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            <div className="md:col-span-4 lg:col-span-4 bento-item flex flex-col justify-between min-h-[450px]">
                                <div>
                                    <span className="material-symbols-outlined text-5xl text-desaturated-teal mb-8">hub</span>
                                    <h3 className="text-3xl font-semibold mb-6">Seamless Logistics</h3>
                                    <p className="text-deep-charcoal/60 max-w-lg mb-8">From factory floor to FBA center, we synchronize your stock. Prevent stock-outs, minimize storage fees, and maintain Prime eligibility 100% of the time.</p>
                                </div>
                                <div className="space-y-8">
                                    <div className="space-y-3">
                                        <div className="flex justify-between data-label text-[10px]">
                                            <span>Regional Node UK Network</span>
                                            <span className="text-desaturated-teal">99.9% SYNCED</span>
                                        </div>
                                        <div className="h-1.5 bg-deep-charcoal/5 w-full rounded-full">
                                            <div className="progress-bar-fill w-[99.9%] rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="bg-soft-bg p-6 flex-1 border border-border-subtle">
                                            <div className="data-label text-[9px] mb-2">API Latency</div>
                                            <div className="text-2xl font-mono">120ms</div>
                                        </div>
                                        <div className="bg-soft-bg p-6 flex-1 border border-border-subtle">
                                            <div className="data-label text-[9px] mb-2">Daily Movement</div>
                                            <div className="text-2xl font-mono">1.2k units</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-2 lg:col-span-2 bento-item bg-white flex flex-col justify-between">
                                <div>
                                    <div className="data-label text-desaturated-teal mb-2">Auto Replenish</div>
                                    <div className="text-6xl font-light font-mono text-deep-charcoal/10">0.0%</div>
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase text-[12px] tracking-widest mb-3">Out-of-Stock Risk</h4>
                                    <p className="text-sm text-deep-charcoal/50 leading-relaxed">Predictive modeling prevents 'Stock-Out' penalties and protects category rank during high-velocity seasons.</p>
                                </div>
                            </div>
                            <div className="md:col-span-3 lg:col-span-2 bento-item flex flex-col justify-center items-center text-center">
                                <div className="w-20 h-20 rounded-full border border-border-subtle flex items-center justify-center mb-8 bg-soft-bg/50">
                                    <span className="material-symbols-outlined text-4xl text-desaturated-teal">schedule</span>
                                </div>
                                <div className="data-label mb-3">Lead Time Delta</div>
                                <div className="text-4xl font-mono font-bold">-2.4 Days</div>
                                <p className="text-[10px] font-mono mt-4 text-deep-charcoal/40">VS PREVIOUS PERIOD</p>
                            </div>
                            <div className="md:col-span-3 lg:col-span-4 bento-item flex items-center justify-between group">
                                <div className="max-w-md">
                                    <h3 className="text-2xl font-semibold mb-3">Multi-Channel Routing</h3>
                                    <p className="text-sm text-deep-charcoal/60">Unified supply chain data flow across global marketplace nodes with intelligent freight forwarding logic.</p>
                                </div>
                                <div className="flex -space-x-2">
                                    <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-soft-bg shadow-sm z-30">
                                        <span className="material-symbols-outlined text-sm">public</span>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-desaturated-teal text-white shadow-sm z-20">
                                        <span className="material-symbols-outlined text-sm">sync</span>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-soft-bg shadow-sm z-10">
                                        <span className="material-symbols-outlined text-sm">inventory_2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="p-8 md:p-24 border-t border-border-subtle bg-white" id="protection">
                    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                        <div className="lg:col-span-5">
                            <div className="data-label text-desaturated-teal mb-6">Brand Protection</div>
                            <h2 className="text-5xl mb-8 font-semibold leading-tight">Ironclad Brand Defense</h2>
                            <p className="text-lg text-deep-charcoal/70 mb-12">Your brand equity is non-negotiable. We deploy monitoring algorithms to instantly detect and remove hijackers, counterfeiters, and unauthorized resellers.</p>
                            <ul className="space-y-10">
                                <li className="flex items-start gap-5">
                                    <div className="bg-desaturated-teal/10 p-2 rounded">
                                        <span className="material-symbols-outlined text-desaturated-teal text-2xl">verified_user</span>
                                    </div>
                                    <div>
                                        <span className="block font-bold text-sm uppercase tracking-wider mb-1">Automated IP Sweeps</span>
                                        <span className="text-sm text-deep-charcoal/50 font-mono">24/7 GLOBAL MONITORING ACTIVE</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-5">
                                    <div className="bg-desaturated-teal/10 p-2 rounded">
                                        <span className="material-symbols-outlined text-desaturated-teal text-2xl">gavel</span>
                                    </div>
                                    <div>
                                        <span className="block font-bold text-sm uppercase tracking-wider mb-1">Legal Enforcement</span>
                                        <span className="text-sm text-deep-charcoal/50 font-mono">TAKEDOWN SUCCESS: 98.2%</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-5">
                                    <div className="bg-desaturated-teal/10 p-2 rounded">
                                        <span className="material-symbols-outlined text-desaturated-teal text-2xl">security</span>
                                    </div>
                                    <div>
                                        <span className="block font-bold text-sm uppercase tracking-wider mb-1">Buy Box Guardian</span>
                                        <span className="text-sm text-deep-charcoal/50 font-mono">OWNERSHIP: 99.8% AVG</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="glass-card p-0 overflow-hidden relative border-none shadow-2xl rounded-xl">
                                <div className="bg-deep-charcoal p-4 flex items-center justify-between">
                                    <div className="flex gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                    </div>
                                    <span className="text-[9px] font-mono text-white/40 tracking-widest font-bold">SECURITY CONSOLE</span>
                                </div>
                                <div className="p-10 space-y-8 bg-white">
                                    <div className="flex items-center justify-between border-b border-border-subtle pb-6">
                                        <div className="flex items-center gap-5">
                                            <div className="w-12 h-12 rounded bg-red-50 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-red-500">warning</span>
                                            </div>
                                            <div>
                                                <div className="text-[11px] font-mono font-bold tracking-tight">Unauthorized Seller</div>
                                                <div className="text-[10px] text-red-600 font-mono font-bold mt-1">THREAT LEVEL: CRITICAL</div>
                                            </div>
                                        </div>
                                        <button className="bg-red-600 text-white text-[10px] px-5 py-2 font-bold uppercase tracking-widest hover:bg-red-700 transition-colors rounded-sm">Issue Takedown</button>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-border-subtle pb-6">
                                        <div className="flex items-center gap-5 opacity-50">
                                            <div className="w-12 h-12 rounded bg-soft-bg flex items-center justify-center">
                                                <span className="material-symbols-outlined text-green-600">verified</span>
                                            </div>
                                            <div>
                                                <div className="text-[11px] font-mono font-bold tracking-tight">Global Registry Sync</div>
                                                <div className="text-[10px] text-green-600 font-mono font-bold mt-1">STATUS: PROTECTED</div>
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-mono font-bold text-green-600">ACTIVE</span>
                                    </div>
                                    <div className="bg-desaturated-teal/5 p-8 rounded-lg border border-desaturated-teal/10">
                                        <div className="flex justify-between items-center mb-6">
                                            <div className="data-label text-[10px]">Threat Detection Matrix</div>
                                            <div className="flex gap-1">
                                                <div className="w-1 h-3 bg-desaturated-teal"></div>
                                                <div className="w-1 h-3 bg-desaturated-teal/40"></div>
                                                <div className="w-1 h-3 bg-desaturated-teal/20"></div>
                                            </div>
                                        </div>
                                        <div className="h-40 flex flex-col items-center justify-center border-2 border-dashed border-desaturated-teal/20 rounded-md bg-white/50">
                                            <span className="material-symbols-outlined text-desaturated-teal/30 mb-2 animate-pulse">radar</span>
                                            <span className="font-mono text-[10px] text-desaturated-teal/60 tracking-widest">SCANNING REGIONAL NODES...</span>
                                            <div className="mt-4 w-48 h-1 bg-deep-charcoal/5 rounded-full overflow-hidden">
                                                <div className="progress-bar-fill w-3/4"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="p-8 md:p-24 bg-soft-bg border-t border-border-subtle relative" id="contact">
                    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
                        <div>
                            <div className="data-label text-desaturated-teal mb-6">Get Started</div>
                            <h2 className="text-5xl mb-10 font-semibold leading-tight">Contact Us</h2>
                            <p className="text-xl mb-14 text-deep-charcoal/60 leading-relaxed">Our onboarding process begins with a comprehensive strategic audit. We select retail partners whose long-term vision aligns with our high-performance technical infrastructure.</p>
                            <div className="space-y-12">
                                <div className="border-l-2 border-desaturated-teal pl-10 group">
                                    <div className="data-label mb-3 opacity-60">Email Us</div>
                                    <div className="text-2xl font-medium text-deep-charcoal hover:text-desaturated-teal transition-colors cursor-pointer font-heading">partnerships@uksourced.ltd</div>
                                </div>
                                <div className="border-l-2 border-border-subtle pl-10">
                                    <div className="data-label mb-3 opacity-60">Headquarters</div>
                                    <div className="text-2xl font-medium text-deep-charcoal/80 font-heading">London / 51.5074° N, 0.1278° W</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-12 shadow-2xl border border-border-subtle rounded-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-desaturated-teal/10">
                                <div className="h-full bg-desaturated-teal w-1/4"></div>
                            </div>
                            <form className="space-y-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label className="data-label">Name</label>
                                        <input className="w-full bg-transparent border-b-2 border-border-subtle focus:border-desaturated-teal border-t-0 border-l-0 border-r-0 focus:ring-0 text-deep-charcoal py-3 px-0 transition-colors font-medium placeholder:text-deep-charcoal/20" placeholder="Full Name / Principal" type="text" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="data-label">Email</label>
                                        <input className="w-full bg-transparent border-b-2 border-border-subtle focus:border-desaturated-teal border-t-0 border-l-0 border-r-0 focus:ring-0 text-deep-charcoal py-3 px-0 transition-colors font-medium placeholder:text-deep-charcoal/20" placeholder="email@enterprise.com" type="email" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="data-label">Storefront URL</label>
                                    <input className="w-full bg-transparent border-b-2 border-border-subtle focus:border-desaturated-teal border-t-0 border-l-0 border-r-0 focus:ring-0 text-deep-charcoal py-3 px-0 transition-colors font-medium placeholder:text-deep-charcoal/20" placeholder="https://marketplace-link.com" type="text" />
                                </div>
                                <div className="space-y-4">
                                    <label className="data-label">Message</label>
                                    <textarea className="w-full bg-transparent border-b-2 border-border-subtle focus:border-desaturated-teal border-t-0 border-l-0 border-r-0 focus:ring-0 text-deep-charcoal py-3 px-0 transition-colors resize-none font-medium placeholder:text-deep-charcoal/20" placeholder="Specific objectives or challenges..." rows={3}></textarea>
                                </div>
                                <button className="w-full bg-desaturated-teal text-white font-bold py-6 mt-6 hover:bg-deep-charcoal transition-all uppercase tracking-[0.25em] text-xs rounded-sm shadow-xl shadow-desaturated-teal/20">
                                    Send Message
                                </button>
                                <p className="text-[9px] font-mono text-center text-deep-charcoal/40 uppercase tracking-widest">Your data is secure</p>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
