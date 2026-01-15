"use client";

import { ShoppingCart, Heart, Zap } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useProduct } from "@/context/ProductContext";

export default function StickyActions() {
    const { addToCart, toggleCart } = useCart();
    const { selectedColor, selectedModel, currentImages } = useProduct();

    const handleAddToCart = () => {
        addToCart({
            id: "sony-wh-1000xm5", // Mock ID - in real app would come from props
            title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
            price: 29990,
            image: currentImages[0],
            quantity: 1,
            color: selectedColor,
            model: selectedModel
        });
        toggleCart(); // Open cart to confirm
    };

    return (
        <div className="space-y-3">
            {/* Desktop View */}
            <div className="grid grid-cols-2 gap-3">
                <button
                    onClick={handleAddToCart}
                    className="col-span-1 px-6 py-3.5 bg-yellow-400 text-gray-900 rounded-full font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                    <ShoppingCart size={20} /> Add to Cart
                </button>
                <button className="col-span-1 px-6 py-3.5 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-200">
                    <Zap size={20} /> Buy Now
                </button>
            </div>

            <button className="w-full px-6 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <Heart size={18} /> Add to Wishlist
            </button>
        </div>
    );
}
