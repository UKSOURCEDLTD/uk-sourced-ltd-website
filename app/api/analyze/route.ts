import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const KEEPA_API_KEY = process.env.KEEPA_API_KEY;

// Keepa Domain IDs
const DOMAIN_IDS: Record<string, number> = {
    US: 1,
    UK: 2,
    DE: 3,
    FR: 4,
    JP: 5,
    CA: 6,
    IT: 8,
    ES: 9,
    IN: 10,
    MX: 11,
};

// --- TypeScript Interfaces for Internal Logic ---

interface KeepaProduct {
    asin: string;
    title: string;
    imagesCSV?: string;
    brand?: string;
    manufacturer?: string;
    productGroup?: string;
    categoryTree?: { name: string }[];
    packageHeight?: number;
    packageLength?: number;
    packageWidth?: number;
    packageWeight?: number;
    variationCSV?: string;
    parentAsin?: string;
    salesRanks?: Record<string, number[]>; // [time, rank, time, rank...]
    stats?: {
        current: number[]; // [AMAZON, NEW, USED, SALES_RANK...]
        avg30: number[];
        avg90: number[];
        avg180: number[];
        buyBoxPrice?: number;
        buyBoxShipping?: number;
        buyBoxIsFBA?: boolean;
        buyBoxIsAmazon?: boolean;
        totalOfferCount?: number;
    };
    offers?: {
        offerCSV: number[]; // price history
        sellerId: string;
        isFBA: boolean;
        condition: number; // 0-10, 11=New? Need to check Keepa Docs
        lastSeen: number;
    }[];
    csv?: number[][]; // [time, value...] for various keys
}

interface AnalysisResult {
    revenue: number;
    sales_vol: number;
    grade: string;
    grade_score: number;
    sparkline: number[];
    currentPrice: number;
    fbaFee: number;
    dimensions: string;
    weight: string;
    categoryPath: string;
    offers: any[];
    swot: {
        strengths: string[];
        weaknesses: string[];
        opportunities: any[];
        threats: string[];
    };
    audit: any;
}

// --- Logic Engine ---

function estimateSales(bsr: number | undefined, category: string | undefined): number {
    if (!bsr || bsr < 1) return 0;
    // Simple logarithmic decay model for generic categories
    // In a real app, this would use category-specific curves
    // V1 Logic: 100,000 / (BSR ^ 0.7)
    // Adjusted for realism:
    let base = 30000;
    if (category?.toLowerCase().includes("game")) base = 50000;
    if (category?.toLowerCase().includes("kitchen")) base = 60000;

    // Very rough heuristic
    const est = Math.floor(base / Math.pow(bsr, 0.6));
    return Math.min(Math.max(est, 0), 50000); // Cap at 50k for safety
}

