"use client";

import ProductCard from "./ProductCard";

const featuredProducts = [
    {
        id: 1,
        title: "Sony WH-1000XM5 Wireless Headphones",
        price: 29990,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1976&auto=format&fit=crop",
        rating: 4.8
    },
    {
        id: 2,
        title: "MacBook Air M2 Midnight",
        price: 114900,
        category: "Laptops",
        image: "https://images.unsplash.com/photo-1611186871348-af283e9aadb9?q=80&w=2070&auto=format&fit=crop",
        rating: 4.9
    },
    {
        id: 3,
        title: "Nike Air Jordan 1 High OG",
        price: 16995,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
        rating: 4.7
    },
    {
        id: 4,
        title: "Nothing Phone (2) Dark Grey",
        price: 39999,
        category: "Mobiles",
        image: "https://images.unsplash.com/photo-1691434316629-d5d143c75d40?q=80&w=2070&auto=format&fit=crop",
        rating: 4.5
    },
];

export default function FeaturedProducts() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
                    <button className="text-orange-600 font-medium hover:text-orange-700 transition-colors">
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            {...product}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
