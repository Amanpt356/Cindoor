"use client";

import { Sparkles, Bot, ThumbsUp } from "lucide-react";
import Image from "next/image";

export default function AIRecommendations() {
    return (
        <div className="mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 relative overflow-hidden">

            {/* Background decoration */}
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <Bot size={120} className="text-indigo-600" />
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-indigo-600 text-white rounded-lg">
                        <Sparkles size={20} />
                    </div>
                    <h2 className="text-xl font-bold text-indigo-900">AI Personal Shopper</h2>
                </div>

                <p className="text-indigo-700 mb-6 max-w-2xl">
                    Based on your recent interest in <strong>Electronics</strong> and <strong>Modern Decor</strong>,
                    Cindoor AI has curated these selections just for you.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white p-3 rounded-xl border border-indigo-100 flex gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                            <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                <Image
                                    src={`https://images.unsplash.com/photo-${i === 1 ? "1593359661850-362a7a40895f" : i === 2 ? "1505740420928-5e560c06d30e" : "1523275335684-37898b6baf30"}?q=80&w=300&auto=format&fit=crop`}
                                    alt="AI Pick"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-xs font-semibold text-indigo-600 mb-1 flex items-center gap-1">
                                    <ThumbsUp size={12} /> 9{8 + i}% Match
                                </span>
                                <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                                    {i === 1 ? "Smart Home Controller Hub" : i === 2 ? "Premium Wireless Earbuds" : "Modern Desk Lamp"}
                                </h4>
                                <span className="text-xs text-gray-500 mt-1">₹{i}999</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
