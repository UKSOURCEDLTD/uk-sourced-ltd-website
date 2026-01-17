"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import clsx from "clsx";

export default function ContactPage() {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const faqs = [
        {
            question: "How does the partnership initialization work?",
            answer: "Our process begins with a deep-dive data audit of your existing Amazon storefront. Once the initial \"Link\" form is submitted, our logistics and growth analysts evaluate your current infrastructure against 2026 market benchmarks. We look for alignment in supply chain velocity and brand equity potential."
        },
        {
            question: "What regions are covered by the Global Node?",
            answer: "We operate across 22 primary Amazon regions, including full coverage of North America, the EU5, and emerging markets in APAC. Our internal \"Data DNA\" grid ensures real-time compliance across all cross-border legal frameworks, handling VAT, customs, and localization automatically."
        },
        {
            question: "What are the minimum inventory requirements?",
            answer: "UK Sourced Ltd works exclusively with high-growth partners who maintain a minimum monthly turnover of $50k or equivalent. We prioritize brands with scalable SKU portfolios and robust manufacturing transparency to ensure uninterrupted supply chain flow."
        },
        {
            question: "Security and data encryption protocols?",
            answer: "Every partnership is protected by Tier-1 encryption. Your proprietary sales data and supply chain architecture are siloed within our secure \"Logix\" cloud, accessible only via biometric-authenticated terminal links. We treat your data as a critical asset."
        }
    ];

    return (
        <div className="grid-lines min-h-screen">
            <main>
                <section className="min-h-[90vh] max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 border-x border-border-subtle bg-white/50">
                    <div className="lg:col-span-5 p-12 md:p-24 flex flex-col justify-center border-r border-border-subtle relative overflow-hidden bg-white">
                        <div className="absolute top-0 left-0 w-full h-full grid-lines opacity-20 pointer-events-none"></div>
                        <div className="relative z-10">
                            <div className="mb-16 space-y-8">
                                <div>
                                    <span className="data-label">Status</span>
                                    <div className="flex items-center gap-2 text-[11px] font-mono mt-1 text-deep-charcoal">
                                        <span className="w-2 h-2 rounded-full bg-desaturated-teal animate-pulse"></span>
                                        Available for Partnership
                                    </div>
                                </div>
                                <h1 className="text-6xl md:text-8xl font-bold text-deep-charcoal tracking-tighter leading-[0.9]">
                                    Contact <br />
                                    <span className="text-desaturated-teal">UK Sourced.</span>
                                </h1>
                            </div>

                            <div className="prose prose-sm text-deep-charcoal/80 mb-16 max-w-md">
                                <p className="leading-relaxed mb-6">
                                    We are selectively onboarding partners who are ready to transition from standard marketplace selling to a fully integrated account management and distribution model.
                                </p>
                                <p className="leading-relaxed">
                                    Our audit process is rigorous but necessary. We ensure that every brand we partner with can fully leverage our global infrastructure for maximum scale.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 border-t border-border-subtle pt-12">
                                <div className="space-y-4">
                                    <span className="data-label">Headquarters</span>
                                    <p className="font-mono text-sm leading-relaxed text-deep-charcoal">
                                        LEVEL 42, CANARY WHARF<br />
                                        LONDON, E14 5AB<br />
                                        UNITED KINGDOM
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <span className="data-label">Direct Lines</span>
                                    <p className="font-mono text-sm leading-relaxed text-deep-charcoal">
                                        +44 (0) 20 3884 1200<br />
                                        HELLO@UKSOURCED.LTD
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 p-12 md:p-24 flex flex-col justify-center bg-soft-bg/30">
                        <div className="max-w-xl w-full mx-auto bg-white p-12 md:p-16 border border-border-subtle shadow-xl shadow-desaturated-teal/5 rounded-sm">
                            <div className="mb-12">
                                <h2 className="text-3xl font-semibold mb-6 text-deep-charcoal">Initiate Partnership Protocol</h2>
                                <p className="text-deep-charcoal/70 leading-relaxed">
                                    Fill out the form below to begin the vetting process. Our growth analysts will review your current Amazon footprint and logistics profile within 24 standard hours.
                                </p>
                            </div>
                            <form action={submitContactForm} className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative group">
                                        <label className="text-[10px] font-mono uppercase tracking-widest text-deep-charcoal/60 mb-2 block group-focus-within:text-desaturated-teal transition-colors">Full Name</label>
                                        <input name="name" className="w-full bg-soft-bg/50 border border-border-subtle focus:border-desaturated-teal focus:ring-1 focus:ring-desaturated-teal p-4 text-sm font-medium text-deep-charcoal placeholder:text-deep-charcoal/30 transition-all rounded-sm" placeholder="John Doe" type="text" required />
                                    </div>
                                    <div className="relative group">
                                        <label className="text-[10px] font-mono uppercase tracking-widest text-deep-charcoal/60 mb-2 block group-focus-within:text-desaturated-teal transition-colors">Email Address</label>
                                        <input name="email" className="w-full bg-soft-bg/50 border border-border-subtle focus:border-desaturated-teal focus:ring-1 focus:ring-desaturated-teal p-4 text-sm font-medium text-deep-charcoal placeholder:text-deep-charcoal/30 transition-all rounded-sm" placeholder="john@company.com" type="email" required />
                                    </div>
                                </div>
                                <div className="relative group">
                                    <label className="text-[10px] font-mono uppercase tracking-widest text-deep-charcoal/60 mb-2 block group-focus-within:text-desaturated-teal transition-colors">Storefront URL</label>
                                    <input name="storefrontUrl" className="w-full bg-soft-bg/50 border border-border-subtle focus:border-desaturated-teal focus:ring-1 focus:ring-desaturated-teal p-4 text-sm font-medium text-deep-charcoal placeholder:text-deep-charcoal/30 transition-all rounded-sm" placeholder="amazon.com/shops/your-store" type="text" />
                                </div>
                                <div className="relative group">
                                    <label className="text-[10px] font-mono uppercase tracking-widest text-deep-charcoal/60 mb-2 block group-focus-within:text-desaturated-teal transition-colors">Business Objectives</label>
                                    <textarea name="projectDetails" className="w-full bg-soft-bg/50 border border-border-subtle focus:border-desaturated-teal focus:ring-1 focus:ring-desaturated-teal p-4 text-sm font-medium text-deep-charcoal placeholder:text-deep-charcoal/30 transition-all resize-none rounded-sm leading-relaxed" placeholder="Briefly describe your current volume and what you are looking to achieve with an account management partnership..." rows={4}></textarea>
                                </div>
                                <button type="submit" className="w-full bg-desaturated-teal text-white py-5 text-xs font-bold tracking-[0.25em] uppercase hover:bg-deep-charcoal transition-all shadow-lg shadow-desaturated-teal/20 rounded-sm mt-4">
                                    Submit for Review
                                </button>
                                <p className="text-[9px] font-mono text-center text-deep-charcoal/40 uppercase tracking-widest mt-6">
                                    Protected by 256-bit SSL Encryption
                                </p>
                            </form>
                        </div>
                    </div>
                </section>
                <section className="p-8 md:p-24 max-w-5xl mx-auto border-x border-border-subtle bg-white">
                    <div className="mb-20 text-center">
                        <span className="data-label inline-block mb-4">Common questions</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-deep-charcoal">Partnership Support</h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-border-subtle rounded-sm hover:border-desaturated-teal/30 transition-colors bg-soft-bg/20">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex justify-between items-center text-left p-8 group"
                                >
                                    <span className={clsx("text-lg md:text-xl font-semibold transition-colors text-deep-charcoal", openAccordion === index && "text-desaturated-teal")}>
                                        {faq.question}
                                    </span>
                                    <span className={clsx("material-symbols-outlined text-deep-charcoal/30 group-hover:text-desaturated-teal transition-all duration-300", openAccordion === index && "rotate-180 text-desaturated-teal")}>
                                        expand_more
                                    </span>
                                </button>
                                <div
                                    className={clsx(
                                        "overflow-hidden transition-all duration-500 ease-in-out px-8",
                                        openAccordion === index ? "max-h-[300px] mb-8 opacity-100" : "max-h-0 opacity-0"
                                    )}
                                >
                                    <p className="font-light text-base text-deep-charcoal/70 leading-relaxed max-w-3xl border-t border-border-subtle pt-6">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
