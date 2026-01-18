import React from "react";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";

interface MetricCardProps {
    label: string;
    value: string | number;
    trend?: "up" | "down" | "neutral";
    trendValue?: string;
    subtext?: string;
}

export default function MetricCard({
    label,
    value,
    trend,
    trendValue,
    subtext,
}: MetricCardProps) {
    return (
        <div className="bg-white p-6 rounded-xl border border-[rgba(34,34,34,0.08)] shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    {label}
                </h3>
                {trend && (
                    <div
                        className={`flex items-center text-xs font-semibold px-2 py-1 rounded-full ${trend === "up"
                                ? "bg-green-100 text-green-700"
                                : trend === "down"
                                    ? "bg-red-100 text-red-700"
                                    : "bg-gray-100 text-gray-600"
                            }`}
                    >
                        {trend === "up" && <ArrowUp className="w-3 h-3 mr-1" />}
                        {trend === "down" && <ArrowDown className="w-3 h-3 mr-1" />}
                        {trend === "neutral" && <Minus className="w-3 h-3 mr-1" />}
                        {trendValue}
                    </div>
                )}
            </div>
            <div className="text-3xl font-bold text-[#222222] mb-1">{value}</div>
            {subtext && <p className="text-xs text-gray-400">{subtext}</p>}
        </div>
    );
}
