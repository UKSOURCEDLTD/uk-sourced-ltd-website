'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import {
    LayoutDashboard,
    Users,
    FileText,
    Image as ImageIcon,
    LogOut,
    ExternalLink
} from 'lucide-react';
import clsx from 'clsx';

export default function AdminSidebar() {
    const pathname = usePathname();

    const links = [
        { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
        { href: '/admin/leads', label: 'Leads', icon: Users },
        { href: '/admin/blogs', label: 'Blog Posts', icon: FileText },
        { href: '/admin/media', label: 'Media Library', icon: ImageIcon },
        { href: '/admin/images', label: 'Site Images', icon: ImageIcon },
    ];

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-64 bg-deep-charcoal text-white flex flex-col z-50">
            <div className="p-6 border-b border-white/10">
                <span className="font-heading font-medium tracking-[0.2em] text-lg">
                    UK SOURCED
                </span>
                <span className="block text-[10px] font-mono opacity-50 uppercase tracking-widest mt-1">Admin Panel</span>
            </div>

            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {links.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(
                                "flex items-center gap-3 px-4 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all",
                                isActive
                                    ? "bg-desaturated-teal text-white"
                                    : "text-white/60 hover:bg-white/5 hover:text-white"
                            )}
                        >
                            <Icon className="w-4 h-4" />
                            {link.label}
                        </Link>
                    )
                })}
            </nav>

            <div className="p-4 border-t border-white/10 space-y-2">
                <Link
                    href="/"
                    target="_blank"
                    className="flex items-center gap-3 px-4 py-3 rounded-sm text-xs font-bold uppercase tracking-wider text-white/40 hover:text-white transition-colors"
                >
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                </Link>
                <button
                    onClick={() => signOut(auth)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-sm text-xs font-bold uppercase tracking-wider text-red-400 hover:bg-red-400/10 transition-colors"
                >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                </button>
            </div>
        </aside>
    );
}
