import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function WholesalePage() {
    return (
        <div className="min-h-screen bg-soft-bg">
            <main className="max-w-screen-2xl mx-auto">
                {/* Hero Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] border-b border-border-subtle">
                    <div className="p-12 md:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border-subtle bg-white">
                        <div className="data-label text-desaturated-teal mb-6">Global Distribution Partner</div>
                        <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
                            We sell your products <br />
                            <span className="font-semibold text-deep-charcoal">Globally</span>
                        </h1>
                        <p className="text-lg text-deep-charcoal/80 mb-10 max-w-xl leading-relaxed">
                            We buy your stock <strong>upfront for cash</strong>. You get immediate capital; we take the global risk. Dominate Amazon UK, USA, and EU while unlocking TikTok Shop—all without waiting for payouts.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex justify-center items-center px-8 py-4 bg-deep-charcoal text-white text-xs font-bold font-mono tracking-widest uppercase hover:bg-desaturated-teal transition-colors"
                            >
                                Get Cash Offer
                            </Link>
                            <Link
                                href="#process"
                                className="inline-flex justify-center items-center px-8 py-4 border border-border-subtle text-deep-charcoal text-xs font-bold font-mono tracking-widest uppercase hover:bg-soft-bg transition-colors"
                            >
                                How It Works
                            </Link>
                        </div>
                    </div>

                    <div className="bg-soft-bg p-12 md:p-24 flex items-center justify-center relative overflow-hidden">
                        {/* Interactive Cash Flow Visual */}
                        <div className="w-full max-w-md relative z-10">
                            <div className="bg-white p-8 shadow-2xl shadow-deep-charcoal/5 border border-border-subtle space-y-6">
                                <div className="flex justify-between items-center border-b border-border-subtle pb-4">
                                    <span className="text-xs font-mono uppercase text-deep-charcoal/50">Your Cash Flow</span>
                                    <span className="text-desaturated-teal font-bold">+ Immediate</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-deep-charcoal/70">Inventory Value</span>
                                        <span className="font-mono font-bold">£50,000+</span>
                                    </div>
                                    <div className="w-full h-2 bg-soft-bg rounded-full overflow-hidden">
                                        <div className="h-full bg-deep-charcoal w-3/4"></div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-deep-charcoal/70">Risk Transfer</span>
                                        <span className="font-mono font-bold">100% to Us</span>
                                    </div>
                                    <div className="w-full h-2 bg-soft-bg rounded-full overflow-hidden">
                                        <div className="h-full bg-desaturated-teal w-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Background decoration */}
                        <div className="absolute inset-0 grid-lines opacity-50"></div>
                    </div>
                </section>

                {/* Value Propositions - Why Sell to Us? */}
                <section className="p-12 md:p-24 bg-white border-b border-border-subtle">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-light mb-4">Why Brands Partner With Us</h2>
                        <p className="text-deep-charcoal/60">We remove the bottlenecks of traditional distribution.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-8 bg-soft-bg border border-border-subtle text-center group hover:border-desaturated-teal transition-colors">
                            <div className="text-4xl mb-6">💷</div>
                            <h3 className="text-lg font-semibold mb-3">Instant Cash Flow</h3>
                            <p className="text-sm text-deep-charcoal/70 leading-relaxed">
                                Unlock capital trapped in inventory. We buy upfront, giving you the resources to invest in R&D and marketing immediately.
                            </p>
                        </div>
                        <div className="p-8 bg-soft-bg border border-border-subtle text-center group hover:border-desaturated-teal transition-colors">
                            <div className="text-4xl mb-6">🛡️</div>
                            <h3 className="text-lg font-semibold mb-3">Zero Risk</h3>
                            <p className="text-sm text-deep-charcoal/70 leading-relaxed">
                                No consignment. No returns. Once we buy it, the risk is 100% ours. You get paid regardless of how fast we sell.
                            </p>
                        </div>
                        <div className="p-8 bg-soft-bg border border-border-subtle text-center group hover:border-desaturated-teal transition-colors">
                            <div className="text-4xl mb-6">🌍</div>
                            <h3 className="text-lg font-semibold mb-3">Global Compliance</h3>
                            <p className="text-sm text-deep-charcoal/70 leading-relaxed">
                                VAT, customs, and international logistics are headaches we handle. Launch in the US & EU without the paperwork nightmare.
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Process Section */}
                <section id="process" className="p-12 md:p-24 bg-deep-charcoal text-white relative overflow-hidden">
                    <div className="absolute inset-0 grid-lines opacity-10"></div>
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-light mb-4">The Partnership Process</h2>
                            <p className="text-white/60">Simple, transparent, and fast.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                            {/* Connector Line (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-white/20 -z-10"></div>

                            <div className="relative">
                                <div className="w-24 h-24 bg-deep-charcoal border border-white/20 mx-auto flex items-center justify-center text-2xl font-mono mb-6 shadow-xl shadow-black/20">
                                    01
                                </div>
                                <h4 className="text-lg font-semibold text-center mb-2">Audit & Analyze</h4>
                                <p className="text-sm text-center text-white/60 leading-relaxed">
                                    We analyze your brand's potential across Amazon UK, US, and EU markets.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="w-24 h-24 bg-desaturated-teal border border-desaturated-teal mx-auto flex items-center justify-center text-2xl font-mono mb-6 shadow-xl shadow-desaturated-teal/20">
                                    02
                                </div>
                                <h4 className="text-lg font-semibold text-center mb-2">Cash Offer</h4>
                                <p className="text-sm text-center text-white/60 leading-relaxed">
                                    We present a purchase order. Validated stock is paid for upfront via bank transfer.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="w-24 h-24 bg-deep-charcoal border border-white/20 mx-auto flex items-center justify-center text-2xl font-mono mb-6 shadow-xl shadow-black/20">
                                    03
                                </div>
                                <h4 className="text-lg font-semibold text-center mb-2">Global Launch</h4>
                                <p className="text-sm text-center text-white/60 leading-relaxed">
                                    Stock flows to our FBA centers worldwide. We optimize listings and drive sales.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Channel Expertise (Existing, slightly refined) */}
                <section className="p-12 md:p-24 bg-white grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border-subtle">
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-soft-bg border border-border-subtle flex items-center justify-center text-desaturated-teal mb-4">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-semibold">Global Amazon Scale</h3>
                        <p className="text-sm text-deep-charcoal/70 leading-relaxed">
                            We take your brand international. Seamlessly expand into UK, USA, and EU marketplaces with our established infrastructure.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-soft-bg border border-border-subtle flex items-center justify-center text-desaturated-teal mb-4">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-semibold">FBA & Logistics Mastery</h3>
                        <p className="text-sm text-deep-charcoal/70 leading-relaxed">
                            Prime eligibility is non-negotiable. We handle the complex logistics to ensure Buy Box dominance and rapid delivery.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-soft-bg border border-border-subtle flex items-center justify-center text-desaturated-teal mb-4">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-semibold">Omnichannel Bonus</h3>
                        <p className="text-sm text-deep-charcoal/70 leading-relaxed">
                            While Amazon is the powerhouse, we diversify your revenue stream by launching your top products on TikTok Shop and our direct platform.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
