"use client";

import { Save, Lock, MapPin, Store } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
                <p className="text-gray-500">Manage your store preferences</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center gap-3">
                    <Store className="text-gray-400" size={20} />
                    <h3 className="font-bold text-gray-900">Store Profile</h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Store Name</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" defaultValue="My Awesome Store" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Support Phone</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" defaultValue="+91 98765 43210" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Store Description</label>
                        <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 h-24" defaultValue="Best place for awesome products." />
                    </div>
                </div>
                <div className="p-4 bg-gray-50 text-right">
                    <button className="px-4 py-2 bg-orange-600 text-white rounded-md text-sm font-medium hover:bg-orange-700 flex items-center gap-2 ml-auto">
                        <Save size={16} /> Save Changes
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center gap-3">
                    <MapPin className="text-gray-400" size={20} />
                    <h3 className="font-bold text-gray-900">Pickup Address</h3>
                </div>
                <div className="p-6">
                    <p className="text-gray-600 mb-4">123, Industrial Estate, Phoenix Market City, Mumbai - 400070.</p>
                    <button className="text-orange-600 font-medium text-sm hover:underline">Change Address</button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center gap-3">
                    <Lock className="text-gray-400" size={20} />
                    <h3 className="font-bold text-gray-900">Account Security</h3>
                </div>
                <div className="p-6 flex items-center justify-between">
                    <div>
                        <p className="font-medium text-gray-900">Deactivate Account</p>
                        <p className="text-sm text-gray-500">Temporarily disable your store listings.</p>
                    </div>
                    <button className="px-4 py-2 border border-red-200 text-red-600 rounded-md text-sm font-medium hover:bg-red-50">
                        Deactivate
                    </button>
                </div>
            </div>
        </div>
    );
}
