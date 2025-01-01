/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import PriceDisplay from "./PriceDisplay";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";

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

export function FloatingAddToCart({ data }) {
  const navigate = useNavigate();
  const { addToCart } = useAuth();
  const [isFloating, setIsFloating] = useState(false);

  console.log(data);

  console.log(data?.pricingTiers[0].unitPrice);

  // console.log(data);
  const price = Number(data?.basePrice);
  const unitCost = Number(data?.pricingTiers[0]?.unitPrice);

  const total = Math.ceil(
    Number(price) * Number(data?.pricingTiers[0].minQuantity)
  );

  const cost = {
    total,
    unitCost,
  };

  console.log({ total });

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

  console.log({ data });
  const res = {
    productId: data?._id,
    name: data?.name,
    quantity: Number(data?.pricingTiers[0].minQuantity),
    basePrice: price,
    unitPrice: unitCost,
    totalPrice: total,
    totalCartPrice: total,
  };
  const handleAddToCart = async () => {
    console.log("Added to cart", res);
    const data = await addToCart(res);
    console.log(data);
    if (data.success == true) {
      toast.success("Product Added To Cart");
      navigate(`/cart`);
    }
  };

  console.log(price);

  return (
    <>
      <div id="add-to-cart-section" className=" p-6">
        <PriceDisplay cost={cost} />
        <AddToCartButton onClick={() => handleAddToCart(data)} />
      </div>

      {/* floating version */}
      {isFloating && (
        <div className="fixed bottom-6 right-6 z-50 shadow-lg border-t p-4">
          <div className="flex items-center justify-between">
            <PriceDisplay cost={cost} />
            <div className="flex-shrink-0 w-48">
              <AddToCartButton onClick={() => handleAddToCart(data)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
