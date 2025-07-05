"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const frontendSkills = [
  "HTML",
  "JavaScript",
  "React",
  "Next.js",
  "Shadcn",
  "Tailwind CSS",
];

const backendSkills = [
  "Express",
  "Firebase",
  "Git",
  "MongoDB",
  "Neon Console",
  "Node.js",
  "Prisma",
  "Supabase",
];

const skillLogos = [
  { name: "React", src: "/logos/react.png" },
  { name: "Next.js", src: "/logos/next.png" },
  { name: "Node.js", src: "/logos/node.png" },
  { name: "MongoDB", src: "/logos/mongo.png" },
  { name: "Tailwind", src: "/logos/tailwind.png" },
  { name: "Supabase", src: "/logos/supa.png" },
];

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="mb-8 w-full max-w-3xl">
      <h2 className="text-lg sm:text-xl text-red-400 font-semibold mb-3 text-center border-b border-red-700 pb-1 w-fit mx-auto">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-black/60 border border-red-700 text-red-400 px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-red-800/30 hover:text-red-300 transition-colors cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SharinganCircle() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 60,
      },
    });
  }, [controls]);

  const radius = 120;

  return (
    <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full border-4 border-red-700 shadow-[0_0_100px_10px_rgba(255,0,0,0.2)] bg-black/40 mt-12">
      <motion.div
        animate={controls}
        className="absolute w-full h-full"
        style={{ originX: 0.5, originY: 0.5 }}
      >
        {skillLogos.map((logo, index) => {
          const angle = (index / skillLogos.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          return (
            <motion.div
              key={logo.name}
              className="absolute"
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                translateX: "-50%",
                translateY: "-50%",
              }}
              whileHover={{ scale: 1.15 }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={32}
                height={32}
                className="rounded-full border border-red-600 shadow shadow-red-500 bg-black/60 p-1"
              />
            </motion.div>
          );
        })}
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center text-red-500 font-semibold text-sm md:text-base select-none animate-pulse">
        My Sharingan
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center min-h-[90vh] py-16 px-4 bg-gradient-to-br from-black via-black to-[#1f0000]"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 mb-8 text-center tracking-tight relative">
        Skills & Technologies
        <span className="block h-0.5 w-16 bg-red-500 mx-auto mt-2"></span>
      </h1>

      <SkillGroup title="Frontend" skills={frontendSkills} />
      <SkillGroup title="Backend & Tools" skills={backendSkills} />

      {/* Sharingan Eye with logos */}
      <SharinganCircle />
    </section>
  );
}
