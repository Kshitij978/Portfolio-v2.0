import DynamicNav from "./dynamic-nav";
import MainNavigation from "./main-navigation";
import { cn } from "@/lib/utils";
import { CommandMenu } from "./command-menu";
import { getAllPosts } from "@/features/blog/data/posts";
import BlogNav from "./blog-nav";

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
