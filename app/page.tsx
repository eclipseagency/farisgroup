import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ClientsSection from "@/components/sections/ClientsSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <ClientsSection />
      <CTASection />
    </>
  );
}
