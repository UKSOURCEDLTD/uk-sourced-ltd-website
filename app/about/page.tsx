"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import DynamicImage from "@/components/DynamicImage";
import { useState } from "react";
import BioModal, { TeamMember } from "@/components/BioModal";

const TEAM_MEMBERS: TeamMember[] = [
    {
        id: "J.THORNE",
        name: "Jameson Thorne",
        role: "Chief Executive / Logistics Lead",
        imageSlot: "about_team_jameson",
        imageAlt: "Founder Portrait - Jameson Thorne",
        fallbackSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqIFsFd_agmGSHxVmqK-v4mdmSqrsYyssWogT_ORWxxJ57pKW1yZofFUQVQAlfhjdjPF6fq1Sl366K8LoKEuvmfw788GC6e4N6wws-MQ7Y8XtHWPHhR7khGkBHzXUoHwW51HafkrEMWQzA0GcmQxXYiIDQ6zUtKAOMLmgGw2e6uM9KqRdIAflDxnUfP0GXznFpfhjv7jkEHq1IqSOwUvb_WP5B5ylE-dY8WBt2D9Ubjk-8E3-UmDuDVc_tXd__B6FuK7iJp187O4-8",
        bio: "The architect of the UK Sourced methodology. Jameson spent a decade optimizing supply chains for Fortune 500 retail giants before identifying the critical gap in the Amazon ecosystem: a lack of high-fidelity, data-driven partnership for premium brands.",
        fullBio: [
            "Jameson Thorne is the architect of the UK Sourced methodology. He spent a decade optimizing supply chains for Fortune 500 retail giants before identifying the critical gap in the Amazon ecosystem: a lack of high-fidelity, data-driven partnership for premium brands that prioritizes brand equity over volume churning.",
            "Before founding UK Sourced Ltd, Jameson led the European distribution strategy for a leading consumer electronics conglomerate, where he reduced logistical overhead by 22% while increasing delivery speeds. This experience formed the bedrock of our 'Structure First' philosophy.",
            "He believes that Amazon is not just a marketplace but a rigorous algorithmic environment that rewards precision. His leadership style is defined by this exactness—ensuring that every client account is treated with the same operational discipline as a multinational infrastructure project."
        ],
        stats: [
            { label: "Systems Deployed", value: "142" },
            { label: "Revenue Mgmt", value: "$40M+" }
        ],
        meta: {
            clearance: "L5_Executive",
            specialization: "Macro-Logistics",
            location: "LDN_HQ_Alpha"
        }
    },
    {
        id: "E.VANCE",
        name: "Elena Vance",
        role: "Managing Director / Global Ops",
        imageSlot: "about_team_elena",
        imageAlt: "Founder Portrait - Elena Vance",
        fallbackSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMojOtwkEtJ3ujJcBlUrO3hCCT0a1Jwg9w6ZUJ84WowfJoHcAo8Hd9Fg4ocqFTOl1UK6oh4uBZVRHzLNX0n10Qn-3ESrGcqLV3q1o6F6pRhJbYFAyuqO_rwT0i5f0ZBEK9wRDxFjMsYSCtwoTMlnKyWrVDdEndD2th5smdNulPbSA529k-W2blBFBWFoVGCDgJwukSfNKKlTdGWvoy-MTGBXeoR4YIcQ__spkmIh6F0ADzwO4YmcvgfvIzRJk-r61wbAXBL_bZ1-UC",
        bio: "Elena oversees the intricate web of our cross-border operations. Her expertise lies in navigating the complex regulatory landscapes of the EU and US markets, ensuring friction-free expansion for our partners.",
        fullBio: [
            "Elena Vance oversees the intricate web of our cross-border operations. Her expertise lies in navigating the complex regulatory landscapes of the EU and US markets, ensuring friction-free expansion for our partners. She is the force behind our seamless PAN-EU integration.",
            "With a background in International Trade Law and Operations Management, Elena builds the 'buffers' that protect our clients from compliance risks. She has successfully negotiated direct carrier partnerships that give UK Sourced clients a 15% margin advantage on transatlantic freight.",
            "Elena's directive is 'Global Sync'—the idea that a brand's presence should be uniform, compliant, and optimized regardless of the territory. She manages the operational nodes in Berlin and New York, serving as the central nervous system for our international activities."
        ],
        stats: [
            { label: "Markets Active", value: "08" },
            { label: "Compliance Rate", value: "100%" }
        ],
        meta: {
            clearance: "L4_Director",
            specialization: "Cross-Border Ops",
            location: "Roaming_Node"
        }
    },
    {
        id: "M.CHEN",
        name: "Marcus Chen",
        role: "Technical Director / Data Lead",
        imageSlot: "about_team_marcus",
        imageAlt: "Founder Portrait - Marcus Chen",
        fallbackSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzih8pm2YJ03anOC5NkXi19mf3zdR73shJj0bJPMwNrUKqsdW1XRbVZ7mbVbnA7_n7VxV22k3Nhm6g1ELhMEUl3m6pJPPNiLCKWxVXOQ1-PlYF_iE-oRhO_Oye-se_NycH4l7wBLTqLg1Ix2Bbk00P8pu7J15YwsolUR4nKdR2fUfLViV9879WJkXSkMENgl0bJ0XLEz3fV80trfPnATeHX3CSagv1sSlE4xp-r3wXf-TJyWhg2ncgZfNosVh4yMMmKItW2ImKQ9V4",
        bio: "The mind behind our predictive logic. Marcus leverages advanced data modeling to forecast market trends and inventory needs with uncanny accuracy, turning raw data into actionable growth strategies.",
        fullBio: [
            "Marcus Chen is the mind behind our predictive logic. He leverages advanced data modeling to forecast market trends and inventory needs with uncanny accuracy, turning raw data into actionable growth strategies. If Jameson builds the car, Marcus tunes the engine.",
            "Formerly a Senior Data Analyst for a major fintech firm, Marcus pivoted to e-commerce to solve the 'Black Box' problem of Amazon's A9 algorithm. He developed our proprietary 'Pulse' dashboard, which gives clients real-time visibility into their account health and sales velocity.",
            "Marcus leads the R&D division, constantly testing new advertising strategies and keyword algorithms. His philosophy is 'Trust the Code, Verify the Human'—ensuring that every machine-learning insight is validated by commercial intuition before deployment."
        ],
        stats: [
            { label: "Data Points", value: "5T+" },
            { label: "Algorithm Ver", value: "v4.2" }
        ],
        meta: {
            clearance: "L4_Technical",
            specialization: "Predictive Analytics",
            location: "Server_Room_B"
        }
    }
];

