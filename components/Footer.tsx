import Link from "next/link";
import DynamicImage from "./DynamicImage";

export default function Footer() {
    return (
        <footer className="p-12 border-t border-border-subtle bg-white">
            <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex items-center gap-8">
                    <div className="w-14 h-14 relative group overflow-hidden rounded-sm">
                        <DynamicImage
                            slot="footer_logo"
                            alt="UK Sourced Logo"
                            fill
                            className="object-contain"
                            fallbackSrc="https://placehold.co/100x100/222222/FFFFFF?text=UK"
                        />
                    </div>
                    <div className="text-[10px] font-mono text-deep-charcoal/50 leading-loose uppercase tracking-[0.15em]">
                        © 2026 UK Sourced Ltd. <br />
                        All Rights Reserved.
                    </div>
                </div>
                <div className="flex gap-14 text-[10px] font-mono tracking-[0.2em] uppercase font-bold text-deep-charcoal/40">
                    <Link
                        href="/privacy"
                        className="hover:text-desaturated-teal transition-colors underline decoration-desaturated-teal/20 underline-offset-8"
                    >
                        Privacy
                    </Link>
                    <Link
                        href="/terms"
                        className="hover:text-desaturated-teal transition-colors underline decoration-desaturated-teal/20 underline-offset-8"
                    >
                        Terms
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-desaturated-teal transition-colors underline decoration-desaturated-teal/20 underline-offset-8"
                    >
                        LinkedIn
                    </Link>
                </div>
            </div>
        </footer>
    );
}
