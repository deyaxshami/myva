import Image from "next/image";
import Link from "next/link";

import databaseImage from "../public/database.png"
import callerImage from "../public/caller.png"
import calenderImage from "../public/calender.png"
import experienceImage from "../public/experience.png"
import Usegemini from "@/components/ui/useGemini";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="container m-auto flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Usegemini />

        <div>
          <h1>
            SOME OF OUR NUMBERS
          </h1>
          <p>
            We’re with you, you’ll have a whole team to help you reach your goal whether that is your first deal or growing your existing business. Together, with MyVA team and system, you’ll see the needed growth for your business without feeling an effort.
          </p>

          <div className="flex justify-around">
            <div className=""><Image src={databaseImage} alt="database image" width={100} height={100}></Image></div>
            <div className=""><Image src={calenderImage} alt="calender image" width={100} height={100}></Image></div>
            <div className=""><Image src={callerImage} alt="caller image" width={100} height={100}></Image></div>
            <div className=""><Image src={experienceImage} alt="experience image" width={100} height={100}></Image></div>
          </div>
        </div>


      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
