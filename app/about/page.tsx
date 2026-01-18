"use client";

import Link from "next/link";
import DynamicImage from "@/components/DynamicImage";
import { useState } from "react";
import BioModal, { TeamMember } from "@/components/BioModal";

const TEAM_MEMBERS: TeamMember[] = [
    {
        id: "J.THORNE",
        name: "Jameson Thorne",
        role: "Chief Executive Officer",
        imageSlot: "about_team_jameson",
        imageAlt: "Jameson Thorne - CEO",
        fallbackSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqIFsFd_agmGSHxVmqK-v4mdmSqrsYyssWogT_ORWxxJ57pKW1yZofFUQVQAlfhjdjPF6fq1Sl366K8LoKEuvmfw788GC6e4N6wws-MQ7Y8XtHWPHhR7khGkBHzXUoHwW51HafkrEMWQzA0GcmQxXYiIDQ6zUtKAOMLmgGw2e6uM9KqRdIAflDxnUfP0GXznFpfhjv7jkEHq1IqSOwUvb_WP5B5ylE-dY8WBt2D9Ubjk-8E3-UmDuDVc_tXd__B6FuK7iJp187O4-8",
        bio: "Jameson founded UK Sourced Ltd with a vision to bring professional supply chain expertise to the Amazon marketplace. He focuses on building long-term partnerships with brands.",
        fullBio: [
            "Jameson Thorne is the founder and CEO of UK Sourced Ltd. With over a decade of experience in retail supply chains, he identified a need for a more professional, data-driven approach to Amazon account management.",
            "Before founding the company, Jameson worked with major retail conglomerates, optimizing their distribution networks. He applies this 'enterprise-level' discipline to every client account, ensuring stability and growth.",
            "He believes in transparency and direct communication, fostering a culture where client success is the only metric that matters."
        ],
        stats: [
            { label: "Years Experience", value: "12+" },
            { label: "Brands Scaled", value: "50+" }
        ],
        meta: {
            clearance: "Executive",
            specialization: "Strategy",
            location: "London HQ"
        }
    },
    {
        id: "E.VANCE",
        name: "Elena Vance",
        role: "Managing Director",
        imageSlot: "about_team_elena",
        imageAlt: "Elena Vance - Managing Director",
        fallbackSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMojOtwkEtJ3ujJcBlUrO3hCCT0a1Jwg9w6ZUJ84WowfJoHcAo8Hd9Fg4ocqFTOl1UK6oh4uBZVRHzLNX0n10Qn-3ESrGcqLV3q1o6F6pRhJbYFAyuqO_rwT0i5f0ZBEK9wRDxFjMsYSCtwoTMlnKyWrVDdEndD2th5smdNulPbSA529k-W2blBFBWFoVGCDgJwukSfNKKlTdGWvoy-MTGBXeoR4YIcQ__spkmIh6F0ADzwO4YmcvgfvIzRJk-r61wbAXBL_bZ1-UC",
        bio: "Elena ensures our operations run smoothly across all territories. She serves as the primary bridge for our clients expanding into European and US markets.",
        fullBio: [
            "Elena Vance oversees global operations at UK Sourced Ltd. Her expertise lies in navigating the complexities of international trade and ensuring that our clients' expansions are seamless and compliant.",
            "With a background in International Business, Elena manages the critical logistics and compliance aspects of selling on Amazon globally. She works closely with our logistics partners to secure the best rates and routes for our clients.",
            "Elena is dedicated to operational excellence, ensuring that every product journey from factory to customer is efficient and reliable."
        ],
        stats: [
            { label: "Markets Managed", value: "8" },
            { label: "Success Rate", value: "100%" }
        ],
        meta: {
            clearance: "Director",
            specialization: "Operations",
            location: "Global"
        }
    },
    {
        id: "M.CHEN",
        name: "Marcus Chen",
        role: "Head of Data & Analytics",
        imageSlot: "about_team_marcus",
        imageAlt: "Marcus Chen - Head of Data",
        fallbackSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzih8pm2YJ03anOC5NkXi19mf3zdR73shJj0bJPMwNrUKqsdW1XRbVZ7mbVbnA7_n7VxV22k3Nhm6g1ELhMEUl3m6pJPPNiLCKWxVXOQ1-PlYF_iE-oRhO_Oye-se_NycH4l7wBLTqLg1Ix2Bbk00P8pu7J15YwsolUR4nKdR2fUfLViV9879WJkXSkMENgl0bJ0XLEz3fV80trfPnATeHX3CSagv1sSlE4xp-r3wXf-TJyWhg2ncgZfNosVh4yMMmKItW2ImKQ9V4",
        bio: "Marcus leads our analytics team, turning complex marketplace data into clear, actionable strategies for our clients.",
        fullBio: [
            "Marcus Chen leads the data and analytics team. He specializes in interpreting Amazon's complex data points to forecast trends and optimize inventory levels.",
            "Formerly a data analyst in the fintech sector, Marcus brings a rigorous analytical approach to e-commerce. He developed our internal reporting tools that give clients clear visibility into their performance.",
            "Marcus ensures that our strategies are always backed by data, not guesswork. He constantly tests and refines our advertising algorithms to maximize ROI."
        ],
        stats: [
            { label: "Data Analyzed", value: "Daily" },
            { label: "ROI Avg", value: "+25%" }
        ],
        meta: {
            clearance: "Technical",
            specialization: "Analytics",
            location: "London HQ"
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
                            Our Story
                        </div>
                        <h1 className="text-6xl md:text-8xl mb-12 font-light tracking-tighter">
                            Partners in <span className="font-semibold block">Growth</span>
                        </h1>
                        <p className="text-xl max-w-xl text-deep-charcoal/60 leading-relaxed">
                            Founded on the principles of transparency and partnership, we build the relationships that allow brands to flourish in the global marketplace.
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
                            <div className="mt-4 data-label text-[10px] opacity-40">Building Value</div>
                        </div>
                    </div>
                </section>
                <section className="p-8 md:p-24 max-w-screen-2xl mx-auto border-x border-b border-border-subtle bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        <div className="space-y-8">
                            <div className="data-label text-desaturated-teal">Our Mission</div>
                            <h2 className="text-7xl md:text-[100px] font-bold text-deep-charcoal leading-[0.9] tracking-tighter">
                                GROWTH <br /> WITHOUT <br /> COMPROMISE
                            </h2>
                        </div>
                        <div className="flex flex-col justify-end space-y-12">
                            <p className="text-2xl text-deep-charcoal/70 leading-relaxed font-light">
                                Our mission is to be the bridge between great products and the customers who need them, utilizing data, improved listings and account health strategies.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-6 border-t border-border-subtle pt-6">
                                    <span className="font-mono text-desaturated-teal font-bold">01</span>
                                    <div>
                                        <span className="data-label block mb-2">Integrity</span>
                                        <p className="text-sm">We believe in honest, transparent business practices.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-6 border-t border-border-subtle pt-6">
                                    <span className="font-mono text-desaturated-teal font-bold">02</span>
                                    <div>
                                        <span className="data-label block mb-2">Quality</span>
                                        <p className="text-sm">We are committed to maintaining the highest standards for your brand.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-6 border-t border-border-subtle pt-6">
                                    <span className="font-mono text-desaturated-teal font-bold">03</span>
                                    <div>
                                        <span className="data-label block mb-2">Results</span>
                                        <p className="text-sm">We focus on tangible outcomes that drive your business forward.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="p-8 md:p-24 max-w-screen-2xl mx-auto border-x border-b border-border-subtle bg-soft-bg/50 overflow-hidden">
                    <div className="data-label mb-16 text-center">Our Journey</div>
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] dna-line -translate-x-1/2 hidden md:block"></div>
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                            <div className="md:text-right">
                                <div className="font-mono text-3xl text-desaturated-teal mb-2">2018</div>
                                <div className="data-label opacity-40">Founded</div>
                            </div>
                            <div className="md:pl-12">
                                <h3 className="text-xl font-semibold mb-4">The Beginning</h3>
                                <p className="text-sm">UK Sourced Ltd was established with a clear vision: to help UK businesses navigate the complexities of Amazon.</p>
                            </div>
                            <div className="absolute left-1/2 top-2 w-3 h-3 bg-white border-2 border-desaturated-teal rounded-full -translate-x-1/2 hidden md:block"></div>
                        </div>
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                            <div className="md:order-2">
                                <div className="font-mono text-3xl text-desaturated-teal mb-2">2021</div>
                                <div className="data-label opacity-40">Expansion</div>
                            </div>
                            <div className="md:text-right md:pr-12">
                                <h3 className="text-xl font-semibold mb-4">Building Bridges</h3>
                                <p className="text-sm">Expanded our services to include comprehensive wholesale distribution and account management.</p>
                            </div>
                            <div className="absolute left-1/2 top-2 w-3 h-3 bg-white border-2 border-desaturated-teal rounded-full -translate-x-1/2 hidden md:block"></div>
                        </div>
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="md:text-right">
                                <div className="font-mono text-3xl text-desaturated-teal mb-2">Today</div>
                                <div className="data-label opacity-40">Growth Partner</div>
                            </div>
                            <div className="md:pl-12">
                                <h3 className="text-xl font-semibold mb-4">Your Partner</h3>
                                <p className="text-sm">We are proud to be a trusted partner for brands looking to scale on Amazon, offering a full suite of growth services.</p>
                            </div>
                            <div className="absolute left-1/2 top-2 w-3 h-3 bg-desaturated-teal rounded-full -translate-x-1/2 hidden md:block"></div>
                        </div>
                    </div>
                </section>
                <section className="p-8 md:p-24 max-w-screen-2xl mx-auto border-x border-b border-border-subtle bg-white">
                    <div className="flex justify-between items-end mb-20">
                        <div>
                            <div className="data-label text-desaturated-teal mb-4">The Team</div>
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
                                            View Bio
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
                                        Meet {member.name.split(' ')[0]} <span className="material-symbols-outlined text-sm">arrow_forward</span>
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
                            <div className="data-label text-desaturated-teal mb-6">Our Reach</div>
                            <h2 className="text-4xl font-semibold mb-8">UK Based, Globally Minded</h2>
                            <p className="text-deep-charcoal/60 mb-12">Based in the UK, we serve clients and manage operations that span the globe, ensuring your brand reaches its full potential.</p>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b border-border-subtle pb-4">
                                    <span className="font-mono text-sm">Experience</span>
                                    <span className="font-mono font-bold text-desaturated-teal">5+ Years</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-border-subtle pb-4">
                                    <span className="font-mono text-sm">Client Satisfaction</span>
                                    <span className="font-mono font-bold text-desaturated-teal">100%</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-px bg-border-subtle border border-border-subtle">
                            <div className="bg-white p-10 flex flex-col justify-between h-[300px]">
                                <div className="data-label">Headquarters</div>
                                <div>
                                    <div className="text-3xl font-semibold mb-2">UK</div>
                                    <div className="text-[10px] font-mono opacity-40">London</div>
                                </div>
                            </div>
                            <div className="bg-white p-10 flex flex-col justify-between h-[300px]">
                                <div className="data-label">Market Focus</div>
                                <div>
                                    <div className="text-3xl font-semibold mb-2">EUROPE</div>
                                    <div className="text-[10px] font-mono opacity-40">Pan-EU</div>
                                </div>
                            </div>
                            <div className="bg-white p-10 flex flex-col justify-between h-[300px]">
                                <div className="data-label">Growth</div>
                                <div>
                                    <div className="text-3xl font-semibold mb-2">USA</div>
                                    <div className="text-[10px] font-mono opacity-40">Expansion</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="p-8 md:p-32 max-w-screen-2xl mx-auto border-x border-border-subtle bg-deep-charcoal text-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <div className="data-label text-desaturated-teal mb-10">Get Started</div>
                        <h2 className="text-5xl md:text-6xl font-light mb-12">Ready to grow your brand?</h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact" className="bg-desaturated-teal text-white px-12 py-6 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-deep-charcoal transition-all">
                                Partner With Us
                            </Link>
                            <Link href="/wholesale" className="border border-white/20 text-white px-12 py-6 font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
                                View Services
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
