import Header from "@/components/customer/Header";
import Hero from "@/components/customer/Hero";
import CategorySection from "@/components/customer/CategorySection";
import FeaturedProducts from "@/components/customer/FeaturedProducts";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CategorySection />
        <FeaturedProducts />
      </main>

      {/* Simple Footer for now */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          <p>© 2026 Cindoor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
