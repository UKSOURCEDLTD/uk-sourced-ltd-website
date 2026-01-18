"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        interest: "Wholesale Distribution",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Form Submitted:", formState);
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-2xl mx-auto p-12 text-center bg-soft-bg border border-border-subtle rounded-sm"
            >
                <div className="flex justify-center mb-6">
                    <CheckCircle2 className="w-16 h-16 text-desaturated-teal" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-deep-charcoal">
                    Message Received
                </h3>
                <p className="text-deep-charcoal/70 mb-8">
                    Thank you for reaching out. One of our growth specialists will review
                    your inquiry and get back to you within 24 hours.
                </p>
                <button
                    onClick={() => {
                        setIsSuccess(false);
                        setFormState({
                            name: "",
                            email: "",
                            interest: "Wholesale Distribution",
                            message: "",
                        });
                    }}
                    className="text-desaturated-teal font-medium hover:underline text-sm uppercase tracking-wider"
                >
                    Send another message
                </button>
            </motion.div>
        );
    }

    return (
        <section className="py-24 max-w-screen-2xl mx-auto px-8 md:px-24 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
                <div>
                    <div className="data-label mb-4 text-desaturated-teal">
                        Get In Touch
                    </div>
                    <h2 className="text-4xl md:text-5xl font-light text-deep-charcoal mb-8">
                        Ready to <span className="font-semibold">scale?</span>
                    </h2>
                    <p className="text-lg text-deep-charcoal/70 leading-relaxed mb-12">
                        Whether you're looking for a wholesale partner or full-service
                        account management, we're here to help you navigate the Amazon
                        ecosystem.
                    </p>

                    <div className="space-y-8">
                        <div className="border-l-2 border-desaturated-teal pl-6">
                            <h4 className="text-sm font-semibold uppercase tracking-wider mb-2 text-deep-charcoal">
                                London HQ
                            </h4>
                            <p className="text-deep-charcoal/60">
                                123 Business District <br />
                                London, UK
                            </p>
                        </div>
                        <div className="border-l-2 border-border-subtle pl-6">
                            <h4 className="text-sm font-semibold uppercase tracking-wider mb-2 text-deep-charcoal">
                                Direct Contact
                            </h4>
                            <p className="text-deep-charcoal/60">
                                hello@uksourced.co.uk <br />
                                +44 (0) 20 1234 5678
                            </p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label
                                htmlFor="name"
                                className="text-xs font-semibold uppercase tracking-wider text-deep-charcoal/60"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formState.name}
                                onChange={handleChange}
                                className="w-full bg-soft-bg border-b-2 border-border-subtle px-4 py-3 focus:border-desaturated-teal focus:outline-none transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="text-xs font-semibold uppercase tracking-wider text-deep-charcoal/60"
                            >
                                Work Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formState.email}
                                onChange={handleChange}
                                className="w-full bg-soft-bg border-b-2 border-border-subtle px-4 py-3 focus:border-desaturated-teal focus:outline-none transition-colors"
                                placeholder="john@company.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="interest"
                            className="text-xs font-semibold uppercase tracking-wider text-deep-charcoal/60"
                        >
                            I'm interested in...
                        </label>
                        <div className="relative">
                            <select
                                id="interest"
                                name="interest"
                                value={formState.interest}
                                onChange={handleChange}
                                className="w-full bg-soft-bg border-b-2 border-border-subtle px-4 py-3 appearance-none focus:border-desaturated-teal focus:outline-none transition-colors"
                            >
                                <option>Wholesale Distribution</option>
                                <option>Account Management</option>
                                <option>Strategic Consulting</option>
                                <option>Other / General Inquiry</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-deep-charcoal/40"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="message"
                            className="text-xs font-semibold uppercase tracking-wider text-deep-charcoal/60"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            value={formState.message}
                            onChange={handleChange}
                            className="w-full bg-soft-bg border-b-2 border-border-subtle px-4 py-3 focus:border-desaturated-teal focus:outline-none transition-colors resize-none"
                            placeholder="Tell us about your brand and goals..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-deep-charcoal text-white py-4 px-8 rounded-sm font-semibold uppercase tracking-widest hover:bg-desaturated-teal transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                        {isSubmitting ? (
                            "Sending..."
                        ) : (
                            <>
                                Send Message
                                <Send className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
}
