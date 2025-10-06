import path from "path";

import type { Post } from "@/features/docs/blog/types/post";
import { getMDXData } from "../../process-docs";

export function getAllPosts() {
  return getMDXData(
    path.join(process.cwd(), "src/features/docs/blog/content")
  ).sort(
    (a, b) =>
      new Date(b.metadata.createdAt).getTime() -
      new Date(a.metadata.createdAt).getTime()
  );
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string) {
  return getAllPosts().filter((post) => post.metadata?.category === category);
}
