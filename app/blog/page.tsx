'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    featuredImage?: string;
    createdAt: any;
}

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                // Fetch published posts
                const q = query(
                    collection(db, 'blog_posts'),
                    // where('status', '==', 'published'), // Uncomment when real data is seeded and status is consistent
                    orderBy('createdAt', 'desc')
                );
                const snapshot = await getDocs(q);
                const fetchedPosts = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as BlogPost[];
                setPosts(fetchedPosts);
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    return (
        <main>
            <section className="border-b border-border-subtle overflow-hidden">
                <div className="max-w-screen-2xl mx-auto px-8 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-7 space-y-10">
                        <div className="flex items-center gap-4">
                            <span className="data-label text-desaturated-teal">Featured Insights</span>
                            <span className="w-12 h-[1px] bg-border-subtle"></span>
                            <span className="data-label">Strategy</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-light leading-tight text-deep-charcoal">
                            Winning on <br />
                            <span className="font-semibold italic">Amazon in 2026</span>
                        </h1>
                        <p className="text-xl text-deep-charcoal/60 max-w-xl">
                            We're building the next generation of fulfillment strategies. Learn how decentralised networks and smarter routing are changing the game for UK sellers.
                        </p>
                        <div className="flex items-center gap-8 pt-6">
                            <div className="flex flex-col">
                                <span className="data-label !text-[8px] opacity-40">READ TIME</span>
                                <span className="font-mono text-xs font-bold">12 MIN</span>
                            </div>
                            <div className="w-[1px] h-8 bg-border-subtle"></div>
                            <div className="flex flex-col">
                                <span className="data-label !text-[8px] opacity-40">CATEGORY</span>
                                <span className="font-mono text-xs font-bold">LOGISTICS</span>
                            </div>
                            <Link href="#" className="bg-deep-charcoal text-white px-10 py-5 font-bold uppercase tracking-widest text-[11px] rounded-sm hover:bg-desaturated-teal transition-all flex items-center gap-4">
                                Read Article
                                <span className="material-symbols-outlined text-sm">arrow_outward</span>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:col-span-5 relative group">
                        <div className="aspect-square bg-white p-4 border border-border-subtle shadow-2xl shadow-black/5 overflow-hidden">
                            <img
                                alt="Modern Abstract Visual"
                                className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-1000"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfigwmoRZmNFL23ceYUbc9gUxdKZn9BBCPoTJyzLaXcZykpVU-kb7Iz8e5IYp0yv6aUcStpKuvx_rKqFckfTLm0f0aimyPfbpShz1NcKJgAX621uekZG89h-pKbMQsV_0wQI7wc6x-u3fXBatcxSuRm4Z-n9_NU28iTpM-Hiq_1uNi2IZcQrmbX_6GOW7hAojSsnbGGUlgAa0Bl2_dtBlKGnCkufBRAQv4MQoS00fsXR-TFSpeWLHlF_9uC-xBB0xwD9pKcqzv2myM"
                            />
                        </div>
                        <div className="absolute -top-4 -right-4 w-32 h-32 border-t border-r border-desaturated-teal/30 pointer-events-none"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b border-l border-desaturated-teal/30 pointer-events-none"></div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-8 max-w-screen-2xl mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <div className="data-label mb-4">Latest Updates</div>
                        <h2 className="text-4xl font-semibold">Newest Insights</h2>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-6 py-2 text-[10px] font-mono border border-desaturated-teal text-desaturated-teal rounded-full hover:bg-desaturated-teal hover:text-white transition-all">VIEW_ALL</button>
                        <button className="px-6 py-2 text-[10px] font-mono border border-border-subtle text-deep-charcoal/40 rounded-full hover:border-deep-charcoal transition-all">FBA_TIPS</button>
                        <button className="px-6 py-2 text-[10px] font-mono border border-border-subtle text-deep-charcoal/40 rounded-full hover:border-deep-charcoal transition-all">SEARCH_SECRETS</button>
                    </div>
                </div>

                {loading ? (
                    <div className="min-h-[400px] flex items-center justify-center">
                        <Loader2 className="w-8 h-8 animate-spin text-desaturated-teal" />
                    </div>
                ) : posts.length === 0 ? (
                    <div className="text-center py-20 border border-border-subtle rounded-lg bg-soft-bg/50">
                        <p className="text-deep-charcoal/60">No articles published yet.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[340px]">
                        {posts.map((post) => (
                            <Link key={post.id} href={`/blog/${post.id}`} className="bento-article group block h-full">
                                <div className="space-y-4 h-full flex flex-col">
                                    <div className="flex justify-between items-start">
                                        <span className="data-label text-desaturated-teal">{post.category || 'Opinion'}</span>
                                    </div>
                                    <h3 className="text-xl font-medium group-hover:text-desaturated-teal transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-deep-charcoal/50 text-xs line-clamp-3 flex-grow">
                                        {post.excerpt || 'Read the full article for more insights into this topic.'}
                                    </p>

                                    <div className="flex justify-between items-center border-t border-border-subtle pt-4 mt-auto">
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-[9px] font-bold">{post.readTime || '5 MIN'}</span>
                                        </div>
                                        <span className="material-symbols-outlined text-border-subtle group-hover:text-desaturated-teal transition-colors text-lg">arrow_right_alt</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>

            <section className="border-y border-border-subtle bg-white">
                <div className="max-w-screen-2xl mx-auto px-8 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="max-w-md">
                        <h2 className="text-2xl font-bold mb-3 tracking-tight text-deep-charcoal">Get Weekly Tips</h2>
                        <p className="text-sm text-deep-charcoal/60">Join over 5,000 sellers receiving our best Amazon advice and market alerts every Tuesday.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                        <div className="relative min-w-[320px]">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-sm opacity-30">alternate_email</span>
                            <input className="w-full bg-soft-bg border-border-subtle focus:ring-1 focus:ring-desaturated-teal focus:border-desaturated-teal text-[10px] font-mono py-4 pl-12 pr-4 transition-all" placeholder="YOUR EMAIL ADDRESS" type="email" />
                        </div>
                        <button className="bg-deep-charcoal text-white font-bold px-12 py-4 hover:bg-desaturated-teal transition-all uppercase tracking-[0.2em] text-[11px] rounded-sm whitespace-nowrap">
                            Join the List
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
