"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
    gstin: z.string().optional(),
    pan: z.string().min(10, "Invalid PAN number"),
    streetAddress: z.string().min(5, "Address too short"),
    city: z.string().min(2, "City required"),
    state: z.string().min(2, "State required"),
    pincode: z.string().min(6, "Invalid Pincode"),
});

interface BusinessDetailsFormProps {
    onNext: (data: any) => void;
    onBack: () => void;
    sellerType: "individual" | "business";
}

export default function BusinessDetailsForm({ onNext, onBack, sellerType }: BusinessDetailsFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        // Simulate validation
        setTimeout(() => {
            onNext(data);
        }, 500);
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Business Details</h2>
            <p className="text-sm text-gray-500 mb-6">Tell us where your business is located.</p>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {sellerType === "business" && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">GSTIN</label>
                        <input
                            {...form.register("gstin")}
                            className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="22ABCDE1234F1Z5"
                        />
                    </div>
                )}

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">PAN Number</label>
                    <input
                        {...form.register("pan")}
                        className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="ABCDE1234F"
                    />
                    {form.formState.errors.pan && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.pan.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Address</label>
                    <textarea
                        {...form.register("streetAddress")}
                        className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[80px]"
                        placeholder="Warehouse or Shop Address"
                    />
                    {form.formState.errors.streetAddress && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.streetAddress.message}</p>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <input
                            {...form.register("city")}
                            className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Mumbai"
                        />
                        {form.formState.errors.city && (
                            <p className="text-red-500 text-xs mt-1">{form.formState.errors.city.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                        <input
                            {...form.register("pincode")}
                            className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="400001"
                        />
                        {form.formState.errors.pincode && (
                            <p className="text-red-500 text-xs mt-1">{form.formState.errors.pincode.message}</p>
                        )}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <input
                        {...form.register("state")}
                        className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Maharashtra"
                    />
                    {form.formState.errors.state && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.state.message}</p>
                    )}
                </div>

                <div className="flex gap-4 pt-4">
                    <button
                        type="button"
                        onClick={onBack}
                        className="w-1/3 h-10 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 font-medium"
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="flex-1 h-10 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition-colors"
                    >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
}
