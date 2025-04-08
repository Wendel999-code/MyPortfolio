"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const EggPress = () => {
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
                    Yulo's Poultry Farm
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="dark:text-gray-400 text-gray-600 text-lg"
                >
                    An online ordering platform for poultry product built with
                    Next.js
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
                        src="/egg.png"
                        alt="My project"
                        width={800}
                        height={200}
                    />
                </div>

                <p className="dark:text-gray-300 text-gray-600">
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

                <div className="flex flex-col gap-3">
                    <h1 className="text-xl font-bold">Features</h1>
                    <ul className="list-disc pl-5 dark:text-gray-300 text-gray-600 space-y-2  text-lg">
                        <li>User management with Clerk</li>
                        <li>Execute CRUD operations for product</li>
                        <li>Customer can place order</li>
                        <li>Admin has the ability to approve order</li>
                        <li>
                            Customer receive notification of their order status
                        </li>
                        <li>Admin can block the customer when neccessarry</li>
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default EggPress;
