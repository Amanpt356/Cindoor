"use client";

import { Bell, Search, HelpCircle, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
    const pathname = usePathname();

    // Simple breadcrumb logic
    const segments = pathname.split('/').filter(Boolean).slice(1); // remove 'seller'

    return (
        <header className="sticky top-0 z-30 flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-6 shadow-sm">
            <div className="flex-1 flex items-center gap-2">
                <span className="text-gray-500 font-medium">Seller Studio</span>
                {segments.map((segment, index) => (
                    <div key={segment} className="flex items-center gap-2">
                        <ChevronRight size={16} className="text-gray-400" />
                        <span className="text-gray-900 font-semibold capitalize">
                            {segment.replace(/-/g, ' ')}
                        </span>
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-x-4">
                {/* Search */}
                <div className="relative hidden md:block">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <input
                        type="search"
                        placeholder="Search..."
                        className="h-9 w-64 rounded-md border border-gray-200 bg-gray-50 pl-9 pr-4 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                    />
                </div>

                {/* Actions */}
                <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-600 border-2 border-white"></span>
                </button>

                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                    <HelpCircle size={20} />
                </button>
            </div>
        </header>
    );
}