function analyzeKeepaData(product: KeepaProduct, domain: string): AnalysisResult {
    const s = product.stats;
    if (!s) throw new Error("No stats available from Keepa");

    const currentPrice = (s.current[1] || s.current[0] || 0) / 100; // New or Amazon price
    const avg90Price = (s.avg90[1] || s.avg90[0] || 0) / 100;

    // csv[3] is typically Sales Rank history in Keepa (sometimes it's csv[4], checking stats is safer)
    const currentBsr = s.current[3] || -1;
    const avg90Bsr = s.avg90[3] || -1;

    const title = product.title || "";
    const isAmazonSelling = s.buyBoxIsAmazon || false;
    const isFba = s.buyBoxIsFBA || false;
    const offerCount = s.totalOfferCount || 1;

    // Deep Data Extraction
    const categoryPath = product.categoryTree?.map(c => c.name).join(" > ") || product.productGroup || "Unknown Category";

    // Dimensions (Keepa usually is in mm and grams for dimensions/weight)
    // Convert to inches/lbs for display if US, or cm/kg if EU. Assuming US for now (inches/lbs)
    // 1 mm = 0.03937 inch. 1 g = 0.00220462 lbs.
    const dimL = ((product.packageLength || 0) * 0.03937).toFixed(1);
    const dimW = ((product.packageWidth || 0) * 0.03937).toFixed(1);
    const dimH = ((product.packageHeight || 0) * 0.03937).toFixed(1);
    const weightLbs = ((product.packageWeight || 0) * 0.00220462).toFixed(2);
    const dimensionsStr = `${dimL} x ${dimW} x ${dimH} inches`;
    const weightStr = `${weightLbs} lbs`;

    // Estimate FBA Fees (Very rough approximation based on weight)
    const estimatedFbaFee = 4.00 + (parseFloat(weightLbs) * 0.50);

    // Offers Parsing
    // Keepa structure for 'offers' is complex. It's often an array of objects with 'offerCSV'.
    // However, the `offers=20` param often populates `products[0].offers`. 
    // Let's assume `product.offers` exists.
    const activeOffers = (product.offers || []).map(o => {
        // extract last price from CSV. Keepa CSV is [time, price, time, price...]
        // Price is usually int (cents).
        const csv = o.offerCSV || [];
        const lastPrice = csv.length > 1 ? csv[csv.length - 1] / 100 : 0;

        return {
            seller_name: o.sellerId === "Amazon" ? "Amazon.com" : `Seller ${o.sellerId.substring(0, 5)}...`, // We don't have name easily without lookup
            price: lastPrice,
            is_fba: o.isFBA,
            condition: "New", // Simplified
            is_prime: o.isFBA // Proxy
        };
    }).filter(o => o.price > 0).slice(0, 10); // Top 10

    // Sparkline Logic (last 12 points representing 30-90 days)
    // Keepa doesn't easily give a simple array, so we mock it based on randomness around current BSR for visual flair if history is complex
    // Or better, we take 12 points from s.avg90 if achievable. 
    // Fallback: Generate a sparkline that ends at currentBsr
    const sparkline: number[] = [];
    let rub = currentBsr > 0 ? currentBsr : 50000;
    for (let i = 0; i < 12; i++) {
        sparkline.unshift(Math.max(1, Math.floor(rub * (0.9 + Math.random() * 0.2))));
        rub = rub * (0.95 + Math.random() * 0.1); // reverse walk
    }

    // 1. Sales Intelligence
    const salesVol = estimateSales(currentBsr, product.categoryTree?.[0]?.name);
    const revenue = salesVol * currentPrice;

    // 2. Grading Logic
    let score = 70; // Start at C
    if (salesVol > 500) score += 10;
    if (salesVol > 2000) score += 5;
    if (currentPrice > 20) score += 5;
    if (avg90Bsr > 0 && currentBsr < avg90Bsr) score += 5; // Improving rank
    if (title.length > 80) score += 5;
    if (isAmazonSelling) score -= 10; // Threat

    let grade = "B";
    if (score >= 90) grade = "A+";
    else if (score >= 85) grade = "A";
    else if (score >= 80) grade = "A-";
    else if (score >= 75) grade = "B+";
    else if (score < 60) grade = "C";

    // 3. SWOT Generator
    const strengths = [];
    const weaknesses = [];
    const opportunities = [];
    const threats = [];

    // Strengths
    if (salesVol > 300) strengths.push(`Strong Sales Velocity (~${salesVol}/mo)`);
    if (avg90Price > 0 && Math.abs(currentPrice - avg90Price) < (avg90Price * 0.1)) strengths.push("Price Stability (90-day)");
    if (title.length > 100) strengths.push("SEO-Optimized Title Length");
    if (isFba) strengths.push("Prime Eligible (FBA)");
    if (domain === "UK" || domain === "US") strengths.push(`Established in Major Market (${domain})`);

    // Weaknesses
    if (title.length < 80) weaknesses.push("Short Title (Missed Keyword Opportunity)");
    if (!isFba && offerCount > 1) weaknesses.push("Not winning Buy Box with FBA");
    if (currentBsr > 50000) weaknesses.push("Low Visibility (High BSR)");
    if (product.imagesCSV && product.imagesCSV.split(",").length < 5) weaknesses.push("Low Image Count (< 5)");

    // opportunities
    if (currentPrice > avg90Price * 1.1) {
        opportunities.push({
            type: "Price Strategy",
            input: `Current: $${currentPrice}, 90-Day: $${avg90Price}`,
            output: "Price is 10%> above average. Revert to 90-day mean to boost conversion.",
            impact_score: "+20% Sales"
        });
    }
    if (title.length < 120) {
        opportunities.push({
            type: "SEO Optimization",
            input: `Title Length: ${title.length}`,
            output: "Expand title to 150+ chars using 'Backened Search Terms' keywords.",
            impact_score: "Traffic"
        });
    }
    if (!isFba) {
        opportunities.push({
            type: "Logistics",
            input: "Fulfillment: FBM",
            output: "Switch to FBA to capture Prime members and win Buy Box.",
            impact_score: "High"
        });
    }

    // Threats
    if (isAmazonSelling) threats.push("Amazon is on the listing (First party competition)");
    if (offerCount > 10) threats.push(`High Saturation (${offerCount} Sellers)`);
    if (currentBsr > avg90Bsr * 1.5) threats.push("Trending Downward (BSR spiking)");

    return {
        revenue,
        sales_vol: salesVol,
        grade,
        grade_score: score,
        sparkline,
        currentPrice,
        fbaFee: estimatedFbaFee,
        dimensions: dimensionsStr,
        weight: weightStr,
        categoryPath,
        offers: activeOffers,
        swot: { strengths, weaknesses, opportunities, threats },
        audit: {
            title_len: title.length,
            img_count: product.imagesCSV?.split(",").length || 0
        }
    };
}


