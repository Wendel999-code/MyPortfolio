"use client";

import { motion } from "framer-motion";
import { Code, Server } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiFirebase,
  SiPrisma,
  SiGit,
  SiGithub,
  SiVercel,
  SiTypescript,
} from "react-icons/si";

const frontendSkills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
];

const backendSkills = [
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
];

function SkillGroup({
  title,
  icon: Icon,
  skills,
}: {
  title: string;
  icon: any;
  skills: { name: string; icon: any; color: string }[];
}) {
  return (
    <motion.div
      className="glass-card rounded-2xl p-8 w-full max-w-3xl mb-12 hover-lift hover-glow transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-center gap-3 mb-6">
        <Icon className="w-6 h-6 text-red-400" />
        <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {skills.map(({ icon: SkillIcon, name, color }, index) => (
          <motion.div
            key={name}
            className="relative group glass-card p-3 rounded-xl border border-red-800/50 hover:border-red-500 transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(255,0,0,0.25)]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {/* Icon */}
            <SkillIcon
              className="w-8 h-8 transition-transform duration-300"
              style={{ color }}
            />

            {/* Tooltip */}
            <span className="absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black/80 text-white text-xs px-2 py-1 rounded-md pointer-events-none transition-all duration-300 whitespace-nowrap">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-aura relative flex flex-col items-center justify-center min-h-screen py-20 px-4 bg-gradient-to-br from-black via-black to-red-950"
    >
      {/* Section Header */}
      <motion.div
        className="flex flex-col items-center text-center mb-6 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl underline-static font-display text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-6">
          Skills & Technologies
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed relative z-10">
          A balanced toolkit across the full stack — blending creativity and
          functionality to deliver seamless user experiences.
        </p>
      </motion.div>

      {/* Skill Groups */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <SkillGroup
          title="Frontend Development"
          icon={Code}
          skills={frontendSkills}
        />
        <SkillGroup
          title="Backend & Tools"
          icon={Server}
          skills={backendSkills}
        />
      </div>
    </section>
  );
}
