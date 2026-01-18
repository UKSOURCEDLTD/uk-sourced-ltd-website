"use client";
import React, { useState } from "react";
import { AsinAnalysisData } from "./mockData"; // Import type only
import MetricCard from "./MetricCard";
import SwotGrid from "./SwotGrid";
import ActionChecklist from "./ActionChecklist";
import { TrendingUp, Activity } from "lucide-react";

export default function Dashboard() {
    const [asinInput, setAsinInput] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [data, setData] = useState<AsinAnalysisData | null>(null);

    const handleAnalyze = async () => {
        if (!asinInput) return;
        setIsAnalyzing(true);
        setData(null);

        try {
            const res = await fetch("/api/analyze", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ asin: asinInput }),
            });
            const result = await res.json();
            if (res.ok) {
                setData(result);
            } else {
                console.error("Analysis Error:", result.error);
                // Ideally show error toast here
            }
        } catch (error) {
            console.error("Network Error:", error);
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <div className="max-w-[1600px] mx-auto p-4 md:p-8 min-h-[80vh]">
            {/* Search / Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-[rgba(34,34,34,0.08)] pb-10 gap-6">
                <div className="w-full md:w-auto flex-grow max-w-2xl">
                    <h1 className="text-3xl font-bold text-[#222222] font-montserrat tracking-tight mb-2">
                        War Room Intelligence
                    </h1>
                    <p className="text-gray-500 mb-6">Enter an ASIN to generate a deep-dive SWOT analysis.</p>

                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Enter ASIN (e.g. B09G9F5T3R)"
                            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008080] focus:border-transparent font-mono uppercase"
                            value={asinInput}
                            onChange={(e) => setAsinInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                        />
                        <button
                            onClick={handleAnalyze}
                            disabled={isAnalyzing || !asinInput}
                            className="px-6 py-3 bg-[#222222] text-white font-medium rounded-lg hover:bg-black transition-all uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 min-w-[140px] justify-center"
                        >
                            {isAnalyzing ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                    Targeting...
                                </>
                            ) : (
                                "Analyze"
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Loading State Overlay */}
            {isAnalyzing && (
                <div className="flex flex-col items-center justify-center h-64 space-y-4 animate-pulse">
                    <div className="w-12 h-12 border-4 border-gray-200 border-t-[#008080] rounded-full animate-spin"></div>
                    <p className="text-[#008080] font-medium tracking-wider animate-pulse">Scanning Digital Shelf...</p>
                </div>
            )}

            {/* Empty State */}
            {!data && !isAnalyzing && (
                <div className="h-64 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50">
                    <Activity className="w-12 h-12 mb-2 opacity-20" />
                    <p>Ready for Scan</p>
                </div>
            )}

            {/* Results Grid */}
            {data && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">

                    {/* Product Identity Header */}
                    <div className="bg-white p-6 rounded-xl border border-[rgba(34,34,34,0.08)] mb-8 flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-full md:w-32 h-32 shrink-0 bg-gray-100 rounded-lg overflow-hidden border border-gray-100 relative group">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={data.asin_metadata.product_image_url || "/placeholder.png"}
                                alt={data.asin_metadata.product_name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex-grow">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="font-mono bg-gray-100 px-2 py-0.5 rounded text-xs text-gray-600 font-bold">
                                    {data.asin_metadata.asin}
                                </span>
                                <div className="flex gap-1 ml-auto md:ml-0">
                                    {data.asin_metadata.detected_markets && data.asin_metadata.detected_markets.map((market) => (
                                        <span key={market} className="px-1.5 py-0.5 border border-gray-200 rounded text-[10px] font-bold text-gray-500 bg-gray-50">
                                            {market}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-[#222222] font-montserrat tracking-tight leading-snug mb-1">
                                {data.asin_metadata.product_name || "Unknown Product Title"}
                            </h2>
                            <p className="text-xs text-gray-400 mb-3 font-medium">
                                {data.asin_metadata.category_path}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1.5">
                                    <span className={`w-2 h-2 rounded-full ${data.listing_audit.title_quality.keyword_density === "High" ? "bg-green-500" : "bg-yellow-500"}`}></span>
                                    {data.listing_audit.title_quality.keyword_density} Density
                                </span>
                                <span className="text-gray-300">|</span>
                                <span className="flex items-center gap-1.5">
                                    <span className="font-mono text-xs">{data.asin_metadata.dimensions}</span>
                                </span>
                                <span className="text-gray-300">|</span>
                                <span className="text-[#008080] font-bold bg-[#008080]/10 px-2 py-0.5 rounded">Global Grade: A-</span>
                            </div>
                        </div>
                        <div className="w-full md:w-auto flex flex-row md:flex-col gap-2 mt-2 md:mt-0 shrink-0">
                            <button className="flex-1 px-4 py-2 bg-white border border-[#222222] text-[#222222] text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors uppercase tracking-wider text-center">
                                Export
                            </button>
                            <button className="flex-1 px-4 py-2 bg-[#222222] text-white text-sm font-medium rounded-lg hover:bg-black transition-colors uppercase tracking-wider shadow-lg shadow-gray-200 text-center">
                                Auto-Fix
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">

                        {/* Left Column: The Now (Metrics) */}
                        <div className="lg:col-span-3 space-y-4">
                            <MetricCard
                                label="Est. Monthly Revenue"
                                value={`$${data.market_intelligence.estimated_revenue.toLocaleString()}`} // visual est
                                trend="up"
                                trendValue="+12%"
                                subtext={`${data.market_intelligence.estimated_mo_sales} Units / Mo @ $${data.market_intelligence.current_price}`}
                            />
                            <MetricCard
                                label="Current BSR"
                                value={`#${data.market_intelligence.bsr_history[0].rank}`}
                                trend="down"
                                trendValue="Volatile"
                                subtext={data.asin_metadata.category_path.split(" > ").slice(0, 2).join(" > ")}
                            />
                            <MetricCard
                                label="Review Velocity"
                                value="4.2/mo"
                                trend="neutral"
                                trendValue="Avg"
                                subtext="Total Ratings: 1,420"
                            />
                            <div className="bg-white p-6 rounded-xl border border-[rgba(34,34,34,0.08)]">
                                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                                    Buy Box Status
                                </h3>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                                    <span className="font-bold text-[#222222]">{data.market_intelligence.buy_box_owner}</span>
                                </div>
                                <p className="text-xs text-gray-500">
                                    Vendor Central dominance detected. High difficulty to displace.
                                </p>
                            </div>
                        </div>

                        {/* Center Column: The AI (SWOT) */}
                        <div className="lg:col-span-6">
                            <SwotGrid data={data.swot} />
                        </div>

                        {/* Right Column: The Action (Checklist) */}
                        <div className="lg:col-span-3">
                            <ActionChecklist items={data.priority_checklist} />
                        </div>
                    </div>

                    {/* Bottom Row: Sentiment & Trends */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-[rgba(34,34,34,0.08)]">
                            <div className="flex items-center gap-2 mb-6">
                                <Activity className="w-5 h-5 text-[#222222]" />
                                <h3 className="font-semibold uppercase tracking-wider">Review Sentiment Analysis</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {data.customer_intelligence.top_keywords_in_reviews.map((kw, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                                        {kw}
                                    </span>
                                ))}
                                {data.customer_intelligence.common_complaints.map((kw, i) => (
                                    <span key={`neg-${i}`} className="px-3 py-1 bg-red-50 text-red-600 text-sm rounded-full border border-red-100">
                                        {kw}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-6 space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">5-Star Ratio</span>
                                    <span className="font-mono font-medium">{(data.customer_intelligence.star_breakdown["5_star"] * 100).toFixed(0)}%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-[#008080] h-2 rounded-full" style={{ width: `${data.customer_intelligence.star_breakdown["5_star"] * 100}%` }}></div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">1-Star Ratio (Dealbreakers)</span>
                                    <span className="font-mono font-medium text-red-500">{(data.customer_intelligence.star_breakdown["1_star"] * 100).toFixed(0)}%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-red-500 h-2 rounded-full" style={{ width: `${data.customer_intelligence.star_breakdown["1_star"] * 100}%` }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-[rgba(34,34,34,0.08)]">
                            <div className="flex items-center gap-2 mb-6">
                                <TrendingUp className="w-5 h-5 text-[#222222]" />
                                <h3 className="font-semibold uppercase tracking-wider">Price vs BSR Correlation</h3>
                            </div>
                            <div className="h-48 flex items-end justify-between gap-2 px-2 border-b border-l border-gray-200 relative">
                                {/* Visual Mock of a chart */}
                                <div className="absolute top-1/3 left-0 w-full border-t border-dashed border-gray-300"></div>
                                {(data.market_intelligence.bsr_sparkline || [40, 65, 45, 70, 50, 80, 60, 45, 55, 75, 50, 65]).map((value, i, arr) => {
                                    // Normalize sparkline to percentage height (inverted because Lower Rank is Better)
                                    const max = Math.max(...arr, 100);
                                    const min = Math.min(...arr, 0);
                                    const range = max - min || 1;
                                    // Invert: (max - value) / range * 100
                                    // We want lower rank (better) to be HIGHER bars? Or standard BSR chart where line goes down?
                                    // Let's standard: Higher Bar = Higher Rank (Worse). But visual users prefer "Up is Good".
                                    // Let's stick to "Higher Bar = More Sales (Lower Rank)".
                                    // So we invert: (max - value) / range
                                    const h = Math.max(10, ((max - value) / range) * 80 + 10);

                                    return (
                                        <div key={i} className="w-full bg-indigo-50 hover:bg-indigo-100 relative group transition-colors rounded-t-sm" style={{ height: `${h}%` }}>
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-gray-800 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                                                #{value.toLocaleString()}
                                            </div>
                                            <div className="absolute bottom-0 left-0 w-full bg-[#008080]/80" style={{ height: `4px` }}></div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="flex justify-between mt-2 text-xs text-gray-400 font-mono">
                                <span>30 Days Ago</span>
                                <span>Today</span>
                            </div>
                            <p className="mt-4 text-xs text-gray-500">
                                <span className="font-bold text-[#008080]">Insight:</span> Price drops correlate with 15% spikes in BSR. Component suggests "Green Coupon" strategy.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
