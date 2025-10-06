import path from "path";

import { getMDXData } from "@/features/docs/process-docs";

export function getAllProjects() {
  return getMDXData(
    path.join(process.cwd(), "src/features/docs/project/content")
  ).sort(
    (a, b) =>
      new Date(b.metadata.createdAt).getTime() -
      new Date(a.metadata.createdAt).getTime()
  );
}

export function getProjectBySlug(slug: string) {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: string) {
  return getAllProjects().filter(
    (project) => project.metadata?.category === category
  );
}
