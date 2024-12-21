import ProductTab from "@/components/HomePage/ProductTab";
import FeaturedProducts from "@/components/HomePage/FeaturedProducts";
import HeroSection from "@/components/HomePage/HeroSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ProductTab />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
