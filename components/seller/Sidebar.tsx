"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Layers,
    Wallet,
    BarChart,
    Bot,
    Megaphone,
    Headphones,
    Settings,
    LogOut,
    Menu,
    X,
    Store
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sidebarItems = [
    { name: "Dashboard", href: "/seller/dashboard", icon: LayoutDashboard },
    { name: "Products", href: "/seller/products", icon: Package },
    { name: "Orders", href: "/seller/orders", icon: ShoppingCart },
    { name: "Inventory", href: "/seller/inventory", icon: Layers },
    { name: "Payments", href: "/seller/payments", icon: Wallet },
    { name: "Analytics", href: "/seller/analytics", icon: BarChart },
    { name: "AI Assistant", href: "/seller/ai-assistant", icon: Bot, highlight: true },
    { name: "Marketing", href: "/seller/marketing", icon: Megaphone },
    { name: "Support", href: "/seller/support", icon: Headphones },
    { name: "Settings", href: "/seller/settings", icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overlay for mobile */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="lg:hidden fixed inset-0 bg-black z-40"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar Container */}
            <motion.aside
                className={cn(
                    "fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* Logo */}
                <div className="h-16 flex items-center px-6 border-b border-gray-100">
                    <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                        Cindoor
                    </span>
                    <span className="ml-2 text-xs font-semibold px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                        Seller Studio
                    </span>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                    {sidebarItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-orange-50 text-orange-600"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                    item.highlight && !isActive && "text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                                )}
                            >
                                <item.icon
                                    size={20}
                                    className={cn("mr-3", isActive ? "text-orange-600" : "text-gray-400", item.highlight && !isActive && "text-purple-600")}
                                />
                                {item.name}
                                {item.highlight && (
                                    <span className="ml-auto text-[10px] font-bold px-1.5 py-0.5 bg-purple-100 text-purple-700 rounded-full">
                                        NEW
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Back to Shopping */}
                <div className="px-3 py-2 border-t border-gray-100">
                    <Link
                        href="/"
                        className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                        <Store size={20} className="mr-3 text-gray-400 group-hover:text-orange-600" />
                        Back to Shopping
                    </Link>
                </div>

                {/* User Profile / Footer */}
                <div className="p-4 border-t border-gray-100">
                    <div className="flex items-center w-full p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                            JD
                        </div>
                        <div className="ml-3 overflow-hidden">
                            <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
                            <p className="text-xs text-gray-500 truncate">john@example.com</p>
                        </div>
                    </div>
                    <button className="flex items-center w-full mt-2 px-2 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors">
                        <LogOut size={14} className="mr-2" />
                        Sign Out
                    </button>
                </div>
            </motion.aside>
        </>
    );
}
