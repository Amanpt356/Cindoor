"use client";

import { Download, Wallet, CreditCard, Clock } from "lucide-react";
import StatsCard from "@/components/seller/dashboard/StatsCard";

const payouts = [
    { id: "PAY-9821", date: "15 Jan, 2026", amount: "₹45,200", status: "Processing", method: "Bank Transfer" },
    { id: "PAY-9820", date: "08 Jan, 2026", amount: "₹38,500", status: "Paid", method: "Bank Transfer" },
    { id: "PAY-9819", date: "01 Jan, 2026", amount: "₹42,100", status: "Paid", method: "Bank Transfer" },
    { id: "PAY-9818", date: "25 Dec, 2025", amount: "₹55,000", status: "Paid", method: "Bank Transfer" },
];

export default function PaymentsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Payments & Earnings</h1>
                    <p className="text-gray-500">Track your revenue and payouts</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-md text-sm font-medium hover:bg-indigo-100">
                    <Download size={16} /> Download Reports
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatsCard title="Total Earnings" value="₹1,80,800" icon={Wallet} color="green" description="Lifetime earnings" />
                <StatsCard title="Pending Payout" value="₹45,200" icon={Clock} color="orange" description="Processing next Tuesday" />
                <StatsCard title="Next Settlement" value="22 Jan" icon={CreditCard} color="blue" description="Expected date" />
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900">Payout History</h3>
                </div>
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-500">
                        <tr>
                            <th className="px-6 py-4 font-medium">Payout ID</th>
                            <th className="px-6 py-4 font-medium">Date</th>
                            <th className="px-6 py-4 font-medium">Amount</th>
                            <th className="px-6 py-4 font-medium">Method</th>
                            <th className="px-6 py-4 font-medium">Status</th>
                            <th className="px-6 py-4 font-medium">Statement</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {payouts.map((pay) => (
                            <tr key={pay.id} className="hover:bg-gray-50 text-gray-900">
                                <td className="px-6 py-4 font-medium">{pay.id}</td>
                                <td className="px-6 py-4 text-gray-500">{pay.date}</td>
                                <td className="px-6 py-4 font-bold text-green-600">{pay.amount}</td>
                                <td className="px-6 py-4 text-gray-600">{pay.method}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${pay.status === "Paid" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                                        {pay.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-indigo-600 hover:text-indigo-800 font-medium text-xs">Download</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
