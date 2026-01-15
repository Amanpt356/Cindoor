"use client";

import { Star, Share2 } from "lucide-react";

export default function ProductInfo() {
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-start">
                <div>
                    <span className="text-orange-600 font-medium text-sm">Sony</span>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">Sony WH-1000XM5 Wireless Noise Cancelling Headphones, 30 Hours Battery Life - Black</h1>
                </div>
                <button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
                    <Share2 size={20} />
                </button>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <span className="text-sm font-medium text-gray-700 ml-1">4.8</span>
                </div>
                <span className="text-sm text-blue-600 hover:underline cursor-pointer">12,453 ratings</span>
                <span className="text-gray-300">|</span>
                <span className="text-sm text-blue-600 hover:underline cursor-pointer">1,000+ answered questions</span>
            </div>

            <div className="border-t border-b border-gray-100 py-4 my-4">
                <h4 className="font-semibold text-gray-900 mb-2">Highlights</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    <li>Industry-leading noise cancellation optimized for you</li>
                    <li>Magnificent Sound, engineered to perfection</li>
                    <li>Crystal clear hands-free calling</li>
                    <li>Up to 30-hour battery life with quick charging (3 min charge for 3 hours of playback)</li>
                    <li>Multipoint connection allows switching between two devices effortlessly</li>
                </ul>
            </div>
        </div>
    );
}
