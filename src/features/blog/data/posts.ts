import fs from "fs";
import matter from "gray-matter";
import path from "path";

import type { Post, PostMetadata } from "@/features/blog/types/post";

function parseFrontmatter(fileContent: string) {
  const file = matter(fileContent);

  return {
    metadata: file.data as PostMetadata,
    content: file.content,
  };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

export function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);

  return mdxFiles.map<Post>((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));

    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function findNeighbour(docs: Post[], slug: string) {
  const len = docs.length;

  for (let i = 0; i < len; ++i) {
    if (docs[i].slug === slug) {
      return {
        previous: i > 0 ? docs[i - 1] : null,
        next: i < len - 1 ? docs[i + 1] : null,
      };
    }
  }

  return { previous: null, next: null };
}

export function getPostUrl(post: Post) {
  const isComponent = post.metadata?.category === "components";
  const isProject = post.metadata?.category === "project";

  let href;

  if (isProject) href = `/projects/${post.slug}`;
  if (isComponent) href = `/components/${post.slug}`;

  return href || `/blog/${post.slug}`;
}

export function getAllPosts() {
  return getMDXData(path.join(process.cwd(), "src/features/blog/content")).sort(
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
