import Hero from "@/components/Hero";
import AboutAgency from "@/components/AboutAgency";
import ProductsSection from "@/components/ProductsSection";
import AboutGramado from "@/components/AboutGramado";
import TouristSpots from "@/components/TouristSpots";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutAgency />
      <AboutGramado />
      <ProductsSection />
      <TouristSpots />
      <FAQ />
      <ContactSection />
    </div>
  );
};

export default Index;
