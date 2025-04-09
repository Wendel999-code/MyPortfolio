"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ImageKit from "@/components/ImageKit";

const AttendanceProject = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex min-h-screen justify-center items-center px-4 mb-20"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col w-full max-w-lg sm:max-w-xl lg:max-w-2xl justify-between items-start mt-20 gap-2"
            >
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-2xl font-bold"
                >
                    Attendance System
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="dark:text-gray-400 text-gray-600 md:text-lg text-sm  "
                >
                    A QR-Code based attendance monitoring system with real-time
                    parental notification built with Next.js.
                </motion.p>

                <div className="flex flex-col sm:flex-row gap-5 sm:items-center mt-6">
                    <div className="flex flex-col">
                        <p className="text-xl font-bold">Wendel Sabayo</p>
                        <p className="dark:text-gray-400">2024-2025</p>
                        <Link
                            className="text-lg underline underline-offset-4 hover:text-gray-700 dark:text-gray-300 text-gray-600"
                            href={""}
                        >
                            Visit Project
                        </Link>
                    </div>
                </div>

                <div className="p-4 bg-gray-900 mt-7 w-full rounded-md">
                    <ImageKit
                        className="object-contain w-full h-auto rounded-md"
                        path="a.png"
                        alt="My project"
                        width={800}
                        height={400}
                    />
                </div>

                <div className="flex flex-col gap-3 mt-7">
                    <h1 className="text-xl font-bold">Features</h1>
                    <ul className="list-disc pl-5 dark:text-gray-400 text-gray-600 space-y-2 md:text-lg">
                        <li>Execute CRUD operations and generate QR codes</li>
                        <li>
                            Parents receive real-time notifications when
                            students check-in
                        </li>
                        <li>
                            Display scanned students in a user-friendly
                            interface
                        </li>
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AttendanceProject;
