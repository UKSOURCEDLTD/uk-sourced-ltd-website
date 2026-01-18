import { X, Calendar, User, Mail, Phone, Globe, Target, Hash } from 'lucide-react';
import { Timestamp } from 'firebase/firestore';

interface Lead {
    id: string;
    name: string;
    email: string;
    phone: string;
    storefrontUrl?: string; // Added strictly if available
    projectDetails: string;
    createdAt: Timestamp;
    status: string;
    source?: string;
}

interface LeadDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    lead: Lead | null;
}

export default function LeadDetailsModal({ isOpen, onClose, lead }: LeadDetailsModalProps) {
    if (!isOpen || !lead) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-charcoal/60 backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-border-subtle animate-in fade-in zoom-in-95 duration-200">
                <div className="flex justify-between items-center p-6 border-b border-border-subtle bg-soft-bg/30 sticky top-0 bg-white/95 backdrop-blur z-10">
                    <div>
                        <h2 className="text-xl font-heading font-semibold text-deep-charcoal">Lead Details</h2>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs font-mono text-deep-charcoal/40 uppercase tracking-widest">ID: {lead.id.slice(0, 8)}...</span>
                            <span className="px-2 py-0.5 bg-desaturated-teal/10 text-desaturated-teal text-[10px] font-bold uppercase tracking-wider rounded-sm border border-desaturated-teal/20">
                                {lead.status || 'NEW'}
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-black/5 rounded-full transition-colors text-deep-charcoal/50 hover:text-deep-charcoal"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-8 space-y-8">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-deep-charcoal/40 mb-4 border-b border-border-subtle pb-2">Contact Info</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-soft-bg rounded-sm text-desaturated-teal">
                                    <User className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-deep-charcoal/50 mb-0.5">Full Name</p>
                                    <p className="font-medium text-deep-charcoal">{lead.name}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-soft-bg rounded-sm text-desaturated-teal">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-deep-charcoal/50 mb-0.5">Email Address</p>
                                    <a href={`mailto:${lead.email}`} className="font-medium text-deep-charcoal hover:text-desaturated-teal transition-colors break-all">
                                        {lead.email}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-soft-bg rounded-sm text-desaturated-teal">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-deep-charcoal/50 mb-0.5">Phone Number</p>
                                    <a href={`tel:${lead.phone}`} className="font-medium text-deep-charcoal hover:text-desaturated-teal transition-colors">
                                        {lead.phone}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-soft-bg rounded-sm text-desaturated-teal">
                                    <Calendar className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-deep-charcoal/50 mb-0.5">Submission Date</p>
                                    <p className="font-medium text-deep-charcoal">
                                        {lead.createdAt?.toDate().toLocaleString(undefined, {
                                            dateStyle: 'medium',
                                            timeStyle: 'short'
                                        }) || 'N/A'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Business Details */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-deep-charcoal/40 mb-4 border-b border-border-subtle pb-2">Business Details</h3>
                        <div className="space-y-6">
                            {lead.storefrontUrl && (
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-soft-bg rounded-sm text-desaturated-teal">
                                        <Globe className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-wider text-deep-charcoal/50 mb-0.5">Storefront URL</p>
                                        <a href={lead.storefrontUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-desaturated-teal hover:underline break-all">
                                            {lead.storefrontUrl}
                                        </a>
                                    </div>
                                </div>
                            )}

                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-soft-bg rounded-sm text-desaturated-teal">
                                    <Target className="w-4 h-4" />
                                </div>
                                <div className="w-full">
                                    <p className="text-[10px] uppercase tracking-wider text-deep-charcoal/50 mb-1">Goals & Project Details</p>
                                    <div className="bg-soft-bg/50 p-4 rounded-sm border border-border-subtle">
                                        <p className="text-sm leading-relaxed text-deep-charcoal/80 whitespace-pre-wrap">
                                            {lead.projectDetails}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Meta Info */}
                    <div className="bg-soft-bg p-4 rounded-sm border border-border-subtle flex gap-6 text-xs text-deep-charcoal/60 font-mono">
                        <div className="flex items-center gap-2">
                            <Hash className="w-3 h-3 opacity-50" />
                            Source: {lead.source || 'Unknown'}
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-border-subtle bg-soft-bg/30 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-white border border-border-subtle text-deep-charcoal font-medium text-sm rounded-sm hover:bg-soft-bg transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
