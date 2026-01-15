"use client";

import SalesChart from "@/components/seller/dashboard/SalesChart";
import { BarChart, MapPin, MousePointer, Users } from "lucide-react";

export default function AnalyticsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Analytics & Insights</h1>
                    <p className="text-gray-500">Understand your customers and performance</p>
                </div>
                <select className="bg-white border border-gray-200 rounded-md text-sm px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500">
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                    <option>Year to Date</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-sm font-medium text-gray-500">Total Visitors</p>
                        <Users size={20} className="text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">12,543</h3>
                    <p className="text-xs text-green-600 flex items-center mt-1">+15% from last week</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-sm font-medium text-gray-500">Conversion Rate</p>
                        <BarChart size={20} className="text-purple-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">3.2%</h3>
                    <p className="text-xs text-green-600 flex items-center mt-1">+0.5% from last week</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-sm font-medium text-gray-500">Product Views</p>
                        <MousePointer size={20} className="text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">45,200</h3>
                    <p className="text-xs text-green-600 flex items-center mt-1">+22% from last week</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-sm font-medium text-gray-500">Top Location</p>
                        <MapPin size={20} className="text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Mumbai</h3>
                    <p className="text-xs text-gray-400 mt-1">24% of sales</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Revenue Trend</h3>
                <div className="h-[300px]">
                    <SalesChart />
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Top Products</h3>
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-md border border-gray-200"></div>
                                <div>
                                    <p className="font-semibold text-gray-900">Product Name {i}</p>
                                    <p className="text-xs text-gray-500">Footwear</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-gray-900">₹12,400</p>
                                <p className="text-xs text-green-600">24 orders</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
