"use client";

import { Bell, AlertTriangle, Package, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

const notifications = [
    { id: 1, title: "New Order #7352", message: "You received a new order from Alex Smith.", time: "2 min ago", type: "order", icon: Package, color: "bg-blue-100 text-blue-600" },
    { id: 2, title: "Low Stock Alert", message: "Nike Air Jordan (Size 9) is running low.", time: "1 hour ago", type: "alert", icon: AlertTriangle, color: "bg-orange-100 text-orange-600" },
    { id: 3, title: "Payment Received", message: "Weekly payout of ₹45,200 processed.", time: "5 hours ago", type: "payment", icon: CreditCard, color: "bg-green-100 text-green-600" },
    { id: 4, title: "Policy Update", message: "New return policy effective from tomorrow.", time: "1 day ago", type: "info", icon: Bell, color: "bg-gray-100 text-gray-600" },
];

export default function NotificationsPanel() {
    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 h-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Notifications</h3>
                <button className="text-xs text-orange-600 font-medium hover:text-orange-700">Mark all read</button>
            </div>
            <div className="space-y-6">
                {notifications.map((notif) => (
                    <div key={notif.id} className="flex gap-4">
                        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0", notif.color)}>
                            <notif.icon size={18} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-900">{notif.title}</p>
                            <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{notif.message}</p>
                            <span className="text-[10px] text-gray-400 mt-1 block">{notif.time}</span>
                        </div>
                    </div>
                ))}
            </div>
            <button className="w-full mt-6 py-2 text-sm text-gray-500 font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                View All Notifications
            </button>
        </div>
    );
}
