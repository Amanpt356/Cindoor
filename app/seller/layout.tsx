import Sidebar from "@/components/seller/Sidebar";
import Header from "@/components/seller/Header";

export default function SellerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-50 lg:flex">
            <Sidebar />
            <div className="flex-1 lg:ml-64 flex flex-col min-h-screen transition-all duration-300">
                <Header />
                <main className="flex-1 p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
