"use client";

import { motion } from "framer-motion";
import { SiGmail, SiGithub, SiFacebook, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import { CarouselCard } from "@/components/CarouselCard";

const links = [
  {
    href: "mailto:wendelsabayo999@gmail.com",
    icon: <SiGmail className="h-8 w-8 text-[#EA4335]" />,
    label: "Email",
    delay: 0.3,
  },
  {
    href: "https://github.com/Wendel999-code",
    icon: <SiGithub className="h-8 w-8 text-[#181717] dark:text-white" />,
    label: "GitHub",
    delay: 0,
  },
  {
    href: "https://www.facebook.com/wendel.sabayo.2024",
    icon: <SiFacebook className="h-8 w-8 text-[#1877F2]" />,
    label: "Facebook",
    delay: 0.1,
  },
  {
    href: "https://www.linkedin.com/in/wendel-sabayo-9098b9293/",
    icon: <SiLinkedin className="h-8 w-8 text-[#0A66C2]" />,
    label: "LinkedIn",
    delay: 0.2,
  },
];

export default function AboutMe() {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-screen py-20 px-6 bg-gradient-to-br from-black via-black to-red-950"
    >
      {/* Header */}
      <motion.div
        className="flex flex-col items-center text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-display underline-static text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-6">
          Who Am I
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          With a BSIT background and a self-taught journey in programming, I
          build clean, scalable systems and continuously explore new
          technologies. Outside of coding, I enjoy anime, gaming, and basketball
          — keeping creativity balanced.
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        {/* Carousel Card with Peak Animation */}
        <motion.div
          className="glass-card overflow-visible w-full md:w-[500px] rounded-2xl flex justify-center items-center backdrop-blur-md shadow-[0_0_25px_rgba(255,0,0,0.15)] relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: [1, 1.05, 1] }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            className="w-full flex justify-start relative overflow-visible"
            initial={{ x: 0 }}
            whileHover={{ x: -20, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <CarouselCard />
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <div className="grid grid-cols-4 md:flex md:flex-col items-center justify-center gap-3">
          {links.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="flex flex-col items-center group"
            >
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{
                    scale: 1.15,
                    rotate: 3,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 14,
                  }}
                  className="flex items-center justify-center bg-black/30 backdrop-blur-md border rounded-xl p-2 sm:p-4 border-red-500 shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300 w-12 h-12 sm:w-16 sm:h-16"
                >
                  {item.icon}
                </motion.div>
              </Link>
              <span className="mt-2 text-xs md:text-sm font-medium text-gray-300 group-hover:text-red-500 transition-colors duration-300">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="w-full text-center mt-20 text-gray-500 text-sm tracking-wide">
        © 2025 Wendel Sabayo. All rights reserved.
      </footer>
    </section>
  );
}
