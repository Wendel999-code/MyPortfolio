"use client";

import CarouselCard from "@/components/CarouselCard";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex min-h-screen  justify-center items-center mb-20"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col   w-[600px] px-6  justify-between   mt-20 gap-1 "
            >
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:text-3xl font-bold"
                >
                    About Me
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="dark:text-gray-400 text-gray-600 text-sm md:text-md"
                >
                    A glimpse into me
                </motion.p>
                <div>
                    <CarouselCard />
                </div>

                <div className="flex flex-col mt-2">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="dark:text-gray-400 text-gray-600 text-md md:text-lg leading-relaxed text-justify"
                    >
                        Hello, I&apos;m Wendel Sabayo from the Philippines.
                        Initially, I had no intention of becoming a web
                        developer—I only started learning programming because I
                        failed my computer programming subject. However, as time
                        passed, what began as a necessity turned into a passion.
                        My curiosity grew, and I became deeply engaged in web
                        development. Debugging and solving errors, while
                        sometimes stressful, became an exciting challenge that
                        kept me motivated and eager to learn more.
                    </motion.p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AboutMe;
