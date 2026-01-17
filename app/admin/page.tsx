'use client';

import { useEffect, useState } from 'react';
import { collection, getCountFromServer } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Users, FileText, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
    const [leadsCount, setLeadsCount] = useState<number | null>(null);

    useEffect(() => {
        async function fetchStats() {
            try {
                const coll = collection(db, "leads");
                const snapshot = await getCountFromServer(coll);
                setLeadsCount(snapshot.data().count);
            } catch (error) {
                console.error("Error fetching stats:", error);
            }
        }
        fetchStats();
    }, []);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-heading font-medium text-deep-charcoal mb-2">Dashboard</h1>
                <p className="text-deep-charcoal/60">Overview of your agency&apos;s performance.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Leads Card */}
                <div className="bg-white p-6 rounded-lg border border-border-subtle shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 bg-desaturated-teal/10 rounded-sm flex items-center justify-center">
                            <Users className="w-5 h-5 text-desaturated-teal" />
                        </div>
                        {leadsCount !== null && (
                            <span className="text-xs font-mono bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                +LIVE
                            </span>
                        )}
                    </div>
                    <div className="text-4xl font-light text-deep-charcoal mb-1">
                        {leadsCount === null ? '-' : leadsCount}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-deep-charcoal/40">
                        Total Leads
                    </div>
                </div>

                {/* Blogs Card (Placeholder) */}
                <div className="bg-white p-6 rounded-lg border border-border-subtle shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 bg-purple-50 rounded-sm flex items-center justify-center">
                            <FileText className="w-5 h-5 text-purple-600" />
                        </div>
                    </div>
                    <div className="text-4xl font-light text-deep-charcoal mb-1">
                        1
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-deep-charcoal/40">
                        Published Posts
                    </div>
                </div>

                {/* Analytics CTA */}
                <div className="bg-white p-6 rounded-lg border border-border-subtle shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="text-sm font-semibold text-deep-charcoal mb-2">Analytics</div>
                        <p className="text-xs text-deep-charcoal/60 mb-4">
                            For detailed traffic reports, connect Google Analytics 4.
                        </p>
                    </div>
                    <Link
                        href="https://analytics.google.com/"
                        target="_blank"
                        className="text-xs font-bold text-desaturated-teal uppercase tracking-widest flex items-center gap-2 hover:opacity-80"
                    >
                        Open Analytics <ArrowUpRight className="w-3 h-3" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
