'use client';

import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, query, where, Timestamp } from 'firebase/firestore';
import { Loader2, Database, CheckCircle, AlertCircle } from 'lucide-react';

const INITIAL_POSTS = [
    {
        title: "The Logistics Revolution: How Decentralized Fulfillment Wins in 2026",
        slug: "logistics-revolution-2026",
        category: "Logistics",
        excerpt: "Amazon's FBA fees are rising. Discover how a hybrid decentralized fulfillment strategy can cut costs by 30% while maintaining Prime-like speeds.",
        featuredImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // Warehouse/Logistics
        content: `In 2026, the Amazon logistics landscape has shifted. The era of relying solely on FBA (Fulfillment by Amazon) for all inventory is ending for elite brands. With the introduction of Amazon's new regional placement fees and low-inventory surcharges, the cost of "set it and forget it" has become unsustainable.

#### The Problem with Pure FBA

For years, FBA was the gold standard. You sent your stock to one warehouse, and Amazon did the rest. But as Amazon's network became congested, they shifted the cost of distribution to sellers. Today, if your inventory isn't spread across at least 4 regions, you're paying a premium.

#### The Hybrid Solution

At UK Sourced, we advocate for a **Decentralized Hybrid Model**. This involves:

1.  **Strategic FBA Injection:** Sending only "fast-moving" inventory to Amazon FBA to maintain the Prime badge and Buy Box eligibility.
2.  **Regional 3PL Hubs:** Utilizing a network of 3rd Party Logistics providers for bulk storage and "Same-Day" Merchant Fulfilled delivery options.
3.  **DTC Synchronization:** Using the same 3PL stock to fulfill orders from your Shopify or TikTok Shop, unifying your inventory pool.

#### Why It Wins

Data from our client portfolio shows that a hybrid model reduces overall fulfillment costs by **18-30%** without sacrificing delivery speed. More importantly, it insulates you from Amazon's sudden policy shifts. If FBA creates a bottleneck, your merchant-fulfilled network keeps the sales flowing.

**The future isn't just about selling on Amazon. It's about using Amazon as one powerful node in a resilient supply chain.**`
    },
    {
        title: "Beyond the Buy Box: The \"Brand Moat\" Strategy",
        slug: "beyond-buy-box-brand-moat",
        category: "Strategy",
        excerpt: "Winning the Buy Box is tactical. Building a Brand Moat is strategic. Here is how to insulate your business from race-to-the-bottom pricing.",
        featuredImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // Strategy/Meeting
        content: `The "Buy Box" is the fiercest battleground in e-commerce. Algorithmic repricers urge you to drop your price by a penny every minute until profit margins vanish. If your entire strategy is "be the cheapest," you are already losing.

#### What is a Brand Moat?

A Brand Moat is a defensive perimeter around your product that price alone cannot breach. It consists of three layers:

1.  **Intellectual Property (IP):** Aggressive trademarking and patenting. Amazon's *Project Zero* and *Transparency* programs allow rights owners to instantly remove counterfeits. If you aren't enrolled, you're exposed.
2.  **Visual Identity:** Does your A+ Content look like a generic template, or does it tell a story? In 2026, customers buy *vibes*. High-fidelity renders and lifestyle video content increase conversion rates by up to **40%**.
3.  **Community Loop:** Moving customers from Amazon to your owned channels (legally). By including QR code inserts for "Warranty Registration" or "VIP Clubs," you capture data that Amazon doesn't share.

#### The ROI of Defense

Brands with strong moats trade at a **3x higher multiple** upon exit than generic resellers. Why? Because an acquirer isn't just buying sales history; they are buying security.

Stop fighting the penny war. Build a fortress.`
    },
    {
        title: "Amazon Account Health: The Silent Killer",
        slug: "account-health-silent-killer",
        category: "Market Insights",
        excerpt: "One policy violation can freeze millions in inventory. Learn the proactive compliance protocols we use to keep accounts in the 'Green'.",
        featuredImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // Data/Analysis
        content: `It happens overnight. You wake up to an email: *"Your Amazon selling privileges have been removed."*

In an instant, your revenue drops to zero, but your overheads remain. Account Health is not a metric to check once a month; it is the vital operational pulse of your business.

#### The "Guilty Until Proven Innocent" Reality

Amazon's AI-driven compliance systems often flag listings for "Suspected Intellectual Property Violations" based on keywords alone. A toy described as "velcro-like" can be flagged by the VELCRO® brand legal team.

#### Our Protocol

At UK Sourced, we implement a **Daily Health Audit**:

*   **Voice of the Customer (VOC) Analysis:** We monitor return comments for keywords like "fake," "used," or "damaged," attempting to catch trends before Amazon's bots do.
*   **Listing Sanitary Checks:** ensuring no restricted keywords have been vetted into backend search terms.
*   **Performance Notification Monitoring:** Responding to *Warning* level alerts within 1 hour, not 24.

#### Conclusion

You cannot grow what you cannot keep. Operational resilience is not the sexy part of Amazon sales, but it is the foundation upon which 7-figure empires are built. Don't build your house on sand.`
    },
    {
        title: "AI in 2026: The Unfair Advantage for Amazon Sellers",
        slug: "ai-applications-amazon-sellers-2026",
        category: "Strategy",
        excerpt: "Move beyond basic copywriting. Learn how elite sellers use Autonomous Agents for predictive inventory, sentiment analysis, and automated negotiation.",
        featuredImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // AI/Future
        content: `In the early 2020s, "AI for Amazon" meant using ChatGPT to write bullet points. By 2026, that is the bare minimum. The real alpha lies in **Agentic Workflows**—AI systems that don't just create content, but make decisions.

#### 1. Predictive Inventory Management
Gone are the days of spreadsheets. Modern AI agents ingest internal sales velocity, seasonality data, and external signals (like TikTok trend spikes or competitor stockouts). They predict stock depletion dates with 98% accuracy and can even draft POs for your suppliers automatically.

#### 2. The "Sentinel" Agent
Your listing is under constant attack—keyword sabotage, image hijacking, and review manipulation. A Sentinel Agent watches your ASINs 24/7. It detects a change in your title or a sudden influx of negative ratings within seconds and alerts your team, often resolving the ticket before you even wake up.

#### 3. Hyper-Personalized PPC
Old school PPC optimization was rules-based ("If ACOS > 30%, lower bid"). New AI models understand *context*. They can identify that a specific search term is trending due to a viral video and momentarily increase aggression to capture market share, then throttle back down when the hype fades.

#### The Human-in-the-Loop
Ideally, AI doesn't replace the Amazon Manager; it promotes them. Instead of turning wrenches, you become the architect of a machine that turns perfectly.

**At UK Sourced, we don't just use these tools; we build them.**`
    }
];

