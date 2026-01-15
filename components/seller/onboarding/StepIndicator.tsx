"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
    currentStep: number;
    steps: string[];
}

export default function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
    return (
        <div className="mb-8">
            <div className="flex items-center justify-between relative">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10" />
                <div
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-orange-500 -z-10 transition-all duration-300 ease-in-out"
                    style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                />

                {steps.map((step, index) => {
                    const stepNumber = index + 1;
                    const isCompleted = stepNumber < currentStep;
                    const isCurrent = stepNumber === currentStep;

                    return (
                        <div key={index} className="flex flex-col items-center bg-white px-2">
                            <div
                                className={cn(
                                    "flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-semibold transition-colors duration-300",
                                    isCompleted
                                        ? "bg-orange-500 border-orange-500 text-white"
                                        : isCurrent
                                            ? "border-orange-500 text-orange-500 bg-white"
                                            : "border-gray-300 text-gray-400 bg-white"
                                )}
                            >
                                {isCompleted ? <Check size={16} /> : stepNumber}
                            </div>
                            <span
                                className={cn(
                                    "mt-2 text-xs font-medium uppercase transition-colors duration-300",
                                    isCurrent ? "text-orange-600" : "text-gray-500"
                                )}
                            >
                                {step}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
