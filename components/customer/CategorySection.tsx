"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
    { id: 1, name: "Electronics", image: "https://images.unsplash.com/photo-1498049860654-af1a5c5668ba?q=80&w=2070&auto=format&fit=crop", count: "2.5k Products" },
    { id: 2, name: "Fashion", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop", count: "8k Products" },
    { id: 3, name: "Home & Decor", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop", count: "1.2k Products" },
    { id: 4, name: "Books", image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop", count: "10k+ Titles" },
    { id: 5, name: "Beauty", image: "https://images.unsplash.com/photo-1612817288484-96916a8bbc80?q=80&w=1974&auto=format&fit=crop", count: "3.4k Products" },
    { id: 6, name: "Sports", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop", count: "1.5k Products" },
];

export default function CategorySection() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            href={`/category/${cat.name.toLowerCase()}`}
                            className="group flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4 rounded-full overflow-hidden shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">{cat.name}</h3>
                            <span className="text-xs text-gray-500 mt-1">{cat.count}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
