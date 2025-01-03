import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { Menu, ShoppingCart, X } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { RxDashboard } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

import vpLogo from "../../../assets/Viva_Logo.png";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const { auth, logout } = useAuth();

  // console.log(auth?.role);

  // console.log("Navbar rendered. Auth:", auth, "Location:", location.pathname);

  const toggleMenu = () => setIsOpen(!isOpen);

  // handle logout
  const handleLogOut = async () => {
    const res = await logout();

    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  const navItems = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/paper-sample", text: "Paper Sample" },
    { to: "/customer-quote", text: "Customer Quote" },
    { to: "/resellers", text: "Resellers" },
    { to: "/contact", text: "Contact" },
    !auth && { to: "/login", text: "Login", className: "text-green-500" },
  ];

  return (
    <header className={cn("bg-[#1a1a1a] my-0")}>
      <div className={cn("max-w-7xl mx-auto border-b border-[#373737]")}>
        <nav
          className={cn(
            "container mx-auto flex items-center justify-between px-4 lg:px-8"
          )}
        >
          {/* Logo */}
          <Link to="/" className={cn("flex items-center py-4")}>
            <img className="lg:w-28 w-24" src={vpLogo} alt="" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className={cn("sm:hidden text-gray-300 hover:text-[#ff4800]")}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Navigation Links - Desktop */}
          <ul className={cn("hidden sm:flex items-center space-x-1")}>
            {navItems.map((item, index) => (
              <React.Fragment key={index}>
                <li>
                  <Link
                    to={item.to}
                    className={cn(
                      "px-3 py-6 text-gray-300 hover:text-[#ff4800] relative group",
                      "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2",
                      "after:w-0 after:h-0",
                      "after:border-l-[6px] after:border-r-[6px] after:border-t-0 after:border-b-[6px]",
                      "after:border-transparent after:border-b-[#ff4800]",
                      "after:opacity-0 hover:after:opacity-100",
                      "after:transition-all duration-200",
                      item.to === location.pathname && [
                        "text-[#ff4800]",
                        "after:opacity-100",
                      ],
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
            <li className={cn("flex items-center")}>
              <Link
                to="/cart"
                className={cn(
                  "text-gray-300 hover:text-[#ff4800] transition-colors pl-3"
                )}
              >
                <ShoppingCart className="w-5 h-5" />
              </Link>

              <div className="flex items-center gap-4">
                {auth && (
                  <>
                    <Button
                      className="ml-10"
                      size="default"
                      onClick={handleLogOut}
                      variant="viva"
                    >
                      Logout
                    </Button>
                  </>
                )}

                {auth?.role === "admin" && (
                  <p
                    title="DashBoard"
                    className="text-3xl ml-3  text-green-500 hover:text-[#ff4800]"
                  >
                    <Link to={"/dashboard"}>
                      <RxDashboard />
                    </Link>
                  </p>
                )}
              </div>
            </li>
          </ul>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="sm:hidden">
            <ul className="py-2 space-y-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={cn(
                      "block px-4 py-2 text-gray-300 hover:text-[#ff4800] hover:bg-gray-800",
                      item.to === location.pathname && "text-[#ff4800]",
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
                  className={cn(
                    "block px-4 py-2 text-gray-300 hover:text-[#ff4800] hover:bg-gray-800"
                  )}
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

export default React.memo(Navbar);
