"use client";

import Header from "@/components/customer/Header";
import { useCart } from "@/context/CartContext";
import { CheckCircle2, MapPin, Truck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
    const { cartItems, cartTotal } = useCart();
    const [step, setStep] = useState<'address' | 'payment' | 'confirm'>('address');
    const [address, setAddress] = useState({
        line1: '123, Green Street',
        city: 'Mumbai',
        pincode: '400001'
    });

    const handleLocateMe = () => {
        // Mock geolocation
        setAddress({ line1: '404, Tech Park', city: 'Bangalore', pincode: '560001' });
    };

    if (cartItems.length === 0 && step !== 'confirm') {
        return (
            <div className="min-h-screen bg-gray-50">
                <Header />
                <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                    <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                    <Link href="/shop" className="text-orange-600 hover:underline">Continue Shopping</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <div className="max-w-4xl mx-auto px-4 py-8">

                {/* Steps */}
                <div className="flex items-center justify-center mb-8">
                    {['Address', 'Payment', 'Confirm'].map((s, i) => (
                        <div key={s} className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${(step === 'address' && i === 0) || (step === 'payment' && i <= 1) || (step === 'confirm')
                                    ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-500'
                                }`}>
                                {i + 1}
                            </div>
                            {i < 2 && <div className={`w-16 h-1 mx-2 ${(step === 'payment' && i === 0) || (step === 'confirm') ? 'bg-orange-600' : 'bg-gray-200'
                                }`}></div>}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-6">

                        {/* Address Step */}
                        {step === 'address' && (
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Select Delivery Address</h2>

                                <div className="space-y-4">
                                    <div className="border border-orange-200 bg-orange-50 p-4 rounded-lg flex gap-4 items-start">
                                        <input type="radio" checked readOnly className="mt-1 text-orange-600 focus:ring-orange-500" />
                                        <div>
                                            <p className="font-bold text-gray-900">John Doe, 9876543210</p>
                                            <p className="text-gray-600 text-sm">{address.line1}, {address.city}, {address.pincode}</p>
                                            <p className="text-gray-500 text-xs mt-1">Home • 9AM - 9PM Delivery</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleLocateMe}
                                        className="flex items-center gap-2 text-orange-600 font-medium text-sm hover:underline"
                                    >
                                        <MapPin size={16} /> Use current location
                                    </button>

                                    <button
                                        onClick={() => setStep('payment')}
                                        className="w-full py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 mt-4"
                                    >
                                        Deliver Here
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Payment Step */}
                        {step === 'payment' && (
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Options</h2>

                                <div className="space-y-3">
                                    {['UPI / QR Code', 'Credit / Debit Card', 'Net Banking', 'Cash on Delivery'].map((method) => (
                                        <label key={method} className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg hover:border-orange-200 cursor-pointer">
                                            <input type="radio" name="payment" className="text-orange-600 focus:ring-orange-500" />
                                            <span className="text-gray-900 font-medium">{method}</span>
                                        </label>
                                    ))}

                                    <button
                                        onClick={() => setStep('confirm')}
                                        className="w-full py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 mt-4"
                                    >
                                        Pay ₹{cartTotal.toLocaleString('en-IN')}
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Confirm Step */}
                        {step === 'confirm' && (
                            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 size={40} className="text-green-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
                                <p className="text-gray-600 mb-8">Thank you for your purchase. Your order #OD123456789 has been placed successfully.</p>

                                <div className="flex justify-center gap-4">
                                    <Link href="/seller/orders" className="px-6 py-2 border border-gray-200 rounded-full text-gray-600 hover:bg-gray-50 text-sm font-bold">
                                        View Order
                                    </Link>
                                    <Link href="/shop" className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 text-sm font-bold">
                                        Continue Shopping
                                    </Link>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Order Summary Sidebar */}
                    {step !== 'confirm' && (
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-fit sticky top-24">
                            <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>

                            <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex gap-3">
                                        <div className="relative w-12 h-12 bg-gray-50 rounded flex-shrink-0">
                                            <Image src={item.image} alt={item.title} fill className="object-contain p-1" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900 line-clamp-1">{item.title}</p>
                                            <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                        <span className="text-sm font-bold">₹{item.price.toLocaleString()}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-100 pt-4 space-y-2 text-sm">
                                <div className="flex justify-between text-gray-600">
                                    <span>Items Total</span>
                                    <span>₹{cartTotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Delivery</span>
                                    <span className="text-green-600">FREE</span>
                                </div>
                                <div className="flex justify-between text-gray-900 font-bold text-lg pt-2 border-t border-gray-100">
                                    <span>Grand Total</span>
                                    <span>₹{cartTotal.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
