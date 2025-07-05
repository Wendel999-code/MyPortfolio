"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 w-full z-50 backdrop-blur supports-[backdrop-filter]:bg-background/40 bg-gradient-to-r from-red-900 via-black to-black"
    >
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center px-4 md:px-8 py-4 md:py-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="md:text-2xl text-xl font-bold bg-gradient-to-l from-red-500 via-white to-red-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-wave">
            wndl.dev
          </h1>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex space-x-2">
          {[
            { href: "/", label: "Home", delay: 0.3 },
            { href: "/aboutMe", label: "About", delay: 0.4 },
            { href: "/contact", label: "Contact", delay: 0.5 },
          ].map((item) => (
            <Link href={item.href} key={item.label} passHref>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item.delay }}
                whileHover={{ scale: 1.1 }}
              >
                <Button
                  variant="ghost"
                  className="text-white size-xs md:size-lg transition-colors cursor-pointer hover:bg-white/10  border hover:border-red-500 hover:text-red-500"
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
