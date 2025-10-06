import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post, PostMetadata } from "./blog/types/post";
import { Project, ProjectMetadata } from "./project/types/project";

type Metadata = PostMetadata | ProjectMetadata;
type Docs = Post | Project;

function parseFrontmatter(fileContent: string) {
  const file = matter(fileContent);

  return {
    metadata: file.data as Metadata,
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

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);

  return mdxFiles.map<Docs>((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));

    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

function findNeighbour(docs: Post[] | Project[], slug: string) {
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

function getDocUrl(doc: Post | Project) {
  const isComponent = doc.metadata.category === "components";
  return isComponent ? `/components/${doc.slug}` : `/blog/${doc.slug}`;
}

export { getMDXData, findNeighbour, getDocUrl };
