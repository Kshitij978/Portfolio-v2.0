import type { Post } from "@/features/blog/types/post";

import {
  CATEGORY_CONFIG,
  ContentCategory,
  type CategoryConfig,
  type ContentCategoryType,
} from "./types";

export function getCategoryConfig(category?: string): CategoryConfig | null {
  if (!category) return null;
  return CATEGORY_CONFIG[category as ContentCategoryType] ?? null;
}

export function getContentUrl(post: Post): string {
  const config = getCategoryConfig(post.metadata.category);

  if (config?.opensExternal && post.metadata.liveLink) {
    return post.metadata.liveLink;
  }

  const basePath = config?.basePath ?? "/blog";
  return `${basePath}/${post.slug}`;
}

export function isExternalContent(post: Post): boolean {
  const config = getCategoryConfig(post.metadata.category);
  return config?.opensExternal ?? false;
}

export function isCategory(post: Post, category: ContentCategoryType): boolean {
  return post.metadata.category === category;
}

export function getBlogPosts(posts: Post[]): Post[] {
  return posts.filter((post) => {
    const config = getCategoryConfig(post.metadata.category);
    return config?.showInBlog ?? false;
  });
}

export function getProjectPosts(posts: Post[]): Post[] {
  return posts.filter((post) => {
    const config = getCategoryConfig(post.metadata.category);
    return config?.showInProjects ?? false;
  });
}

export function getPostsByCategory(
  posts: Post[],
  category: ContentCategoryType,
): Post[] {
  return posts.filter((post) => post.metadata.category === category);
}

export function getPostsByCategories(
  posts: Post[],
  categories: ContentCategoryType[],
): Post[] {
  return posts.filter((post) =>
    categories.includes(post.metadata.category as ContentCategoryType),
  );
}

export function sortByDateDesc(posts: Post[]): Post[] {
  return [...posts].sort(
    (a, b) =>
      new Date(b.metadata.createdAt).getTime() -
      new Date(a.metadata.createdAt).getTime(),
  );
}
