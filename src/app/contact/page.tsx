"use client";

import { Button } from "@/components/ui/button";
import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
    return (
        <div className="flex min-h-screen justify-center mt-30 px-4">
            <div className="w-full max-w-md flex flex-col justify-start gap-7  ">
                <h1 className="md:text-xl dark:text-gray-300 text-gray-600 text-start ">
                    Let&apos;s connect
                </h1>

                <div className="grid grid-cols-2  gap-4">
                    <Button variant="outline" className="md:w-full  mx-auto">
                        <FaGithub className="mr-2 h-5 w-5" />
                        GitHub <ArrowUpRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button variant="outline" className="md:w-full  mx-auto">
                        <FaFacebook className="mr-2 h-5 w-5" />
                        Facebook <ArrowUpRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button variant="outline" className="md:w-full  mx-auto">
                        <FaLinkedin className="mr-2 h-5 w-5" />
                        LinkedIn <ArrowUpRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                        variant="outline"
                        className="md:w-full w-[150px] mx-auto"
                    >
                        <FaEnvelope className="mr-2 h-5 w-5" />
                        Email <ArrowUpRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
