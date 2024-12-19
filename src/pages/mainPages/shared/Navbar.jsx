import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { to: "/", text: "Home", className: "text-orange-500" },
    { to: "/about", text: "About" },
    { to: "/paper-sample", text: "Paper Sample" },
    { to: "/customer-quote", text: "Customer Quote" },
    { to: "/resellers", text: "Resellers" },
    { to: "/contact", text: "Contact" },
    { to: "/login", text: "Login", className: "text-green-500" },
  ];

  return (
    <header className={cn("bg-[#1a1a1a] border-b border-orange-600/20")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className={cn("relative flex items-center justify-between h-16")}>
          {/* Logo */}
          <Link to="/" className={cn("flex items-center")}>
            <span
              className={cn(
                "text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
              )}
            >
              VP
            </span>
            <span className={cn("ml-2 text-sm text-gray-400 hidden sm:inline")}>
              Viva Printing Pack
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className={cn("sm:hidden text-gray-300 hover:text-orange-400")}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Navigation Links - Desktop */}
          <ul
            className={cn(
              "hidden sm:flex items-center justify-center space-x-1"
            )}
          >
            {navItems.map((item, index) => (
              <React.Fragment key={item.to}>
                <li>
                  <Link
                    to={item.to}
                    className={cn(
                      "text-gray-300 hover:text-orange-400 transition-colors px-2 lg:px-3 font-bold text-sm lg:text-base",
                      item.className
                    )}
                  >
                    {item.text}
                  </Link>
                </li>
                {index < navItems.length - 1 && (
                  <span className={cn("text-gray-600")}>/</span>
                )}
              </React.Fragment>
            ))}
            <li className={cn("flex justify-center items-center")}>
              <Link
                to="/cart"
                className="text-gray-300 hover:text-orange-400 transition-colors pl-2 lg:pl-3"
              >
                <ShoppingCart className="w-5 h-5" />
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="sm:hidden">
            <ul className={cn("pt-2 pb-4 space-y-2")}>
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={cn(
                      "block px-3 py-2 text-base font-medium text-gray-300 hover:text-orange-400 hover:bg-gray-800 transition-colors",
                      item.className
                    )}
                    onClick={toggleMenu}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/cart"
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-orange-400 hover:bg-gray-800 transition-colors"
                  onClick={toggleMenu}
                >
                  <ShoppingCart className="w-5 h-5 inline-block mr-2" />
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
