import { NextResponse } from 'next/server';

export async function GET() {
    // Mock data for the agent to consume
    // In a real scenario, this would query a database or ERP system.
    const pricing = {
        items: [
            {
                sku: "AMZ-GROWTH-KIT",
                name: "Amazon Growth Starter Kit",
                wholesale_price: 450.00,
                msrp: 999.00,
                moq: 5,
                stock_status: "In Stock"
            },
            {
                sku: "LOGISTICS-BUNDLE",
                name: "FBA Prep Bundle",
                wholesale_price: 25.00,
                msrp: 49.99,
                moq: 100,
                stock_status: "Low Stock"
            }
        ],
        currency: "GBP",
        valid_until: "2026-12-31"
    };

    return NextResponse.json(pricing);
}
