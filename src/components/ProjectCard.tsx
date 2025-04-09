"use client";

import { motion } from "framer-motion";

import { useRouter } from "next/navigation";
import ImageKit from "./ImageKit";

const projects = [
    {
        id: 1,
        title: "Attendance Monitoring System",
        description:
            "QR-Code based attendance monitoring system with real-time parental notification.",
        image: "a.png",
        linkTo: "/projects/attendance",
    },
    {
        id: 2,
        title: "Yulo's Poultry Farm",
        description: "An Online ordering platform for poultry product.",
        image: "egg.png",
        linkTo: "/projects/eggpress",
    },
];

const ProjectCard = () => {
    const router = useRouter();

    return (
        <motion.div
            className="grid  grid-cols-1 md:grid-cols-3 gap-6 mb-20"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
        >
            {projects.map((project) => (
                <motion.div
                    key={project.id}
                    onClick={() => router.push(project.linkTo)}
                    className="dark:hover:bg-[#121212] hover:cursor-pointer dark:bg-black hover:bg-gray-100 rounded-lg overflow-hidden p-4 flex flex-col items-start shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <ImageKit
                        path={project.image}
                        alt={project.title}
                        width={350}
                        height={250}
                        className="w-full rounded-md object-cover"
                        priority
                    />
                    <h1 className="dark:text-white font-semibold text-lg mt-3">
                        {project.title}
                    </h1>
                    <p className="text-gray-700 dark:text-gray-400 text-lg mt-1">
                        {project.description}
                    </p>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default ProjectCard;
