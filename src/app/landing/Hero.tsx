"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Code, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-black via-black to-red-950"
    >
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-display text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-800 mb-6 underline-static"
        >
          Wendel Sabayo
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col items-center gap-2 text-gray-300 text-lg md:text-xl mb-6"
        >
          <div className="flex items-center gap-3">
            <Code className="w-5 h-5 text-red-400" />
            <span className="font-medium bg-gradient-to-l from-red-500 via-white to-red-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-wave">
              Full-Stack Developer
            </span>
            <Zap className="w-5 h-5 text-red-400" />
          </div>
        </motion.div>

        {/* Button Highlighted */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <Link
            href="/wendel_sabayo.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 20px rgba(255,0,0,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <Button
                variant="default"
                className="relative cursor-pointer overflow-hidden text-white font-semibold border border-red-800 bg-gradient-to-r from-red-600 to-red-800 shadow-[0_0_10px_rgba(255,0,0,0.4)] hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] hover:from-red-700 hover:to-red-900 transition-all px-6 py-3"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Download CV
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-700 to-red-900 opacity-20"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-14 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.2,
          }}
          onClick={() => {
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowDown className="h-8 w-8 text-red-500 animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
}
