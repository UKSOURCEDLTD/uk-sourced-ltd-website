export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-soft-bg">
            <main className="max-w-3xl mx-auto p-12 md:p-24 prose prose-slate">
                <h1>Privacy Policy</h1>
                <p className="font-mono text-xs text-deep-charcoal/50">Last Update: January 2026</p>

                <h2>1. Data Collection</h2>
                <p>UK Sourced Ltd collects data to facilitate Amazon agency services. This includes but is not limited to: Contact details, Amazon Seller Central API tokens, and sales performance metrics.</p>

                <h2>2. AI Voice Processing</h2>
                <p>Our "Voice Sandbox" and "Talk to Founder" features utilize the Gemini Live API. Voice data is processed in real-time for the purpose of generating conversational responses. Audio streams are not permanently stored, but transcripts may be retained for quality assurance.</p>

                <h2>3. Third-Party Sharing</h2>
                <p>We do not sell your data. We share necessary data with trusted partners (e.g., Stripe, Firebase, Google Cloud) solely for operational purposes.</p>
            </main>
        </div>
    );
}
