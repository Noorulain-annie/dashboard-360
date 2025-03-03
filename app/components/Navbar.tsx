// Navbar.tsx
"use client";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="self-stretch flex w-full items-center justify-between px-4 md:px-8 py-4 relative">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/956429752a64508534d3aef81491d0ed1adaf512ff9af662af0de2093ae0fb1d?placeholderIfAbsent=true"
        className="w-12 h-12"
        alt="Logo"
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-neutral-50 font-medium">
        <div className="font-bold">Home</div>
        <div>Product</div>
        <div>Services</div>
        <div>Clients</div>
        <div>Blogs</div>
        <div>Podcasts</div>
        <div>About us</div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white z-50"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
      >
        <div className="flex flex-col p-6 gap-6 text-white mt-16">
          <div className="font-bold">Home</div>
          <div>Product</div>
          <div>Services</div>
          <div>Clients</div>
          <div>Blogs</div>
          <div>Podcasts</div>
          <div>About us</div>
        </div>
      </div>

      {/* Contact Button - Moved inside nav container */}
      <div className="hidden md:flex bg-[rgba(216,177,80,1)]  text-white font-semibold px-6 py-3 rounded-full">
        <div className="flex items-center gap-2">
          Contact <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Navbar;