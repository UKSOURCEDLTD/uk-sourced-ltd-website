'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import AdminLogin from '@/components/admin/AdminLogin';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { Loader2 } from 'lucide-react';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-soft-bg">
                <Loader2 className="w-8 h-8 text-desaturated-teal animate-spin" />
            </div>
        );
    }

    if (!user) {
        return <AdminLogin />;
    }

    return (
        <div className="min-h-screen bg-soft-bg pl-64">
            <AdminSidebar />
            <main className="p-8">
                {children}
            </main>
        </div>
    );
}
