"use client";
import React, { useState } from "react";
import { CheckSquare, Square, ClipboardList } from "lucide-react";

interface ActionChecklistProps {
    items: string[];
}

export default function ActionChecklist({ items }: ActionChecklistProps) {
    const [checkedItems, setCheckedItems] = useState<number[]>([]);

    const toggleItem = (idx: number) => {
        if (checkedItems.includes(idx)) {
            setCheckedItems(checkedItems.filter((i) => i !== idx));
        } else {
            setCheckedItems([...checkedItems, idx]);
        }
    };

    return (
        <div className="bg-white p-6 rounded-xl border border-[rgba(34,34,34,0.08)] h-full flex flex-col">
            <h3 className="font-semibold uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-gray-100 pb-4 text-[#222222]">
                <ClipboardList className="w-5 h-5 text-[#222222]" />
                <span>Priority Actions</span>
                <span className="bg-[#008080] text-xs px-2 py-0.5 rounded text-white ml-auto font-bold shadow-sm">
                    {items.length - checkedItems.length} Pending
                </span>
            </h3>
            <div className="flex-grow space-y-3 overflow-y-auto pr-2 custom-scrollbar">
                {items.map((item, idx) => {
                    const isChecked = checkedItems.includes(idx);
                    return (
                        <div
                            key={idx}
                            onClick={() => toggleItem(idx)}
                            className={`group flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 border ${isChecked
                                ? "bg-gray-50 border-gray-100 opacity-60"
                                : "bg-soft-bg border-gray-200 hover:border-[#008080]/30 hover:shadow-sm hover:bg-white"
                                }`}
                        >
                            <div className={`mt-0.5 shrink-0 transition-colors ${isChecked ? "text-[#008080]" : "text-gray-400 group-hover:text-[#008080]"}`}>
                                {isChecked ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5" />}
                            </div>
                            <p
                                className={`text-sm leading-snug font-medium transition-all ${isChecked ? "line-through text-gray-400" : "text-[#222222] group-hover:text-black"
                                    }`}
                            >
                                {item}
                            </p>
                        </div>
                    );
                })}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                <button className="text-xs text-[#008080] font-bold hover:text-[#006666] uppercase tracking-wider transition-colors flex items-center justify-center gap-1 group">
                    Generate Implementation Plan
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>
        </div>
    );
}
