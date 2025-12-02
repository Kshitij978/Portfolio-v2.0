"use client";

import { ArrowLeftIcon, Menu } from "lucide-react";
import { m, type MotionValue,useScroll, useTransform } from "motion/react";
import type { ParamValue } from "next/dist/server/request/params";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useRef, useState } from "react";

import type { Post } from "@/features/blog/types/post";
import { useTailwindMedia } from "@/hooks/use-media-query";
import { useNoScroll } from "@/hooks/use-no-scroll";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";

import { Card, CardContent } from "./ui/card";

export default function DynamicNav({
  data,
  slug,
}: {
  data: Post[];
  slug: ParamValue;
}) {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useOutsideClick(menuRef, () => setMenuOpen(false));
  useNoScroll(menuOpen);

  const isMdDown = useTailwindMedia("md", "down");

  const { filteredData, heading } = useMemo(() => {
    if (pathname.startsWith("/blog")) {
      return {
        filteredData: data.filter(
          (post) => post.metadata.category === "article"
        ),
        heading: "Blog",
      };
    }
    if (pathname.startsWith("/projects")) {
      return {
        filteredData: data.filter(
          (post) => post.metadata.category === "project"
        ),
        heading: "Projects",
      };
    }
    return { filteredData: [], heading: "" };
  }, [pathname, data]);

  const { currentPost, exceptCurrentPost } = useMemo(() => {
    if (!filteredData.length)
      return { currentPost: null, exceptCurrentPost: [] };
    return {
      currentPost: filteredData.find((post) => post.slug === slug) ?? null,
      exceptCurrentPost: filteredData.filter((post) => post.slug !== slug),
    };
  }, [filteredData, slug]);

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (isMdDown) {
    return (
      <div className="flex w-full justify-between border-b bg-background px-3 py-4">
        <NavHeader heading={heading} pathname={pathname} />

        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Menu className="h-6 w-6 text-zinc-200" />
        </button>

        <div
          className={cn(
            "fixed bottom-0 left-0 right-0 top-0 overflow-x-hidden backdrop-blur-sm transition-all duration-300 -translate-x-full",
            menuOpen && "translate-x-0"
          )}
        >
          <div
            ref={menuRef}
            className="flex h-dvh w-4/5 flex-col gap-6 bg-background px-3 pb-10 pt-6 font-[Inter,system-ui,ui-sans-serif] tracking-tight text-zinc-200"
          >
            <NavList
              currentPost={currentPost}
              exceptCurrentPost={exceptCurrentPost}
              progressWidth={progressWidth}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-0 h-full w-[360px] border-r">
      <div className="flex w-full flex-col gap-6 px-3 pb-10 pt-6 font-[Inter,system-ui,ui-sans-serif] tracking-tight text-zinc-200">
        <NavHeader heading={heading} pathname={pathname} />
        <NavList
          currentPost={currentPost}
          exceptCurrentPost={exceptCurrentPost}
          progressWidth={progressWidth}
        />
      </div>
    </div>
  );
}

function NavHeader({
  heading,
  pathname,
}: {
  heading: string | null;
  pathname: string;
}) {
  return (
    <Link
      className="flex items-center"
      href={pathname.startsWith("/blog") ? "/blog" : "/projects"}
    >
      <ArrowLeftIcon className="h-5 w-5" />
      <h1 className="pl-2 text-[18px] font-semibold leading-none text-zinc-200">
        {heading}
      </h1>
    </Link>
  );
}

function NavList({
  currentPost,
  exceptCurrentPost,
  progressWidth,
}: {
  currentPost: Post | null;
  exceptCurrentPost: Post[];
  progressWidth: MotionValue<string>;
}) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="mt-1 select-none pl-2 text-sm font-semibold tracking-wide text-zinc-500">
          Now viewing
        </div>

        {currentPost && (
          <Card className="relative z-50 min-h-[100px] overflow-hidden rounded-xl border border-zinc-700/60 bg-zinc-800/50 p-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
            <m.div
              style={{ width: progressWidth }}
              className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-zinc-700/50"
            />
            <CardContent className="p-0">
              <div className="text-[15px] font-semibold leading-tight text-zinc-200">
                {currentPost.metadata.title}
              </div>
              <div className="mt-2 text-[14px] leading-6 text-zinc-400">
                {currentPost.metadata.description}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {exceptCurrentPost.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="mt-2 select-none pl-2 text-sm font-semibold tracking-wide text-zinc-500">
            Up next
          </div>

          {exceptCurrentPost.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="relative mt-2 min-h-[100px] rounded-xl border-none bg-transparent p-3 transition-all duration-300 hover:bg-zinc-800/70 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                <CardContent className="p-0">
                  <div className="text-[15px] font-semibold leading-tight text-zinc-200">
                    {post.metadata.title}
                  </div>
                  <div className="mt-2 text-[14px] leading-6 text-zinc-400">
                    {post.metadata.description}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
