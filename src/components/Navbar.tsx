"use client";

import { useState, useEffect } from "react";
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

  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        setScrollDir("down"); // scrolling down
      } else {
        setScrollDir("up"); // scrolling up
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <>
      {/* Logo remains the same */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-4 left-4 z-50"
      >
        <h1 className="text-lg md:text-2xl font-bold bg-[length:200%_200%] animate-gradient-wave font-display text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
          wndl.dev
        </h1>
      </motion.div>

      {/* Floating right nav */}
      <motion.nav
        initial={{ opacity: 0, x: 50 }}
        animate={{
          opacity: 1,
          x: scrollDir === "down" ? 80 : 0, // slide out when scrolling down
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`fixed ${
          prevScrollY > 50 ? "top-21" : "top-21"
        } right-0 transform -translate-y-1/2 z-50 flex flex-col items-center backdrop-blur bg-black/40 rounded-l-lg border-l-2 border-red-950`}
      >
        {navLinks.map((item, idx) => (
          <Link href={item.href} key={item.label} passHref>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={"outline"}
                className={`flex items-center cursor-pointer justify-items-end md:space-x-2 md:px-4 md:py-2 font-display text-xs md:text-base rounded-lg border-none transition-all duration-200
                  hover:opacity-90
                `}
              >
                <span className="underline-static">{item.label}</span>
              </Button>
            </motion.div>
          </Link>
        ))}
      </motion.nav>
    </>
  );
};

export default Navbar;
