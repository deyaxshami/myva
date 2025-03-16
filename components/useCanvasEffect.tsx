"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Image from "next/image";
import logo from "../public/logo.webp"
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import databaseImage from "@/public/database.png"
import callerImage from "../public/caller.png"
import calenderImage from "../public/calender.png"
import experienceImage from "../public/experience.png"

export function UseCanvasRevealEffect() {
    return (
        <>
            <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
                <Card
                    imageURL={databaseImage}
                    content={["- 30 Million + Records", "- Seller Nationwide", "- Data Records"]}
                    icon={<Image src={logo} alt="MyVa Logo" width={150} height={150} />
                    }>
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="dark:bg-emerald-900 bg-amber-300"
                    />
                </Card>
                <Card imageURL={callerImage} content={["- 20K Records minimum a month"]} icon={<Image src={logo} alt="MyVa Logo" width={150} height={150} />}>
                    <CanvasRevealEffect
                        animationSpeed={4}
                        containerClassName="dark:bg-black bg-cyan-300"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                </Card>
                <Card imageURL={calenderImage} content={["- 100+ Markets we call"]} icon={<Image src={logo} alt="MyVa Logo" width={150} height={150} />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-fuchsia-300"
                        colors={[[0, 0, 0]]}
                    />
                </Card>
                <Card imageURL={experienceImage} content={["- 20 Years Experience in the Industry"]} icon={<Image src={logo} alt="MyVa Logo" width={150} height={150} />}>
                    <CanvasRevealEffect
                        animationSpeed={2}
                        containerClassName="bg-white-100"
                        colors={[[236, 72, 153],
                        [232, 121, 249],]}
                        showGradient
                        dotSize={1}
                    />
                </Card>
            </div>
        </>
    );
}

const Card = ({
    content,
    icon,
    imageURL,
    children,
}: {
    content: string[];
    imageURL: string | StaticImport;
    icon: React.ReactNode;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4  h-[30rem] relative"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <div>
                    <div className="text-center opacity-0  relative z-10 group-hover/canvas-card:-translate-y-16 group-hover/canvas-card:opacity-100 transition duration-200 w-full  mx-auto flex items-center justify-center">
                        {<Image src={imageURL} alt="database image" width={150} height={150}></Image>}
                    </div>

                    <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 h-10 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                        {content.map((segment) => {
                            return <p className="px-10" key={Math.random()}>
                                {segment} <br />
                            </p>

                        })}
                    </h2>

                </div>
            </div>
        </div>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};
