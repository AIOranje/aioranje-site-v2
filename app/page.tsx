import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CategorySection from "@/components/category-section"
import ProductGrid from "@/components/product-grid"
import AboutSection from "@/components/about-section"
import AppDownloadBanner from "@/components/app-download-banner"
import LauraSection from "@/components/laura-section"
import NewProductsSection from "@/components/new-products-section"

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <Header />
      <HeroSection />
      <CategorySection />
      <ProductGrid />
      <NewProductsSection />
      <AppDownloadBanner />
      <LauraSection />
      <AboutSection />
    </main>
  )
}
