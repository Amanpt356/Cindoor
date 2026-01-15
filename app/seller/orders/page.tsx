"use client";

import { CheckCircle, Clock, Truck, XCircle, Search, MoreHorizontal, Printer, Box } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const orders = [
    { id: "#ORD-7352", product: "Nike Air Jordan 1", quantity: 1, customer: "Alex Smith", date: "15 Jan, 10:23 AM", amount: "₹12,400", status: "New", payment: "Paid" },
    { id: "#ORD-7351", product: "Cotton T-Shirt", quantity: 2, customer: "Maria Garcia", date: "15 Jan, 09:15 AM", amount: "₹899", status: "Processing", payment: "COD" },
    { id: "#ORD-7350", product: "Wireless Earbuds", quantity: 1, customer: "John Doe", date: "14 Jan, 02:45 PM", amount: "₹2,499", status: "Shipped", payment: "Paid" },
    { id: "#ORD-7349", product: "Gaming Mouse", quantity: 1, customer: "Sarah Wilson", date: "14 Jan, 11:30 AM", amount: "₹1,200", status: "Delivered", payment: "Paid" },
    { id: "#ORD-7348", product: "Running Shoes", quantity: 1, customer: "Mike Jones", date: "13 Jan, 05:00 PM", amount: "₹4,500", status: "Cancelled", payment: "Refunded" },
];

const statusTabs = ["All", "New", "Processing", "Shipped", "Delivered", "Returns", "Cancelled"];

export default function OrdersPage() {
    const [activeTab, setActiveTab] = useState("All");

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
                    <p className="text-gray-500">Process and track your orders</p>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 border border-orange-200 bg-orange-50 text-orange-700 rounded-md text-sm font-medium hover:bg-orange-100">
                        <Printer size={16} /> Batch Print Invoices
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Tabs */}
                <div className="border-b border-gray-100 overflow-x-auto">
                    <div className="flex px-4">
                        {statusTabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={cn(
                                    "px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors",
                                    activeTab === tab
                                        ? "border-orange-500 text-orange-600"
                                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Filters */}
                <div className="p-4 border-b border-gray-100 flex gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <input type="text" placeholder="Search by Order ID, Customer Name..." className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full" />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-500">
                            <tr>
                                <th className="px-6 py-4 font-medium">Order ID</th>
                                <th className="px-6 py-4 font-medium">Product Details</th>
                                <th className="px-6 py-4 font-medium">Customer</th>
                                <th className="px-6 py-4 font-medium">Amount/Payment</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50 transition-colors text-gray-900">
                                    <td className="px-6 py-4 font-bold text-orange-600">{order.id}
                                        <div className="text-[10px] text-gray-400 font-normal mt-0.5">{order.date}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="font-medium">{order.product}</p>
                                        <p className="text-xs text-gray-500">Qty: {order.quantity}</p>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 font-medium">{order.customer}</td>
                                    <td className="px-6 py-4">
                                        <p className="font-bold">{order.amount}</p>
                                        <p className={cn("text-xs font-medium", order.payment === "Paid" ? "text-green-600" : "text-yellow-600")}>{order.payment}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium",
                                            order.status === "New" ? "bg-blue-100 text-blue-700" :
                                                order.status === "Processing" ? "bg-yellow-100 text-yellow-700" :
                                                    order.status === "Shipped" ? "bg-purple-100 text-purple-700" :
                                                        order.status === "Delivered" ? "bg-green-100 text-green-700" :
                                                            "bg-red-100 text-red-700"
                                        )}>
                                            {order.status === "New" && <Clock size={12} />}
                                            {order.status === "Shipped" && <Truck size={12} />}
                                            {order.status === "Delivered" && <CheckCircle size={12} />}
                                            {order.status === "Cancelled" && <XCircle size={12} />}
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            {order.status === "New" && (
                                                <button className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white text-xs font-medium rounded hover:bg-green-700">
                                                    Accept
                                                </button>
                                            )}
                                            {order.status === "Processing" && (
                                                <button className="flex items-center gap-1 px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded hover:bg-purple-700">
                                                    <Box size={12} /> Ship
                                                </button>
                                            )}
                                            <button className="p-1 hover:bg-gray-100 rounded text-gray-500">
                                                <MoreHorizontal size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                    <span>Showing 1-5 of 12 orders</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Prev</button>
                        <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
