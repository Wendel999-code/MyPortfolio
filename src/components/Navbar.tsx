"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Code, Folder, Home, Menu, Phone, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/#home", label: "Home", icon: Home },
    { href: "/#aboutMe", label: "About", icon: User },
    { href: "/#contact", label: "Contact", icon: Phone },
    { href: "/#skills", label: "Tech Stack", icon: Code },
    { href: "/#projects", label: "Projects", icon: Folder },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full backdrop-blur bg-gradient-to-r from-red-900 via-black to-black"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-3 md:py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-l from-red-500 via-white to-red-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-wave">
            wndl.dev
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1 lg:space-x-2">
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
                  className={`px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm lg:text-base font-medium transition-colors duration-200 ${
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

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black/90 backdrop-blur border-none"
            >
              <SheetHeader>
                <SheetTitle>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-l from-red-500 via-white to-red-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-wave">
                      wndl.dev
                    </h1>
                  </motion.div>
                </SheetTitle>
                <SheetDescription />
              </SheetHeader>
              <div className="flex flex-col mt-6 space-y-2">
                {navLinks.map((item) => (
                  <Link
                    href={item.href}
                    key={item.label}
                    passHref
                    onClick={() => setOpen(false)}
                  >
                    <Button
                      variant={isActive(item.href) ? "secondary" : "ghost"}
                      className={`justify-start w-full text-left text-white hover:text-red-400 ${
                        isActive(item.href) ? "text-red-400 border-red-500" : ""
                      }`}
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
