"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Cana Circuit",
    image: "/cana.png",
    description:
      "Cana Circuit is a local UCCP congregation covering nine barangays, built to streamline its administrative and community operations.",
    link: "https://uccp.wndl.dev/",
    category: "group",
  },
  {
    title: "Learn and Go",
    image: "/learnandgo.png",
    description:
      "Learn & Go is a modern platform that simplifies driver’s license enrollment, connects learners with trusted schools, and streamlines the journey from registration to certification.",
    link: "https://learn-and-go.wndl.dev/",
    category: "personal",
  },
  {
    title: "TapUp",
    image: "/tapup.png",
    description:
      "Digital business card that connects business owners with their customers, making it easier to find and connect with potential clients.",
    link: "https://www.tapup.tech/",
    category: "intern",
  },
];

// Container for staggered entrance
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function ProjectCards() {
  const categories = [
    { key: "all", label: "All " },
    { key: "personal", label: "Personal " },
    { key: "group", label: "Group " },
    { key: "intern", label: "Intern " },
  ];

  const filteredProjects = (category: string) =>
    category === "all"
      ? projects
      : projects.filter((p) => p.category === category);

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center min-h-screen py-16 px-4 overflow-hidden bg-gradient-to-br from-black via-black to-red-950"
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl underline-static font-bold text-red-500 mb-8 text-center tracking-tight relative z-10"
      >
        My Works
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-gray-400 max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed relative z-10"
      >
        A showcase of the projects I’ve built — each designed to solve real
        problems through clean code, modern design, and practical functionality.
      </motion.p>

      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full flex flex-col items-center ">
        <TabsList className="mb-10 flex flex-wrap justify-center gap-3 bg-black/60 p-2 rounded-xl border border-red-600/40 shadow-[0_0_10px_rgba(255,0,0,0.15)]">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat.key}
              value={cat.key}
              className="px-4 py-2 text-sm md:text-base border-none rounded-lg text-gray-300  border-transparent transition-all duration-200
      hover:text-red-400 hover:bg-red-950/30
      data-[state=active]:text-white data-[state=active]:bg-red-700/50 data-[state=active]:shadow-[0_0_10px_rgba(255,0,0,0.4)] data-[state=active]:border-red-500/70"
            >
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat.key} value={cat.key} className="w-full">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4  place-items-center gap-4  w-full"
            >
              {filteredProjects(cat.key).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  className="bg-black/40 rounded-lg overflow-hidden shadow-md shadow-red-700/20 flex flex-col w-full max-w-[300px] sm:max-w-[320px] mx-auto hover:shadow-[0_0_20px_rgba(255,0,0,0.25)]"
                >
                  <div className="overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="w-full object-cover h-40 sm:h-44"
                      />
                    </motion.div>
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-1">
                    <h2 className="text-base sm:text-lg font-semibold text-red-500 mb-2 text-center">
                      {project.title}
                    </h2>
                    <p className="text-gray-300 text-xs sm:text-sm mb-3 indent-2 text-justify">
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
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
