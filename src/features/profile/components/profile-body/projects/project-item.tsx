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
    <div className={cn("w-full relative", classname)}>
      <div className="flex items-center py-4 gap-4 px-1">
        <div className="p-1 self-start min-w-fit bg-input rounded-lg border">
          <div
            className="flex size-6 shrink-0 items-center justify-center text-muted-foreground"
            aria-hidden="true"
          >
            {project.metadata.icon ? (
              <Image
                src={project.metadata.icon}
                alt={project.metadata.title}
                width={32}
                height={32}
                quality={100}
                className="flex shrink-0"
                unoptimized
                aria-hidden="true"
              />
            ) : (
              <Icons.project className="size-80" />
            )}
          </div>
        </div>

        <div className="flex-1 min-w-0 flex flex-col gap-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-sm font-medium leading-tight">
              {project.metadata.title}
            </h3>
            <div className="flex gap-3 shrink-0 mt-0.5 relative z-10">
              {project.metadata.githubLink && (
                <SimpleTooltip
                  contentProps={{ sideOffset: 8, className: "p-1" }}
                  content="Github"
                >
                  <Link
                    href={project.metadata.githubLink}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icons.github className="size-4" />
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
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MonitorIcon className="size-4" />
                  </Link>
                </SimpleTooltip>
              )}
            </div>
          </div>
          <p className="text-xs max-w-xs text-muted-foreground leading-relaxed">
            {project.metadata.description}
          </p>
        </div>
      </div>
      {project.metadata.category === "demo" ? (
        <Link
          href={project.metadata.liveLink!}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
        />
      ) : (
        <Link href={`/projects/${project.slug}`} className="absolute inset-0" />
      )}
    </div>
  );
}
