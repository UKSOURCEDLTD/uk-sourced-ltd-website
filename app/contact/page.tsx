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
            answer: "Our process begins with a deep-dive data audit of your existing Amazon storefront. Once the initial \"Link\" form is submitted, our logistics and growth analysts evaluate your current infrastructure against 2026 market benchmarks."
        },
        {
            question: "What regions are covered by the Global Node?",
            answer: "We operate across 22 primary Amazon regions, including full coverage of North America, the EU5, and emerging markets in APAC. Our internal \"Data DNA\" grid ensures real-time compliance across all cross-border legal frameworks."
        },
        {
            question: "What are the minimum inventory requirements?",
            answer: "UK Sourced Ltd works exclusively with high-growth partners who maintain a minimum monthly turnover of $50k or equivalent. We prioritize brands with scalable SKU portfolios and robust manufacturing transparency."
        },
        {
            question: "Security and data encryption protocols?",
            answer: "Every partnership is protected by Tier-1 encryption. Your proprietary sales data and supply chain architecture are siloed within our secure \"Logix\" cloud, accessible only via biometric-authenticated terminal links."
        }
    ];

    return (
        <div className="grid-lines min-h-screen">
            <main>
                <section className="min-h-[85vh] max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 border-x border-border-subtle bg-white/50">
                    <div className="lg:col-span-6 p-8 md:p-24 flex flex-col justify-center border-r border-border-subtle relative overflow-hidden bg-white">
                        <div className="absolute top-0 left-0 w-full h-full grid-lines opacity-20 pointer-events-none"></div>
                        <div className="relative z-10">
                            <div className="mb-12 space-y-8">
                                <div>
                                    <span className="data-label">Status</span>
                                    <div className="flex items-center gap-2 text-[11px] font-mono mt-1">
                                        <span className="w-2 h-2 rounded-full bg-desaturated-teal animate-pulse"></span>
                                        Online
                                    </div>
                                </div>
                                <h1 className="text-7xl md:text-9xl font-bold text-deep-charcoal tracking-tighter">
                                    Contact Us<span className="text-desaturated-teal">.</span>
                                </h1>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
                                <div className="space-y-2">
                                    <span className="data-label">Headquarters</span>
                                    <p className="font-mono text-sm leading-relaxed">
                                        LEVEL 42, CANARY WHARF<br />
                                        LONDON, E14 5AB<br />
                                        UNITED KINGDOM
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <span className="data-label">Phone / Email</span>
                                    <p className="font-mono text-sm leading-relaxed">
                                        +44 (0) 20 3884 1200<br />
                                        HELLO@UKSOURCED.LTD
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-6 p-8 md:p-24 flex flex-col justify-center bg-soft-bg/30">
                        <div className="max-w-md w-full mx-auto">
                            <div className="mb-12">
                                <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
                                <p className="text-sm opacity-60">Fill out the form below to get started. Our analysts will review your data profile within 24 standard cycles.</p>
                            </div>
                            <form action={submitContactForm} className="space-y-12">
                                <div className="relative group">
                                    <label className="data-label absolute -top-6 left-0 transition-all group-focus-within:text-desaturated-teal">Full Name</label>
                                    <input name="name" className="w-full bg-transparent border-0 border-b border-border-subtle focus:border-desaturated-teal focus:ring-0 p-0 py-3 text-sm tracking-wider font-mono placeholder:text-deep-charcoal/20 uppercase transition-colors" placeholder="FULL LEGAL NAME" type="text" required />
                                </div>
                                <div className="relative group">
                                    <label className="data-label absolute -top-6 left-0 transition-all group-focus-within:text-desaturated-teal">Email Address</label>
                                    <input name="email" className="w-full bg-transparent border-0 border-b border-border-subtle focus:border-desaturated-teal focus:ring-0 p-0 py-3 text-sm tracking-wider font-mono placeholder:text-deep-charcoal/20 uppercase transition-colors" placeholder="EMAIL_ADDRESS" type="email" required />
                                </div>
                                <div className="relative group">
                                    <label className="data-label absolute -top-6 left-0 transition-all group-focus-within:text-desaturated-teal">Website / Storefront</label>
                                    <input name="storefrontUrl" className="w-full bg-transparent border-0 border-b border-border-subtle focus:border-desaturated-teal focus:ring-0 p-0 py-3 text-sm tracking-wider font-mono placeholder:text-deep-charcoal/20 uppercase transition-colors" placeholder="AMAZON_STOREFRONT_URL" type="text" />
                                </div>
                                <div className="relative group">
                                    <label className="data-label absolute -top-6 left-0 transition-all group-focus-within:text-desaturated-teal">Message</label>
                                    <textarea name="projectDetails" className="w-full bg-transparent border-0 border-b border-border-subtle focus:border-desaturated-teal focus:ring-0 p-0 py-3 text-sm tracking-wider font-mono placeholder:text-deep-charcoal/20 uppercase transition-colors resize-none" placeholder="DEFINE_GROWTH_OBJECTIVES" rows={3}></textarea>
                                </div>
                                <button type="submit" className="w-full bg-desaturated-teal text-white py-6 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-deep-charcoal transition-all shadow-2xl shadow-desaturated-teal/20">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
                <section className="p-8 md:p-24 max-w-5xl mx-auto border-x border-border-subtle bg-white">
                    <div className="mb-20 text-center">
                        <span className="data-label inline-block mb-4">knowledge_base_v26</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Protocol Support</h2>
                    </div>
                    <div className="space-y-0">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-border-subtle py-8">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex justify-between items-center text-left group"
                                >
                                    <span className={clsx("text-xl md:text-2xl font-bold transition-colors group-hover:text-desaturated-teal", openAccordion === index && "text-desaturated-teal")}>
                                        {faq.question}
                                    </span>
                                    <span className="material-symbols-outlined text-border-subtle group-hover:text-desaturated-teal transition-colors">
                                        {openAccordion === index ? "remove" : "add"}
                                    </span>
                                </button>
                                <div
                                    className={clsx(
                                        "overflow-hidden transition-all duration-300 ease-in-out",
                                        openAccordion === index ? "max-h-[500px] mt-6 opacity-100" : "max-h-0 opacity-0"
                                    )}
                                >
                                    <p className="font-light text-lg text-deep-charcoal/70 max-w-3xl">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-24 p-12 bg-soft-bg border border-border-subtle text-center">
                        <span className="data-label block mb-6">need_more_clarity?</span>
                        <p className="mb-8">If your inquiry is outside of the standard protocol, please contact our lead analyst.</p>
                        <a className="text-sm font-mono font-bold text-desaturated-teal hover:underline underline-offset-8 decoration-desaturated-teal/30" href="mailto:analyst@uksourced.ltd">REQUEST_CUSTOM_AUDIT</a>
                    </div>
                </section>
            </main>
        </div>
    );
}
