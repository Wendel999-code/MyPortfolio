"use client";

import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import ImageKit from "./ImageKit";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50"
        >
            <div className="flex justify-between px-2 md:px-[30rem] md:py-6 mt-10">
                {/* Logo with motion effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <ImageKit
                        path="ww.png"
                        alt="My Logo"
                        className="dark:invert rounded-md"
                        width={32}
                        height={32}
                        priority
                    />
                </motion.div>

                <div className="flex space-x-2">
                    <Link href="/" passHref>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <Button variant="ghost">Home</Button>
                        </motion.div>
                    </Link>
                    <Link href="/aboutMe" passHref>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <Button variant="ghost">About</Button>
                        </motion.div>
                    </Link>
                    <Link href="/contact" passHref>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <Button variant="ghost">Contact</Button>
                        </motion.div>
                    </Link>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ rotate: 10 }}
                >
                    <ModeToggle />
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
