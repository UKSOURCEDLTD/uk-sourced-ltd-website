"use client";

import { motion } from "framer-motion";
import { Package, BarChart3, Users, Check } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Wholesale Distribution",
        description: "We purchase your inventory upfront and handle all logistics, compliance, and sales.",
        icon: Package,
        features: [
            "Instant Cash Flow",
            "End-to-End Logistics",
            "Zero Marketplace Risk",
            "Global Distribution Network",
        ],
        cta: "Partner for Wholesale",
        href: "/wholesale",
        color: "bg-desaturated-teal/5",
        iconColor: "text-desaturated-teal",
    },
    {
        title: "Account Management",
        description: "Full-service management of your Seller Central account to maximize ROI and brand presence.",
        icon: BarChart3,
        features: [
            "Listing Optimization (SEO)",
            "PPC & Advertising Management",
            "Inventory Forecasting",
            "Brand Protection",
        ],
        cta: "Hire Usage Experts",
        href: "/management",
        color: "bg-deep-charcoal/5",
        iconColor: "text-deep-charcoal",
    },
    {
        title: "Strategic Consulting",
        description: "High-level guidance for brands interacting with Amazon internally or via other partners.",
        icon: Users,
        features: [
            "Account Audits",
            "Market Expansion Strategy",
            "Team Training",
            "Policy Compliance Review",
        ],
        cta: "Book Consultation",
        href: "/consulting",
        color: "bg-soft-bg",
        iconColor: "text-deep-charcoal/60",
    },
];

export default function ServiceComparison() {
    return (
        <section className="py-24 max-w-screen-2xl mx-auto px-8 md:px-24 border-b border-border-subtle bg-white">
            <div className="mb-16">
                <div className="data-label mb-4 text-desaturated-teal">
                    Our Engagement Models
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-deep-charcoal max-w-2xl">
                    Tailored structures for <br />
                    <span className="font-semibold">every stage of growth.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex flex-col p-8 md:p-10 border border-border-subtle rounded-sm hover:shadow-lg transition-shadow duration-300 ${service.color}`}
                    >
                        <div className={`p-4 rounded-sm w-fit mb-8 bg-white`}>
                            <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                        </div>

                        <h3 className="text-2xl font-semibold mb-4 text-deep-charcoal">
                            {service.title}
                        </h3>
                        <p className="text-deep-charcoal/70 mb-8 leading-relaxed flex-grow">
                            {service.description}
                        </p>

                        <ul className="space-y-4 mb-10">
                            {service.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3 text-sm">
                                    <Check className="w-4 h-4 mt-1 text-desaturated-teal flex-shrink-0" />
                                    <span className="text-deep-charcoal/80">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href={service.href}
                            className="w-full py-4 text-center border border-deep-charcoal/10 rounded-sm text-sm font-semibold uppercase tracking-wider hover:bg-deep-charcoal hover:text-white transition-colors"
                        >
                            {service.cta}
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
