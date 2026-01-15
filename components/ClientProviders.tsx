"use client";

import { CartProvider } from "@/context/CartContext";
import CartDrawer from "./customer/CartDrawer";
import AIFloatingAssistant from "./customer/AIFloatingAssistant";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <CartProvider>
            {children}
            <CartDrawer />
            <AIFloatingAssistant />
        </CartProvider>
    );
}
