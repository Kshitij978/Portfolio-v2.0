import type { Metadata } from "next";

import { Separator } from "@/components/separator";
import { FadeIn } from "@/components/ui/fade-in";
import { DocItem } from "@/features/blog/components/doc-item";
import { getAllPosts } from "@/features/blog/data/posts";
import { getProjectPosts, sortByDateDesc } from "@/features/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects that I have worked on.",
};

export default function Page() {
  const allPosts = getAllPosts();

  return (
    <>
      <Separator className="h-12" />
      <FadeIn className=" px-4" index={0}>
        <h1 className="text-3xl font-semibold">Projects</h1>
      </FadeIn>

      <FadeIn className=" p-4" index={1}>
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </FadeIn>

      <FadeIn className="relative pt-4" index={2}>
        {/* <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div> */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
          {sortByDateDesc(getProjectPosts(allPosts)).map((project, index) => (
            <DocItem
              basePath="/projects"
              key={project.slug}
              doc={project}
              shouldPreloadImage={index <= 4}
            />
          ))}
        </div>
      </FadeIn>

      <div className="h-4" />
    </>
  );
}

