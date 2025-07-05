"use client";

import CarouselCard from "@/components/CarouselCard";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex min-h-screen justify-center items-center mb-20 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/akatsuki-clouds.png')] bg-cover bg-center opacity-5 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col w-[90%] max-w-[600px] px-6 justify-between mt-20 gap-4"
      >
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative md:text-4xl font-bold text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)] w-fit after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-red-500 after:to-transparent hover:after:w-full after:transition-all after:duration-500"
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-400 text-sm md:text-base"
        >
          A glimpse into me
        </motion.p>
        <div>
          <CarouselCard />
        </div>

        <div className="flex flex-col mt-4">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-300 text-base md:text-lg leading-relaxed text-justify"
          >
            Like Itachi mastered Genjutsu, I’ve dedicated myself to mastering
            the art of code. My love for anime fuels my passion for programming,
            inspiring me to turn Infinite Tsukuyomi ideas into reality using
            modern frameworks and tools, building digital worlds with the
            dedication of a true shinobi.
          </motion.p>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-red-900/40 to-transparent pointer-events-none" />
    </motion.div>
  );
};

export default AboutMe;
