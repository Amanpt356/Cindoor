"use client";

import { LucideIcon, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
    title: string;
    value: string;
    icon: LucideIcon;
    trend?: string;
    trendUp?: boolean;
    description?: string;
    color?: "orange" | "blue" | "green" | "purple";
}

const colorMap = {
    orange: "bg-orange-50 text-orange-600",
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600",
};

export default function StatsCard({ title, value, icon: Icon, trend, trendUp, description, color = "orange" }: StatsCardProps) {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <div className={cn("p-3 rounded-lg", colorMap[color])}>
                    <Icon size={24} />
                </div>
                {trend && (
                    <div className={cn("flex items-center text-xs font-medium px-2 py-1 rounded-full", trendUp ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700")}>
                        {trendUp ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
                        {trend}
                    </div>
                )}
            </div>
            <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
                {description && <p className="text-xs text-gray-400 mt-2">{description}</p>}
            </div>
        </div>
    );
}
