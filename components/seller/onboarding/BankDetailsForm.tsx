"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ShieldCheck } from "lucide-react";

const formSchema = z.object({
    accountNumber: z.string().min(8, "Invalid Account Number"),
    ifscCode: z.string().min(11, "Invalid IFSC Code"),
    agreeToPolicy: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and conditions",
    }),
});

interface BankDetailsFormProps {
    onComplete: (data: any) => void;
    onBack: () => void;
}

export default function BankDetailsForm({ onComplete, onBack }: BankDetailsFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        // Simulate API submission
        setTimeout(() => {
            onComplete(data);
        }, 1000);
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Payout Setup</h2>
            <p className="text-sm text-gray-500 mb-6">Enter your bank details to receive payments.</p>

            <div className="bg-blue-50 p-4 rounded-md mb-6 flex items-start">
                <ShieldCheck className="text-blue-600 mt-0.5 mr-3 flex-shrink-0" size={20} />
                <p className="text-sm text-blue-800">Your bank details are encrypted and secure. We only transfer earnings to this account.</p>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bank Account Number</label>
                    <input
                        {...form.register("accountNumber")}
                        type="password"
                        className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="xxxx-xxxx-xxxx"
                    />
                    {form.formState.errors.accountNumber && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.accountNumber.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">IFSC Code</label>
                    <input
                        {...form.register("ifscCode")}
                        className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="SBIN000XXXX"
                        style={{ textTransform: "uppercase" }}
                    />
                    {form.formState.errors.ifscCode && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.ifscCode.message}</p>
                    )}
                </div>

                <div className="pt-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            {...form.register("agreeToPolicy")}
                            className="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                        />
                        <span className="text-sm text-gray-600">
                            I agree to the <a href="#" className="text-orange-600 underline">Platform Policies</a> and <a href="#" className="text-orange-600 underline">Seller Agreement</a>.
                        </span>
                    </label>
                    {form.formState.errors.agreeToPolicy && (
                        <p className="text-red-500 text-xs mt-1 ml-7">{form.formState.errors.agreeToPolicy.message}</p>
                    )}
                </div>

                <div className="flex gap-4 pt-6">
                    <button
                        type="button"
                        onClick={onBack}
                        className="w-1/3 h-10 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 font-medium"
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="flex-1 h-10 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors shadow-sm"
                    >
                        Complete Registration
                    </button>
                </div>
            </form>
        </div>
    );
}
