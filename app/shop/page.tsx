import Header from "@/components/customer/Header";
import AIRecommendations from "@/components/customer/shop/AIRecommendations";
import ProductFilters from "@/components/customer/shop/ProductFilters";
import ShopGrid from "@/components/customer/shop/ShopGrid";
import { Bot, MessageSquare } from "lucide-react";

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">

                {/* Breadcrumb / Title */}
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Shopping Arena</h1>
                    <p className="text-gray-500 mt-1">Explore our AI-curated collection</p>
                </div>

                {/* AI Section - Full Width */}
                <AIRecommendations />

                <div className="flex gap-8 mt-12">
                    {/* Sidebar */}
                    <ProductFilters />

                    {/* Main Content */}
                    <ShopGrid />
                </div>
            </main>

            {/* Floating AI Assistant Button */}
            <button className="fixed bottom-6 right-6 p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all z-40 group flex items-center gap-2">
                <Bot size={24} />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-medium whitespace-nowrap">
                    Ask AI Assistant
                </span>
            </button>

            {/* Simple Footer */}
            <footer className="bg-white border-t border-gray-100 py-12 mt-12">
                <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
                    <p>© 2026 Cindoor. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
