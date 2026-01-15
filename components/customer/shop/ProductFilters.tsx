"use client";

import { SlidersHorizontal } from "lucide-react";

export default function ProductFilters() {
    return (
        <div className="w-64 flex-shrink-0 hidden lg:block space-y-8">
            <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <SlidersHorizontal size={18} /> Filters
                </h3>

                <div className="space-y-4">
                    <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Category</h4>
                        <div className="space-y-2">
                            {['All', 'Electronics', 'Fashion', 'Home', 'Beauty'].map((cat) => (
                                <label key={cat} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-orange-600">
                                    <input type="checkbox" className="rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                                    {cat}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Price Range</h4>
                        <div className="space-y-2">
                            {['Under ₹1,000', '₹1,000 - ₹5,000', '₹5,000 - ₹10,000', 'Over ₹10,000'].map((price) => (
                                <label key={price} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-orange-600">
                                    <input type="radio" name="price" className="rounded-full border-gray-300 text-orange-600 focus:ring-orange-500" />
                                    {price}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Rating</h4>
                        <div className="space-y-2">
                            {[4, 3, 2, 1].map((rating) => (
                                <label key={rating} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-orange-600">
                                    <input type="checkbox" className="rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                                    {rating}+ Stars
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
