"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the cart item type
export interface CartItem {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
    color?: string;
    model?: string;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string, color?: string) => void;
    updateQuantity: (id: string, quantity: number, color?: string) => void;
    cartCount: number;
    cartTotal: number;
    isCartOpen: boolean;
    toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Load from local storage on mount
    useEffect(() => {
        setIsMounted(true);
        const savedCart = localStorage.getItem('cindoor_cart');
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Save to local storage whenever cart changes
    useEffect(() => {
        if (isMounted) {
            localStorage.setItem('cindoor_cart', JSON.stringify(cartItems));
        }
    }, [cartItems, isMounted]);

    const addToCart = (newItem: CartItem) => {
        setCartItems(prev => {
            const existingItem = prev.find(item =>
                item.id === newItem.id && item.color === newItem.color
            );

            if (existingItem) {
                return prev.map(item =>
                    (item.id === newItem.id && item.color === newItem.color)
                        ? { ...item, quantity: item.quantity + newItem.quantity }
                        : item
                );
            } else {
                return [...prev, newItem];
            }
        });

        // Optional: open cart or show toast (implemented in UI components)
    };

    const removeFromCart = (id: string, color?: string) => {
        setCartItems(prev => prev.filter(item => !(item.id === id && item.color === color)));
    };

    const updateQuantity = (id: string, quantity: number, color?: string) => {
        if (quantity <= 0) {
            removeFromCart(id, color);
            return;
        }

        setCartItems(prev => prev.map(item =>
            (item.id === id && item.color === color)
                ? { ...item, quantity }
                : item
        ));
    };

    const toggleCart = () => setIsCartOpen(prev => !prev);

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            cartCount,
            cartTotal,
            isCartOpen,
            toggleCart
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
