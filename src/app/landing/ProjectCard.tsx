"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Cana Circuit",
    image: "/cana.png",
    description:
      "Cana Circuit is a local UCCP congregation covering nine barangays, built to streamline its administrative and community operations.",
    tech: ["Next.js", "Supabase", "Shadcn", "Tailwind CSS"],
    link: "https://uccp.wndl.dev/",
  },
  {
    title: "Learn and Go",
    image: "/learnandgo.png",
    description:
      "Learn & Go is a modern platform that simplifies driver’s license enrollment, connects learners with trusted schools, and streamlines the journey from registration to certification.",
    tech: ["Next.js", "Neon", "Prisma", "Resend", "Shadcn", "Tailwind CSS"],
    link: "https://learn-and-go.wndl.dev/",
  },
];

export default function ProjectCards() {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center min-h-screen py-16 px-4 overflow-hidden bg-gradient-to-br from-black via-black to-red-950"
    >
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl underline-static font-bold text-red-500 mb-8 text-center tracking-tight relative z-10"
      >
        My Works
      </motion.h1>

      {/* Section Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-gray-400 max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed relative z-10"
      >
        A showcase of the projects I’ve built — each designed to solve real
        problems through clean code, modern design, and practical functionality.
      </motion.p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-black/40 rounded-lg overflow-hidden shadow-md shadow-red-700/20 hover:scale-[1.02] transition-ease-in-out duration-75 flex flex-col w-full hover:shadow-[0_0_20px_rgba(255,0,0,0.25)]  max-w-[300px] sm:max-w-[320px] mx-auto"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="w-full object-cover h-40 sm:h-44"
            />
            <div className="p-4 flex flex-col justify-between flex-1">
              <h2 className="text-base sm:text-lg font-semibold text-red-500 mb-2 text-center">
                {project.title}
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm mb-3  indent-2 text-justify">
                {project.description}
              </p>

              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex justify-center"
                >
                  <Button
                    variant="link"
                    className="text-red-600 hover:underline-none border-none underline-static cursor-pointer hover:text-red-500 text-xs sm:text-sm"
                  >
                    Visit Project
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
