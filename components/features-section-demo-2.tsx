import { cn } from "@/lib/utils";
import {
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconWorldDollar,
  IconUserHeart,
  IconCalendarEvent,
  IconReportAnalytics,
  IconUsersGroup,
  IconClockCancel,
  IconFreeRights,
  IconHandStop,
  IconHours12
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "A dedicated business-class virtual assistant",
      description:
        "Get a highly skilled VA who works exclusively on your tasks, ensuring efficiency and focus.",
      icon: <IconWorldDollar />,
    },
    {
      title: "Your VA will be from a top university",
      description:
        "Work with a well-educated professional who brings intelligence and expertise to your business.",
      icon: <IconUserHeart />,
    },
    {
      title: "Meeting your assistant before deciding to sign up",
      description:
        "Have a personal introduction to ensure the right fit before making a commitment.",
      icon: <IconCalendarEvent />,
    },
    {
      title: "Monthly reports to track hours worked",
      description: "Stay informed with detailed reports on task completion and time usage.",
      icon: <IconReportAnalytics />,
    },
    {
      title: "Access to our entire team for specialist tasks",
      description: "Leverage a pool of experts for specialized tasks beyond your VA’s expertise.",
      icon: <IconUsersGroup />,
    },
    {
      title: "Upgrade, downgrade, or cancel at any time",
      description:
        "Enjoy full flexibility with your plan to match changing business needs.",
      icon: <IconClockCancel />,
    },
    {
      title: "Free training of a replacement assistant should the need arise",
      description:
        "Get a seamlessly trained replacement if your current VA is unavailable.",
      icon: <IconFreeRights />,
    },
    {
      title: "Your VA integrated into your team and systems",
      description: "Your assistant will work within your workflows and tools for smooth collaboration.",
      icon: <IconHeart />,
    },
    {
      title: "No hidden fees or add-ons",
      description:
        "Transparent pricing with no unexpected costs.",
      icon: <IconHandStop />,
    },
    {
      title: "Access to multilingual services",
      description:
        "Work with VAs who can support you in multiple languages.",
      icon: <IconEaseInOut />,
    },
    {
      title: "100% satisfaction guarantee",
      description:
        "	If you’re not happy, we’ll work to make it right.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Flexible working hours to match your business needs",
      description: "Your VA adapts to your time zone and schedule for seamless support.",
      icon: <IconHours12 />,
    }
  ];
  return (
    <div className="relative z-20 pt-10 lg:pt-40 max-w-9xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          FEATURES & BENEFITS
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Get a highly skilled, business-class virtual assistant from a top university, fully integrated into your team and workflows. Enjoy flexibility, transparency, multilingual support, and a satisfaction guarantee with no hidden costs.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-8xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </div>

    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">

    // </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
