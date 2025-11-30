import { getAllPosts } from "@/features/blog/data/posts";
import { cn } from "@/lib/utils";

import BlogNav from "./blog-nav";
import { CommandMenu } from "./command-menu";
import MainNavigation from "./main-navigation";

export default function Navigation() {
  const posts = getAllPosts();
  return (
    <div
      className={cn(
        "flex w-full sticky top-0 md:w-fit z-50 max-h-1/3 md:h-dvh"
      )}
    >
      <MainNavigation>
        <CommandMenu posts={posts} />
      </MainNavigation>
      <BlogNav data={posts} />
    </div>
  );
}
