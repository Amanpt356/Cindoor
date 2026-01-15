"use client";

import ProductCard from "../ProductCard";

// Mock data extended from FeaturedProducts
const products = [
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
    {
        id: 5,
        title: "Analog Classic Watch",
        price: 5999,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop",
        rating: 4.3
    },
    {
        id: 6,
        title: "Ergonomic Office Chair",
        price: 12499,
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=2070&auto=format&fit=crop",
        rating: 4.6
    }
];

export default function ShopGrid() {
    return (
        <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
                <p className="text-gray-500">Showing 6 of 124 results</p>
                <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-orange-500 bg-white">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest Arrivals</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <button className="px-6 py-2 border border-gray-200 rounded-full text-gray-600 hover:bg-gray-50 font-medium transition-colors">
                    Load More Products
                </button>
            </div>
        </div>
    );
}
