'use client';

import { useEffect, useState } from 'react';
import { collection, query, orderBy, getDocs, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Loader2, Mail, Phone, Calendar } from 'lucide-react';

interface Lead {
    id: string;
    name: string;
    email: string;
    phone: string;
    projectDetails: string;
    createdAt: Timestamp;
    status: string;
    source?: string;
}

export default function LeadsPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchLeads() {
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

        fetchLeads();
    }, []);

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
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-subtle">
                            {leads.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="p-8 text-center text-deep-charcoal/40 text-sm">
                                        No leads found yet.
                                    </td>
                                </tr>
                            ) : (
                                leads.map((lead) => (
                                    <tr key={lead.id} className="hover:bg-soft-bg/50 transition-colors">
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
                                        <td className="p-4 text-sm text-deep-charcoal/70 max-w-xs">
                                            {lead.projectDetails}
                                        </td>
                                        <td className="p-4 text-xs font-mono text-deep-charcoal/60 whitespace-nowrap">
                                            {lead.createdAt?.toDate().toLocaleDateString() || 'N/A'} <br />
                                            <span className="opacity-50">{lead.createdAt?.toDate().toLocaleTimeString() || ''}</span>
                                        </td>
                                        <td className="p-4">
                                            <span className="inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-wide bg-blue-50 text-blue-600 rounded-sm">
                                                {lead.status || 'NEW'}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
