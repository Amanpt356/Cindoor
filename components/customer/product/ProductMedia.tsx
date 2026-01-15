"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useProduct } from "@/context/ProductContext";

export default function ProductMedia() {
    const { currentImages } = useProduct();
    const [activeImage, setActiveImage] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);

    // Reset active image when images change (e.g. color change)
    useEffect(() => {
        setActiveImage(0);
    }, [currentImages]);

    return (
        <div className="space-y-4 lg:sticky lg:top-24">
            {/* Main Image */}
            <div
                className="relative bg-gray-50 rounded-2xl overflow-hidden aspect-square border border-gray-100 cursor-zoom-in"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
            >
                <Image
                    key={currentImages[activeImage]} // Key forces re-render for animation
                    src={currentImages[activeImage]}
                    alt="Product View"
                    fill
                    className={cn(
                        "object-contain p-8 transition-transform duration-500 origin-center ease-out",
                        isZoomed ? "scale-150" : "scale-100"
                    )}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold rounded-full shadow-sm">
                    360° View
                </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
                {currentImages.map((img, idx) => (
                    <button
                        key={img}
                        onClick={() => setActiveImage(idx)}
                        className={cn(
                            "relative aspect-square rounded-lg border-2 overflow-hidden bg-gray-50 transition-all",
                            activeImage === idx ? "border-orange-600 ring-2 ring-orange-100" : "border-transparent hover:border-gray-200"
                        )}
                    >
                        <Image
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            fill
                            className="object-contain p-2"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
