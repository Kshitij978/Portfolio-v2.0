import * as motion from "motion/react-m";

import { getAllPosts } from "@/features/blog/data/posts";
import { About } from "@/features/profile/components/profile-body/about";
import { Blog } from "@/features/profile/components/profile-body/blog";
import { Experiences } from "@/features/profile/components/profile-body/experiences";
import { Projects } from "@/features/profile/components/profile-body/projects";
import { TeckStack } from "@/features/profile/components/profile-body/tech-stack";
import { cn } from "@/lib/utils";

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-6 w-full",
        // "before:absolute before:-left-[100vw] before:-z-1 before:h-6 before:w-[200vw]",
        // "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}

export default function ProfileBody() {
  const allPosts = getAllPosts();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, overflow: "hidden" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", delay: 0.6 }}
      className="px-2 md:px-0"
    >
      <About />
      <Separator />
      <TeckStack />
      <Separator />
      <Blog
        blogPosts={allPosts.filter(
          (post) => post.metadata.category === "article"
        )}
      />
      <Separator />
      <Experiences />
      <Separator />
      <Projects
        projects={allPosts.filter(
          (post) =>
            post.metadata.category === "project" ||
            post.metadata.category === "demo"
        )}
      />
      <Separator />
    </motion.div>
  );
}
