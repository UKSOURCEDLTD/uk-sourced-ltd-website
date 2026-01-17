'use client';

import { useEffect, useState, use } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Image from 'next/image';
import Link from 'next/link';
import { Loader2, ArrowLeft, Calendar, User, Tag } from 'lucide-react';

interface BlogPost {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    category: string;
    author: string;
    readTime?: string;
    featuredImage?: string;
    createdAt: any;
}

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPost() {
            try {
                const docRef = doc(db, 'blog_posts', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setPost({ id: docSnap.id, ...docSnap.data() } as BlogPost);
                } else {
                    setPost(null);
                }
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchPost();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <Loader2 className="w-8 h-8 animate-spin text-desaturated-teal" />
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white p-8 text-center">
                <h1 className="text-3xl font-heading font-medium text-deep-charcoal mb-4">Post not found</h1>
                <p className="text-deep-charcoal/60 mb-8">The article you are looking for does not exist or has been removed.</p>
                <Link href="/blog" className="text-desaturated-teal font-medium hover:underline flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Insights
                </Link>
            </div>
        );
    }

    // Format date
    const dateString = post.createdAt?.seconds
        ? new Date(post.createdAt.seconds * 1000).toLocaleDateString('en-GB', {
            day: 'numeric', month: 'long', year: 'numeric'
        })
        : null;

    return (
        <main className="bg-white min-h-screen pb-24">
            {/* Hero Image */}
            {post.featuredImage && (
                <div className="w-full h-[40vh] md:h-[60vh] relative bg-soft-bg overflow-hidden">
                    <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
            )}

            <article className="max-w-3xl mx-auto px-8 -mt-20 relative z-10">
                <div className="bg-white p-8 md:p-16 border border-border-subtle shadow-xl shadow-black/5">
                    {/* Header */}
                    <header className="mb-12 space-y-6">
                        <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest text-deep-charcoal/60">
                            {post.category && (
                                <span className="text-desaturated-teal font-bold flex items-center gap-2">
                                    <Tag className="w-3 h-3" />
                                    {post.category}
                                </span>
                            )}
                            {dateString && (
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-3 h-3" />
                                    {dateString}
                                </span>
                            )}
                        </div>

                        <h1 className="text-3xl md:text-5xl font-heading font-medium leading-tight text-deep-charcoal">
                            {post.title}
                        </h1>

                        {post.excerpt && (
                            <p className="text-xl text-deep-charcoal/60 leading-relaxed font-light border-l-2 border-desaturated-teal pl-6">
                                {post.excerpt}
                            </p>
                        )}

                        <div className="flex items-center gap-3 pt-4 border-t border-border-subtle">
                            <div className="w-8 h-8 bg-soft-bg rounded-full flex items-center justify-center">
                                <User className="w-4 h-4 text-deep-charcoal/40" />
                            </div>
                            <span className="text-sm font-medium text-deep-charcoal">{post.author || 'UK Sourced Team'}</span>
                        </div>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none text-deep-charcoal/80 prose-headings:font-heading prose-headings:font-medium prose-a:text-desaturated-teal prose-img:rounded-lg">
                        <div className="whitespace-pre-wrap">{post.content}</div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-deep-charcoal/60 hover:text-desaturated-teal transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Return to Insights
                    </Link>
                </div>
            </article>
        </main>
    );
}
