"use client";

import { cn } from "@/lib/utils";
import { useProduct, PRODUCT_VARIANTS } from "@/context/ProductContext";

export default function ProductVariants() {
    const { selectedColor, setSelectedColor, selectedModel, setSelectedModel } = useProduct();

    return (
        <div className="space-y-6 py-6 border-t border-b border-gray-100 my-6">

            {/* Colors */}
            <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">Color: <span className="font-bold">{selectedColor}</span></h4>
                <div className="flex flex-wrap gap-3">
                    {Object.entries(PRODUCT_VARIANTS).map(([key, variant]) => (
                        <button
                            key={key}
                            onClick={() => setSelectedColor(key)}
                            className={cn(
                                "w-10 h-10 rounded-full border-2 focus:outline-none ring-2 ring-offset-2 transition-all relative",
                                selectedColor === key ? "border-white ring-orange-500 scale-110" : "border-transparent ring-transparent hover:ring-gray-200",
                            )}
                            style={{ backgroundColor: variant.hex }}
                            title={variant.name}
                        />
                    ))}
                </div>
            </div>

            {/* Model/Config */}
            <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">Model</h4>
                <div className="flex flex-wrap gap-3">
                    {['Standard', 'Pro', 'Max'].map((model) => (
                        <button
                            key={model}
                            onClick={() => setSelectedModel(model)}
                            className={cn(
                                "px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all",
                                model === 'Max' ? "opacity-50 cursor-not-allowed border-gray-100 bg-gray-50 dashed border-dashed" : "",
                                selectedModel === model
                                    ? "border-orange-600 bg-orange-50 text-orange-700"
                                    : "border-gray-200 hover:border-gray-300 text-gray-700",
                                model === 'Max' && selectedModel !== model && "text-gray-400"
                            )}
                            disabled={model === 'Max'}
                        >
                            {model} {model === 'Max' && '(Sold Out)'}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
