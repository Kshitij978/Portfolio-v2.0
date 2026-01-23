import { getAllPosts } from "@/features/blog/data/posts";
import { getContentUrl, getProjectPosts, hasSkills } from "@/features/content";

function getProjectsContent() {
  const allPosts = getAllPosts();
  const projects = getProjectPosts(allPosts);

  const projectsMarkdown = projects
    .map((project) => {
      const { title, description, githubLink, liveLink } = project.metadata;
      const url = liveLink || githubLink || getContentUrl(project);

      const lines: string[] = [`## ${title}`, "", `Project URL: ${url}`];

      if (hasSkills(project) && project.metadata.skills!.length > 0) {
        lines.push("", `Skills: ${project.metadata.skills!.join(", ")}`);
      }

      if (description) {
        lines.push("", description.trim());
      }

      return lines.join("\n");
    })
    .join("\n\n");

  return `# Projects

${projectsMarkdown}
`;
}

export const dynamic = "force-static";

export async function GET() {
  return new Response(getProjectsContent(), {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
