import { cn } from "@/lib/utils";
import { Project } from "../../../types/projects";
import Image from "next/image";
import { Icons } from "@/components/icons";

export default function ProjectItem({
  classname,
  project,
}: {
  classname?: string;
  project: Project;
}) {
  return (
    <div className={cn("w-full cursor-pointer", classname)}>
      <div className="flex items-center py-4 gap-4 px-1">
        <div className="p-1 bg-input rounded-lg border">
          {project.logo ? (
            <Image
              src={project.logo}
              alt={project.title}
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
          <h3 className="text-sm font-medium">{project.title}</h3>
          <p className="text-xs text-muted-foreground">{project.title}</p>
        </div>
      </div>
    </div>
  );
}
