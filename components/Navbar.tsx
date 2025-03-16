"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "../public/logo.webp"
import { ModeToggle } from "./ThemeSwitcher";
import { MyMenu } from "./NavigationMenu";



export default function Navbar() {
    return (
        <nav className="∂h-24 fixed top-0 bg-[var(--background)] w-full z-50 m-auto py-5 px-8 flex items-center justify-between">
            <div className="flex items-center gap-6">
                <Link href="/">
                    <Image src={logo} alt="MyVa Logo" width={50} height={50} />
                </Link>
                <div className="sm:flex items-center gap-6">
                    <MyMenu />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <ModeToggle />
            </div>
        </nav>
    );
}