import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { getTableOfContents } from "fumadocs-core/server";
import dayjs from "dayjs";
import { MDX } from "@/components/mdx";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { Prose } from "@/components/ui/typography";
import { InlineTOC } from "@/components/inline-toc";
import { Separator } from "@/components/ui/separator";
import { DocKeyboardShortcuts } from "@/features/blog/components/doc-keyboard-shortcuts";
import { LLMCopyButtonWithViewOptions } from "@/features/blog/components/doc-page-actions";
import { DocShareMenu } from "@/features/blog/components/doc-share-menu";
import { Post } from "../types/post";
import { findNeighbour, getAllPosts, getPostUrl } from "../data/posts";

export function DocContent({
  doc,
  slug,
  basePath,
}: {
  doc: Post;
  slug: string;
  basePath: string;
}) {
  const toc = getTableOfContents(doc.content);

  const allDocs =
    basePath === "/blog"
      ? getAllPosts().filter((post) => post.metadata.category === "article")
      : getAllPosts().filter((post) => post.metadata.category === "project");

  const { previous, next } = findNeighbour(allDocs, slug);
  return (
    <>
      <DocKeyboardShortcuts
        basePath={basePath}
        previous={previous}
        next={next}
      />

      <div className="w-full">
        <Separator className="!h-6 w-full bg-transparent" />

        <div className="md:max-w-[600px] mx-auto">
          <div className="flex items-center justify-between p-2">
            <Button
              className="h-7 gap-2 rounded-lg px-0 font-mono text-muted-foreground"
              variant="link"
              asChild
            >
              <Link href={basePath}>
                <ArrowLeftIcon />
                {basePath === "/blog" ? "Blog" : "Projects"}
              </Link>
            </Button>

            <div className="flex items-center gap-2">
              <LLMCopyButtonWithViewOptions
                markdownUrl={`${getPostUrl(doc)}.mdx`}
                isComponent={doc.metadata.category === "components"}
              />

              <DocShareMenu url={getPostUrl(doc)} />

              {previous && (
                <Button variant="outline" size="icon:sm" asChild>
                  <Link href={`${basePath}/${previous.slug}`}>
                    <ArrowLeftIcon />
                    <span className="sr-only">Previous</span>
                  </Link>
                </Button>
              )}

              {next && (
                <Button variant="outline" size="icon:sm" asChild>
                  <Link href={`${basePath}/${next.slug}`}>
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
            {doc.metadata.image && (
              <Image
                src={doc.metadata.image}
                alt={doc.metadata.title}
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
                {dayjs(doc.metadata.createdAt).format("DD/MM/YYYY")}
              </span>
              <div>
                <h1 className="font-semibold text-2xl leading-relaxed">
                  {doc.metadata.title}
                </h1>

                <p className="lead">{doc.metadata.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {doc.metadata.category &&
                  doc.metadata.category.split(",").map((c) => (
                    <Tag
                      key={c}
                      className="py-[4px] text-muted-foreground bg-background tracking-wider w-fit text-xs"
                    >
                      {c.trim().toUpperCase()}
                    </Tag>
                  ))}
              </div>
            </div>

            {toc.length > 0 && (
              <>
                <Separator className="mb-4" />

                <InlineTOC items={toc} />

                <Separator className="mt-4" />
              </>
            )}

            <div>
              <MDX code={doc.content} />
            </div>
          </Prose>
        </div>
      </div>
    </>
  );
}
