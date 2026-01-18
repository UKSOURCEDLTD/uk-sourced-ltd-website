'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Image from 'next/image';
import { Loader2, ArrowRight, TrendingUp, Tag, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import NewsTicker from '@/components/blog/NewsTicker';

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

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    useEffect(() => {
        async function fetchPosts() {
            try {
                // Fetch published posts
                const q = query(
                    collection(db, 'blog_posts'),
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

    const categories = ['All', 'Strategy', 'Logistics', 'Advertising', 'Market Insights', 'Case Studies'];

    const filteredPosts = selectedCategory === 'All'
        ? posts
        : posts.filter(post => post.category === selectedCategory);

    const featuredPost = filteredPosts[0];
    const mainFeedPosts = filteredPosts.slice(1);

    // Dummy headlines for ticker
    const headlines = [
        "AMAZON FBA FEES UPDATE: New dimensional weight calculations effective June 1st",
        "UK MARKET REPORT: E-commerce growth stabilizes at 4.2% YoY",
        "LOGISTICS ALERT: Royal Mail strikes causing minor delays in northern regions",
        "ADVERTISING STRATEGY: PPC costs drop slightly in Home & Garden category"
    ];

    return (
        <main className="min-h-screen bg-soft-bg">
            <NewsTicker headlines={headlines} />

            {/* Magazine Header */}
            <section className="bg-white border-b border-border-subtle pt-24 pb-12 px-8">
                <div className="max-w-screen-2xl mx-auto text-center">
                    <span className="data-label text-desaturated-teal mb-4 block">UK Sourced Journal</span>
                    <h1 className="text-6xl md:text-9xl font-heading font-medium tracking-tighter text-deep-charcoal mb-6">
                        THE <span className="italic text-desaturated-teal">DISPATCH</span>
                    </h1>
                    <p className="text-lg md:text-xl text-deep-charcoal/60 max-w-2xl mx-auto font-light font-mono">
                        Strategic intelligence for the modern Amazon seller. Logistics, advertising, and brand equity.
                    </p>
                </div>
            </section>

            {/* Category Filter Bar */}
            <div className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-border-subtle px-8 overflow-x-auto">
                <div className="max-w-screen-2xl mx-auto flex items-center justify-center gap-8 min-w-max py-4">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`
                                text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-desaturated-teal
                                ${selectedCategory === cat
                                    ? 'text-desaturated-teal underline decoration-2 underline-offset-4'
                                    : 'text-deep-charcoal/40'}
                            `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <section className="px-8 py-12 max-w-screen-2xl mx-auto">
                {loading ? (
                    <div className="min-h-[400px] flex items-center justify-center">
                        <Loader2 className="w-10 h-10 animate-spin text-desaturated-teal" />
                    </div>
                ) : filteredPosts.length === 0 ? (
                    <div className="text-center py-24">
                        <p className="text-deep-charcoal/40">No insights found in this category.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Main Content Column (Left) */}
                        <div className="lg:col-span-8 space-y-16">
                            {/* Cover Story */}
                            {featuredPost && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="group block relative aspect-[16/10] overflow-hidden bg-deep-charcoal"
                                >
                                    <Link href={`/blog/${featuredPost.slug || featuredPost.id}`}>
                                        {featuredPost.featuredImage && (
                                            <Image
                                                src={featuredPost.featuredImage}
                                                alt={featuredPost.title}
                                                fill
                                                className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
                                            />
                                        )}
                                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                                            <div className="bg-desaturated-teal self-start px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white mb-4">
                                                Cover Story
                                            </div>
                                            <h2 className="text-3xl md:text-5xl font-heading font-medium text-white mb-4 leading-tight">
                                                {featuredPost.title}
                                            </h2>
                                            <p className="text-white/80 text-lg line-clamp-2 max-w-2xl font-light">
                                                {featuredPost.excerpt}
                                            </p>
                                        </div>
                                    </Link>
                                </motion.div>
                            )}

                            {/* Feed Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                                {mainFeedPosts.map((post, i) => (
                                    <motion.div
                                        key={post.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                    >
                                        <Link href={`/blog/${post.slug || post.id}`} className="group block h-full flex flex-col">
                                            <div className="aspect-[4/3] bg-white border border-border-subtle overflow-hidden mb-6 relative">
                                                {post.featuredImage && (
                                                    <Image
                                                        src={post.featuredImage}
                                                        alt={post.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                    />
                                                )}
                                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-2 py-1 text-[8px] font-bold uppercase tracking-widest text-deep-charcoal border border-border-subtle">
                                                    {post.category}
                                                </div>
                                            </div>
                                            <div className="flex-1 flex flex-col space-y-3">
                                                <div className="text-[10px] font-mono text-deep-charcoal/40 uppercase tracking-widest flex items-center gap-2">
                                                    <span>{post.readTime || '5 MIN'}</span>
                                                    <span className="w-1 h-1 bg-deep-charcoal/20 rounded-full"></span>
                                                    <span>{new Date(post.createdAt?.seconds * 1000).toLocaleDateString()}</span>
                                                </div>
                                                <h3 className="text-2xl font-heading font-medium text-deep-charcoal group-hover:text-desaturated-teal transition-colors leading-snug">
                                                    {post.title}
                                                </h3>
                                                <p className="text-sm text-deep-charcoal/60 line-clamp-3 leading-relaxed">
                                                    {post.excerpt}
                                                </p>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar Column (Right) */}
                        <div className="lg:col-span-4 space-y-12">
                            {/* Trending Widget */}
                            <div className="bg-white p-8 border border-border-subtle shadow-lg shadow-black/5 sticky top-32">
                                <div className="flex items-center gap-2 mb-8 border-b border-border-subtle pb-4">
                                    <TrendingUp className="w-4 h-4 text-desaturated-teal" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-deep-charcoal">Trending Now</span>
                                </div>
                                <div className="space-y-6">
                                    {posts.slice(0, 4).map((post, idx) => (
                                        <Link key={post.id} href={`/blog/${post.slug || post.id}`} className="group flex gap-4 items-start">
                                            <span className="text-2xl font-heading font-bold text-border-subtle group-hover:text-desaturated-teal transition-colors">0{idx + 1}</span>
                                            <div>
                                                <h4 className="text-sm font-medium text-deep-charcoal group-hover:text-desaturated-teal transition-colors line-clamp-2 leading-snug">
                                                    {post.title}
                                                </h4>
                                                <span className="text-[10px] text-deep-charcoal/40 mt-1 block uppercase tracking-wider">{post.category}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter Mini */}
                            <div className="bg-deep-charcoal text-white p-8 text-center bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
                                <Mail className="w-6 h-6 mx-auto mb-4 text-desaturated-teal" />
                                <h3 className="text-xl font-heading font-medium mb-3">Weekly Intel</h3>
                                <p className="text-xs text-white/60 mb-6 leading-relaxed">
                                    Get the top stories and actionable logistics tips delivered to your inbox every Tuesday.
                                </p>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-white/10 border border-white/20 px-4 py-3 text-xs text-white placeholder:text-white/30 mb-3 focus:outline-none focus:border-desaturated-teal"
                                />
                                <button className="w-full bg-white text-deep-charcoal py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-desaturated-teal hover:text-white transition-colors">
                                    Join List
                                </button>
                            </div>

                            {/* Tags Cloud */}
                            <div className="p-8 border border-border-subtle bg-soft-bg/50">
                                <div className="flex items-center gap-2 mb-6">
                                    <Tag className="w-4 h-4 text-deep-charcoal/40" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-deep-charcoal">Popular Topics</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Amazon PPC', 'FBA Fees', 'Inventory', 'Brand Registry', 'Global Logistics', 'Brexit', 'VAT', 'Profitability'].map(tag => (
                                        <span key={tag} className="bg-white border border-border-subtle px-3 py-1.5 text-[10px] font-mono text-deep-charcoal/60 hover:border-desaturated-teal hover:text-desaturated-teal cursor-pointer transition-colors">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
}
