"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OnboardingSuccess() {
    return (
        <div className="flex flex-col items-center justify-center text-center py-12">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6"
            >
                <CheckCircle size={48} />
            </motion.div>

            <h2 className="text-3xl font-bold text-gray-900 mb-2">Registration Submitted!</h2>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
                Your verification is pending. You can now access your dashboard, but some features might be restricted until approval (usually takes 24 hours).
            </p>

            <Link
                href="/seller/dashboard"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-orange-600 text-white font-semibold shadow-lg hover:bg-orange-700 hover:shadow-xl transition-all"
            >
                Go to Dashboard
            </Link>
        </div>
    );
}
