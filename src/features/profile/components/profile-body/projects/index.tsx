"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Post } from "@/features/blog/types/post";
import { cn } from "@/lib/utils";

import { Panel, PanelHeader, PanelTitle } from "../../panel";
import ProjectItem from "./project-item";

export function Projects({ projects }: { projects: Post[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>Projects</PanelTitle>
      </PanelHeader>

      <div className="p-2 my-4 bg-input/30 rounded-lg border border-edge">
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="group/item hover:bg-white/5 rounded-lg px-2"
          >
            <ProjectItem project={project} />
            {index !== projects.length - 1 && (
              <Separator
                className={cn(
                  "bg-accent",
                  hovered !== null && index === hovered - 1 && "invisible",
                  hovered !== null && hovered === index && "invisible"
                )}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center py-2">
        <Button className="w-full rounded-lg" variant="outline" asChild>
          <Link href="/projects">
            View All
            <ArrowRightIcon className="opacity-80" />
          </Link>
        </Button>
      </div>
    </Panel>
  );
}
