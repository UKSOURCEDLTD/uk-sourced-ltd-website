import Link from "next/link";
import { ShieldCheck, TrendingUp, Package, Compass, Clock, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

export default function ManagementPage() {
    return (
        <div className="bg-soft-bg min-h-screen font-sans text-deep-charcoal selection:bg-desaturated-teal/20">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
                <div className="max-w-screen-xl mx-auto relative z-10">
                    <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
                        <div className="h-[1px] w-8 bg-desaturated-teal"></div>
                        <span className="text-desaturated-teal font-mono text-sm tracking-widest uppercase">Our Premier Offer</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] mb-8 max-w-5xl">
                        Full Service <span className="block font-semibold text-desaturated-teal">Amazon Account Management.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-deep-charcoal/70 max-w-2xl leading-relaxed mb-12">
                        We combine a high-touch, personal partnership with a rigorous operational framework. You get the attention of a boutique agency, backed by the robust SOPs of a large firm.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <Link
                            href="/contact"
                            className="bg-deep-charcoal text-white px-8 py-4 font-semibold hover:bg-desaturated-teal transition-all duration-300 rounded-sm shadow-lg hover:shadow-desaturated-teal/25 flex items-center justify-center gap-2 group"
                        >
                            <span>Request an Audit</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#protocol"
                            className="border border-deep-charcoal/20 px-8 py-4 font-semibold hover:bg-white hover:border-transparent hover:shadow-md transition-all duration-300 rounded-sm flex items-center justify-center text-deep-charcoal/80"
                        >
                            View The Protocol
                        </Link>
                    </div>
                </div>

                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-br from-desaturated-teal/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            </section>

            {/* The Brand Owner's Dilemma Section */}
            <section className="py-24 px-6 bg-white border-y border-border-subtle">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-light mb-8">
                                The <span className="font-semibold">"Amazon Anxiety"</span> is Real.
                            </h2>
                            <p className="text-lg text-deep-charcoal/70 mb-8 leading-relaxed">
                                Most brand owners are trapped in a cycle of reactivity. Waking up to checked suspended listings, fighting vague support tickets, and wondering if their ads are burning cash.
                            </p>
                            <p className="text-lg text-deep-charcoal/70 leading-relaxed">
                                It’s a death by a thousand cuts that steals your focus from what actually matters: <strong className="text-deep-charcoal font-semibold">building your product and brand.</strong>
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-desaturated-teal/5 transform rotate-3 rounded-lg"></div>
                            <div className="relative bg-soft-bg p-8 md:p-10 rounded-lg border border-border-subtle shadow-sm">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 opacity-50">
                                        <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-medium text-deep-charcoal">The "Generic Agency" Approach</h4>
                                            <p className="text-sm text-deep-charcoal/60 mt-1">"We'll do our best." Inconsistent updates, reactive fixes, and ad-hoc strategy.</p>
                                        </div>
                                    </div>
                                    <div className="h-[1px] w-full bg-border-subtle"></div>
                                    <div className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-desaturated-teal shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-deep-charcoal text-lg">The UK Sourced Standard</h4>
                                            <p className="text-sm text-deep-charcoal/70 mt-1">"We have a Protocol." Daily Health Checks, strict naming conventions, and 90-day strategic roadmaps.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The 4 Pillars / The Protocol */}
            <section id="protocol" className="py-24 px-6 bg-soft-bg">
                <div className="max-w-screen-xl mx-auto">
                    <div className="mb-20 text-center max-w-3xl mx-auto">
                        <span className="text-desaturated-teal font-mono text-xs tracking-widest uppercase block mb-4">Why We Are Different</span>
                        <h2 className="text-4xl md:text-5xl font-light mb-6">Built on <span className="font-semibold">SOPs</span>, Not Guesswork.</h2>
                        <p className="text-deep-charcoal/60 text-lg">
                            We don't rely on "feeling creative." We rely on a Master Playbook that covers every aspect of account health and growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {/* Card 1: Governance */}
                        <div className="bg-white p-10 rounded-sm border border-border-subtle hover:border-desaturated-teal/30 transition-colors group">
                            <div className="w-14 h-14 bg-desaturated-teal/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-desaturated-teal group-hover:text-white transition-colors text-desaturated-teal">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Ironclad Governance</h3>
                            <p className="text-deep-charcoal/70 mb-6 leading-relaxed">
                                We sleep with one eye open so you don't have to. Our <strong>Daily Health Check</strong> (SOP 6.1) catches policy warnings, suppressed listings, and NCX spikes before they become disasters.
                            </p>
                            <ul className="space-y-2 text-sm text-deep-charcoal/60 font-mono">
                                <li className="flex items-center gap-2 px-3 py-2 bg-soft-bg rounded-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-desaturated-teal"></div>
                                    Listing Compliance Audits
                                </li>
                                <li className="flex items-center gap-2 px-3 py-2 bg-soft-bg rounded-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-desaturated-teal"></div>
                                    Brand Registry Protection
                                </li>
                            </ul>
                        </div>

                        {/* Card 2: Profit */}
                        <div className="bg-white p-10 rounded-sm border border-border-subtle hover:border-desaturated-teal/30 transition-colors group">
                            <div className="w-14 h-14 bg-desaturated-teal/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-desaturated-teal group-hover:text-white transition-colors text-desaturated-teal">
                                <TrendingUp className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Profit Engineering</h3>
                            <p className="text-deep-charcoal/70 mb-6 leading-relaxed">
                                Revenue is vanity; Profit is sanity. We ruthlessly cut "Bleeder" SKUs and scale "Winners." Our weekly bid optimization focuses on reducing wasted spend and maximizing Net Profit.
                            </p>
                            <ul className="space-y-2 text-sm text-deep-charcoal/60 font-mono">
                                <li className="flex items-center gap-2 px-3 py-2 bg-soft-bg rounded-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-desaturated-teal"></div>
                                    Weekly "Bleeder" Cuts
                                </li>
                                <li className="flex items-center gap-2 px-3 py-2 bg-soft-bg rounded-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-desaturated-teal"></div>
                                    Total ACOS (TACOS) Focus
                                </li>
                            </ul>
                        </div>

                        {/* Card 3: Logistics */}
                        <div className="bg-white p-10 rounded-sm border border-border-subtle hover:border-desaturated-teal/30 transition-colors group">
                            <div className="w-14 h-14 bg-desaturated-teal/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-desaturated-teal group-hover:text-white transition-colors text-desaturated-teal">
                                <Package className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Logistics Precision</h3>
                            <p className="text-deep-charcoal/70 mb-6 leading-relaxed">
                                Stockouts are the silent killer of rankings. We use precision forecasting models <code>(Sales x Lead Time + Safety Stock)</code> to ensure you never miss a sale. Plus, we fight Amazon for every lost unit reimbursement.
                            </p>
                            <ul className="space-y-2 text-sm text-deep-charcoal/60 font-mono">
                                <li className="flex items-center gap-2 px-3 py-2 bg-soft-bg rounded-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-desaturated-teal"></div>
                                    Inventory Reconciliation
                                </li>
                                <li className="flex items-center gap-2 px-3 py-2 bg-soft-bg rounded-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-desaturated-teal"></div>
                                    Restock Forecasting
                                </li>
                            </ul>
                        </div>

                        {/* Card 4: Strategy */}
                        <div className="bg-white p-10 rounded-sm border border-border-subtle hover:border-desaturated-teal/30 transition-colors group">
                            <div className="w-14 h-14 bg-desaturated-teal/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-desaturated-teal group-hover:text-white transition-colors text-desaturated-teal">
                                <Compass className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Strategic Growth</h3>
                            <p className="text-deep-charcoal/70 mb-6 leading-relaxed">
                                We don't just "maintain" accounts. We hold <strong>Quarterly Business Reviews (QBRs)</strong> to plan your next 90 days. From Product Launches to catalog revitalization, we act as your strategic board members.
                            </p>
                            <ul className="space-y-2 text-sm text-deep-charcoal/60 font-mono">
                                <li className="flex items-center gap-2 px-3 py-2 bg-soft-bg rounded-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-desaturated-teal"></div>
                                    90-Day Roadmaps
                                </li>
                                <li className="flex items-center gap-2 px-3 py-2 bg-soft-bg rounded-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-desaturated-teal"></div>
                                    New Product Launch SOPs
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Promise: Time Back */}
            <section className="py-24 px-6 bg-deep-charcoal text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-desaturated-teal rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

                <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <Clock className="w-10 h-10 text-desaturated-teal" />
                            <span className="font-mono text-sm tracking-widest uppercase opacity-80">The Ultimate R.O.I.</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                            We Buy Back Your <br /><span className="font-semibold text-desaturated-teal">Most Valuable Asset.</span>
                        </h2>
                        <p className="text-xl text-white/70 leading-relaxed mb-8">
                            Imagine never having to open a Seller Support ticket again. Imagine never waking up to a suppressed listing panic.
                        </p>
                        <p className="text-lg text-white/60 leading-relaxed">
                            We absorb the volatility of Amazon so you can enjoy the stability of a growing business. You get your evenings back. You get the 1st of the month back. You get your life back.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="bg-white/5 backdrop-blur-md p-10 border border-white/10 rounded-sm max-w-md w-full">
                            <div className="text-center mb-8">
                                <div className="text-6xl font-semibold mb-2">100+</div>
                                <div className="text-sm font-mono uppercase tracking-widest opacity-60">Hours Saved Per Month</div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm py-3 border-b border-white/10">
                                    <span>Support Ticket Fights</span>
                                    <span className="text-white/40 line-through">15 hrs</span>
                                </div>
                                <div className="flex justify-between text-sm py-3 border-b border-white/10">
                                    <span>PPC Optimization</span>
                                    <span className="text-white/40 line-through">20 hrs</span>
                                </div>
                                <div className="flex justify-between text-sm py-3 border-b border-white/10">
                                    <span>Inventory Reconcilation</span>
                                    <span className="text-white/40 line-through">10 hrs</span>
                                </div>
                                <div className="flex justify-between text-sm py-3 pt-6">
                                    <span className="font-bold text-desaturated-teal">Your Focus</span>
                                    <span className="font-bold">100% Product & Brand</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-light mb-8 text-deep-charcoal">
                        Ready to Install <br /><span className="font-semibold">The Solution?</span>
                    </h2>
                    <p className="text-xl text-deep-charcoal/60 mb-12">
                        Stop managing the chaos. Start engineering your growth.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-desaturated-teal text-white px-12 py-5 text-lg font-semibold hover:bg-deep-charcoal transition-all duration-300 rounded-sm shadow-xl hover:shadow-2xl shadow-desaturated-teal/20"
                    >
                        Partner With UK Sourced
                    </Link>
                </div>
            </section>
        </div>
    );
}
