"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

const AttendanceProject = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex min-h-screen justify-center items-center mb-20"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col  w-[600px]   justify-between  items-start mt-20 gap-5 "
            >
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl font-bold"
                >
                    Attendance system
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="dark:text-gray-400 text-gray-600 text-lg"
                >
                    A QR-Code based attendance monitoring system with real-time
                    parental notification built with Next.js.
                </motion.p>

                <div className="flex gap-2 mt-6">
                    <div>
                        <Image
                            className="object-cover rounded-md"
                            src="/avatar.jpg"
                            alt="My avatar"
                            width={48}
                            height={40}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-xl font-bold">Wendel Sabayo</p>
                        <p className="dark:text-gray-400 ">2024-2025 </p>
                        <Link
                            className="text-lg underline underline-offset-4 hover:text-gray-700  dark:text-gray-300 text-gray-600"
                            href={""}
                        >
                            Visit Project
                        </Link>
                    </div>
                </div>

                <div>
                    <Image
                        className="object-cover rounded-md"
                        src="/a.png"
                        alt="My avatar"
                        width={800}
                        height={200}
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="text-xl font-bold">Features</h1>
                    <ul className="list-disc pl-5 dark:text-gray-300 text-gray-600 space-y-2  text-lg">
                        <li>Execute CRUD operations and generate qr-code</li>
                        <li>
                            Upon scanned the parents of the student will receive
                            a notification regarding to their child status
                        </li>
                        <li>Display scanned students</li>
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AttendanceProject;
