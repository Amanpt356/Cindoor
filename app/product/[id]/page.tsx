import Header from "@/components/customer/Header";
import ProductMedia from "@/components/customer/product/ProductMedia";
import ProductInfo from "@/components/customer/product/ProductInfo";
import ProductPricing from "@/components/customer/product/ProductPricing";
import ProductVariants from "@/components/customer/product/ProductVariants";
import StickyActions from "@/components/customer/product/StickyActions";
import ReviewsSection from "@/components/customer/product/ReviewsSection";
import RelatedProducts from "@/components/customer/product/RelatedProducts";
import AIAssistantPanel from "@/components/customer/product/AIAssistantPanel";
import { ProductProvider } from "@/context/ProductContext";

export default async function ProductPage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
                <ProductProvider>
                    {/* Breadcrumb - Static for Demo */}
                    <nav className="text-sm text-gray-500 mb-6">
                        <span className="hover:text-orange-600 cursor-pointer">Electronics</span> &gt; {" "}
                        <span className="hover:text-orange-600 cursor-pointer">Headphones</span> &gt; {" "}
                        <span className="text-gray-900 font-medium">Sony WH-1000XM5</span>
                    </nav>

                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Left Column: Media */}
                        <div className="w-full lg:w-[40%] flex-shrink-0">
                            <ProductMedia />
                        </div>

                        {/* Center Column: Details */}
                        <div className="flex-1 min-w-0">
                            <ProductInfo />
                            <ProductVariants />
                            <div className="lg:hidden mb-6">
                                <ProductPricing />
                                <div className="mt-4">
                                    <StickyActions />
                                </div>
                            </div>

                            <div className="my-12">
                                <RelatedProducts />
                            </div>

                            <div className="my-12">
                                <ReviewsSection />
                            </div>
                        </div>

                        {/* Right Column: Actions & AI (Desktop Only) */}
                        <div className="hidden lg:block w-[300px] flex-shrink-0 space-y-6">
                            <ProductPricing />
                            <StickyActions />
                            {/* AI Panel removed from here (now floating global) */}
                        </div>
                    </div>
                </ProductProvider>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 py-12 mt-12">
                <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
                    <p>© 2026 Cindoor. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
