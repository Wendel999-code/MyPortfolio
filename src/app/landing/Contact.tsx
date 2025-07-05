"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex min-h-screen justify-center items-center bg-black px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md bg-black/50 backdrop-blur-md rounded-lg p-6 border border-gray-800 shadow-lg shadow-red-500/10 flex flex-col gap-6"
      >
        <motion.h1
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-200 relative w-fit after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-gradient-to-r after:from-red-500 after:to-transparent after:w-0 hover:after:w-full after:transition-all after:duration-500"
        >
          Let&apos;s Connect
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              href: "https://github.com/Wendel999-code",
              icon: <FaGithub className="mr-2 h-5 w-5" />,
              label: "GitHub",
              delay: 0,
            },
            {
              href: "https://www.facebook.com/wendel.sabayo.2024",
              icon: <FaFacebook className="mr-2 h-5 w-5" />,
              label: "Facebook",
              delay: 0.1,
            },
            {
              href: "https://www.linkedin.com/in/wendel-sabayo-9098b9293/",
              icon: <FaLinkedin className="mr-2 h-5 w-5" />,
              label: "LinkedIn",
              delay: 0.2,
            },
            {
              href: "mailto:wendelsabayo999@gmail.com",
              icon: <FaEnvelope className="mr-2 h-5 w-5" />,
              label: "Email",
              delay: 0.3,
            },
          ].map((item, idx) => (
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
                  className="w-full border-gray-700 text-gray-300 hover:border-red-500 hover:text-red-500 transition duration-300 shadow hover:shadow-red-500/30 rounded-md py-5"
                >
                  {item.icon}
                  {item.label}
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
