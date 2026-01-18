"use client";

import Link from "next/link";
import DynamicImage from "@/components/DynamicImage";
import { useState } from "react";
import BioModal, { TeamMember } from "@/components/BioModal";
import { motion } from "framer-motion";
import { TrendingUp, Box } from "lucide-react";

const TEAM_MEMBERS: TeamMember[] = [
    {
        id: "L.NEEDHAM",
        name: "Luke Needham",
        role: "Co-Founder & CEO",
        imageSlot: "about_team_luke",
        imageAlt: "Luke Needham - CEO",
        fallbackSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqIFsFd_agmGSHxVmqK-v4mdmSqrsYyssWogT_ORWxxJ57pKW1yZofFUQVQAlfhjdjPF6fq1Sl366K8LoKEuvmfw788GC6e4N6wws-MQ7Y8XtHWPHhR7khGkBHzXUoHwW51HafkrEMWQzA0GcmQxXYiIDQ6zUtKAOMLmgGw2e6uM9KqRdIAflDxnUfP0GXznFpfhjv7jkEHq1IqSOwUvb_WP5B5ylE-dY8WBt2D9Ubjk-8E3-UmDuDVc_tXd__B6FuK7iJp187O4-8",
        bio: "Luke co-founded UK Sourced Ltd to provide brands with an elite, result-driven approach to Amazon management. He leads the strategic direction of our growth partnerships.",
        fullBio: [
            "Luke Needham is the Co-Founder and CEO of UK Sourced Ltd. With a deep understanding of the Amazon ecosystem, he has successfully scaled dozens of brands through meticulous management and strategic foresight.",
            "His approach is built on the philosophy of 'Growth Partners,' moving away from traditional agency models to a more integrated, partnership-led strategy.",
            "Luke remains hands-on with high-level strategy, ensuring that every partner receives the executive-level insight needed to dominate their niche."
        ],
        stats: [
            { label: "Portfolio Growth", value: "300%+" },
            { label: "Accounts Led", value: "40+" }
        ],
        meta: {
            clearance: "Executive",
            specialization: "Growth Strategy",
            location: "Burnley HQ"
        }
    },
    {
        id: "C.SIMPSON",
        name: "Codie Simpson",
        role: "Co-Founder & CEO",
        imageSlot: "about_team_codie",
        imageAlt: "Codie Simpson - CEO",
        fallbackSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMojOtwkEtJ3ujJcBlUrO3hCCT0a1Jwg9w6ZUJ84WowfJoHcAo8Hd9Fg4ocqFTOl1UK6oh4uBZVRHzLNX0n10Qn-3ESrGcqLV3q1o6F6pRhJbYFAyuqO_rwT0i5f0ZBEK9wRDxFjMsYSCtwoTMlnKyWrVDdEndD2th5smdNulPbSA529k-W2blBFBWFoVGCDgJwukSfNKKlTdGWvoy-MTGBXeoR4YIcQ__spkmIh6F0ADzwO4YmcvgfvIzRJk-r61wbAXBL_bZ1-UC",
        bio: "Codie specializes in brand scaling and distribution logistics. He ensures our partners have the infrastructure needed to support rapid growth.",
        fullBio: [
            "Codie Simpson is the Co-Founder and CEO of UK Sourced Ltd. He brings extensive experience in logistics and supply chain optimization to the team.",
            "He focuses on the operational excellence that underpins every successful Amazon brand, from inventory forecasting to global distribution networks.",
            "Codie's mission is to ensure that growth is never hindered by operational bottlenecks, providing a seamless bridge between manufacturing and the customer."
        ],
        stats: [
            { label: "Units Distributed", value: "1M+" },
            { label: "Efficiency Gain", value: "40%" }
        ],
        meta: {
            clearance: "Executive",
            specialization: "Distribution",
            location: "Operations Hub"
        }
    },
    {
        id: "L.ELLIOT",
        name: "Liam Elliot",
        role: "Operations Manager",
        imageSlot: "about_team_liam",
        imageAlt: "Liam Elliot - Operations Manager",
        fallbackSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzih8pm2YJ03anOC5NkXi19mf3zdR73shJj0bJPMwNrUKqsdW1XRbVZ7mbVbnA7_n7VxV22k3Nhm6g1ELhMEUl3m6pJPPNiLCKWxVXOQ1-PlYF_iE-oRhO_Oye-se_NycH4l7wBLTqLg1Ix2Bbk00P8pu7J15YwsolUR4nKdR2fUfLViV9879WJkXSkMENgl0bJ0XLEz3fV80trfPnATeHX3CSagv1sSlE4xp-r3wXf-TJyWhg2ncgZfNosVh4yMMmKItW2ImKQ9V4",
        bio: "Liam manages the day-to-day operations, ensuring that listing health and account performance remain at elite standards.",
        fullBio: [
            "Liam Elliot ensures our operations run with clockwork precision. He oversees the critical day-to-day tasks that maintain account health and maximize visibility on Amazon.",
            "With a background in e-commerce management, Liam is an expert at navigating Amazon's ever-changing policies and technical requirements.",
            "He works closely with our partners to ensure their brand identity is protected and enhanced through every listing and interaction."
        ],
        stats: [
            { label: "Health Score", value: "100%" },
            { label: "SOPs Developed", value: "50+" }
        ],
        meta: {
            clearance: "Management",
            specialization: "Operations",
            location: "UK Office"
        }
    },
    {
        id: "K.VERGARA",
        name: "Kilmer Vergara",
        role: "Tech Wizard",
        imageSlot: "about_team_kilmer",
        imageAlt: "Kilmer Vergara - Tech Wizard",
        fallbackSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjr6lQ9pG6_r-_I2b-G_m0J0l8lYF_tM-vA-eDq5Z2oW67p5r8fG_m0J0l8lYF_tM-vA-eDq5Z2oW67p5r8fG_m0J0l8lYF_tM-vA-eDq5Z2oW67p5r8fG_m0J0l8lYF_tM-vA-eDq5",
        bio: "Kilmer drives our technological innovation, implementing advanced AI solutions and automated systems to give our partners a data-driven edge.",
        fullBio: [
            "Kilmer Vergara is our Head of Technology. He specializes in building the tools and systems that allow UK Sourced Ltd to operate with superhuman efficiency.",
            "From custom AI voice bots to deep data analytics engines, Kilmer ensures that our partners are always at the cutting edge of what's possible in e-commerce.",
            "He is committed to using technology not just for efficiency, but as a strategic lever for market dominance."
        ],
        stats: [
            { label: "Automations", value: "200+" },
            { label: "Uptime", value: "99.9%" }
        ],
        meta: {
            clearance: "Technical",
            specialization: "AI & Innovation",
            location: "Global"
        }
    }
];

