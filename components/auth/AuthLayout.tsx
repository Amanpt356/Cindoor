"use client";

import Image from "next/image";
import Link from "next/link";

interface AuthLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
    return (
        <div className="min-h-screen flex bg-white">
            {/* Left Side - Content/Image */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900 overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?q=80&w=2070&auto=format&fit=crop"
                    alt="Shopping Experience"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="relative z-10 flex flex-col justify-between p-12 w-full text-white">
                    <div>
                        <Link href="/" className="flex items-center gap-2 w-fit">
                            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                                C
                            </div>
                            <span className="text-xl font-bold">Cindoor</span>
                        </Link>
                    </div>
                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold mb-4">Discover the Future of Shopping</h1>
                        <p className="text-gray-300 text-lg">
                            Join millions of shoppers and sellers on India's most premium marketplace.
                            Experience seamless transactions and curated collections.
                        </p>
                    </div>
                    <div className="text-sm text-gray-400">
                        © 2026 Cindoor Inc.
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 flex flex-col justify-center px-4 sm:px-12 xl:px-24">
                <div className="w-full max-w-sm mx-auto">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
                        <p className="text-gray-500">{subtitle}</p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
