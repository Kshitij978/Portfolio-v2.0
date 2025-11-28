import { cn } from "@/lib/utils";
import Image from "next/image";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Post } from "@/features/blog/types/post";
import { MonitorIcon } from "lucide-react";

export default function ProjectItem({
  classname,
  project,
}: {
  classname?: string;
  project: Post;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn("w-full", classname)}
    >
      <div className="flex items-center py-4 gap-4 px-1">
        <div className="p-1 self-start min-w-fit bg-input rounded-lg border">
          {project.metadata.image ? (
            <Image
              src={project.metadata.image}
              alt={project.metadata.title}
              width={32}
              height={32}
              quality={100}
              className="flex size-6 shrink-0"
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
          <h3 className="text-sm font-medium">{project.metadata.title}</h3>
          <p className="text-xs max-w-sm overflow-hidden truncate text-muted-foreground">
            {project.metadata.description}
          </p>
          <div className="flex gap-4 mt-4">
            {project.metadata.githubLink && (
              <Link
                href={project.metadata.githubLink}
                className="text-xs text-muted-foreground group flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Icons.github className="size-4" />
                <span className="group-hover:underline">Github</span>
              </Link>
            )}
            {project.metadata.liveLink && (
              <Link
                href={project.metadata.liveLink}
                className="text-xs text-muted-foreground group flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <MonitorIcon className="size-4" />
                <span className="group-hover:underline">Live</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
