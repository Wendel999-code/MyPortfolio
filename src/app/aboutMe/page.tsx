"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import CarouselCard from "@/components/CarouselCard";

const AboutMe = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex  justify-center items-center mb-20"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col  w-[600px]   justify-between   mt-20 gap-5 "
            >
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl font-bold"
                >
                    About Me
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="dark:text-gray-400 text-gray-600 text-lg"
                >
                    A glimpse into me
                </motion.p>
                <div>
                    <CarouselCard />
                </div>

                <div className="flex flex-col gap-7">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className=" dark:text-gray-400 text-gray-600 text-lg"
                    >
                        Hello, I'm Wendel Sabayo from the Philippines. Actually,
                        I had no intention of becoming a web developer, I only
                        started learning programming because I failed my
                        computer programming subject. However, as time passed,
                        what began as a necessity turned into a passion. My
                        curiosity grew, and I became deeply engaged in web
                        development. Debugging and solving errors, while
                        sometimes stressful, became an exciting challenge that
                        kept me motivated.
                    </motion.p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AboutMe;