export default function AboutPage() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    return (
        <div className="min-h-screen bg-soft-bg grid-lines">
            <main>
                <section className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh] max-w-screen-2xl mx-auto border-x border-border-subtle">
                    <div className="lg:col-span-7 p-8 md:p-24 flex flex-col justify-center border-r border-border-subtle bg-white/40">
                        <div className="mb-8 data-label flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-desaturated-teal"></span>
                            Origin_Sequence
                        </div>
                        <h1 className="text-6xl md:text-8xl mb-12 font-light tracking-tighter">
                            The <span className="font-semibold block">Architecture</span> of Growth
                        </h1>
                        <p className="text-xl max-w-xl text-deep-charcoal/60 leading-relaxed">
                            Founded on the principles of structural integrity and technical precision, we build the frameworks that allow brands to dominate the global marketplace.
                        </p>
                    </div>
                    <div className="lg:col-span-5 relative flex items-center justify-center bg-white p-12 overflow-hidden">
                        <div className="absolute inset-0 grid-lines opacity-40"></div>
                        <div className="relative w-full aspect-[4/5] bg-white pedestal-shadow border border-border-subtle flex flex-col items-center justify-center p-12 group">
                            <DynamicImage
                                slot="about_hero_structure"
                                alt="Abstract Crystalline Structure"
                                fill
                                className="object-cover grayscale opacity-90 transition-transform duration-1000 group-hover:scale-105"
                                fallbackSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBfigwmoRZmNFL23ceYUbc9gUxdKZn9BBCPoTJyzLaXcZykpVU-kb7Iz8e5IYp0yv6aUcStpKuvx_rKqFckfTLm0f0aimyPfbpShz1NcKJgAX621uekZG89h-pKbMQsV_0wQI7wc6x-u3fXBatcxSuRm4Z-n9_NU28iTpM-Hiq_1uNi2IZcQrmbX_6GOW7hAojSsnbGGUlgAa0Bl2_dtBlKGnCkufBRAQv4MQoS00fsXR-TFSpeWLHlF_9uC-xBB0xwD9pKcqzv2myM"
                            />
                            <div className="mt-12 w-32 h-[1px] bg-desaturated-teal/20"></div>
                            <div className="mt-4 data-label text-[10px] opacity-40">Model: STR-01_Growth</div>
                        </div>
                    </div>
                </section>
                <section className="p-8 md:p-24 max-w-screen-2xl mx-auto border-x border-b border-border-subtle bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        <div className="space-y-8">
                            <div className="data-label text-desaturated-teal">Directive 01 // Mission</div>
                            <h2 className="text-7xl md:text-[120px] font-bold text-deep-charcoal leading-[0.9] tracking-tighter">
                                SCALE <br /> WITHOUT <br /> FRICTION
                            </h2>
                        </div>
                        <div className="flex flex-col justify-end space-y-12">
                            <p className="text-2xl text-deep-charcoal/70 leading-relaxed font-light">
                                Our mission is to engineer a seamless bridge between manufacturers and the end-consumer, utilizing data as our primary building material.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-6 border-t border-border-subtle pt-6">
                                    <span className="font-mono text-desaturated-teal font-bold">01</span>
                                    <div>
                                        <span className="data-label block mb-2">Technical Integrity</span>
                                        <p className="text-sm">Maintaining absolute compliance and health across all retail nodes.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-6 border-t border-border-subtle pt-6">
                                    <span className="font-mono text-desaturated-teal font-bold">02</span>
                                    <div>
                                        <span className="data-label block mb-2">Predictive Logic</span>
                                        <p className="text-sm">Deploying AI-driven forecasting to eliminate inventory latency.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-6 border-t border-border-subtle pt-6">
                                    <span className="font-mono text-desaturated-teal font-bold">03</span>
                                    <div>
                                        <span className="data-label block mb-2">Global Sync</span>
                                        <p className="text-sm">Unified management of cross-border logistics and taxation.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="p-8 md:p-24 max-w-screen-2xl mx-auto border-x border-b border-border-subtle bg-soft-bg/50 overflow-hidden">
                    <div className="data-label mb-16 text-center">Company_DNA_Sequencing</div>
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] dna-line -translate-x-1/2 hidden md:block"></div>
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                            <div className="md:text-right">
                                <div className="font-mono text-3xl text-desaturated-teal mb-2">2018.Q4</div>
                                <div className="data-label opacity-40">Incubation</div>
                            </div>
                            <div className="md:pl-12">
                                <h3 className="text-xl font-semibold mb-4">Foundational Logic</h3>
                                <p className="text-sm">UK Sourced Ltd established with a focus on high-fidelity logistics for UK-based manufacturers entering the Amazon ecosystem.</p>
                            </div>
                            <div className="absolute left-1/2 top-2 w-3 h-3 bg-white border-2 border-desaturated-teal rounded-full -translate-x-1/2 hidden md:block"></div>
                        </div>
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                            <div className="md:order-2">
                                <div className="font-mono text-3xl text-desaturated-teal mb-2">2021.Q2</div>
                                <div className="data-label opacity-40">Expansion_Node</div>
                            </div>
                            <div className="md:text-right md:pr-12">
                                <h3 className="text-xl font-semibold mb-4">Continental Bridge</h3>
                                <p className="text-sm">Inauguration of EU fulfillment pathways and automated VAT compliance integration for seamless cross-border trade.</p>
                            </div>
                            <div className="absolute left-1/2 top-2 w-3 h-3 bg-white border-2 border-desaturated-teal rounded-full -translate-x-1/2 hidden md:block"></div>
                        </div>
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="md:text-right">
                                <div className="font-mono text-3xl text-desaturated-teal mb-2">2026.PRESENT</div>
                                <div className="data-label opacity-40">Global_Standard</div>
                            </div>
                            <div className="md:pl-12">
                                <h3 className="text-xl font-semibold mb-4">The Final Protocol</h3>
                                <p className="text-sm">Global deployment of the 2026 Management Suite, offering end-to-end retail partnership for tier-1 brands across three continents.</p>
                            </div>
                            <div className="absolute left-1/2 top-2 w-3 h-3 bg-desaturated-teal rounded-full -translate-x-1/2 hidden md:block"></div>
                        </div>
                    </div>
                </section>
                <section className="p-8 md:p-24 max-w-screen-2xl mx-auto border-x border-b border-border-subtle bg-white">
                    <div className="flex justify-between items-end mb-20">
                        <div>
                            <div className="data-label text-desaturated-teal mb-4">System_Architects</div>
                            <h2 className="text-5xl font-semibold">Leadership</h2>
                        </div>
                        <div className="hidden md:block h-[1px] flex-grow mx-12 bg-border-subtle mb-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {TEAM_MEMBERS.map((member) => (
                            <div key={member.id} className="space-y-6 group cursor-pointer" onClick={() => setSelectedMember(member)}>
                                <div className="aspect-[3/4] bg-soft-bg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 relative">
                                    <DynamicImage
                                        slot={member.imageSlot}
                                        alt={member.imageAlt}
                                        fill
                                        className="object-cover mix-blend-multiply opacity-90"
                                        fallbackSrc={member.fallbackSrc}
                                    />
                                    {/* Hover Overlay Hint */}
                                    <div className="absolute inset-0 bg-deep-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="bg-white/90 backdrop-blur px-4 py-2 text-xs font-mono tracking-widest uppercase">
                                            View_Dossier
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold">{member.name}</h4>
                                    <p className="data-label text-[10px] text-deep-charcoal/40 mb-4">{member.role}</p>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedMember(member);
                                        }}
                                        className="text-desaturated-teal text-[11px] font-mono font-bold tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all"
                                    >
                                        Bio_Protocol <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <BioModal
                        isOpen={!!selectedMember}
                        onClose={() => setSelectedMember(null)}
                        member={selectedMember}
                    />
                </section>
                <section className="p-8 md:p-24 max-w-screen-2xl mx-auto border-x border-b border-border-subtle bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <div className="data-label text-desaturated-teal mb-6">Network_Topology</div>
                            <h2 className="text-4xl font-semibold mb-8">Global Presence</h2>
                            <p className="text-deep-charcoal/60 mb-12">We maintain active operational nodes in the world's most critical retail territories, ensuring low-latency response and localized expertise.</p>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b border-border-subtle pb-4">
                                    <span className="font-mono text-sm">Active Regions</span>
                                    <span className="font-mono font-bold text-desaturated-teal">03</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-border-subtle pb-4">
                                    <span className="font-mono text-sm">Fulfillment Nodes</span>
                                    <span className="font-mono font-bold text-desaturated-teal">14</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-border-subtle pb-4">
                                    <span className="font-mono text-sm">Territory Coverage</span>
                                    <span className="font-mono font-bold text-desaturated-teal">100%</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-px bg-border-subtle border border-border-subtle">
                            <div className="bg-white p-10 flex flex-col justify-between h-[300px]">
                                <div className="data-label">Region_Alpha</div>
                                <div>
                                    <div className="text-3xl font-semibold mb-2">UK</div>
                                    <div className="text-[10px] font-mono opacity-40">Primary_HQ // 51.5° N</div>
                                </div>
                            </div>
                            <div className="bg-white p-10 flex flex-col justify-between h-[300px]">
                                <div className="data-label">Region_Beta</div>
                                <div>
                                    <div className="text-3xl font-semibold mb-2">EUROPE</div>
                                    <div className="text-[10px] font-mono opacity-40">EU_Operations // Berlin Hub</div>
                                </div>
                            </div>
                            <div className="bg-white p-10 flex flex-col justify-between h-[300px]">
                                <div className="data-label">Region_Gamma</div>
                                <div>
                                    <div className="text-3xl font-semibold mb-2">USA</div>
                                    <div className="text-[10px] font-mono opacity-40">Stateside_Growth // NY Node</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="p-8 md:p-32 max-w-screen-2xl mx-auto border-x border-border-subtle bg-deep-charcoal text-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <div className="data-label text-desaturated-teal mb-10">Termination // Engagement</div>
                        <h2 className="text-5xl md:text-6xl font-light mb-12">Ready to implement the protocol?</h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact" className="bg-desaturated-teal text-white px-12 py-6 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-deep-charcoal transition-all">
                                Partner With Us
                            </Link>
                            <Link href="#" className="border border-white/20 text-white px-12 py-6 font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
                                System Audit
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
