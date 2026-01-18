const fetch = require('node-fetch');

const API_URL = 'http://localhost:3000/api/analyze';
const TEST_ASIN = 'B0BN8Z4TZ4'; // Known product

async function testApi() {
    console.log(`Starting Keepa Integration Test...`);
    console.log(`Target: ${API_URL}`);

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ asin: TEST_ASIN, domain: 'US' })
        });

        if (response.status !== 200) {
            console.error(`Error: API returned status ${response.status}`);
            const text = await response.text();
            console.error('Response:', text);
            return;
        }

        const data = await response.json();
        console.log('✅ API Call Successful');

        // Deep Data Verification
        console.log('\n--- Deep Data Verification ---');
        console.log('Product Name:', data.asin_metadata?.product_name?.substring(0, 30) + '...');
        console.log('Category:', data.asin_metadata?.category_path);
        console.log('Dimensions:', data.asin_metadata?.dimensions);
        console.log('Weight:', data.asin_metadata?.weight);
        console.log('Est. Revenue: $' + data.market_intelligence?.estimated_revenue?.toLocaleString());

        // Offers Verification
        console.log('\n--- Offers Verification ---');
        const count = data.offers ? data.offers.length : 0;
        console.log(`Active Offers Found: ${count}`);
        if (count > 0) {
            console.log('Top Offer:', data.offers[0].seller_name, '- $' + data.offers[0].price);
            console.log('Condition:', data.offers[0].condition);
            console.log('FBA:', data.offers[0].is_fba);
        } else {
            console.warn('⚠️ No offers found. This depends on Keepa data availability.');
        }

    } catch (error) {
        console.error('Test Failed:', error);
    }
}

testApi();
