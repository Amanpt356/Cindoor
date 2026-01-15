"use client";

import { useForm } from "react-hook-form";
import { ArrowLeft, Save, Upload } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function NewProductPage() {
    const [images, setImages] = useState<string[]>([]);

    const handleImageUpload = (e: any) => {
        // Mock upload
        const file = e.target.files[0];
        if (file) {
            setImages([...images, URL.createObjectURL(file)]);
        }
    };

    return (
        <div className="max-w-5xl mx-auto pb-10">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/seller/products" className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Add New Product</h1>
                </div>
                <div className="ml-auto flex gap-3">
                    <button className="px-4 py-2 border border-gray-200 rounded-md text-sm font-medium hover:bg-gray-50">
                        Save as Draft
                    </button>
                    <button className="px-4 py-2 bg-orange-600 text-white rounded-md text-sm font-medium hover:bg-orange-700 flex items-center gap-2">
                        <Save size={16} /> Publish Product
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">General Information</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="e.g. Nike Air Max" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 h-32" placeholder="Product description..." />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Media</h3>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer relative">
                            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleImageUpload} />
                            <Upload size={32} className="text-gray-400 mb-2" />
                            <p className="text-sm font-medium text-gray-700">Click to upload image</p>
                            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                        </div>
                        {images.length > 0 && (
                            <div className="flex gap-4 mt-4 overflow-x-auto">
                                {images.map((src, idx) => (
                                    <div key={idx} className="w-20 h-20 rounded-md border border-gray-200 overflow-hidden relative">
                                        <img src={src} alt="Preview" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Pricing</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">MRP (₹)</label>
                                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="0.00" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Selling Price (₹)</label>
                                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="0.00" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Inventory</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">SKU</label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="SKU-1234" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label>
                                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="0" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Organization</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                                    <option>Fashion</option>
                                    <option>Electronics</option>
                                    <option>Home & Garden</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Brand Name" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Variants</h3>
                        <p className="text-sm text-gray-500 mb-4">Does this product have variations like size or color?</p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="hasVariants" className="rounded text-orange-600 focus:ring-orange-500" />
                                <label htmlFor="hasVariants" className="text-sm text-gray-700">Yes, add variants</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
