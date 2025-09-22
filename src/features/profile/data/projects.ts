import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "github-readme-activity-graph",
    title: "Github Readme Activity Graph",
    period: {
      start: "12.2020",
    },
    link: "https://github.com/Ashutosh00710/github-readme-activity-graph",
    skills: [
      "Open Source",
      "TypeScript",
      "Jest",
      "Snapshot Testing",
      "Chartist.js",
      "Server Side Rendering",
      "CSS Animations",
      "GitHub Actions",
      "Documentation",
      "Git",
    ],
    description: `A dynamically generated activity graph to show your GitHub activities of last 31 days.
- 🔨 Built using HTML/CSS, GitHub API, and Chartist.js.
- ⌛ Realtime graph editing UI.
- ⚡ 50K+ active users, 1.9K GitHub stars, 700+ forks, and 500K monthly requests.
- 🙌 Featured by Eddie Jaoude on YouTube.

This project is proudly supported by:

[![JetBrains Open Source Support Program](https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.svg)](https://www.jetbrains.com/community/opensource/#support)
`,
    logo: "/images/projects/grag-icon.svg",
    isExpanded: true,
  },
];
