import { AccordionSection } from "@/components/ProductDetails/Accordion";
import { FAQs } from "@/components/ProductDetails/FAQs";
import { FloatingAddToCart } from "@/components/ProductDetails/FloatingAddToCart";
import { HowToOrder } from "@/components/ProductDetails/HowToOrder";
import { ImageGallery } from "@/components/ProductDetails/ImageGallery";
import ProductCustomization from "@/components/ProductDetails/ProductCustomization";
import { ProductInformation } from "@/components/ProductDetails/ProductInfo";
import Turnaround from "@/components/ProductDetails/TurnAround";
import { useState } from "react";

const ProductDetails = () => {
  const [openSection, setOpenSection] = useState("productInfo");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg">
      <div className="max-w-7xl flex gap-6 content-center mx-auto">
        <div>
          <ImageGallery />
          <div className="mt-6">
            <AccordionSection
              title="Product Information"
              isOpen={openSection === "productInfo"}
              onToggle={() => toggleSection("productInfo")}
            >
              <ProductInformation />
            </AccordionSection>

            <AccordionSection
              title="How to Order"
              isOpen={openSection === "howToOrder"}
              onToggle={() => toggleSection("howToOrder")}
            >
              <HowToOrder />
            </AccordionSection>

            <AccordionSection
              title="FAQs"
              isOpen={openSection === "faqs"}
              onToggle={() => toggleSection("faqs")}
            >
              <FAQs />
            </AccordionSection>
          </div>
        </div>

        <div className="w-[100%] shadow-md bg-gray-400 rounded bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600">
          <ProductCustomization />
          <Turnaround />
          <FloatingAddToCart />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
