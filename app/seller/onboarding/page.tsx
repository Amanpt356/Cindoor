"use client";

import { useState } from "react";
import StepIndicator from "@/components/seller/onboarding/StepIndicator";
import SellerTypeSelection from "@/components/seller/onboarding/SellerTypeSelection";
import BasicDetailsForm from "@/components/seller/onboarding/BasicDetailsForm";
import BusinessDetailsForm from "@/components/seller/onboarding/BusinessDetailsForm";
import BankDetailsForm from "@/components/seller/onboarding/BankDetailsForm";
import OnboardingSuccess from "@/components/seller/onboarding/OnboardingSuccess";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = ["Seller Type", "Basic Details", "Business Info", "Payout Setup", "Status"];

export default function OnboardingPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<any>({});
    const [sellerType, setSellerType] = useState<"individual" | "business">("individual");

    const nextStep = (data?: any) => {
        if (data) {
            setFormData((prev: any) => ({ ...prev, ...data }));
        }
        setCurrentStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const handleSellerTypeSelect = (type: "individual" | "business") => {
        setSellerType(type);
        setFormData((prev: any) => ({ ...prev, sellerType: type }));
        nextStep();
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
            <div className="w-full max-w-3xl">
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        Welcome to Cindoor
                    </h1>
                    <p className="text-gray-500 mt-2">Set up your seller studio in minutes</p>
                </div>

                <StepIndicator currentStep={currentStep} steps={STEPS} />

                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 min-h-[500px] relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            {currentStep === 1 && (
                                <SellerTypeSelection onSelect={handleSellerTypeSelect} />
                            )}
                            {currentStep === 2 && (
                                <BasicDetailsForm onNext={nextStep} initialData={formData} />
                            )}
                            {currentStep === 3 && (
                                <BusinessDetailsForm
                                    onNext={nextStep}
                                    onBack={prevStep}
                                    sellerType={sellerType}
                                />
                            )}
                            {currentStep === 4 && (
                                <BankDetailsForm onComplete={nextStep} onBack={prevStep} />
                            )}
                            {currentStep === 5 && (
                                <OnboardingSuccess />
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
