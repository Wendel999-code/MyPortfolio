"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Codebility",
      role: "Full Stack Developer Intern",
      date: "May 2025 - October 2025",
      location: "Remote",
      details: [
        "Developed and maintained web applications using Next.js.",
        "Collaborated with cross-functional teams to design and implement new features and fix bugs.",
        "Implemented responsive design and ensured cross-browser compatibility.",
      ],
    },
  ];

  const education = [
    {
      institution: "Self-Taught Development",
      degree: "Full-Stack Web Development",
      date: "2023 - Present",
      description:
        "Learning modern web technologies through documentation, courses, and project-based practice.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative flex flex-col items-center justify-center min-h-screen section-padding overflow-hidden bg-gradient-to-br from-black via-black to-red-950"
    >
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-16 mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-display underline-static text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-6">
            Experience & Education
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            My path from self-directed learning to hands-on development
            experience, continuously growing through real-world projects and
            modern web technologies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-red-800 to-transparent" />

          {/* Professional Experience */}
          <h3 className="text-2xl font-bold text-white mb-10 flex items-center justify-center gap-3 text-center">
            <Briefcase className="w-6 h-6 text-red-500" />
            Professional Experience
          </h3>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="relative flex flex-col sm:flex-row gap-6 mb-12 sm:pl-16"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-3 sm:left-5 top-2">
                <div>
                  <div className="absolute inset-0 w-6 h-6 rounded-full bg-red-500/20 animate-ping" />
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 bg-black/60 ml-16  backdrop-blur-md border border-red-900 hover:border-red-700 rounded-2xl p-2 transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,0,0,0.25)]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-white mb-1">
                      {exp.company}
                    </h4>
                    <p className="text-sm md:text-base text-red-400 font-medium">
                      {exp.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 sm:mt-0 text-gray-400 text-xs md:text-sm">
                    <Calendar className="w-4 h-4" />
                    {exp.date}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </div>

                <ul className="space-y-2 text-gray-300">
                  {exp.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Education Section */}
          <h3 className="text-2xl font-bold text-white mb-10 mt-24 flex items-center justify-center gap-3 text-center">
            <Award className="w-6 h-6 text-red-400" />
            Education & Learning
          </h3>

          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              className="relative flex flex-col sm:flex-row gap-6 mb-12 sm:pl-16"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="absolute left-3 sm:left-5 top-2">
                <div className="absolute inset-0  w-6 h-6  rounded-full bg-red-400/20 animate-ping" />
              </div>

              <div className="flex-1 ml-16  bg-black/60 backdrop-blur-md border border-red-900 hover:border-red-700 rounded-2xl p-2 transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,0,0,0.25)]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-white mb-1">
                      {edu.institution}
                    </h4>
                    <p className="text-sm md:text-base text-red-400 font-medium">
                      {edu.degree}
                    </p>
                  </div>
                  <span className="flex items-center gap-2 text-gray-400 text-xs md:text-sm mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4" />
                    {edu.date}
                  </span>
                </div>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
