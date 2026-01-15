"use client";

import { ShoppingBag, TrendingUp, Package, AlertTriangle } from "lucide-react";
import StatsCard from "@/components/seller/dashboard/StatsCard";
import SalesChart from "@/components/seller/dashboard/SalesChart";
import RecentOrders from "@/components/seller/dashboard/RecentOrders";
import NotificationsPanel from "@/components/seller/dashboard/NotificationsPanel";
import { motion } from "framer-motion";

export default function SellerDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-500">Welcome back, here's what's happening today.</p>
                </div>
                <div className="flex gap-3">
                    <select className="bg-white border border-gray-200 rounded-md text-sm px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500">
                        <option>Today</option>
                        <option>This Week</option>
                        <option>This Month</option>
                    </select>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors">
                        + Add Product
                    </button>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <StatsCard title="Total Sales" value="₹12,450" icon={TrendingUp} trend="+12.5%" trendUp={true} color="green" description="vs. previous day" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <StatsCard title="Total Orders" value="24" icon={ShoppingBag} trend="-2.4%" trendUp={false} color="blue" description="4 pending orders" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <StatsCard title="Products" value="156" icon={Package} color="purple" description="12 low stock" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <StatsCard title="Pending Shipments" value="8" icon={AlertTriangle} color="orange" description="Requires attention" />
                </motion.div>
            </div>

            {/* Charts & Notifications */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <SalesChart />
                </div>
                <div>
                    <NotificationsPanel />
                </div>
            </div>

            {/* Recent Orders */}
            <RecentOrders />
        </div>
    );
}
