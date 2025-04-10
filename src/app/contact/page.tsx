"use client";

import { Button } from "@/components/ui/button";
import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="flex min-h-screen justify-center mt-30 px-4">
            <div className="w-full max-w-md flex flex-col justify-start gap-7">
                <motion.h1
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:text-xl dark:text-gray-300 text-gray-600 text-start"
                >
                    Let&apos;s connect
                </motion.h1>

                <div className="grid grid-cols-2 gap-4">
                    <Link
                        href="https://github.com/Endelsab"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Button
                                variant="outline"
                                className="md:w-full mx-auto"
                            >
                                <FaGithub className="mr-2 h-5 w-5" />
                                GitHub <ArrowUpRight className="ml-2 h-5 w-5" />
                            </Button>
                        </motion.div>
                    </Link>

                    <Link
                        href="https://www.facebook.com/wendel.sabayo.2024"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Button
                                variant="outline"
                                className="md:w-full mx-auto"
                            >
                                <FaFacebook className="mr-2 h-5 w-5" />
                                Facebook{" "}
                                <ArrowUpRight className="ml-2 h-5 w-5" />
                            </Button>
                        </motion.div>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/wendel-sabayo-9098b9293/"
                        >
                            <Button
                                variant="outline"
                                className="md:w-full mx-auto"
                            >
                                <FaLinkedin className="mr-2 h-5 w-5" />
                                LinkedIn{" "}
                                <ArrowUpRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <a href="mailto:wendelsabayo999@gmail.com">
                            <Button
                                variant="outline"
                                className="md:w-full w-[150px] mx-auto"
                            >
                                <FaEnvelope className="mr-2 h-5 w-5" />
                                Email <ArrowUpRight className="ml-2 h-5 w-5" />
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
