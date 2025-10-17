"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Code, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-black via-black to-red-950  "
    >
      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl underline-static md:text-6xl font-display text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-6"
        >
          Wendel Sabayo
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col items-center gap-2 text-gray-400 text-lg md:text-xl mb-4"
        >
          <div className="flex items-center gap-3">
            <Code className="w-5 h-5 text-red-400" />
            <span className="font-medium bg-gradient-to-l from-red-500 via-white to-red-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-wave">
              Full-Stack Developer
            </span>
            <Zap className="w-5 h-5 text-red-400" />
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            {
              href: "/Wendel_Sabayo_CV.pdf",
              label: "Download CV",
              download: true,
            },
          ].map(({ href, label, download }) => (
            <Link
              key={label}
              href={href}
              {...(download ? { download: true } : {})}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                className="text-red-500 border cursor-pointer border-red-800 bg-black/40 hover:bg-red-950/40 hover:text-white transition-colors font-semibold"
              >
                {label} <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-12 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.2,
          }}
          onClick={() => {
            const target = document.getElementById("projects");
            target?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowDown className="h-8 w-8 text-red-500 animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
}
