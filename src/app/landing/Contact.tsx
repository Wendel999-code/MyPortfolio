"use client";

import { motion } from "framer-motion";




export default function Contact() {
  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-sm bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-red-900 shadow-lg shadow-red-500/10 flex flex-col gap-6"
    >
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-gray-200 text-center relative w-fit mx-auto after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-gradient-to-r after:from-red-500 after:to-transparent after:w-full"
      >
        Let&apos;s Connect
      </motion.h2>

      {/* Buttons */}
     
    </motion.div>
  );
}
