import Link from "next/link";
import { ArrowUpRight, Factory, Handshake, Package, User } from "lucide-react";

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
                            We buy your stock <strong>upfront for cash</strong>. You get immediate capital; we handle the global complexity. Seamlessly expand across Amazon UK, USA, and EU while unlocking TikTok Shop—all without waiting for payouts.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex justify-center items-center px-8 py-4 bg-deep-charcoal text-white text-xs font-bold font-mono tracking-widest uppercase hover:bg-desaturated-teal transition-colors"
                            >
                                Start Retail Partnership
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
                        {/* Stock Flow Visual */}
                        <div className="w-full max-w-sm space-y-8 relative z-10">
                            {/* Step 1 */}
                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-white border border-border-subtle flex items-center justify-center text-deep-charcoal shadow-sm group-hover:border-desaturated-teal transition-colors">
                                    <Factory className="w-8 h-8 opacity-80" />
                                </div>
                                <div>
                                    <div className="text-xs font-mono uppercase text-deep-charcoal/50 mb-1">Step 01</div>
                                    <h3 className="font-semibold text-deep-charcoal">Your Brand</h3>
                                    <p className="text-sm text-deep-charcoal/60">Manufacturing & Product Development</p>
                                </div>
                            </div>

                            {/* Connector */}
                            <div className="w-px h-8 bg-border-subtle ml-8"></div>

                            {/* Step 2 */}
                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-deep-charcoal text-white flex items-center justify-center shadow-lg shadow-deep-charcoal/20">
                                    <Handshake className="w-8 h-8" />
                                </div>
                                <div>
                                    <div className="text-xs font-mono uppercase text-deep-charcoal/50 mb-1">Step 02</div>
                                    <h3 className="font-bold text-desaturated-teal">UK Sourced Ltd</h3>
                                    <p className="text-sm text-deep-charcoal/60">We buy stock upfront & handle logistics</p>
                                </div>
                            </div>

                            {/* Connector */}
                            <div className="w-px h-8 bg-border-subtle ml-8"></div>

                            {/* Step 3 */}
                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-white border border-border-subtle flex items-center justify-center text-deep-charcoal shadow-sm group-hover:border-desaturated-teal transition-colors">
                                    <Package className="w-8 h-8 opacity-80" />
                                </div>
                                <div>
                                    <div className="text-xs font-mono uppercase text-deep-charcoal/50 mb-1">Step 03</div>
                                    <h3 className="font-semibold text-deep-charcoal">Amazon FBA</h3>
                                    <p className="text-sm text-deep-charcoal/60">Prime-eligible global fulfillment</p>
                                </div>
                            </div>

                            {/* Connector */}
                            <div className="w-px h-8 bg-border-subtle ml-8"></div>

                            {/* Step 4 */}
                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-white border border-border-subtle flex items-center justify-center text-deep-charcoal shadow-sm group-hover:border-desaturated-teal transition-colors">
                                    <User className="w-8 h-8 opacity-80" />
                                </div>
                                <div>
                                    <div className="text-xs font-mono uppercase text-deep-charcoal/50 mb-1">Step 04</div>
                                    <h3 className="font-semibold text-deep-charcoal">Happy Customer</h3>
                                    <p className="text-sm text-deep-charcoal/60">Fast delivery & 5-star service</p>
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
                        <p className="text-deep-charcoal/60">Building long-term value through trust and operational excellence.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-8 bg-soft-bg border border-border-subtle text-center group hover:border-desaturated-teal transition-colors">
                            <div className="text-4xl mb-6">🛡️</div>
                            <h3 className="text-lg font-semibold mb-3">Brand Integrity & MAP</h3>
                            <p className="text-sm text-deep-charcoal/70 leading-relaxed">
                                We value your brand equity. We rigorously adhere to MAP policies and pricing structures, ensuring your brand's premium positioning is protected across every marketplace.
                            </p>
                        </div>
                        <div className="p-8 bg-soft-bg border border-border-subtle text-center group hover:border-desaturated-teal transition-colors">
                            <div className="text-4xl mb-6">🤝</div>
                            <h3 className="text-lg font-semibold mb-3">True Partnership</h3>
                            <p className="text-sm text-deep-charcoal/70 leading-relaxed">
                                Beyond just a buyer, we are your strategic partner. We prioritize open communication, reliability, and trust, acting as a dedicated extension of your sales team.
                            </p>
                        </div>
                        <div className="p-8 bg-soft-bg border border-border-subtle text-center group hover:border-desaturated-teal transition-colors">
                            <div className="text-4xl mb-6">🌟</div>
                            <h3 className="text-lg font-semibold mb-3">Premier Representation</h3>
                            <p className="text-sm text-deep-charcoal/70 leading-relaxed">
                                We represent your products with the highest standards. From optimized listings to flawless fulfillment, we ensure your customers experience the reliability they expect from your brand.
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Process Section */}
                <section id="process" className="py-16 md:py-20 bg-soft-bg relative overflow-hidden text-deep-charcoal border-b border-border-subtle">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-light mb-4">The Partnership Process</h2>
                            <p className="text-deep-charcoal/60 max-w-2xl mx-auto">
                                A streamlined, data-driven pathway to global distribution. We handle the complexity so you can focus on product innovation.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                            {/* Connector Line (Desktop) */}
                            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-border-subtle z-0"></div>

                            {/* Step 1 */}
                            <div className="relative z-10 group">
                                <div className="w-16 h-16 bg-white border border-border-subtle mx-auto flex items-center justify-center text-xl font-mono mb-6 shadow-sm group-hover:border-desaturated-teal group-hover:text-desaturated-teal transition-all duration-300 rounded-full">
                                    01
                                </div>
                                <div className="bg-white p-6 border border-border-subtle h-full group-hover:shadow-md transition-all duration-300">
                                    <h4 className="text-lg font-semibold text-center mb-3">Market Investigation</h4>
                                    <p className="text-xs text-deep-charcoal/70 leading-relaxed text-center">
                                        We don't guess. We use advanced analytics to identify your brand's true potential in untapped markets. We assess competition, demand, and profitability to build a data-backed roadmap for expansion.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative z-10 group">
                                <div className="w-16 h-16 bg-deep-charcoal text-white mx-auto flex items-center justify-center text-xl font-mono mb-6 shadow-lg shadow-deep-charcoal/20 transition-all duration-300 rounded-full">
                                    02
                                </div>
                                <div className="bg-white p-6 border border-border-subtle h-full group-hover:shadow-md transition-all duration-300">
                                    <h4 className="text-lg font-semibold text-center mb-3">Planning & Purchase</h4>
                                    <p className="text-xs text-deep-charcoal/70 leading-relaxed text-center">
                                        Consistency is key. We forecast demand with precision to place accurate, recurring orders. You receive a formal Purchase Order and 100% upfront payment, eliminating your cash flow worries.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative z-10 group">
                                <div className="w-16 h-16 bg-white border border-border-subtle mx-auto flex items-center justify-center text-xl font-mono mb-6 shadow-sm group-hover:border-desaturated-teal group-hover:text-desaturated-teal transition-all duration-300 rounded-full">
                                    03
                                </div>
                                <div className="bg-white p-6 border border-border-subtle h-full group-hover:shadow-md transition-all duration-300">
                                    <h4 className="text-lg font-semibold text-center mb-3">Launch</h4>
                                    <p className="text-xs text-deep-charcoal/70 leading-relaxed text-center">
                                        We execute a precision rollout in our planned target markets. We handle all logistics to ensure stock availability, while our team optimizes listings and deploys targeted strategies to drive immediate sales velocity.
                                    </p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="relative z-10 group">
                                <div className="w-16 h-16 bg-white border border-border-subtle mx-auto flex items-center justify-center text-xl font-mono mb-6 shadow-sm group-hover:border-desaturated-teal group-hover:text-desaturated-teal transition-all duration-300 rounded-full">
                                    04
                                </div>
                                <div className="bg-white p-6 border border-border-subtle h-full group-hover:shadow-md transition-all duration-300">
                                    <h4 className="text-lg font-semibold text-center mb-3">Continuous Restock</h4>
                                    <p className="text-xs text-deep-charcoal/70 leading-relaxed text-center">
                                        Growth that compounds. As sales velocity increases, we proactively manage inventory levels and place recurring bulk orders. We prevent stockouts so your revenue stream never stops flowing.
                                    </p>
                                </div>
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
