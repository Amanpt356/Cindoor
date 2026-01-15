"use client";

import { Plus, Search, Filter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const products = [
    { id: 1, name: "Nike Air Jordan 1", category: "Footwear", price: "₹12,499", stock: 45, status: "Active", image: "https://placehold.co/50x50" },
    { id: 2, name: "Adidas Ultraboost", category: "Footwear", price: "₹15,999", stock: 12, status: "Low Stock", image: "https://placehold.co/50x50" },
    { id: 3, name: "Puma T-Shirt", category: "Apparel", price: "₹1,499", stock: 120, status: "Active", image: "https://placehold.co/50x50" },
    { id: 4, name: "Wireless Headphones", category: "Electronics", price: "₹2,999", stock: 0, status: "Out of Stock", image: "https://placehold.co/50x50" },
];

export default function ProductsPage() {
    const [activeTab, setActiveTab] = useState("All");

    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Products</h1>
                    <p className="text-gray-500">Manage your product catalog</p>
                </div>
                <Link href="/seller/products/new" className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors flex items-center gap-2">
                    <Plus size={18} /> Add New Product
                </Link>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Filters */}
                <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row gap-4 justify-between">
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                        {["All", "Active", "Draft", "Out of Stock"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={cn(
                                    "px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors",
                                    activeTab === tab
                                        ? "bg-orange-50 text-orange-600"
                                        : "text-gray-600 hover:bg-gray-50"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full md:w-64"
                            />
                        </div>
                        <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-500">
                            <Filter size={18} />
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-500">
                            <tr>
                                <th className="px-6 py-4 font-medium">Product Name</th>
                                <th className="px-6 py-4 font-medium">Category</th>
                                <th className="px-6 py-4 font-medium">Price</th>
                                <th className="px-6 py-4 font-medium">Stock</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {products.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-md bg-gray-100 flex-shrink-0"></div>
                                            <span className="font-medium text-gray-900">{product.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{product.category}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{product.price}</td>
                                    <td className="px-6 py-4 text-gray-600">{product.stock}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={cn(
                                                "px-2.5 py-0.5 rounded-full text-xs font-medium",
                                                product.status === "Active"
                                                    ? "bg-green-100 text-green-700"
                                                    : product.status === "Low Stock"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : "bg-red-100 text-red-700"
                                            )}
                                        >
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="text-orange-600 hover:text-orange-700 font-medium text-xs">Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination (Mock) */}
                <div className="p-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                    <span>Showing 1-4 of 12 products</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Prev</button>
                        <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
