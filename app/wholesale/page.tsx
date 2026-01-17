import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function WholesalePage() {
    return (
        <div className="min-h-screen bg-soft-bg">
            <main className="max-w-screen-2xl mx-auto">
                <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] border-b border-border-subtle">
                    <div className="p-12 md:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border-subtle bg-white">
                        <div className="data-label text-desaturated-teal mb-6">Wholesale Distribution</div>
                        <h1 className="text-4xl md:text-6xl font-light mb-10 leading-tight">
                            Wholesale Partnership <br />
                            <span className="font-semibold text-deep-charcoal">Reimagined</span>
                        </h1>
                        <p className="text-lg text-deep-charcoal/80 mb-12 max-w-xl leading-relaxed">
                            We don&apos;t just move boxes; we engineer flow. Our wholesale partnership model focuses on high-velocity FBA brand elevation, ensuring your products dominate the Buy Box while maintaining strict Prime performance standards.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-widest uppercase text-desaturated-teal hover:opacity-70 transition-opacity"
                        >
                            Partner With Us <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="bg-soft-bg p-12 md:p-24 flex items-center justify-center relative overflow-hidden">
                        {/* Live Market Pulse Widget Mockup */}
                        <div className="w-full max-w-lg bg-white border border-border-subtle p-8 shadow-2xl shadow-deep-charcoal/5 relative z-10">
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <div className="data-label text-[10px] mb-1">Market Overview</div>
                                    <div className="text-2xl font-mono font-bold text-deep-charcoal">INDEX: 4,291.02</div>
                                </div>
                                <div className="flex gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-[10px] font-mono text-deep-charcoal/40 uppercase">Streaming</span>
                                </div>
                            </div>

                            {/* Abstract Chart Visual */}
                            <div className="h-48 w-full flex items-end gap-1 mb-6 border-b border-border-subtle pb-4">
                                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-desaturated-teal/10 hover:bg-desaturated-teal transition-colors duration-500"
                                        style={{ height: `${h}%` }}
                                    ></div>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div className="p-3 bg-soft-bg border border-border-subtle">
                                    <div className="text-[10px] font-mono text-deep-charcoal/50 uppercase mb-1">Velocity</div>
                                    <div className="text-sm font-bold text-deep-charcoal">+24%</div>
                                </div>
                                <div className="p-3 bg-soft-bg border border-border-subtle">
                                    <div className="text-[10px] font-mono text-deep-charcoal/50 uppercase mb-1">Demand</div>
                                    <div className="text-sm font-bold text-deep-charcoal">High</div>
                                </div>
                                <div className="p-3 bg-soft-bg border border-border-subtle">
                                    <div className="text-[10px] font-mono text-deep-charcoal/50 uppercase mb-1">Stock</div>
                                    <div className="text-sm font-bold text-desaturated-teal">Optimal</div>
                                </div>
                            </div>
                        </div>

                        {/* Background decoration */}
                        <div className="absolute inset-0 grid-lines opacity-50"></div>
                    </div>
                </section>

                <section className="p-12 md:p-24 bg-white grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-soft-bg border border-border-subtle flex items-center justify-center text-desaturated-teal mb-4">
                            01
                        </div>
                        <h3 className="text-xl font-semibold">Brand Elevation</h3>
                        <p className="text-sm text-deep-charcoal/70 leading-relaxed">
                            We maintain strict MAP compliance and enhance listing quality to ensure your brand perception aligns with its value.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-soft-bg border border-border-subtle flex items-center justify-center text-desaturated-teal mb-4">
                            02
                        </div>
                        <h3 className="text-xl font-semibold">Logistics Sync</h3>
                        <p className="text-sm text-deep-charcoal/70 leading-relaxed">
                            Our API integrates directly with your warehouse management system for seamless stock replenishment.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-soft-bg border border-border-subtle flex items-center justify-center text-desaturated-teal mb-4">
                            03
                        </div>
                        <h3 className="text-xl font-semibold">Global Reach</h3>
                        <p className="text-sm text-deep-charcoal/70 leading-relaxed">
                            Access to 22+ Amazon marketplaces immediately upon partnership initialization.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
