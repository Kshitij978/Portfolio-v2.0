"use client";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { Post } from "@/features/docs/blog/types/post";
import fetchAllPosts from "@/features/docs/blog/post-actions";
import Link from "next/link";
import { useTailwindMedia } from "@/hooks/use-media-query";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useNoScroll } from "@/hooks/use-no-scroll";

export default function DynamicNav() {
  const [percentageContentRead, setPercentageContentRead] = useState(0);
  const [data, setData] = useState<Post[]>([]);
  const { scrollY } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const { slug } = useParams();

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchAllPosts().then((data) => setData(data));
  }, []);

  useOutsideClick(menuRef, () => setMenuOpen(false));
  useNoScroll(menuOpen);

  const isMdDown = useTailwindMedia("md", "down");

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

  const currentPost = data && data.find((post) => post.slug === slug)!;
  const exceptCurrentPost = data && data.filter((post) => post.slug !== slug);

  if (isMdDown) {
    return (
      <div className="w-full flex  bg-background justify-between px-3 py-4 border-b">
        <h1 className="text-[18px] leading-none pl-4 font-semibold text-zinc-200">
          Work
        </h1>
        {/* hamburger */}
        <svg
          onClick={() => setMenuOpen(!menuOpen)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox=" 0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>
        <div
          className={cn(
            "backdrop-blur-sm transition-all duration-300 overflow-x-hidden fixed left-0 -translate-x-full right-0 top-0 bottom-0",
            menuOpen && "translate-x-0"
          )}
        >
          <div
            ref={menuRef}
            className="h-dvh w-4/5 bg-background text-zinc-200 px-3 pt-6 pb-10 flex flex-col gap-6 font-[Inter,system-ui,ui-sans-serif] tracking-tight"
          >
            {/* NOW VIEWING label */}
            <div className="mt-1 text-sm pl-4 font-semibold text-zinc-500 tracking-wide  select-none">
              Now viewing
            </div>

            {/* Highlighted current item */}
            {currentPost && (
              <Card className="overflow-hidden min-h-[100px] z-50 p-3 relative bg-zinc-800/50 border border-zinc-700/60 rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
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
                    {currentPost.metadata.title}
                  </div>
                  <div className="mt-2 text-[14px] leading-6 text-zinc-400">
                    {currentPost.metadata.description}
                  </div>
                </CardContent>
              </Card>
            )}
            {data.length > 1 && (
              <>
                {/* UP NEXT label */}
                <div className="mt-2 text-base pl-4 text-zinc-500 tracking-wide font-semibold  select-none">
                  Up next
                </div>

                {exceptCurrentPost.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className="mt-2 relative min-h-[100px] p-3 transition-all bg-transparent duration-300 hover:bg-zinc-800/70 border-none rounded-xl hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                      <CardContent className="p-0">
                        <div className="text-[15px] font-semibold text-zinc-200 leading-tight">
                          {post.metadata.title}
                        </div>
                        <div className="mt-2 text-[14px] leading-6 text-zinc-400">
                          {post.metadata.description}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </>
            )}

            {/* Spacer to keep bottom breathing room similar to screenshot */}
            <div className="flex-1" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full border-r top-0">
      <div className="h-[862px] w-full text-zinc-200 px-3 pt-6 pb-10 flex flex-col gap-6 font-[Inter,system-ui,ui-sans-serif] tracking-tight">
        {/* Heading */}
        <h1 className="text-[18px] leading-none pl-4 font-semibold text-zinc-200">
          Work
        </h1>

        {/* NOW VIEWING label */}
        <div className="mt-1 text-sm pl-4 font-semibold text-zinc-500 tracking-wide  select-none">
          Now viewing
        </div>

        {/* Highlighted current item */}
        {currentPost && (
          <Card className="overflow-hidden min-h-[100px] z-50 p-3 relative bg-zinc-800/50 border border-zinc-700/60 rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
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
                {currentPost.metadata.title}
              </div>
              <div className="mt-2 text-[14px] leading-6 text-zinc-400">
                {currentPost.metadata.description}
              </div>
            </CardContent>
          </Card>
        )}
        {data.length > 1 && (
          <>
            {/* UP NEXT label */}
            <div className="mt-2 text-base pl-4 text-zinc-500 tracking-wide font-semibold  select-none">
              Up next
            </div>

            {exceptCurrentPost.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="mt-2 relative min-h-[100px] p-3 transition-all bg-transparent duration-300 hover:bg-zinc-800/70 border-none rounded-xl hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                  <CardContent className="p-0">
                    <div className="text-[15px] font-semibold text-zinc-200 leading-tight">
                      {post.metadata.title}
                    </div>
                    <div className="mt-2 text-[14px] leading-6 text-zinc-400">
                      {post.metadata.description}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </>
        )}

        {/* Spacer to keep bottom breathing room similar to screenshot */}
        <div className="flex-1" />
      </div>
    </div>
  );
}
