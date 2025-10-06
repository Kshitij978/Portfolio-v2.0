import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { PostItem } from "@/components/post-item";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/features/blog/data/posts";

import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/profile/components/panel";

export function Blog() {
  const allPosts = getAllPosts();

  return (
    <Panel id="blog">
      <PanelHeader>
        <PanelTitle>Blog</PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        {/* <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {allPosts.slice(0, 4).map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </div>
      </div>

      <div className="flex justify-center py-2">
        <Button className="w-full rounded-lg" variant="outline" asChild>
          <Link href="/blog">
            View All
            <ArrowRightIcon className="opacity-80" />
          </Link>
        </Button>
      </div>
    </Panel>
  );
}
