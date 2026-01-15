"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
    { name: "Mon", sales: 4000 },
    { name: "Tue", sales: 3000 },
    { name: "Wed", sales: 2000 },
    { name: "Thu", sales: 2780 },
    { name: "Fri", sales: 1890 },
    { name: "Sat", sales: 2390 },
    { name: "Sun", sales: 3490 },
];

export default function SalesChart() {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-[350px]">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Weekly Sales Overview</h3>
            <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
                        <Tooltip
                            contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                            itemStyle={{ color: "#f97316", fontWeight: "bold" }}
                        />
                        <Area type="monotone" dataKey="sales" stroke="#f97316" strokeWidth={2} fillOpacity={1} fill="url(#colorSales)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
