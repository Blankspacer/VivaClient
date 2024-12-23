/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const PriceDisplay = ({ price, unitCost }) => {
  return (
    <div className="mb-4 text-white">
      <div className=" text-sm mb-1">INSTANT QUOTE:</div>
      <div className="text-3xl font-bold text-blue-500">
        ${price.toFixed(2)}
      </div>
      <div className="text-sm  mt-1">
        <span>UNIT COST: ${unitCost.toFixed(2)}</span>
        <span className="mx-2">|</span>
        <a href="#" className="text-blue-500 hover:underline">
          Estimate Shipping
        </a>
      </div>
    </div>
  );
};

const AddToCartButton = ({ onClick }) => {
  return (
    <div className="text-white">
      <button
        onClick={onClick}
        className="w-full bg-blue-500 text-white py-2 px-6 text-sm rounded flex items-center justify-center hover:bg-blue-600 transition-colors"
      >
        <span>ADD TO CART</span>
        <span className="ml-2">›</span>
      </button>
    </div>
  );
};

export function FloatingAddToCart() {
  const [isFloating, setIsFloating] = useState(true);
  const price = 52.47;
  const unitCost = 50.22;

  // IntersectionObserver logic
  //   useEffect(() => {
  //     const element = document.getElementById("add-to-cart-section");

  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         // If the original component is in view, hide the floating version
  //         setIsFloating(!entry.isIntersecting);
  //       },
  //       {
  //         root: null, // viewport
  //         threshold: 0, // trigger when the original component is fully in the viewport
  //       }
  //     );

  //     if (element) {
  //       observer.observe(element);
  //     }

  //     return () => {
  //       if (element) {
  //         observer.unobserve(element);
  //       }
  //     };
  //   }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("add-to-cart-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        const shouldFloat = rect.top < 0;
        setIsFloating(shouldFloat);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAddToCart = () => {
    console.log("Added to cart");
  };

  return (
    <>
      <div id="add-to-cart-section" className=" p-6">
        <PriceDisplay price={price} unitCost={unitCost} />
        <AddToCartButton onClick={handleAddToCart} />
      </div>

      {/* floating version */}
      {isFloating && (
        <div className="fixed bottom-6 right-6 z-50 shadow-lg border-t p-4">
          <div className="flex items-center justify-between">
            <PriceDisplay price={price} unitCost={unitCost} />
            <div className="flex-shrink-0 w-48">
              <AddToCartButton onClick={handleAddToCart} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
