'use client';

import { useEffect, useState } from 'react';
import { collection, query, orderBy, getDocs, Timestamp, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Loader2, Mail, Phone, Eye, Trash2, AlertTriangle } from 'lucide-react';
import LeadDetailsModal from './LeadDetailsModal';

interface Lead {
    id: string;
    name: string;
    email: string;
    phone: string;
    storefrontUrl?: string; // Optional since it might not be in all leads
    projectDetails: string;
    createdAt: Timestamp;
    status: string;
    source?: string;
}

export default function LeadsPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    // Deletion State
    const [leadToDelete, setLeadToDelete] = useState<string | null>(null);

    useEffect(() => {
        fetchLeads();
    }, []);

    async function fetchLeads() {
        setLoading(true);
        try {
            const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(q);
            const leadsData: Lead[] = [];
            querySnapshot.forEach((doc) => {
                leadsData.push({ id: doc.id, ...doc.data() } as Lead);
            });
            setLeads(leadsData);
        } catch (error) {
            console.error("Error fetching leads:", error);
        } finally {
            setLoading(false);
        }
    }

    const handleDeleteClick = (id: string) => {
        setLeadToDelete(id);
    };

    const confirmDelete = async () => {
        if (!leadToDelete) return;
        try {
            await deleteDoc(doc(db, "leads", leadToDelete));
            // Optimistic update
            setLeads(leads.filter(lead => lead.id !== leadToDelete));
            setLeadToDelete(null);
        } catch (error) {
            console.error("Error deleting lead:", error);
            alert("Failed to delete lead.");
        }
    };

    const handleViewClick = (lead: Lead) => {
        setSelectedLead(lead);
        setIsDetailsOpen(true);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center p-12">
                <Loader2 className="w-6 h-6 animate-spin text-desaturated-teal" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-heading font-medium text-deep-charcoal">Leads & Inquiries</h1>
                    <p className="text-sm text-deep-charcoal/60">Manage your incoming contact requests.</p>
                </div>
            </div>

            <div className="bg-white rounded-lg border border-border-subtle shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-soft-bg border-b border-border-subtle text-[10px] font-bold uppercase tracking-widest text-deep-charcoal/50">
                                <th className="p-4">Name</th>
                                <th className="p-4">Contact Info</th>
                                <th className="p-4">Project Details</th>
                                <th className="p-4">Date</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-subtle">
                            {leads.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="p-8 text-center text-deep-charcoal/40 text-sm">
                                        No leads found yet.
                                    </td>
                                </tr>
                            ) : (
                                leads.map((lead) => (
                                    <tr key={lead.id} className="hover:bg-soft-bg/50 transition-colors group">
                                        <td className="p-4 text-sm font-medium text-deep-charcoal">
                                            {lead.name}
                                        </td>
                                        <td className="p-4">
                                            <div className="flex flex-col gap-1 text-sm text-deep-charcoal/80">
                                                <div className="flex items-center gap-2">
                                                    <Mail className="w-3 h-3 text-deep-charcoal/40" />
                                                    {lead.email}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Phone className="w-3 h-3 text-deep-charcoal/40" />
                                                    {lead.phone}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 text-sm text-deep-charcoal/70 max-w-xs truncate">
                                            {lead.projectDetails}
                                        </td>
                                        <td className="p-4 text-xs font-mono text-deep-charcoal/60 whitespace-nowrap">
                                            {lead.createdAt?.toDate().toLocaleDateString() || 'N/A'} <br />
                                            <span className="opacity-50">{lead.createdAt?.toDate().toLocaleTimeString() || ''}</span>
                                        </td>
                                        <td className="p-4">
                                            <span className="inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-wide bg-blue-50 text-blue-600 rounded-sm border border-blue-100">
                                                {lead.status || 'NEW'}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => handleViewClick(lead)}
                                                    className="p-2 text-deep-charcoal/60 hover:text-desaturated-teal hover:bg-desaturated-teal/10 rounded-sm transition-colors"
                                                    title="View Details"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteClick(lead.id)}
                                                    className="p-2 text-deep-charcoal/60 hover:text-red-500 hover:bg-red-50 rounded-sm transition-colors"
                                                    title="Delete Lead"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <LeadDetailsModal
                isOpen={isDetailsOpen}
                onClose={() => setIsDetailsOpen(false)}
                lead={selectedLead}
            />

            {/* Delete Confirmation Modal */}
            {leadToDelete && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-deep-charcoal/60 backdrop-blur-sm">
                    <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full border border-border-subtle animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex items-center gap-3 text-red-500 mb-4">
                            <AlertTriangle className="w-6 h-6" />
                            <h3 className="text-lg font-bold text-deep-charcoal">Delete Lead?</h3>
                        </div>
                        <p className="text-deep-charcoal/70 text-sm mb-6 leading-relaxed">
                            Are you sure you want to delete this lead? This action cannot be undone.
                        </p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setLeadToDelete(null)}
                                className="px-4 py-2 text-sm font-medium text-deep-charcoal hover:bg-soft-bg rounded-sm transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 text-sm font-medium bg-red-500 text-white hover:bg-red-600 rounded-sm shadow-lg shadow-red-500/20 transition-all"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

