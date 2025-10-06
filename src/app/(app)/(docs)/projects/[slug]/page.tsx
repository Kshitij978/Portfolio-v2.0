import dayjs from "dayjs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { BlogPosting as PageSchema, WithContext } from "schema-dts";

import { SITE_INFO } from "@/config/site";
import { USER } from "@/features/profile/data/user";
import { DocContent } from "@/features/docs/components/doc-content";
import { getDocUrl } from "@/features/docs/process-docs";
import {
  getAllProjects,
  getProjectBySlug,
} from "@/features/docs/project/data/project";
import { Project } from "@/features/docs/project/types/project";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const project = getProjectBySlug(slug);

  if (!project) {
    return notFound();
  }

  const { title, description, image, createdAt, updatedAt } = project.metadata;

  const projectUrl = getDocUrl(project);
  const ogImage = image || `/og/simple?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      url: projectUrl,
      type: "article",
      publishedTime: dayjs(createdAt).toISOString(),
      modifiedTime: dayjs(updatedAt).toISOString(),
      images: {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImage],
    },
  };
}

function getPageJsonLd(project: Project): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: project.metadata.title,
    description: project.metadata.description,
    image:
      project.metadata.image ||
      `/og/simple?title=${encodeURIComponent(project.metadata.title)}`,
    url: `${SITE_INFO.url}${getDocUrl(project)}`,
    datePublished: dayjs(project.metadata.createdAt).toISOString(),
    dateModified: dayjs(project.metadata.updatedAt).toISOString(),
    author: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const slug = (await params).slug;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd(project)).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <DocContent doc={project} slug={slug} basePath="/projects" />
    </>
  );
}
