"use client";

import React, { createContext, useContext, useState } from 'react';

// Define available colors and their corresponding images
type ColorVariant = {
    name: string;
    images: string[];
    hex: string;
};

// Mock data for variants - in a real app this would come from the API/Props
export const PRODUCT_VARIANTS: Record<string, ColorVariant> = {
    'Black': {
        name: 'Black',
        hex: '#000000',
        images: [
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1976&auto=format&fit=crop", // Black Main
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1965&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935&auto=format&fit=crop"
        ]
    },
    'Silver': {
        name: 'Silver',
        hex: '#E5E7EB',
        images: [
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop", // Silver Main
            "https://images.unsplash.com/photo-1519326844852-704caea5679e?q=80&w=1934&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1964&auto=format&fit=crop"
        ]
    },
    'Navy': {
        name: 'Navy',
        hex: '#1E3A8A',
        images: [
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1965&auto=format&fit=crop", // Navy/Blueish placeholder
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1976&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1964&auto=format&fit=crop"
        ]
    }
};

interface ProductContextType {
    selectedColor: string;
    setSelectedColor: (color: string) => void;
    selectedModel: string;
    setSelectedModel: (model: string) => void;
    currentImages: string[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
    const [selectedColor, setSelectedColor] = useState('Black');
    const [selectedModel, setSelectedModel] = useState('Pro');

    const currentImages = PRODUCT_VARIANTS[selectedColor]?.images || PRODUCT_VARIANTS['Black'].images;

    return (
        <ProductContext.Provider value={{
            selectedColor,
            setSelectedColor,
            selectedModel,
            setSelectedModel,
            currentImages
        }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProduct() {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error('useProduct must be used within a ProductProvider');
    }
    return context;
}