export default function AboutPage() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    return (
        <div className="min-h-screen bg-soft-bg grid-lines">
            <main>
                <section className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh] max-w-screen-2xl mx-auto border-x border-border-subtle overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 p-8 md:p-24 flex flex-col justify-center border-r border-border-subtle bg-white/40"
                    >
                        <div className="mb-8 data-label flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-desaturated-teal animate-pulse"></span>
                            Our Heritage
                        </div>
                        <h1 className="text-6xl md:text-8xl mb-12 font-light tracking-tighter">
                            Built by <span className="font-semibold block text-desaturated-teal">Sellers.</span>
                        </h1>
                        <p className="text-xl max-w-xl text-deep-charcoal/70 leading-relaxed">
                            We started by selling on Amazon ourselves. For two years, we learned the hard way—managing cashflow, logistics, and competition from our base in Burnley, UK. That experience is the foundation of everything we do today.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 relative flex items-center justify-center bg-white p-12"
                    >
                        <div className="absolute inset-0 grid-lines opacity-40"></div>
                        <div className="relative w-full aspect-[4/5] bg-white pedestal-shadow border border-border-subtle flex flex-col items-center justify-center p-12 group overflow-hidden">
                            <DynamicImage
                                slot="about_hero_main"
                                alt="UK Sourced Ltd Brand Identity"
                                fill
                                className="object-cover grayscale opacity-90 transition-transform duration-1000 group-hover:scale-110"
                                fallbackSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBfigwmoRZmNFL23ceYUbc9gUxdKZn9BBCPoTJyzLaXcZykpVU-kb7Iz8e5IYp0yv6aUcStpKuvx_rKqFckfTLm0f0aimyPfbpShz1NcKJgAX621uekZG89h-pKbMQsV_0wQI7wc6x-u3fXBatcxSuRm4Z-n9_NU28iTpM-Hiq_1uNi2IZcQrmbX_6GOW7hAojSsnbGOW7hAojSsnbGGUlgAa0Bl2_dtBlKGnCkufBRAQv4MQoS00fsXR-TFSpeWLHlF_9uC-xBB0xwD9pKcqzv2myM"
                            />
                            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
                                <div className="w-16 h-[1px] bg-desaturated-teal/40"></div>
                                <div className="mt-4 data-label text-[10px] tracking-[0.3em] opacity-40 uppercase">Elite distribute</div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                <section className="p-8 md:p-24 max-w-screen-2xl mx-auto border-x border-y border-border-subtle bg-white relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="data-label text-desaturated-teal">What We Do</div>
                            <h2 className="text-6xl md:text-[90px] font-bold text-deep-charcoal leading-[0.85] tracking-tighter uppercase">
                                Small <br /> Team <br /> <span className="text-desaturated-teal/20">Big Impact</span>
                            </h2>
                        </motion.div>
                        <div className="flex flex-col justify-between h-full space-y-12">
                            <p className="text-2xl text-deep-charcoal/70 leading-relaxed font-light">
                                We're a UK-based team that offers wholesale partnerships, account management, and consulting. We don't chase massive scale—we focus on working closely with a select group of brands, delivering real results through hands-on service.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-border-subtle">
                                <div className="space-y-4">
                                    <span className="font-mono text-desaturated-teal font-bold text-sm">01 / WHOLESALE</span>
                                    <p className="text-sm text-deep-charcoal/60">We buy your products upfront and sell them on Amazon, taking on all the risk and logistics.</p>
                                </div>
                                <div className="space-y-4">
                                    <span className="font-mono text-desaturated-teal font-bold text-sm">02 / MANAGEMENT</span>
                                    <p className="text-sm text-deep-charcoal/60">Full-service account management, from listings to PPC to inventory—handled by people who've done it themselves.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="p-8 md:p-24 max-w-screen-2xl mx-auto border-x border-b border-border-subtle bg-white relative overflow-hidden">
                    {/* Scanning Animation Background */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                        <div className="absolute inset-0 grid-lines"></div>
                    </div>

                    {/* Scanning Line */}
                    <motion.div
                        initial={{ top: "-10%" }}
                        animate={{ top: "110%" }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-desaturated-teal/20 to-transparent z-0 pointer-events-none"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
                        <div className="lg:col-span-12 mb-8">
                            <div className="data-label text-desaturated-teal mb-4 uppercase tracking-[0.2em] text-xs font-bold">Intelligence Layer</div>
                            <h2 className="text-5xl md:text-7xl font-light tracking-tight text-deep-charcoal">2026 <span className="font-semibold">Ready.</span></h2>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="space-y-8">
                                <p className="text-2xl leading-relaxed text-deep-charcoal/80 font-light border-l-4 border-desaturated-teal pl-8">
                                    Adopting the <span className="text-deep-charcoal font-semibold">Google Unified AI Stack</span>. We don't just react to market changes; we anticipate them using 2026-standard predictive intelligence.
                                </p>
                                <div className="flex items-center gap-4 text-desaturated-teal font-mono text-sm font-bold">
                                    <span className="w-12 h-[1px] bg-desaturated-teal/30"></span>
                                    <span>SYSTEM STATUS: OPTIMIZED</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-soft-bg p-10 border border-border-subtle hover:border-desaturated-teal/30 transition-all pedestal-shadow"
                            >
                                <div className="mb-6"><TrendingUp className="w-8 h-8 text-desaturated-teal" strokeWidth={1.5} /></div>
                                <h3 className="text-xl font-bold mb-3 text-deep-charcoal">ASIN Performance</h3>
                                <p className="text-sm text-deep-charcoal/60 leading-relaxed">
                                    Real-time listing optimization and ranking defense using unified intelligence to maintain Buy-Box dominance.
                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-soft-bg p-10 border border-border-subtle hover:border-desaturated-teal/30 transition-all pedestal-shadow"
                            >
                                <div className="mb-6"><Box className="w-8 h-8 text-desaturated-teal" strokeWidth={1.5} /></div>
                                <h3 className="text-xl font-bold mb-3 text-deep-charcoal">Inventory Ecosystem</h3>
                                <p className="text-sm text-deep-charcoal/60 leading-relaxed">
                                    Next-gen demand forecasting and supply chain automation to ensure your products never go out of stock.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="p-8 md:p-24 max-w-screen-2xl mx-auto border-x border-b border-border-subtle bg-soft-bg/50">
                    <div className="data-label mb-24 text-center tracking-[0.5em] uppercase text-xs opacity-50">Team Leadership</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {TEAM_MEMBERS.map((member, index) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="space-y-6 group cursor-pointer"
                                onClick={() => setSelectedMember(member)}
                            >
                                <div className="aspect-[4/5] bg-white pedestal-shadow overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative border border-border-subtle">
                                    <DynamicImage
                                        slot={member.imageSlot}
                                        alt={member.imageAlt}
                                        fill
                                        className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                                        fallbackSrc={member.fallbackSrc}
                                    />
                                    <div className="absolute inset-0 bg-deep-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                        <div className="bg-white px-6 py-3 text-[10px] font-mono tracking-widest uppercase shadow-xl">
                                            Read Executive Bio
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <h4 className="text-xl font-semibold tracking-tight">{member.name}</h4>
                                    <p className="data-label text-[9px] text-desaturated-teal mb-4 uppercase tracking-[0.2em]">{member.role}</p>
                                    <div className="w-8 h-[1px] bg-border-subtle group-hover:w-full group-hover:bg-desaturated-teal transition-all duration-500"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <BioModal
                        isOpen={!!selectedMember}
                        onClose={() => setSelectedMember(null)}
                        member={selectedMember}
                    />
                </section>

                <section className="p-8 md:p-24 max-w-screen-2xl mx-auto border-x border-b border-border-subtle bg-white overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-12 mb-12">
                            <div className="data-label text-desaturated-teal mb-4 uppercase tracking-widest text-xs">Our Evolution</div>
                            <h2 className="text-4xl md:text-5xl font-light">Built on Results.</h2>
                        </div>

                        <div className="lg:col-span-4 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="border-l-2 border-desaturated-teal pl-8 py-2"
                            >
                                <div className="text-3xl font-mono text-deep-charcoal mb-2">2019-2021</div>
                                <p className="text-sm text-deep-charcoal/60 leading-relaxed">The "Front Line" years. We spent two years in the trenches as sellers ourselves, learning exactly what it takes to survive on Amazon.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="border-l-2 border-border-subtle pl-8 py-2"
                            >
                                <div className="text-3xl font-mono text-deep-charcoal mb-2">2021</div>
                                <p className="text-sm text-deep-charcoal/60 leading-relaxed">Expanded into agency services while continuing to sell ourselves. We built UK Sourced Ltd to help other brands using the same systems we use daily.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="border-l-2 border-border-subtle pl-8 py-2"
                            >
                                <div className="text-3xl font-mono text-deep-charcoal mb-2">Today</div>
                                <p className="text-sm text-deep-charcoal/60 leading-relaxed">A boutique Amazon Growth Partner. We still actively sell on Amazon ourselves—our agency advice comes from current, real-world experience, not theory.</p>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-8 bg-soft-bg/40 p-1 md:p-12 relative border border-border-subtle">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center py-12">
                                <div>
                                    <div className="text-5xl font-light text-desaturated-teal mb-2">Bespoke</div>
                                    <div className="data-label text-[10px] opacity-40 uppercase font-bold tracking-widest">Growth Approach</div>
                                </div>
                                <div className="border-x border-border-subtle">
                                    <div className="text-5xl font-light text-desaturated-teal mb-2">100%</div>
                                    <div className="data-label text-[10px] opacity-40 uppercase font-bold tracking-widest">Growth Focused</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-light text-desaturated-teal mb-2">Small</div>
                                    <div className="data-label text-[10px] opacity-40 uppercase font-bold tracking-widest">Bespoke Team</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="p-8 md:p-32 max-w-screen-2xl mx-auto border-x border-border-subtle bg-deep-charcoal text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto relative z-10"
                    >
                        <div className="data-label text-desaturated-teal mb-10 text-xs tracking-[0.4em] uppercase">Join the Elite</div>
                        <h2 className="text-5xl md:text-7xl font-light mb-12 tracking-tighter">Your partner in <span className="text-desaturated-teal font-semibold">Amazon growth.</span></h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link href="/management" className="bg-white text-deep-charcoal px-16 py-6 font-bold uppercase tracking-widest text-[10px] hover:bg-white/90 transition-all rounded-sm">
                                Discover Our Blueprint
                            </Link>
                            <Link href="/contact" className="border border-white/20 text-white px-16 py-6 font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all duration-300">
                                Get In Touch
                            </Link>
                        </div>
                    </motion.div>
                </section>
            </main>
        </div>
    );
}