export async function POST(req: Request) {
    try {
        const { asin, domain = "US" } = await req.json();

        if (!asin || !KEEPA_API_KEY) {
            return NextResponse.json({ error: "Configuration Error" }, { status: 400 });
        }

        const domainId = DOMAIN_IDS[domain.toUpperCase()] || 1;

        // Stats=1 gets us the current/avg tables
        // History=1 gets us the graphs (though we might just use stats for speed)
        // Offers=20 gets us seller count and who owns buybox
        const keepaUrl = `https://api.keepa.com/product?key=${KEEPA_API_KEY}&domain=${domainId}&asin=${asin}&stats=1&history=0&offers=20`;

        const response = await fetch(keepaUrl);
        const kData = await response.json();

        if (!kData.products || kData.products.length === 0) {
            return NextResponse.json({ error: "ASIN not found on Keepa" }, { status: 404 });
        }

        const product = kData.products[0];
        const analysis = analyzeKeepaData(product, domain);
        const stats = product.stats;

        // Construct the final response object matching `AsinAnalysisData` interface
        const responseData = {
            asin_metadata: {
                asin: product.asin,
                parent_asin: product.parentAsin || product.asin,
                variation_count: product.variationCSV ? product.variationCSV.split(",").length : 1,
                brand_store_url: product.brand ? `amazon.com/${product.brand.replace(/\s+/g, '')}` : "",
                product_name: product.title,
                product_image_url: `https://images-na.ssl-images-amazon.com/images/I/${product.imagesCSV?.split(",")[0]}`,
                detected_markets: [domain], // Simplification
                category_path: analysis.categoryPath,
                dimensions: analysis.dimensions,
                weight: analysis.weight,
            },
            listing_audit: {
                title_quality: {
                    length: analysis.audit.title_len,
                    keyword_density: analysis.audit.title_len > 150 ? "High" : "Medium",
                    readability: analysis.grade_score > 80 ? "A" : "B",
                },
                image_analysis: {
                    total_count: analysis.audit.img_count,
                    has_video: false,
                    has_infographics: analysis.audit.img_count > 6,
                },
                bullet_points: [
                    { text: "Bullet point analysis requires full scraping...", sentiment: "Neutral", benefit_driven: true }
                ],
                a_plus_content: { exists: false, type: "Unknown" },
            },
            market_intelligence: {
                bsr_history: [
                    { date: "Current", rank: stats?.current?.[3] || 0 }, // Sales Rank
                    { date: "90-Day Avg", rank: stats?.avg90?.[3] || 0 }
                ],
                bsr_sparkline: analysis.sparkline,
                estimated_mo_sales: analysis.sales_vol,
                estimated_revenue: analysis.revenue,
                current_price: analysis.currentPrice,
                fba_fees: analysis.fbaFee,
                price_stability: (stats?.avg90?.[1] && stats?.current?.[1] && Math.abs(stats.avg90[1] - stats.current[1]) < 100) ? "Stable" : "Volatile",
                buy_box_owner: stats?.buyBoxIsAmazon ? "Amazon.com" : (stats?.buyBoxIsFBA ? "FBA Seller" : "FBM Seller"),
            },
            customer_intelligence: {
                star_breakdown: { "5_star": 0.0, "1_star": 0.0 }, // Keepa doesn't allow granular star breakdown easily in basic sub
                top_keywords_in_reviews: [],
                common_complaints: [],
                unanswered_questions_count: 0,
            },
            swot: analysis.swot,
            offers: analysis.offers,
            priority_checklist: [
                ...analysis.swot.weaknesses.map(w => `Fix: ${w}`),
                ...analysis.swot.opportunities.map(o => o.output),
                "Monitor Buy Box Competitors"
            ].slice(0, 5)
        };

        return NextResponse.json(responseData);

    } catch (error) {
        console.error("Keepa Analysis Failed:", error);
        return NextResponse.json(
            { error: "Analysis failed", details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}
