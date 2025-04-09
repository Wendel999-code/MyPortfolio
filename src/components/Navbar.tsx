import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import ImageKit from "./ImageKit";

const Navbar = () => {
    return (
        <nav className="sticky top-0 w-full   bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
            <div className="flex justify-between px-2 md:px-[30rem] md:py-6 mt-10">
                <div>
                    <ImageKit
                        path="ww.png"
                        alt="My Logo"
                        className="dark:invert rounded-md"
                        width={32}
                        height={32}
                        priority
                    />
                </div>
                <div className=" flex ">
                    <Link href={"/"}>
                        <Button variant={"ghost"}>Home </Button>
                    </Link>
                    <Link href={"/aboutMe"}>
                        {" "}
                        <Button variant={"ghost"}>About </Button>
                    </Link>
                    <Link href={"/contact"}>
                        {" "}
                        <Button variant={"ghost"}>Contact </Button>
                    </Link>
                </div>
                <div>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
