'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime?: string;
    featuredImage?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createdAt: any;
}

interface RelatedPostsProps {
    currentPostId: string;
    category?: string;
}

export default function RelatedPosts({ currentPostId }: RelatedPostsProps) {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRelated() {
            try {
                // Fetch recent posts
                // In a real app we might filter by category, 
                // but for now let's just get the latest 4 and filter out current
                const q = query(
                    collection(db, 'blog_posts'),
                    orderBy('createdAt', 'desc'),
                    limit(4)
                );

                const snapshot = await getDocs(q);
                const fetched: BlogPost[] = [];

                snapshot.forEach(doc => {
                    if (doc.id !== currentPostId) {
                        fetched.push({ id: doc.id, ...doc.data() } as BlogPost);
                    }
                });

                setPosts(fetched.slice(0, 3));
            } catch (error) {
                console.error("Error fetching related posts:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchRelated();
    }, [currentPostId]);

    if (loading) return null;
    if (posts.length === 0) return null;

    return (
        <section className="py-24 border-t border-border-subtle bg-soft-bg/30">
            <div className="max-w-screen-xl mx-auto px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="data-label text-desaturated-teal mb-2 block">Keep Reading</span>
                        <h2 className="text-3xl font-heading font-medium text-deep-charcoal">Related Insights</h2>
                    </div>
                    <Link href="/blog" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-deep-charcoal/60 hover:text-desaturated-teal transition-colors">
                        View All Articles <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map(post => (
                        <Link key={post.id} href={`/blog/${post.slug || post.id}`} className="group block">
                            <div className="aspect-[4/3] bg-white border border-border-subtle overflow-hidden relative mb-6">
                                {post.featuredImage && (
                                    <Image
                                        src={post.featuredImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                )}
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest">
                                    <span className="text-desaturated-teal font-bold">{post.category || 'Opinion'}</span>
                                    <span className="w-1 h-1 bg-deep-charcoal/20 rounded-full"></span>
                                    <span className="text-deep-charcoal/40">{post.readTime || '5 MIN READ'}</span>
                                </div>
                                <h3 className="text-xl font-heading font-medium text-deep-charcoal group-hover:text-desaturated-teal transition-colors leading-snug">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-deep-charcoal/60 line-clamp-2 leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-deep-charcoal/60 hover:text-desaturated-teal transition-colors">
                        View All Articles <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
