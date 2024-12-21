import { cn } from "@/lib/utils";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";

const slides = [
  {
    title: "WELCOME TO VIVA PRINTING PACK",
    description:
      "We help you to bring your imagination to reality through Printing.",
    buttonText: "Read More",
    bgImage: banner1,
  },
  {
    title: "VIVA PRINTING PACK",
    description:
      "We not only provide printing solutions but help our clients in Design part as well.",
    buttonText: "Read More",
    bgImage: banner2,
  },
];

const navItems = [
  {
    title: "Booklets",
    href: "/booklets",
  },
  {
    title: "Advertising Essentials",
    href: "/advertising",
  },
  {
    title: "Brouchers",
    href: "/brouchers",
  },
  {
    title: "Business Cards",
    href: "/cards",
  },
  {
    title: "Cards and Invitations",
    href: "/invites",
  },
  {
    title: "Business Essentials",
    href: "/essential",
  },
  {
    title: "Signs, Banners, Displays",
    href: "/banners",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative h-[600px] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#ff4800] z-10" />

      <div className="absolute top-1 left-0 right-0 bg-[#1a1a1a] text-gray-400 text-sm py-2 text-center border-b border-[#ff4800] z-10">
        <Marquee>
          <h6 className={cn("font-bold")}>
            We have worked for Hospitals, Brands,Govt.
            organizations,Multinational Companies,Schools- Colleges, Travel,
            Tourism Sector
          </h6>
        </Marquee>
      </div>

      {/* Navigation menu */}
      <div className="absolute top-10 left-0 right-0 bg-[#1a1a1a] text-center py-2 border-y-4 border-[#ff4800] z-10">
        <div className="flex justify-center flex-auto space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to="#"
              className="text-[#00ff00] hover:text-[#ff4800] text-sm transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            currentSlide === index ? "opacity-100" : "opacity-0"
          )}
          style={{
            backgroundImage: `url(${slide.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70">
            <div className="flex flex-col items-center  h-full pt-32 text-center">
              <h1 className="text-white text-6xl font-extrabold mb-8">
                {slide.title}
              </h1>
              <p className="text-[#ff4800] text-4xl font-semibold max-w-5xl mb-8">
                {slide.description}
              </p>
              <Link
                to="#"
                className="bg-[#ff4800] text-white px-8 py-3 inline-block hover:bg-[#ff4800]/90 transition-colors rounded-sm rounded-br-xl"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* slider button*/}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-5 h-5 border-1 rounded-br-md transition-colors",
              currentSlide === index ? "bg-[#ff4800]" : "bg-gray-700"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
