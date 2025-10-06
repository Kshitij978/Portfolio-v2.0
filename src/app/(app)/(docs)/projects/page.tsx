import dayjs from "dayjs";
import type { Metadata } from "next";

import { Separator } from "@/components/separator";
import { DocItem } from "@/features/docs/components/doc-item";
import { getAllProjects } from "@/features/docs/project/data/project";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects that I have worked on.",
};

export default function Page() {
  const allProjects = getAllProjects();

  console.log(allProjects);
  return (
    <>
      <Separator />
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
          {allProjects
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
