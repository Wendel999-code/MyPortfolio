"use client";

import CarouselCard from "@/components/CarouselCard";
import { motion } from "framer-motion";
import Contact from "./Contact";

const AboutMe = () => {
  return (
    <motion.section
      id="aboutMe"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden px-4 py-20"
    >
      <div
        className="absolute inset-0 bg-[url('/clod.png')] bg-cover bg-no-repeat bg-center opacity-10 mix-blend-screen"
        style={{ backgroundColor: "rgba(255, 0, 0, 0.3)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl w-full flex flex-col items-center gap-6 text-center z-10"
      >
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)] relative w-fit after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-red-500 after:to-transparent hover:after:w-full after:transition-all after:duration-500"
        >
          Who Am I
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-400 max-w-lg text-base md:text-lg leading-relaxed"
        >
          With a BSIT background and a self-taught journey in programming, I
          enjoy crafting clean, scalable systems while exploring new
          technologies to sharpen my skills. I’m also an anime lover and gamer,
          finding inspiration and relaxation in these interests. When I’m away
          from my laptop, you’ll often find me on the basketball court, enjoying
          the game and clearing my mind before diving back into code.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4 w-full">
          <CarouselCard />
          <Contact />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-red-900/40 to-transparent pointer-events-none" />
    </motion.section>
  );
};

export default AboutMe;
