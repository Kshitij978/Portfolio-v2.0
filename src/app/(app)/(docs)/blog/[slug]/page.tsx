import dayjs from "dayjs";
import { getTableOfContents } from "fumadocs-core/server";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { BlogPosting as PageSchema, WithContext } from "schema-dts";

import { InlineTOC } from "@/components/inline-toc";
import { MDX } from "@/components/mdx";
import { Button } from "@/components/ui/button";
import { Prose } from "@/components/ui/typography";
import { SITE_INFO } from "@/config/site";
import { PostKeyboardShortcuts } from "@/features/blog/components/post-keyboard-shortcuts";
import { LLMCopyButtonWithViewOptions } from "@/features/blog/components/post-page-actions";
import { PostShareMenu } from "@/features/blog/components/post-share-menu";
import {
  findNeighbour,
  getAllPosts,
  getPostBySlug,
} from "@/features/blog/data/posts";
import type { Post } from "@/features/blog/types/post";
import { USER } from "@/features/profile/data/user";
import Image from "next/image";
import { Tag } from "@/components/ui/tag";
import { Separator } from "@/components/ui/separator";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const { title, description, image, createdAt, updatedAt } = post.metadata;

  const postUrl = getPostUrl(post);
  const ogImage = image || `/og/simple?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      url: postUrl,
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

function getPageJsonLd(post: Post): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metadata.title,
    description: post.metadata.description,
    image:
      post.metadata.image ||
      `/og/simple?title=${encodeURIComponent(post.metadata.title)}`,
    url: `${SITE_INFO.url}${getPostUrl(post)}`,
    datePublished: dayjs(post.metadata.createdAt).toISOString(),
    dateModified: dayjs(post.metadata.updatedAt).toISOString(),
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
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const toc = getTableOfContents(post.content);

  const allPosts = getAllPosts();
  const { previous, next } = findNeighbour(allPosts, slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd(post)).replace(/</g, "\\u003c"),
        }}
      />

      <PostKeyboardShortcuts basePath="/blog" previous={previous} next={next} />

      <div className="w-full">
        <Separator className="!h-6 w-full bg-transparent" />

        <div className="md:max-w-[600px] mx-auto">
          <div className="flex items-center justify-between p-2">
            <Button
              className="h-7 gap-2 rounded-lg px-0 font-mono text-muted-foreground"
              variant="link"
              asChild
            >
              <Link href="/blog">
                <ArrowLeftIcon />
                Blog
              </Link>
            </Button>

            <div className="flex items-center gap-2">
              <LLMCopyButtonWithViewOptions
                markdownUrl={`${getPostUrl(post)}.mdx`}
                isComponent={post.metadata.category === "components"}
              />

              <PostShareMenu url={getPostUrl(post)} />

              {previous && (
                <Button variant="outline" size="icon:sm" asChild>
                  <Link href={`/blog/${previous.slug}`}>
                    <ArrowLeftIcon />
                    <span className="sr-only">Previous</span>
                  </Link>
                </Button>
              )}

              {next && (
                <Button variant="outline" size="icon:sm" asChild>
                  <Link href={`/blog/${next.slug}`}>
                    <span className="sr-only">Next</span>
                    <ArrowRightIcon />
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* <div className="screen-line-before screen-line-after">
        <div
          className={cn(
            "h-8",
            "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
            "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"
          )}
        />
      </div> */}

          <Prose className="p-2">
            {post.metadata.image && (
              <Image
                src={post.metadata.image}
                alt={post.metadata.title}
                width={1200}
                height={630}
                quality={100}
                priority
                unoptimized
                objectFit="cover"
                className="aspect-1200/600 rounded-xl"
              />
            )}
            <div className="flex flex-col gap-4 mb-8">
              <span className="text-muted-foreground font-dm-mono">
                {dayjs(post.metadata.createdAt).format("DD/MM/YYYY")}
              </span>
              <div>
                <h1 className="font-semibold text-2xl leading-relaxed">
                  {post.metadata.title}
                </h1>

                <p className="lead">{post.metadata.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.metadata.category &&
                  post.metadata.category.split(",").map((c) => (
                    <Tag
                      key={c}
                      className="py-[4px] text-muted-foreground bg-background tracking-wider w-fit text-xs"
                    >
                      {c.trim().toUpperCase()}
                    </Tag>
                  ))}
              </div>
            </div>

            <Separator className="mb-4" />

            <InlineTOC items={toc} />

            <Separator className="mt-4" />

            <div>
              <MDX code={post.content} />
            </div>
          </Prose>
        </div>
      </div>

      <div className="screen-line-before h-4 w-full" />
    </>
  );
}

function getPostUrl(post: Post) {
  const isComponent = post.metadata.category === "components";
  return isComponent ? `/components/${post.slug}` : `/blog/${post.slug}`;
}
