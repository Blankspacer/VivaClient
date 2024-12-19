import React from "react";
import { cn } from "@/lib/utils";
import { Facebook, Twitter, Mail, PinIcon as Pinterest } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("bg-[#191919] py-8 px-4")}>
      <div className={cn("container mx-auto")}>
        <div className={cn("flex justify-center mb-6")}>
          <Link to="/" className={cn("flex items-center")}>
            <span
              className={cn(
                "text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
              )}
            >
              VP
            </span>
          </Link>
        </div>

        {/* contact information */}
        <div className={cn("text-center mb-8 space-y-2")}>
          <p className={cn("text-gray-400 ")}>
            26/2 South Bainarbag, Matuail-1362, Jatrabari, Dhaka, Bangladesh
          </p>
          <p className={cn("text-gray-400 ")}>+88-01701004822</p>
          <p className={cn("text-gray-400 ")}>info@vivasmartprinting.com</p>
        </div>

        {/* newsletter */}
        {/* <div className={cn("max-w-xl mx-auto mb-8")}>
          <div className={cn("flex flex-col sm:flex-row")}>
            <input
              type="email"
              placeholder="Enter your email to join newsletter..."
              className={cn(
                "flex-1 px-8 py-4 rounded bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:border-orange-500"
              )}
            />
            <button
              className={cn(
                "px-6 py-2 bg-[#FD5927] text-white rounded hover:bg-[#FD805A] transition-colors"
              )}
            >
              Subscribe
            </button>
          </div>
        </div> */}

        <div className={cn("max-w-xl mx-auto mb-8")}>
          <div className={cn("flex")}>
            <input
              type="email"
              placeholder="Enter your email to join newsletter..."
              className={cn(
                "flex-1 px-8 py-4 rounded-l-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:border-[#FD5927]"
              )}
            />
            <button
              className={cn(
                "px-6 py-4 bg-[#FD5927] text-white rounded-br-2xl hover:bg-[#FD805A] transition-colors"
              )}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* social media */}
        <div className={cn("flex justify-center gap-4 mb-8")}>
          <a
            href="#"
            className={cn(
              "p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-orange-500 transition-colors"
            )}
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className={cn(
              "p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-orange-500 transition-colors"
            )}
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className={cn(
              "p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-orange-500 transition-colors"
            )}
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="#"
            className={cn(
              "p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-orange-500 transition-colors"
            )}
          >
            <Pinterest className="w-5 h-5" />
          </a>
        </div>

        {/* copyright */}
        <div className={cn("text-center text-gray-500 text-sm")}>
          <p>
            Viva printing pack © Copyright {currentYear}. All right reserved.
            Designed by{" "}
            <a
              href="#"
              className={cn(
                "text-blue-500 hover:text-blue-400 transition-colors"
              )}
            >
              Black Spider
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
