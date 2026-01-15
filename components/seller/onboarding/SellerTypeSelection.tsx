"use client";

import { User, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SellerTypeSelectionProps {
    onSelect: (type: "individual" | "business") => void;
}

export default function SellerTypeSelection({ onSelect }: SellerTypeSelectionProps) {
    return (
        <div className="space-y-6">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">Choose Seller Type</h2>
                <p className="text-gray-500 mt-2">Select how you want to register on Cindoor</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelect("individual")}
                    className="cursor-pointer group relative flex flex-col items-center p-8 bg-white border-2 border-gray-100 rounded-xl hover:border-orange-500 transition-all shadow-sm hover:shadow-md"
                >
                    <div className="p-4 bg-orange-50 rounded-full text-orange-600 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <User size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Individual Seller</h3>
                    <p className="text-center text-sm text-gray-500 mt-2">
                        Perfect for solopreneurs, artists, and home-based businesses. Start selling with minimal documentation.
                    </p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelect("business")}
                    className="cursor-pointer group relative flex flex-col items-center p-8 bg-white border-2 border-gray-100 rounded-xl hover:border-purple-500 transition-all shadow-sm hover:shadow-md"
                >
                    <div className="p-4 bg-purple-50 rounded-full text-purple-600 mb-4 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                        <Building2 size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Business / Brand</h3>
                    <p className="text-center text-sm text-gray-500 mt-2">
                        For registered companies and brands. Unlock advanced tools, bulk operations, and official brand badges.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
