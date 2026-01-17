"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import BookingModal from "./BookingModal";
import BookingButton from "./BookingButton";

export default function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const links = [
        { href: "/wholesale", label: "Wholesale" },
        { href: "/management", label: "Management" },
        { href: "/consulting", label: "Consulting" },
        { href: "/blog", label: "Blog" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 w-full z-50 bg-soft-bg/90 backdrop-blur-xl border-b border-border-subtle px-8 py-5">
            <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
                <Link href="/" className="flex items-center gap-6 group">
                    <span className="text-deep-charcoal font-heading font-medium tracking-[0.25em] text-lg group-hover:text-desaturated-teal transition-colors">
                        UK SOURCED LTD
                    </span>
                    <span className="hidden lg:inline text-[10px] font-mono text-deep-charcoal/60 uppercase tracking-widest border border-border-subtle px-3 py-1 rounded-full">
                        Amazon Premier Partner
                    </span>
                </Link>
                <nav className="hidden md:flex gap-8 lg:gap-10 text-[12px] font-medium tracking-widest uppercase items-center">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(
                                "transition-colors hover:text-desaturated-teal",
                                pathname === link.href
                                    ? "text-desaturated-teal font-semibold"
                                    : "text-deep-charcoal"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <BookingButton
                        onClick={() => setIsBookingModalOpen(true)}
                        size="sm"
                    />
                </nav>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={clsx("w-6 h-0.5 bg-deep-charcoal transition-all", mobileMenuOpen && "rotate-45 translate-y-2")}></span>
                    <span className={clsx("w-6 h-0.5 bg-deep-charcoal transition-all", mobileMenuOpen && "opacity-0")}></span>
                    <span className={clsx("w-6 h-0.5 bg-deep-charcoal transition-all", mobileMenuOpen && "-rotate-45 -translate-y-2")}></span>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={clsx(
                    "md:hidden absolute left-0 right-0 top-full bg-white border-b border-border-subtle transition-all duration-300 overflow-hidden",
                    mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <nav className="flex flex-col p-8 gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={clsx(
                                "text-sm font-medium tracking-widest uppercase transition-colors py-2 border-b border-border-subtle",
                                pathname === link.href
                                    ? "text-desaturated-teal font-semibold"
                                    : "text-deep-charcoal hover:text-desaturated-teal"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button
                        onClick={() => {
                            setMobileMenuOpen(false);
                            setIsBookingModalOpen(true);
                        }}
                        className="bg-desaturated-teal text-white px-8 py-4 font-semibold rounded-sm uppercase tracking-widest text-xs mt-4 hover:opacity-90 transition-all"
                    >
                        📅 Book Discovery Call
                    </button>
                </nav>
            </div>

            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
            />
        </header>
    );
}
