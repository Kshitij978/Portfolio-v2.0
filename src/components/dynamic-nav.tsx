"use client";
import { useParams } from "next/navigation";
import { useDynamicNavScroll } from "@/store/use-dynamic-nav-scroll";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import * as motion from "motion/react-m";
import { cn } from "@/lib/utils";

export default function DynamicNav() {
  const [percentageContentRead, setPercentageContentRead] = useState(0);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latestValue) => {
    // 1. Get the current scroll position
    const scrollPosition = latestValue;

    // 2. Normalize the scroll position to a percentage width from 0 to 100
    const scrollPercentage =
      (scrollPosition /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;

    // 3. Update the state with the calculated percentage
    setPercentageContentRead(Number(scrollPercentage.toFixed(0)));
  });

  console.log(percentageContentRead);
  return (
    <div className=" w-full border-r top-0">
      <div className="h-[862px] w-full text-zinc-200 px-3 pt-6 pb-10 flex flex-col gap-6 font-[Inter,system-ui,ui-sans-serif] tracking-tight">
        {/* Heading */}
        <h1 className="text-[18px] leading-none pl-4 font-semibold text-zinc-200">
          Work
        </h1>

        {/* NOW VIEWING label */}
        <div className="mt-1 text-base pl-4 font-semibold text-zinc-500 tracking-wide  select-none">
          Now viewing
        </div>

        {/* Highlighted current item */}
        <Card className="overflow-hidden z-50 p-3 relative bg-zinc-800/50 border border-zinc-700/60 rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
          <div
            style={{
              width: `${percentageContentRead}%`,
            }}
            className={cn(
              "absolute -z-10 inset-0 left-0 top-0 bottom-0 right-0 bg-zinc-700/50 "
            )}
          />
          <CardContent className="p-0">
            <div className="text-[15px] font-semibold text-zinc-200 leading-tight">
              ArrayBuffer and TypedArray
            </div>
            <div className="mt-2 text-[14px] leading-6 text-zinc-400">
              A deep dive into a niche concept of JavaScript
            </div>
          </CardContent>
        </Card>

        {/* UP NEXT label */}
        <div className="mt-2 text-base pl-4 text-zinc-500 tracking-wide font-semibold  select-none">
          Up next
        </div>

        {/* Next item 1 */}
        <Card className="mt-2 relative p-3 transition-all bg-transparent duration-300 hover:bg-zinc-800/70 border-none rounded-xl hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
          <CardContent className="p-0">
            <div className="text-[15px] font-semibold text-zinc-200 leading-tight">
              Deconstructing Z-index
            </div>
            <div className="mt-2 text-[14px] leading-6 text-zinc-400">
              Understanding the common misconceptions and CSS behavior
            </div>
          </CardContent>
        </Card>

        {/* Spacer to keep bottom breathing room similar to screenshot */}
        <div className="flex-1" />
      </div>
    </div>
  );
}
