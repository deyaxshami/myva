"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";

import {
    IconTransfer,
    IconPhoneRinging,
    IconMessageCheck,
    IconUserSearch,
    IconCompass
} from "@tabler/icons-react";


export default function GlowingEffectDemo() {
    return (


        <div className="relative z-20 py-10 lg:py-40 max-w-9xl mx-auto">
            <div className="px-8">
                <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                    How My VA’s Personalized approach works
                </h4>

                <p className="text-sm lg:text-base  max-w-8xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                    Getting started with a Virtual Agent or a remote team at first, might be challenging. Things like selecting the right team member and mastering the art of delegation are all common concerns for new clients. Our team is personally involved in every step of the process and are always on hand to discuss your needs – from an initial discovery call through to quality assurance, placement and project management as your requirements evolve.
                </p>
            </div>

            <div className="relative mt-10">
                <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
                    <GridItem
                        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                        icon={<IconCompass className="h-4 w-4 text-black dark:text-neutral-400" />}
                        title="Step #1: Discovery Call"
                        description="We would like to understand your business model and know more about your actual process and what are the roles and main tasks which you are looking to delegate to your remote team."
                    />

                    <GridItem
                        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                        icon={<IconUserSearch className="h-4 w-4 text-black dark:text-neutral-400" />}
                        title="Step #2: Staff Selection Process"
                        description="My Va has a powerful network of motivated professionals who are willing to work. We will select the most appropriate team member of our network and make sure it fits your desired profile."
                    />

                    <GridItem
                        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                        icon={<IconMessageCheck className="h-4 w-4 text-black dark:text-neutral-400" />}
                        title="Step #3: Meeting & Approval"
                        description="After the selection process we will introduce you to one of our team members most suited to fill your vacancy. We will have a conference call together so you can meet them personally."
                    />

                    <GridItem
                        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                        icon={<IconPhoneRinging className="h-4 w-4 text-black dark:text-neutral-400" />}
                        title="Step #4: Launch & Onboarding"
                        description="Provide on-boarding to your VA and start assigning tasks. Our admin tracks productivity using time and performance monitoring software and regular feedback sessions."
                    />

                    <GridItem
                        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                        icon={<IconTransfer className="h-4 w-4 text-black dark:text-neutral-400" />}
                        title="Step #5: Follow Up"
                        description="Our follow up call sessions will be scheduled to make sure you are on the right track to success."
                    />
                </ul>
            </div>
        </div>



    );
}

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={`min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-gray-600 p-2 ">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                                {title}
                            </h3>
                            <h2
                                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400"
                            >
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
