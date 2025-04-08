"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col items-center gap-10">
            {/* Header Section */}
            <motion.div
                className="flex flex-col items-start text-start mt-20 gap-5 mr-10"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="md:text-4xl font-bold dark:text-white">
                    Hey, Wendel here!
                </h1>
                <div className="w-[500px]">
                    <p className="dark:text-gray-400 text-lg text-gray-700">
                        Passionate about web full-stack development, residing in
                        the Philippines.
                    </p>
                </div>
            </motion.div>

            <motion.div
                className="flex mr-44 gap-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <Button className="font-sans" variant={"outline"}>
                    Resume <ArrowUpRight />
                </Button>
                <Button className="font-sans" variant={"outline"}>
                    LinkedIn <ArrowUpRight />
                </Button>
                <Button className="font-sans" variant={"outline"}>
                    Facebook <ArrowUpRight />
                </Button>
            </motion.div>

            <motion.div
                className="flex flex-col mt-16 gap-7 max-w-4xl md:ml-[360px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <h1 className="text-gray-600 text-lg">Pinned</h1>
                <ProjectCard />
            </motion.div>
        </div>
    );
}
