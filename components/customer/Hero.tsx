"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gray-900 text-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 py-24 sm:py-32 relative z-10">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-orange-600 text-sm font-semibold mb-6">
                            New Collection 2026
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                            Curated Style for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
                                Modern Living
                            </span>
                        </h1>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            Discover verified premium products from India's top sellers.
                            Elevate your lifestyle with our exclusive selection.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/shop" className="px-8 py-3.5 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
                                Start Shopping <ArrowRight size={18} />
                            </Link>
                            <Link href="/seller/onboarding" className="px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors">
                                Become a Seller
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
