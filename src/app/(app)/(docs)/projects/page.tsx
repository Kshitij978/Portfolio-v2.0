import dayjs from "dayjs";
import type { Metadata } from "next";

import { Separator } from "@/components/separator";
import { DocItem } from "@/features/blog/components/doc-item";
import { getAllPosts } from "@/features/blog/data/posts";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects that I have worked on.",
};

export default function Page() {
  const allPosts = getAllPosts();

  return (
    <>
      <Separator className="h-12" />
      <div className=" px-4">
        <h1 className="text-3xl font-semibold">Projects</h1>
      </div>

      <div className=" p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      <div className="relative pt-4">
        {/* <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div> */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
          {allPosts
            .filter(
              (post) =>
                post.metadata.category === "project" ||
                post.metadata.category === "demo"
            )
            .slice()
            .sort((a, b) =>
              dayjs(b.metadata.createdAt).diff(dayjs(a.metadata.createdAt))
            )
            .map((project, index) => (
              <DocItem
                basePath="/projects"
                key={project.slug}
                doc={project}
                shouldPreloadImage={index <= 4}
              />
            ))}
        </div>
      </div>

      <div className="h-4" />
    </>
  );
}
