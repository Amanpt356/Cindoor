"use client";

import { Tag, Zap, Percent, Megaphone } from "lucide-react";

export default function MarketingPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Marketing & Promotions</h1>
                    <p className="text-gray-500">Boost your sales with campaigns</p>
                </div>
                <button className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors">
                    + Create Promotion
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-2">CinSale Festival 2026</h3>
                        <p className="opacity-90 mb-6">Join the biggest sale event of the year. Get 3x visibility.</p>
                        <button className="px-4 py-2 bg-white text-orange-600 font-bold rounded-lg text-sm hover:bg-gray-100 transition-colors">
                            Register Now
                        </button>
                    </div>
                    <Megaphone className="absolute right-[-20px] bottom-[-20px] text-white opacity-20 w-40 h-40" />
                </div>

                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-2 text-orange-600 font-semibold">
                            <Zap size={20} />
                            <h3>Flash Deals</h3>
                        </div>
                        <p className="text-gray-500 text-sm">Create limited-time offers to drive urgency.</p>
                    </div>
                    <button className="mt-4 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 text-gray-700 w-full">
                        Schedule Deal
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 font-bold text-gray-900">
                    Active Promotions
                </div>
                <div className="divide-y divide-gray-100">
                    {[1, 2].map((i) => (
                        <div key={i} className="p-6 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                                    <Percent size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Summer Clearout Sale</h4>
                                    <p className="text-sm text-gray-500">Flat 20% off on all Footwear</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-right hidden md:block">
                                    <p className="text-sm font-semibold text-gray-900">245 Used</p>
                                    <p className="text-xs text-gray-400">Ends in 2 days</p>
                                </div>
                                <button className="text-sm text-red-600 font-medium hover:text-red-700">Stop</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
