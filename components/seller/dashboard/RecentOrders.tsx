"use client";

import { Eye, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const orders = [
    { id: "#ORD-7352", product: "Nike Air Jordan", customer: "Alex Smith", date: "Today, 10:23 AM", amount: "₹12,400", status: "New" },
    { id: "#ORD-7351", product: "Cotton T-Shirt", customer: "Maria Garcia", date: "Today, 09:15 AM", amount: "₹899", status: "Processing" },
    { id: "#ORD-7350", product: "Wireless Earbuds", customer: "John Doe", date: "Yesterday", amount: "₹2,499", status: "Shipped" },
    { id: "#ORD-7349", product: "Gaming Mouse", customer: "Sarah Wilson", date: "Yesterday", amount: "₹1,200", status: "Delivered" },
];

const statusColor = {
    New: "bg-blue-100 text-blue-700",
    Processing: "bg-yellow-100 text-yellow-700",
    Shipped: "bg-purple-100 text-purple-700",
    Delivered: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
};

export default function RecentOrders() {
    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-900">Recent Orders</h3>
                <button className="text-sm text-orange-600 font-medium hover:text-orange-700">View All</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-500">
                        <tr>
                            <th className="px-6 py-3 font-medium">Order ID</th>
                            <th className="px-6 py-3 font-medium">Product</th>
                            <th className="px-6 py-3 font-medium">Customer</th>
                            <th className="px-6 py-3 font-medium">Amount</th>
                            <th className="px-6 py-3 font-medium">Status</th>
                            <th className="px-6 py-3 font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                                <td className="px-6 py-4 text-gray-600">{order.product}</td>
                                <td className="px-6 py-4 text-gray-600">{order.customer}
                                    <div className="text-[10px] text-gray-400">{order.date}</div>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">{order.amount}</td>
                                <td className="px-6 py-4">
                                    <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-medium", statusColor[order.status as keyof typeof statusColor])}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="p-1 hover:bg-gray-100 rounded text-gray-500">
                                        <MoreHorizontal size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
