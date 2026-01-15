"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    storeName: z.string().min(3, "Store name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Invalid phone number"),
    otp: z.string().optional(),
});

interface BasicDetailsFormProps {
    onNext: (data: any) => void;
    initialData?: any;
}

export default function BasicDetailsForm({ onNext, initialData }: BasicDetailsFormProps) {
    const [showOtp, setShowOtp] = useState(false);
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            fullName: "",
            storeName: "",
            email: "",
            phone: "",
            otp: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setLoading(true);
        // Simulate API call / OTP Verification
        if (!showOtp) {
            setTimeout(() => {
                setShowOtp(true);
                setLoading(false);
            }, 1000);
            return;
        }

        // Verify OTP (mock)
        if (data.otp !== "1234") {
            form.setError("otp", { message: "Invalid OTP (Tip: use 1234)" });
            setLoading(false);
            return;
        }

        setTimeout(() => {
            onNext(data);
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Details</h2>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                        {...form.register("fullName")}
                        className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="John Doe"
                        disabled={showOtp}
                    />
                    {form.formState.errors.fullName && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.fullName.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Store Name</label>
                    <input
                        {...form.register("storeName")}
                        className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Awesome Shop"
                        disabled={showOtp}
                    />
                    {form.formState.errors.storeName && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.storeName.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        {...form.register("email")}
                        type="email"
                        className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="john@example.com"
                        disabled={showOtp}
                    />
                    {form.formState.errors.email && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                        {...form.register("phone")}
                        type="tel"
                        className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="+1 234 567 8900"
                        disabled={showOtp}
                    />
                    {form.formState.errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.phone.message}</p>
                    )}
                </div>

                {showOtp && (
                    <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Enter OTP (Try: 1234)</label>
                        <input
                            {...form.register("otp")}
                            className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-2"
                            placeholder="1234"
                        />
                        {form.formState.errors.otp && (
                            <p className="text-red-500 text-xs mt-1">{form.formState.errors.otp.message}</p>
                        )}
                        <p className="text-xs text-gray-500">OTP sent to your email/phone.</p>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className={cn(
                        "w-full h-10 mt-6 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition-colors flex items-center justify-center",
                        loading && "opacity-70 cursor-not-allowed"
                    )}
                >
                    {loading ? (
                        <Loader2 className="animate-spin mr-2" size={20} />
                    ) : (
                        showOtp ? "Verify & Continue" : "Send OTP"
                    )}
                </button>
            </form>
        </div>
    );
}
