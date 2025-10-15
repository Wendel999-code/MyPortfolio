"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-black to-black"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15)_0%,transparent_70%)]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* Header */}
        <motion.div
          className="flex flex-col gap-4 max-w-2xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="md:text-5xl text-3xl font-bold text-red-500 tracking-tight">
            Hey, Wendel here!
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            Crafting digital experiences with the precision of a shinobi.
            <br />
            Full-stack developer specializing in modern web technologies.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {[
            {
              href: "/Wendel_Sabayo_CV.pdf",
              label: "Resume",
              download: true,
            },
            {
              href: "https://github.com/Wendel999-code",
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/wendel-sabayo-9098b9293/",
              label: "LinkedIn",
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
                className="text-red-500 transition-colors border cursor-pointer hover:border-red-500 font-semibold"
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
            const missionsElement =
              document.getElementById("completed-missions");
            missionsElement?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowDown className="h-8 w-8 text-red-500 animate-bounce" />
        </motion.div>
      </motion.div>
    </div>
  );
}