export default function BlogSeeder() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<string>('');
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (msg: string) => setLogs(prev => [...prev, msg]);

    const seedContent = async () => {
        setLoading(true);
        setStatus('Starting seed process...');
        setLogs([]);

        try {
            const collectionRef = collection(db, 'blog_posts');

            for (const post of INITIAL_POSTS) {
                // Check if exists
                const q = query(collectionRef, where('slug', '==', post.slug));
                const snapshot = await getDocs(q);

                if (!snapshot.empty) {
                    addLog(`Skipped: "${post.title}" (already exists)`);
                    continue;
                }

                // Add document
                await addDoc(collectionRef, {
                    ...post,
                    author: 'UK Sourced Team',
                    status: 'published',
                    createdAt: Timestamp.now(),
                    publishedAt: Timestamp.now(),
                    updatedAt: Timestamp.now()
                });
                addLog(`Created: "${post.title}"`);
            }

            setStatus('Seeding complete!');
        } catch (error) {
            console.error(error);
            setStatus(`Error: ${(error as Error).message}`);
            addLog(`Error: ${(error as Error).message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-8 bg-white border border-border-subtle rounded-lg shadow-sm">
            <div className="text-center space-y-4 mb-8">
                <div className="w-12 h-12 bg-soft-bg rounded-full flex items-center justify-center mx-auto text-desaturated-teal">
                    <Database className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-heading font-medium text-deep-charcoal">Blog Content Seeder</h2>
                <p className="text-sm text-deep-charcoal/60">
                    This utility will inject {INITIAL_POSTS.length} initial blog posts into your Firestore database.
                    It checks for duplicates before adding.
                </p>
            </div>

            <div className="space-y-4">
                <button
                    onClick={seedContent}
                    disabled={loading}
                    className="w-full bg-deep-charcoal text-white py-3 rounded-md font-medium hover:bg-desaturated-teal transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Database className="w-4 h-4" />}
                    {loading ? 'Seeding Database...' : 'Seed Initial Content'}
                </button>

                {status && (
                    <div className={`p-4 rounded-md text-sm border ${status.includes('Error') ? 'bg-red-50 border-red-100 text-red-700' : 'bg-green-50 border-green-100 text-green-700'}`}>
                        <div className="flex items-center gap-2 mb-2 font-medium">
                            {status.includes('Error') ? <AlertCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                            {status}
                        </div>
                        {logs.length > 0 && (
                            <ul className="list-disc pl-5 opacity-80 text-xs space-y-1 font-mono">
                                {logs.map((log, i) => (
                                    <li key={i}>{log}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
