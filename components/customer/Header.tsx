"use client";

import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
    const { cartCount, toggleCart } = useCart();
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-16 gap-4">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                        <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                            C
                        </div>
                        <span className="text-xl font-bold text-gray-900 hidden sm:block">Cindoor</span>
                    </Link>

                    {/* Search Bar - Hidden on mobile, typically specific implementation */}
                    <div className="flex-1 max-w-2xl hidden md:flex items-center">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search for products, brands and more..."
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-gray-900"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <Link
                            href="/seller/onboarding"
                            className="hidden sm:flex text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors"
                        >
                            Become a Seller
                        </Link>

                        <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>

                        <button
                            onClick={toggleCart}
                            className="p-2 text-gray-600 hover:text-gray-900 transition-colors relative"
                        >
                            <ShoppingCart size={22} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-600 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        <Link href="/login" className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                            <User size={22} />
                        </Link>

                        <button className="p-2 text-gray-600 md:hidden">
                            <Menu size={22} />
                        </button>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                <div className="md:hidden pb-4">
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                </div>
            </div>
        </nav>
    );
}
