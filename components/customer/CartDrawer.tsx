"use client";

import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
    const { isCartOpen, toggleCart, cartItems, removeFromCart, updateQuantity, cartCount, cartTotal } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-100">
                            <div className="flex items-center gap-2 font-bold text-gray-900 text-lg">
                                <ShoppingBag size={20} />
                                Your Cart ({cartCount})
                            </div>
                            <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {cartItems.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 space-y-4">
                                    <ShoppingBag size={48} className="text-gray-300" />
                                    <p>Your cart is empty.</p>
                                    <button onClick={toggleCart} className="text-orange-600 font-medium hover:underline">
                                        Start Shopping
                                    </button>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={`${item.id}-${item.color}`} className="flex gap-4 p-3 border border-gray-100 rounded-xl hover:border-orange-200 transition-colors">
                                        <div className="relative w-20 h-20 bg-gray-50 rounded-lg flex-shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <h4 className="font-medium text-gray-900 text-sm line-clamp-2">{item.title}</h4>
                                                    <button
                                                        onClick={() => removeFromCart(item.id, item.color)}
                                                        className="text-gray-400 hover:text-red-500 p-1"
                                                    >
                                                        <X size={14} />
                                                    </button>
                                                </div>
                                                {item.color && <p className="text-xs text-gray-500 mt-1">Color: {item.color}</p>}
                                            </div>

                                            <div className="flex items-center justify-between mt-2">
                                                <span className="font-bold text-gray-900">₹{item.price.toLocaleString('en-IN')}</span>
                                                <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-2 py-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1, item.color)}
                                                        className="w-5 h-5 flex items-center justify-center bg-white rounded shadow-sm text-gray-600 hover:text-orange-600"
                                                    >
                                                        <Minus size={10} />
                                                    </button>
                                                    <span className="text-xs font-semibold w-4 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1, item.color)}
                                                        className="w-5 h-5 flex items-center justify-center bg-white rounded shadow-sm text-gray-600 hover:text-orange-600"
                                                    >
                                                        <Plus size={10} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-4">
                                <div className="flex justify-between items-center text-gray-600">
                                    <span>Subtotal</span>
                                    <span className="font-bold text-gray-900 text-lg">₹{cartTotal.toLocaleString('en-IN')}</span>
                                </div>
                                <Link href="/checkout" onClick={toggleCart} className="w-full py-3.5 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-200">
                                    Proceed to Checkout
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
