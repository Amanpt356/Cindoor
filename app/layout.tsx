import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ClientProviders from "@/components/ClientProviders";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cindoor Seller Studio",
  description: "Professional dashboard for Cindoor sellers to manage products, orders, and insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(outfit.className, "min-h-screen bg-gray-50 text-gray-900")}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html >
  );
}
