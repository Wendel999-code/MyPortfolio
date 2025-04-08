import Image from "next/image";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="sticky top-0 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
            <div className="flex justify-between md:px-[30rem] md:py-6 mt-10">
                <div>
                    <Image
                        src="/ww.png"
                        alt="My Logo"
                        className="dark:invert"
                        width={32}
                        height={32}
                        priority
                    />
                </div>
                <div className=" flex gap-2">
                    <Link href={"/"}>
                        <Button variant={"ghost"}>Home </Button>
                    </Link>
                    <Link href={"/aboutMe"}>
                        {" "}
                        <Button variant={"ghost"}>About </Button>
                    </Link>
                    <Button variant={"ghost"}>Contact </Button>
                </div>
                <div>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
