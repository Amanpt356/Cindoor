"use client";

import { MessageCircle, FileText, Phone, Mail } from "lucide-react";

export default function SupportPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900">Seller Support</h1>
                <p className="text-gray-500">We are here to help you grow</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageCircle size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900">Live Chat</h3>
                    <p className="text-sm text-gray-500 mt-1">Chat with our support team instantly.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
                    <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900">Raise Ticket</h3>
                    <p className="text-sm text-gray-500 mt-1">Submit a query for detailed assistance.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Phone size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900">Request Callback</h3>
                    <p className="text-sm text-gray-500 mt-1">We will call you within 2 hours.</p>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900">Frequently Asked Questions</h3>
                </div>
                <div className="divide-y divide-gray-100">
                    {["How do I process a return?", "When will I receive my payout?", "How to bulk upload products?"].map((q, i) => (
                        <div key={i} className="p-4 hover:bg-gray-50 cursor-pointer flex justify-between items-center group">
                            <span className="text-gray-700 font-medium group-hover:text-orange-600 transition-colors">{q}</span>
                            <span className="text-gray-400 text-lg">+</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center text-sm text-gray-500">
                <p>Support Email: <a href="mailto:seller-support@cindoor.com" className="text-orange-600 underline">seller-support@cindoor.com</a></p>
            </div>
        </div>
    );
}
