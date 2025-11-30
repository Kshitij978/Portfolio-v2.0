import { MonitorIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/icons";
import { SimpleTooltip } from "@/components/ui/tooltip";
import type { Post } from "@/features/blog/types/post";
import { cn } from "@/lib/utils";

export default function ProjectItem({
  classname,
  project,
}: {
  classname?: string;
  project: Post;
}) {
  return (
    <div className={cn("w-full", classname)}>
      <div className="flex items-center py-4 gap-4 px-1">
        <div className="p-1 self-start min-w-fit bg-input rounded-lg border">
          {project.metadata.image ? (
            <Image
              src={project.metadata.image}
              alt={project.metadata.title}
              width={32}
              height={32}
              quality={100}
              className="flex shrink-0"
              unoptimized
              aria-hidden="true"
            />
          ) : (
            <div
              className="flex size-6 shrink-0 items-center justify-center text-muted-foreground"
              aria-hidden="true"
            >
              <Icons.project className="size-80" />
            </div>
          )}
        </div>

        <div>
          <div className="flex gap-4 items-center mb-2">
            <Link
              className="hover:underline"
              href={`/projects/${project.slug}`}
            >
              <h3 className="text-sm font-medium">{project.metadata.title}</h3>
            </Link>
            <span className="text-xs text-muted-foreground">|</span>
            <div className="flex gap-4 self-center">
              {project.metadata.githubLink && (
                <SimpleTooltip
                  contentProps={{ sideOffset: 8, className: "p-1" }}
                  content="Github"
                >
                  <Link
                    href={project.metadata.githubLink}
                    className="text-xs text-muted-foreground group flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icons.github className="size-4" />
                    {/* <span className="group-hover:underline">Github</span> */}
                  </Link>
                </SimpleTooltip>
              )}
              {project.metadata.liveLink && (
                <SimpleTooltip
                  contentProps={{ sideOffset: 8, className: "p-1" }}
                  content="Live"
                >
                  <Link
                    href={project.metadata.liveLink}
                    className="text-xs text-muted-foreground group flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MonitorIcon className="size-4" />
                    {/* <span className="group-hover:underline">Live</span> */}
                  </Link>
                </SimpleTooltip>
              )}
            </div>
          </div>
          <p className="text-xs max-w-sm overflow-hidden truncate text-muted-foreground">
            {project.metadata.description}
          </p>
        </div>
      </div>
    </div>
  );
}
