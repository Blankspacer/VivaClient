import ClientSection from "@/components/HomePage/ClientSection";
import FeaturedProducts from "@/components/HomePage/FeaturedProducts";
import HeroSection from "@/components/HomePage/HeroSection";
import ProductTab from "@/components/HomePage/ProductTab";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ProductTab />
      <ClientSection />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
