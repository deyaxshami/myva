import Image from "next/image";
import Link from "next/link";

import Usegemini from "@/components/ui/useGemini";
import { UseCanvasRevealEffect } from "@/components/useCanvasEffect";
import FeaturesSectionDemo from "@/components/features-section-demo-2";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <main className="container m-auto flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Usegemini />

        <UseCanvasRevealEffect />

        <FeaturesSectionDemo />
      </main>
    </div>
  );
}
