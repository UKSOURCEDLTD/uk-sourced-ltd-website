'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Activity, Globe, Shield } from 'lucide-react';
import { createPortal } from 'react-dom';
import DynamicImage from './DynamicImage';

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    imageSlot: string;
    imageAlt: string;
    fallbackSrc: string;
    bio: string;
    fullBio: string[];
    stats: { label: string; value: string }[];
    meta: {
        clearance: string;
        specialization: string;
        location: string;
    };
}

interface BioModalProps {
    isOpen: boolean;
    onClose: () => void;
    member: TeamMember | null;
}

export default function BioModal({
    isOpen,
    onClose,
    member,
}: BioModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!mounted || !member) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] bg-deep-charcoal/40 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="relative w-full max-w-5xl bg-white rounded-lg shadow-2xl pointer-events-auto border border-border-subtle flex flex-col max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-8 border-b border-border-subtle bg-soft-bg/30">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <User className="w-6 h-6 text-desaturated-teal" />
                                        <h2 className="text-3xl font-semibold text-deep-charcoal">
                                            Personnel_File
                                        </h2>
                                    </div>
                                    <p className="text-sm text-deep-charcoal/60 font-sans ml-9 font-mono">
                                        ID: {member.id.toUpperCase()} // ACCESS_GRANTED
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-3 rounded-sm hover:bg-white transition-colors group ml-4"
                                    aria-label="Close modal"
                                >
                                    <X className="w-6 h-6 text-deep-charcoal/60 group-hover:text-deep-charcoal transition-colors" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] overflow-hidden">
                                {/* Left Sidebar - Profile & Stats */}
                                <div className="lg:col-span-4 p-6 lg:p-8 bg-soft-bg/40 border-b lg:border-b-0 lg:border-r border-border-subtle overflow-y-auto">
                                    <div className="aspect-square w-32 h-32 relative mb-6 rounded-full overflow-hidden border-2 border-border-subtle mx-auto lg:mx-0">
                                        <DynamicImage
                                            slot={member.imageSlot}
                                            alt={member.imageAlt}
                                            fill
                                            className="object-cover grayscale"
                                            fallbackSrc={member.fallbackSrc}
                                        />
                                    </div>

                                    <h3 className="text-2xl font-semibold mb-1 ">{member.name}</h3>
                                    <p className="text-sm text-desaturated-teal font-mono mb-8 uppercase tracking-wider">{member.role}</p>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <Shield className="w-5 h-5 text-desaturated-teal shrink-0 mt-0.5" />
                                            <div>
                                                <div className="text-[10px] font-mono text-deep-charcoal/40 uppercase tracking-widest mb-1">Clearance</div>
                                                <div className="font-semibold text-sm">{member.meta.clearance}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <Activity className="w-5 h-5 text-desaturated-teal shrink-0 mt-0.5" />
                                            <div>
                                                <div className="text-[10px] font-mono text-deep-charcoal/40 uppercase tracking-widest mb-1">Specialization</div>
                                                <div className="font-semibold text-sm">{member.meta.specialization}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <Globe className="w-5 h-5 text-desaturated-teal shrink-0 mt-0.5" />
                                            <div>
                                                <div className="text-[10px] font-mono text-deep-charcoal/40 uppercase tracking-widest mb-1">Operating_Base</div>
                                                <div className="font-semibold text-sm">{member.meta.location}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-border-subtle grid grid-cols-2 gap-4">
                                        {member.stats.map((stat, i) => (
                                            <div key={i}>
                                                <div className="text-2xl font-bold text-deep-charcoal">{stat.value}</div>
                                                <div className="text-[10px] text-deep-charcoal/50 uppercase tracking-wider">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right - Bio Content */}
                                <div className="lg:col-span-8 p-6 lg:p-12 overflow-y-auto max-h-[60vh] lg:max-h-[600px] bg-white">
                                    <div className="max-w-3xl">
                                        <div className="data-label text-desaturated-teal mb-6">Subject_Archive // Biography</div>
                                        <div className="prose prose-lg text-deep-charcoal/80 font-light space-y-6">
                                            {member.fullBio.map((paragraph, idx) => (
                                                <p key={idx} className="leading-relaxed">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
