import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import TouristSpots from "@/components/TouristSpots";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductsSection />
      <TouristSpots />
      <ContactSection />
    </div>
  );
};

export default Index;
