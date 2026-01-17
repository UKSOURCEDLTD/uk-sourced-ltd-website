'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users } from 'lucide-react';

import { createPortal } from 'react-dom';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    calendlyUrl?: string;
}

export default function BookingModal({
    isOpen,
    onClose,
    calendlyUrl = 'https://calendly.com/enquiries-uksourcedltd/30min',
}: BookingModalProps) {
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

    if (!mounted) return null;

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
                        className="fixed inset-0 z-[100] bg-deep-charcoal/20 backdrop-blur-sm"
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
                                        <Calendar className="w-6 h-6 text-desaturated-teal" />
                                        <h2 className="text-3xl font-semibold text-deep-charcoal">
                                            Book Your Discovery Call
                                        </h2>
                                    </div>
                                    <p className="text-sm text-deep-charcoal/60 font-sans ml-9">
                                        Schedule a consultation with our Amazon growth experts
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
                            <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[600px]">
                                {/* Left Sidebar - Benefits */}
                                <div className="p-4 sm:p-6 lg:p-8 bg-soft-bg/40 border-b lg:border-b-0 lg:border-r border-border-subtle overflow-y-auto max-h-[300px] lg:max-h-none">
                                    <div className="data-label mb-4 sm:mb-6 text-desaturated-teal">
                                        What to Expect
                                    </div>

                                    <div className="space-y-4 sm:space-y-6">
                                        <div className="flex gap-3 sm:gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-sm bg-desaturated-teal/10 flex items-center justify-center">
                                                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-desaturated-teal" />
                                            </div>
                                            <div className="min-w-0">
                                                <h3 className="font-semibold mb-1 text-deep-charcoal text-sm sm:text-base">30-Minute Session</h3>
                                                <p className="text-xs sm:text-sm text-deep-charcoal/70">
                                                    Detailed discussion about your Amazon business goals and challenges
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-3 sm:gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-sm bg-desaturated-teal/10 flex items-center justify-center">
                                                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-desaturated-teal" />
                                            </div>
                                            <div className="min-w-0">
                                                <h3 className="font-semibold mb-1 text-deep-charcoal text-sm sm:text-base">Expert Consultation</h3>
                                                <p className="text-xs sm:text-sm text-deep-charcoal/70">
                                                    Meet with our senior Amazon FBA strategists
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-3 sm:gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-sm bg-desaturated-teal/10 flex items-center justify-center">
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-desaturated-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                                </svg>
                                            </div>
                                            <div className="min-w-0">
                                                <h3 className="font-semibold mb-1 text-deep-charcoal text-sm sm:text-base">Custom Strategy</h3>
                                                <p className="text-xs sm:text-sm text-deep-charcoal/70">
                                                    Receive tailored recommendations for scaling your brand
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 sm:mt-10 p-3 sm:p-4 bg-white border border-border-subtle rounded-sm">
                                        <p className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-deep-charcoal/50 mb-2">
                                            Trusted By
                                        </p>
                                        <p className="text-xs sm:text-sm text-deep-charcoal/70">
                                            <span className="font-semibold text-desaturated-teal">100+</span> High-Growth Amazon Brands
                                        </p>
                                    </div>
                                </div>

                                {/* Right - Calendly Embed */}
                                <div className="lg:col-span-2 relative flex-1 overflow-hidden">
                                    <iframe
                                        src={calendlyUrl}
                                        style={{ border: 0 }}
                                        width="100%"
                                        height="100%"
                                        className="min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] w-full"
                                    />
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
