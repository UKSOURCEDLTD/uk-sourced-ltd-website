'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, getDocs, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { Plus, Edit2, Trash2, FileText, Loader2, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface BlogPost {
    id: string;
    title: string;
    status: 'draft' | 'published';
    category: string;
    createdAt?: any;
    featuredImage?: string;
}

export default function BlogsPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const q = query(collection(db, 'blog_posts'), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            const loadedPosts = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as BlogPost[];
            setPosts(loadedPosts);
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this post?")) return;

        try {
            await deleteDoc(doc(db, 'blog_posts', id));
            setPosts(prev => prev.filter(post => post.id !== id));
        } catch (error) {
            console.error("Error deleting post:", error);
            alert("Failed to delete post.");
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 className="w-8 h-8 animate-spin text-desaturated-teal" />
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-heading font-medium text-deep-charcoal">Blog Posts</h1>
                    <p className="text-deep-charcoal/60 text-sm mt-1">Manage your articles and insights.</p>
                </div>
                <Link
                    href="/admin/blogs/new"
                    className="bg-deep-charcoal text-white px-6 py-2.5 rounded-lg flex items-center gap-2 font-medium hover:bg-deep-charcoal/90 transition-all shadow-lg shadow-deep-charcoal/10"
                >
                    <Plus className="w-4 h-4" />
                    New Post
                </Link>
            </div>

            {posts.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[400px] bg-white rounded-lg border border-border-subtle p-8 text-center">
                    <div className="w-16 h-16 bg-soft-bg rounded-full flex items-center justify-center mb-6">
                        <FileText className="w-8 h-8 text-deep-charcoal/20" />
                    </div>
                    <h2 className="text-xl font-heading font-medium text-deep-charcoal mb-2">No posts yet</h2>
                    <p className="text-deep-charcoal/60 max-w-sm mb-6">
                        Get started by creating your first blog post to share insights with your audience.
                    </p>
                    <Link
                        href="/admin/blogs/new"
                        className="text-desaturated-teal font-medium hover:underline text-sm"
                    >
                        Create your first post &rarr;
                    </Link>
                </div>
            ) : (
                <div className="bg-white border border-border-subtle rounded-lg overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-soft-bg border-b border-border-subtle">
                                    <th className="px-6 py-4 text-left text-xs font-bold text-deep-charcoal/40 uppercase tracking-wider">Post</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-deep-charcoal/40 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-deep-charcoal/40 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-deep-charcoal/40 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-4 text-right text-xs font-bold text-deep-charcoal/40 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border-subtle">
                                {posts.map((post) => (
                                    <tr key={post.id} className="group hover:bg-soft-bg/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="relative w-12 h-12 rounded bg-soft-bg border border-border-subtle overflow-hidden flex-shrink-0">
                                                    {post.featuredImage ? (
                                                        <Image
                                                            src={post.featuredImage}
                                                            alt=""
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    ) : (
                                                        <FileText className="w-5 h-5 text-deep-charcoal/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                                    )}
                                                </div>
                                                <span className="font-medium text-deep-charcoal max-w-md truncate block">
                                                    {post.title}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`
                                                inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                                                ${post.status === 'published'
                                                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                                    : 'bg-gray-50 text-gray-600 border-gray-200'}
                                            `}>
                                                {post.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm text-deep-charcoal/60">{post.category}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm font-mono text-deep-charcoal/40">
                                                {post.createdAt?.seconds
                                                    ? new Date(post.createdAt.seconds * 1000).toLocaleDateString()
                                                    : '—'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Link
                                                    href={`/admin/blogs/${post.id}`}
                                                    className="p-2 text-deep-charcoal/40 hover:text-desaturated-teal hover:bg-desaturated-teal/5 rounded transition-colors"
                                                    title="Edit"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(post.id)}
                                                    className="p-2 text-deep-charcoal/40 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
