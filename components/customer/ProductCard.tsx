"use client";

import { Heart, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
    title: string;
    price: number;
    image: string;
    category: string;
    rating: number;
}

export default function ProductCard({ title, price, image, category, rating }: ProductCardProps) {
    return (
        <Link href={`/product/${title.toLowerCase().replace(/\s+/g, '-')}-123`} className="group block bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-red-500 hover:bg-white transition-colors" suppressHydrationWarning onClick={(e) => e.preventDefault()}>
                    <Heart size={18} />
                </button>
            </div>

            <div className="p-4">
                <div className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wide">{category}</div>
                <h3 className="font-semibold text-gray-900 mb-2 truncate group-hover:text-orange-600 transition-colors">{title}</h3>

                <div className="flex items-center justify-between mt-3">
                    <span className="text-lg font-bold text-gray-900">₹{price.toLocaleString('en-IN')}</span>
                    <button className="p-2 bg-gray-900 text-white rounded-lg hover:bg-orange-600 transition-colors" suppressHydrationWarning onClick={(e) => e.preventDefault()}>
                        <Plus size={18} />
                    </button>
                </div>
            </div>
        </Link>
    );
}
