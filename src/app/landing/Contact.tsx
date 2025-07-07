"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  {
    href: "https://github.com/Wendel999-code",
    icon: <FaGithub className="h-5 w-5" />,
    label: "GitHub",
    delay: 0,
  },
  {
    href: "https://www.facebook.com/wendel.sabayo.2024",
    icon: <FaFacebook className="h-5 w-5" />,
    label: "Facebook",
    delay: 0.1,
  },
  {
    href: "https://www.linkedin.com/in/wendel-sabayo-9098b9293/",
    icon: <FaLinkedin className="h-5 w-5" />,
    label: "LinkedIn",
    delay: 0.2,
  },
  {
    href: "mailto:wendelsabayo999@gmail.com",
    icon: <FaEnvelope className="h-5 w-5" />,
    label: "Email",
    delay: 0.3,
  },
];

const Contact = () => {
  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-sm bg-black/50 backdrop-blur-md rounded-lg p-6 border border-gray-800 shadow-lg shadow-red-500/10 flex flex-col gap-6"
    >
      <motion.h2
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-gray-200 text-center relative w-fit mx-auto after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-gradient-to-r after:from-red-500 after:to-transparent after:w-full after:transition-none"
      >
        Let&apos;s Connect
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((item, idx) => (
          <Link
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 border-gray-700 text-gray-300 hover:border-red-500 hover:text-red-500 transition duration-300 shadow hover:shadow-red-500/30 rounded-md py-4"
              >
                {item.icon}
                <span>{item.label}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;
