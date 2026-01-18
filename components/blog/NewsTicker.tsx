'use client';

import { motion } from 'framer-motion';

interface NewsTickerProps {
    headlines: string[];
}

export default function NewsTicker({ headlines }: NewsTickerProps) {
    if (!headlines || headlines.length === 0) return null;

    // Duplicate headlines to create seamless loop
    const duplicatedHeadlines = [...headlines, ...headlines, ...headlines, ...headlines];

    return (
        <div className="bg-deep-charcoal border-y border-white/10 overflow-hidden py-3 flex items-center relative z-20">
            <div className="bg-desaturated-teal px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white absolute left-0 z-10 hidden md:block">
                Latest Updates
            </div>

            <div className="flex overflow-hidden w-full mask-linear-gradient">
                <motion.div
                    className="flex items-center gap-12 whitespace-nowrap pl-4 md:pl-32"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear"
                        }
                    }}
                >
                    {duplicatedHeadlines.map((headline, i) => (
                        <div key={i} className="flex items-center gap-4 text-xs font-mono text-white/80">
                            <span className="w-1.5 h-1.5 bg-desaturated-teal rounded-full animate-pulse"></span>
                            {headline}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
