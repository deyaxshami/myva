"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.webp"
import { ModeToggle } from "./ThemeSwitcher";
import { NavigationMenuDemo } from "./NavigationMenu";



export default function Navbar() {
    return (
        <nav className="container m-auto py-5 px-8 flex items-center justify-between">
            <div className="flex items-center gap-6">
                <Link href="/">
                    <Image src={logo} alt="MyVa Logo" width={50} height={50} />
                </Link>
                <div className="sm:flex items-center gap-6">
                    <NavigationMenuDemo />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <ModeToggle />
            </div>
        </nav>
    );
}