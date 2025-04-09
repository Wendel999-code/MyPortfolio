"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ImageKit from "@/components/ImageKit";

const EggPress = () => {
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
                    Yulo&apos;s Poultry Farm
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="dark:text-gray-400 text-gray-600 md:text-lg text-sm"
                >
                    An online ordering platform for poultry products built with
                    Next.js.
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
                        path="egg.png"
                        alt="My project"
                        width={800}
                        height={400}
                    />
                </div>

                <p className="dark:text-gray-300 text-gray-600 mt-5 text-md text-justify md:text-lg">
                    This capstone project addresses the challenges faced by our
                    beneficiary, whose business relies solely on selling eggs.
                    Currently, customers must visit in person to place orders,
                    often resulting in wasted trips if stocks are unavailable.
                    Additionally, the business struggles with order and delivery
                    inefficiencies, as well as manual record-keeping. To
                    overcome these issues, we developed this system to
                    streamline operations and facilitate the transition to
                    digital business processes.
                </p>

                <div className="flex flex-col gap-3 mt-7">
                    <h1 className="text-xl font-bold">Features</h1>
                    <ul className="list-disc pl-5 dark:text-gray-400 text-gray-600 space-y-2 md:text-lg text-sm">
                        <li>User management with Clerk</li>
                        <li>Execute CRUD operations for products</li>
                        <li>Customers can place orders</li>
                        <li>Admins have the ability to approve orders</li>
                        <li>
                            Customers receive notifications of their order
                            status
                        </li>
                        <li>Admin can block customers when necessary</li>
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default EggPress;
