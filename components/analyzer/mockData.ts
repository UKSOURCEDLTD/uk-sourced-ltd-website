export interface AsinMetadata {
    asin: string;
    parent_asin: string;
    variation_count: number;
    brand_store_url: string;
    product_name: string;
    product_image_url: string;
    detected_markets: ("UK" | "USA" | "EU")[];
    category_path: string;
    dimensions: string; // e.g. "10 x 5 x 2 inches"
    weight: string; // e.g. "1.5 lbs"
}

export interface ListingAudit {
    title_quality: {
        length: number;
        keyword_density: string;
        readability: string;
    };
    image_analysis: {
        total_count: number;
        has_video: boolean;
        has_infographics: boolean;
    };
    bullet_points: {
        text: string;
        sentiment: string;
        benefit_driven: boolean;
    }[];
    a_plus_content: {
        exists: boolean;
        type: string;
    };
}

export interface MarketIntelligence {
    bsr_history: {
        date: string;
        rank: number;
    }[];
    bsr_sparkline?: number[];
    current_price: number;
    estimated_revenue: number; // Replaces previous estimated_mo_sales * price heuristic in frontend
    estimated_mo_sales: number;
    price_stability: string;
    buy_box_owner: string;
    fba_fees: number;
}

export interface CustomerIntelligence {
    star_breakdown: {
        "5_star": number;
        "1_star": number;
    };
    top_keywords_in_reviews: string[];
    common_complaints: string[];
    unanswered_questions_count: number;
}

export interface AnalysisOpportunity {
    type: string; // e.g. "The Gap Finder"
    input: string;
    output: string; // The AI Opportunity suggestion
    impact_score: string; // e.g. "High", "+15% Conv"
}

export interface Offer {
    seller_name: string;
    price: number;
    is_fba: boolean;
    condition: string;
    is_prime: boolean;
}

export interface AsinAnalysisData {
    asin_metadata: AsinMetadata;
    listing_audit: ListingAudit;
    market_intelligence: MarketIntelligence;
    customer_intelligence: CustomerIntelligence;
    swot: {
        strengths: string[];
        weaknesses: string[];
        opportunities: AnalysisOpportunity[];
        threats: string[];
    };
    offers: Offer[];
    priority_checklist: string[];
}

export const mockAnalysisData: AsinAnalysisData = {
    asin_metadata: {
        asin: "B09G9F5T3R",
        parent_asin: "B09G9F5T3R",
        variation_count: 5,
        brand_store_url: "amazon.com/antigravity",
        product_name: "Antigravity Sonic Architetural Speaker V2 - High Fidelity Wireless Home Audio System",
        product_image_url: "https://images.unsplash.com/photo-1545454675-3527b9b92801?q=80&w=2670&auto=format&fit=crop",
        detected_markets: ["USA", "UK"],
        category_path: "Electronics > Home Audio > Speakers",
        dimensions: "12 x 8 x 8 inches",
        weight: "4.2 lbs",
    },
    listing_audit: {
        title_quality: {
            length: 145,
            keyword_density: "High",
            readability: "B+",
        },
        image_analysis: {
            total_count: 7,
            has_video: true,
            has_infographics: false,
        },
        bullet_points: [
            { text: "...", sentiment: "Feature-heavy", benefit_driven: false },
        ],
        a_plus_content: { exists: true, type: "Premium" },
    },
    market_intelligence: {
        bsr_history: [{ date: "2026-01-01", rank: 450 }],
        estimated_mo_sales: 1200,
        current_price: 129.99,
        estimated_revenue: 155988,
        fba_fees: 14.50,
        price_stability: "Fluctuating",
        buy_box_owner: "Amazon.com",
    },
    customer_intelligence: {
        star_breakdown: { "5_star": 0.7, "1_star": 0.05 },
        top_keywords_in_reviews: ["heavy duty", "plastic smells", "fast setup"],
        common_complaints: ["Short power cord", "Instruction manual unclear"],
        unanswered_questions_count: 12,
    },
    swot: {
        strengths: [
            "High variation count (5)",
            "Premium A+ Content Present",
            "Strong monthly sales volume (1200+)",
        ],
        weaknesses: [
            "No infographics in image gallery",
            "Feature-heavy bullets (lacks emotional hook)",
            "Frequent price fluctuation",
        ],
        opportunities: [
            {
                type: "The Gap Finder",
                input: "Q&A Section",
                output: "Customers keep asking about battery life, but it's not in your bullets. Action: Update Bullet #3.",
                impact_score: "High",
            },
            {
                type: "The Creative Edge",
                input: "Image Count",
                output: "Competitors have 3 videos; you have 0. Action: Add a lifestyle demo video.",
                impact_score: "+15% Conv",
            },
            {
                type: "Price Strategy",
                input: "90-day Price History",
                output: "Price is 20% higher than category avg with lower ratings. Action: Implement a 10% 'Green Coupon'.",
                impact_score: "Boost BSR",
            },
        ],
        threats: [
            "Buy Box dominated by Amazon.com (vendor competition)",
            "Rising negative sentiment on 'plastic smell'",
        ],
    },
    offers: [
        { seller_name: "Amazon.com", price: 129.99, is_fba: true, condition: "New", is_prime: true },
        { seller_name: "AudioExpert", price: 135.00, is_fba: false, condition: "New", is_prime: false },
    ],
    priority_checklist: [
        "Add Infographics to Image Gallery",
        "Answer 12 Unanswered Questions",
        "Update Bullet #3 with Battery Info",
        "Launch 'Green Coupon' Strategy",
        "Address 'Plastic Smell' in Description",
    ],
};
