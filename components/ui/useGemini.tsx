"use client";
import { useScroll, useTransform } from "motion/react";
import React from "react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";

export default function Usegemini() {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

    return (
        <div
            className="h-[400vh] bg-white dark:bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative overflow-clip"
            ref={ref}
        >
            <GoogleGeminiEffect
                // title="Scale your business to the next level with MyVA"
                description="MyVa is a service outsourcing company focused on generating highly qualified Real Estate Seller leads for Real Estate Agents and Investors. MyVa is your outsourcing spot for handling all those activities that you need to delegate in your business."
                pathLengths={[
                    pathLengthFirst,
                    pathLengthSecond,
                    pathLengthThird,
                    pathLengthFourth,
                    pathLengthFifth,
                ]}
                className="mt-36"
            />
        </div>
    );
}
