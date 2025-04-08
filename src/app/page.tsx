"use client";

import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col  items-center gap-10">
            {/* Header Section */}
            <div className="flex flex-col items-start text-start mt-20 gap-5 mr-10">
                <h1 className="md:text-4xl font-bold dark:text-white">
                    Hey, Wendel here!
                </h1>
                <div className="w-[500px]">
                    <p className="dark:text-gray-400 text-lg text-gray-700">
                        Passionate about web full-stack development reside in
                        the Philippines.
                    </p>
                </div>
            </div>

            {/* Social Buttons */}
            <div className="flex  mr-44  gap-3  ">
                <Button className="font-sans" variant={"outline"}>
                    Resume <ArrowUpRight />
                </Button>
                <Button className="font-sans" variant={"outline"}>
                    LinkedIn <ArrowUpRight />
                </Button>
                <Button className="font-sans" variant={"outline"}>
                    Facebook <ArrowUpRight />
                </Button>
            </div>

            {/* Pinned Projects Section */}
            <div className="flex flex-col mt-16 gap-7 max-w-4xl md:ml-[360px]">
                <h1 className="text-gray-600 text-lg">Pinned</h1>
                <ProjectCard />
            </div>
        </div>
    );
}
