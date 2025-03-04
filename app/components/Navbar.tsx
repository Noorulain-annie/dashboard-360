// Navbar.tsx
"use client";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";


const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.5
    }
  }),
  hover: {
    scale: 1.1,
    color: "rgba(216,177,80,1)",
    transition: { duration: 0.2 }
  }
};

const mobileMenuVariants = {
  closed: {
    x: "100%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const mobileNavItemVariants = {
  closed: { opacity: 0, x: 20 },
  open: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", isBold: true },
    { name: "Product", isBold: false },
    { name: "Services", isBold: false },
    { name: "Clients", isBold: false },
    { name: "Blogs", isBold: false },
    { name: "Podcasts", isBold: false },
    { name: "About us", isBold: false }
  ];

  return (
    <motion.div
      className="self-stretch flex w-full items-center justify-between px-4 md:px-8 py-4 relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/956429752a64508534d3aef81491d0ed1adaf512ff9af662af0de2093ae0fb1d?placeholderIfAbsent=true"
        className="w-12 h-12"
        alt="Logo"
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-neutral-50 font-medium">
        {navItems.map((item, index) => (
          <motion.div
            key={index}
            className={item.isBold ? "font-bold" : ""}
            custom={index}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={navItemVariants}
          >
            {item.name}
          </motion.div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white z-50"
        whileTap={{ scale: 0.9 }}
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
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <motion.div
        className="fixed top-0 right-0 h-full w-64 bg-black z-50 md:hidden"
        variants={mobileMenuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <div className="flex flex-col p-6 gap-6 text-white mt-16">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              className={item.isBold ? "font-bold" : ""}
              variants={mobileNavItemVariants}
              whileHover={{
                x: 10,
                color: "rgba(216,177,80,1)",
                transition: { duration: 0.2 }
              }}
            >
              {item.name}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Button */}
      <motion.div
        className="hidden md:flex bg-[rgba(216,177,80,1)] text-white font-semibold px-6 py-3 rounded-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 5px 15px rgba(216, 177, 80, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center gap-2">
          Contact <ArrowRight />
        </div>
      </motion.div>
    </motion.div>
  );
  // const [isOpen, setIsOpen] = useState(false);

  // return (
  //   <div className="self-stretch flex w-full items-center justify-between px-4 md:px-8 py-4 relative">
  //     <img
  //       src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/956429752a64508534d3aef81491d0ed1adaf512ff9af662af0de2093ae0fb1d?placeholderIfAbsent=true"
  //       className="w-12 h-12"
  //       alt="Logo"
  //     />

  //     {/* Desktop Menu */}
  //     <div className="hidden md:flex items-center gap-8 text-neutral-50 font-medium">
  //       <div className="font-bold">Home</div>
  //       <div>Product</div>
  //       <div>Services</div>
  //       <div>Clients</div>
  //       <div>Blogs</div>
  //       <div>Podcasts</div>
  //       <div>About us</div>
  //     </div>

  //     {/* Mobile Menu Button */}
  //     <button
  //       onClick={() => setIsOpen(!isOpen)}
  //       className="md:hidden text-white z-50"
  //     >
  //       <svg
  //         className="w-8 h-8"
  //         fill="none"
  //         stroke="currentColor"
  //         viewBox="0 0 24 24"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth="2"
  //           d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
  //         />
  //       </svg>
  //     </button>

  //     {/* Mobile Menu Overlay */}
  //     {isOpen && (
  //       <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsOpen(false)} />
  //     )}

  //     {/* Mobile Sidebar */}
  //     <div
  //       className={`fixed top-0 right-0 h-full w-64 bg-black z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
  //         } md:hidden`}
  //     >
  //       <div className="flex flex-col p-6 gap-6 text-white mt-16">
  //         <div className="font-bold">Home</div>
  //         <div>Product</div>
  //         <div>Services</div>
  //         <div>Clients</div>
  //         <div>Blogs</div>
  //         <div>Podcasts</div>
  //         <div>About us</div>
  //       </div>
  //     </div>

  //     {/* Contact Button - Moved inside nav container */}
  //     <div className="hidden md:flex bg-[rgba(216,177,80,1)]  text-white font-semibold px-6 py-3 rounded-full">
  //       <div className="flex items-center gap-2">
  //         Contact <ArrowRight />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Navbar;