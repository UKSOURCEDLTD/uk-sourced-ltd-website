import React from "react";
import { CheckCircle2, AlertTriangle, Lightbulb, ShieldAlert } from "lucide-react";
import { AnalysisOpportunity } from "./mockData";

interface SwotGridProps {
    data: {
        strengths: string[];
        weaknesses: string[];
        opportunities: AnalysisOpportunity[];
        threats: string[];
    };
}

export default function SwotGrid({ data }: SwotGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            {/* Strengths */}
            <div className="bg-white p-6 rounded-xl border border-[rgba(34,34,34,0.08)]">
                <div className="flex items-center gap-2 mb-4 text-[#008080]">
                    <CheckCircle2 className="w-5 h-5" />
                    <h3 className="font-semibold uppercase tracking-wider">Strengths</h3>
                </div>
                <ul className="space-y-3">
                    {data.strengths.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#008080] mt-1.5 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Weaknesses */}
            <div className="bg-white p-6 rounded-xl border border-[rgba(34,34,34,0.08)]">
                <div className="flex items-center gap-2 mb-4 text-orange-500">
                    <AlertTriangle className="w-5 h-5" />
                    <h3 className="font-semibold uppercase tracking-wider">Weaknesses</h3>
                </div>
                <ul className="space-y-3">
                    {data.weaknesses.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Opportunities (The AI Logic) */}
            <div className="bg-white p-6 rounded-xl border border-[rgba(34,34,34,0.08)] md:col-span-2 bg-gradient-to-br from-white to-[#F0FDFD]">
                <div className="flex items-center gap-2 mb-4 text-[#008080]">
                    <Lightbulb className="w-5 h-5" />
                    <h3 className="font-semibold uppercase tracking-wider">
                        AI Opportunities <span className="text-xs normal-case font-normal text-gray-400 ml-2">(High Impact)</span>
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data.opportunities.map((opp, idx) => (
                        <div key={idx} className="bg-white/60 p-4 rounded-lg border border-[rgba(34,34,34,0.05)] backdrop-blur-sm">
                            <div className="text-xs font-bold text-[#008080] mb-1">{opp.type}</div>
                            <div className="text-xs text-gray-400 mb-2">Source: {opp.input}</div>
                            <p className="text-sm text-[#222222] font-medium leading-relaxed">
                                &quot;{opp.output}&quot;
                            </p>
                            <div className="mt-3 inline-block px-2 py-1 bg-[#008080]/10 text-[#008080] text-[10px] font-bold rounded uppercase tracking-wide">
                                Impact: {opp.impact_score}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Threats */}
            <div className="bg-white p-6 rounded-xl border border-[rgba(34,34,34,0.08)] md:col-span-2">
                <div className="flex items-center gap-2 mb-4 text-red-500">
                    <ShieldAlert className="w-5 h-5" />
                    <h3 className="font-semibold uppercase tracking-wider">Threats</h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {data.threats.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2 bg-red-50 p-3 rounded-md">
                            <span className="shrink-0 mt-0.5 text-red-400">•</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
