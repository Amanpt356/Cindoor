"use client";

import Image from "next/image";
import { Plus } from "lucide-react";

export default function RelatedProducts() {
    return (
        <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">Frequently Bought Together</h3>

            <div className="bg-white p-6 rounded-xl border border-gray-100 flex flex-col md:flex-row items-center gap-6">
                {/* Main Product */}
                <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                        src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1976&auto=format&fit=crop"
                        alt="Main"
                        fill
                        className="object-contain"
                    />
                </div>

                <Plus className="text-gray-400" />

                {/* Suggested Accessory */}
                <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                        src="https://images.unsplash.com/photo-1628151016024-d50c76ce17bb?q=80&w=1921&auto=format&fit=crop"
                        alt="Accessory"
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="flex-1 text-center md:text-left">
                    <div className="mb-2">
                        <p className="font-medium text-gray-900">Total Price: <span className="text-red-700 font-bold">₹31,490</span></p>
                    </div>
                    <button className="px-6 py-2 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold hover:bg-yellow-500 transition-colors">
                        Add Both to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
