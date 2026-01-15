"use client";

import { AlertTriangle, History, RefreshCcw, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const inventoryItems = [
    { id: 1, name: "Nike Air Jordan 1", sku: "NKE-AJ1-001", stock: 45, alertLevel: 10, status: "Good" },
    { id: 2, name: "Adidas Ultraboost", sku: "ADS-UB-002", stock: 5, alertLevel: 10, status: "Low Stock" },
    { id: 3, name: "Puma T-Shirt White", sku: "PMA-TS-003", stock: 120, alertLevel: 20, status: "Good" },
    { id: 4, name: "Wireless Headphones", sku: "SON-WH-004", stock: 0, alertLevel: 5, status: "Out of Stock" },
];

const historyLogs = [
    { id: 1, date: "Today, 10:30 AM", item: "Nike Air Jordan 1", action: "Stock Added", quantity: "+20", user: "Admin" },
    { id: 2, date: "Yesterday, 4:15 PM", item: "Adidas Ultraboost", action: "Order #7351", quantity: "-1", user: "System" },
    { id: 3, date: "12 Jan, 09:00 AM", item: "Puma T-Shirt White", action: "Stock Adjustment", quantity: "-5", user: "Admin" },
];

export default function InventoryPage() {
    const [activeTab, setActiveTab] = useState("Stock");

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Inventory Management</h1>
                    <p className="text-gray-500">Track stock levels and movements</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => setActiveTab("Stock")}
                        className={cn("px-4 py-2 rounded-md font-medium text-sm transition-colors", activeTab === "Stock" ? "bg-orange-600 text-white" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50")}
                    >
                        Stock Overview
                    </button>
                    <button
                        onClick={() => setActiveTab("History")}
                        className={cn("px-4 py-2 rounded-md font-medium text-sm transition-colors", activeTab === "History" ? "bg-orange-600 text-white" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50")}
                    >
                        Movement History
                    </button>
                </div>
            </div>

            {activeTab === "Stock" ? (
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-gray-100 flex justify-between gap-4">
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                            <input type="text" placeholder="Search by SKU or Name..." className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full" />
                        </div>
                        <div className="flex gap-2">
                            <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                                <AlertTriangle size={16} /> Low Stock Only
                            </button>
                            <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                                <RefreshCcw size={16} /> Sync
                            </button>
                        </div>
                    </div>

                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-500">
                            <tr>
                                <th className="px-6 py-4 font-medium">SKU</th>
                                <th className="px-6 py-4 font-medium">Product Name</th>
                                <th className="px-6 py-4 font-medium text-center">Available Stock</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium">Quick Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {inventoryItems.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50 text-gray-900">
                                    <td className="px-6 py-4 font-mono text-gray-500">{item.sku}</td>
                                    <td className="px-6 py-4 font-medium">{item.name}</td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={cn("font-bold text-lg", item.stock <= item.alertLevel ? "text-red-600" : "text-gray-900")}>
                                            {item.stock}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-medium",
                                            item.status === "Low Stock" ? "bg-yellow-100 text-yellow-700" :
                                                item.status === "Out of Stock" ? "bg-red-100 text-red-700" :
                                                    "bg-green-100 text-green-700")}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 flex gap-2">
                                        <button className="text-orange-600 hover:text-orange-700 font-medium text-xs">Adjust</button>
                                        <span className="text-gray-300">|</span>
                                        <button className="text-gray-600 hover:text-gray-800 font-medium text-xs">History</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-500">
                            <tr>
                                <th className="px-6 py-4 font-medium">Date & Time</th>
                                <th className="px-6 py-4 font-medium">Item</th>
                                <th className="px-6 py-4 font-medium">Action</th>
                                <th className="px-6 py-4 font-medium">Quantity Change</th>
                                <th className="px-6 py-4 font-medium">User</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {historyLogs.map((log) => (
                                <tr key={log.id} className="hover:bg-gray-50 text-gray-900">
                                    <td className="px-6 py-4 text-gray-500">{log.date}</td>
                                    <td className="px-6 py-4 font-medium">{log.item}</td>
                                    <td className="px-6 py-4 text-gray-600 flex items-center gap-2">
                                        <History size={14} className="text-gray-400" />
                                        {log.action}
                                    </td>
                                    <td className={cn("px-6 py-4 font-medium", log.quantity.startsWith("+") ? "text-green-600" : "text-red-600")}>
                                        {log.quantity}
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">{log.user}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
