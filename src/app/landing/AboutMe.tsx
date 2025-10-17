"use client";

import { motion } from "framer-motion";
import CarouselCard from "@/components/CarouselCard";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  {
    href: "mailto:wendelsabayo999@gmail.com",
    icon: <FaEnvelope className="h-12 w-12 text-[#D44638]" />, // Gmail red
    delay: 0.3,
  },
  {
    href: "https://github.com/Wendel999-code",
    icon: <FaGithub className="h-12 w-12 text-black dark:text-white" />, // GitHub
    delay: 0,
  },
  {
    href: "https://www.facebook.com/wendel.sabayo.2024",
    icon: <FaFacebook className="h-12 w-12 text-[#1877F2]" />, // Facebook blue
    delay: 0.1,
  },
  {
    href: "https://www.linkedin.com/in/wendel-sabayo-9098b9293/",
    icon: <FaLinkedin className="h-12 w-12 text-[#0A66C2]" />, // LinkedIn blue
    delay: 0.2,
  },
];

export default function AboutMe() {
  return (
    <section
      id="contact"
      className="section-aura relative flex flex-col items-center justify-center min-h-screen py-20 px-4 bg-gradient-to-br from-black via-black to-red-950"
    >
      {/* Section Header */}
      <motion.div
        className="flex flex-col items-center text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-display underline-static text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-6">
          Who Am I
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          With a BSIT background and a self-taught journey in programming, I
          enjoy building clean, scalable systems while continuously exploring
          new technologies to improve my craft. Outside of coding, I’m into
          anime, gaming, and basketball — finding balance and creativity through
          them.
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Carousel Card */}
        <motion.div
          className="glass-card w-full md:w-1/2 rounded-2xl p-6 flex justify-center items-center hover-lift hover-glow transition-all duration-500"
          whileHover={{ scale: 1.02 }}
        >
          <CarouselCard />
        </motion.div>

        {/* Contact Card */}
        <div className="flex md:flex-col flex-row gap-4">
          {links.map((item, idx) => (
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                <Button
                  variant="outline"
                  className=" cursor-pointer flex border border-red-800/50 hover:border-red-500 transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(255,0,0,0.25)] items-center justify-center gap-2  text-gray-300 hover:text-red-500  duration-300 shadow-sm hover:shadow-red-500/30 rounded-md py-4"
                >
                  {item.icon}
                </Button>
              </motion.div>
            </Link>
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
