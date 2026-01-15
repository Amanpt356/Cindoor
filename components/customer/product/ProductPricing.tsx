"use client";

import { Info, Truck, Check } from "lucide-react";

export default function ProductPricing() {
    return (
        <div className="border border-gray-100 rounded-xl p-6 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-bold text-gray-900">₹29,990</span>
                <span className="text-lg text-gray-400 line-through">MRP: ₹34,990</span>
                <span className="text-lg font-bold text-green-600">14% off</span>
            </div>

            <div className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full mb-4">
                Limited Time Deal
            </div>

            <div className="text-sm text-gray-600 mb-6 space-y-1">
                <p>Inclusive of all taxes</p>
                <p className="flex items-center gap-1">
                    <span className="font-medium">EMI</span> starts at ₹1,450. No Cost EMI available <Info size={14} className="text-gray-400" />
                </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex gap-3">
                    <Truck className="text-orange-600 flex-shrink-0" size={20} />
                    <div>
                        <p className="text-sm font-medium text-gray-900">FREE delivery <span className="text-green-600 font-bold">Tomorrow, Jan 16</span></p>
                        <p className="text-xs text-gray-500">Order within 4 hrs 32 mins</p>
                        <div className="flex items-center gap-1 mt-1 text-xs text-purple-700 font-bold">
                            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                            Fast Delivery Available
                        </div>
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-green-600" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-green-700">In Stock</p>
                        <p className="text-xs text-gray-500">Sold by <span className="font-medium text-blue-600">AudioWorld Tech</span> (4.8 ★)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
