"use client";

import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import { Code, Folder, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/#projects", label: "Projects", icon: Folder },
    { href: "/#experience", label: "Experience", icon: Code },

    { href: "/#contact", label: "Contact", icon: Phone },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full backdrop-blur bg-gradient-to-br from-black via-black to-[#1f0000]"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-3 md:py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-lg md:text-2xl font-bold bg-[length:200%_200%] animate-gradient-wave font-display text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
            wndl.dev
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <div className=" flex space-x-1 lg:space-x-2">
          {navLinks.map((item, idx) => (
            <Link href={item.href} key={item.label} passHref>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  variant={isActive(item.href) ? "secondary" : "ghost"}
                  className={`px-1 py-1 md:px-4 md:py-2 cursor-pointer text-xs md:text-sm lg:text-base  transition-colors duration-200 font-display text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 ${
                    isActive(item.href)
                      ? "text-red-400 border-red-500"
                      : "text-white hover:text-red-400"
                  }`}
                >
                  {item.label}
                </Button>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
