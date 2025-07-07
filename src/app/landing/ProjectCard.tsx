"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Cana Circuit",
    image: "/cana.png",
    description:
      "Cana Circuit is a local congregation under the United Church of Christ in the Philippines, encompassing nine barangays. I developed this project to streamline their administrative and community operations.",
    tech: ["Next.js", "Supabase", "Shadcn", "Tailwind CSS"],
    link: "https://uccp.wndl.dev/",
  },
  {
    title: "Web-Based QR Code Attendance System",
    image: "/qr.png",
    description:
      "A capstone project designed to streamline attendance tracking for teachers and parents, featuring real-time notifications powered by Resend.",
    tech: ["Next.js", "Neon", "Prisma", "Resend", "Shadcn", "Tailwind CSS"],
    link: "https://qr-code-attendance-eosin.vercel.app/attendance",
  },
];

export default function ProjectCards() {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center min-h-screen py-16 bg-gradient-to-br from-black via-black to-red-900 px-4"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 mb-10 text-center tracking-tight">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-black/40 rounded-lg overflow-hidden shadow-md hover:shadow-red-700/20 hover:scale-[1.02] transition-all cursor-pointer flex flex-col w-full max-w-[300px] sm:max-w-[320px] mx-auto"
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
              <p className="text-gray-300 text-xs sm:text-sm mb-3 text-center">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-red-500  text-[10px] sm:text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex justify-center"
                >
                  <Button
                    variant="link"
                    className="text-red-500 hover:text-red-400 text-xs sm:text-sm"
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
