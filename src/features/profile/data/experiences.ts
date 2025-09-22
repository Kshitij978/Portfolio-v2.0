import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "themoondevs",
    companyName: "TheMoonDevs",
    companyLogo: "/images/company/themoondevs-white.png",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "React Developer",
        employmentPeriod: {
          start: "01.2024",
          end: "05.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Led frontend for an AI platform (React, Next.js, Framer), building complex multi-agent AI chat systems, secure auth, dynamic forms and animations improving engagement and performance.
- Developed core company portal features (Leave/Meeting Trackers, Worklog summaries, AI insights, File Uploads), resulting in a 50% productivity increase. 
- Implemented wallet connections, authentication, smart contract deployments, and token exchanges across various dApps (e.g., [prepo](https://prepo.io), [bsgg](https://bs.gg), [pumpsites](https://www.pumpsites.io/board)).
- Built SenseAi engagement features (streak system, time-tracking, speech-to-text, data visualization) boosting engagement by 80% and QuickLinks web app for efficient team resource access beyond Slack's message limits.`,
        skills: [
          "TypeScript",
          "Next.js",
          "Three.js",
          "React Native",
          "Redux",
          "React Query",
          "Shadcn",
          "GSAP",
          "Framer Motion",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "Postgres",
          "Supabase",
          "Firebase",
          "Socket.IO",
          "JWT",
          "Agentic AI",
          "Generative UI",
          "Digital Ocean",
          "S3 Buckets",
          "PWA",
          "Dynamic UI",
          "Blockchain",
          "Crypto",
          "dApps",
          "SEO",
          "Teamwork",
          "Research",
          "Problem-solving",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "kampd",
    companyName: "Kampd",
    companyLogo: "/images/company/kampd.png",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Product Engineer - Web Development",
        employmentPeriod: {
          start: "11.2022",
          end: "01.2023",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Refactored codebase, reducing size by 50% and improving maintainability.
- Built responsive UI components with Next.js, HTML5, and TailwindCSS.
- Integrated Google Analytics for web and mobile, increasing tracking accuracy by 25%.
- Ensured code stability with unit tests using Jest and React Testing Library.
- Boosted SEO and WebVitals, achieving a 90+ Lighthouse score with optimized meta tags and keywords.`,
        skills: [
          "TypeScript",
          "Next.js",
          "React Testing Library",
          "Jest",
          "JIRA",
          "Agile",
          "TDD",
          "TailwindCSS",
          "Auth0",
          "Docker",
          "SEO",
          "Docusaurus",
          "UI/UX Design",
          "Design System",
          "Brand Design",
          "Figma",
          "Research",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },

  {
    id: "spacenos",
    companyName: "Spacenos Technologies",
    companyLogo: "/images/company/spacenos.jpeg",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Web Developer Intern",
        employmentPeriod: {
          start: "04.2021",
          end: "06.2021",
        },
        employmentType: "Internship",
        description: `- Created OutRemote, a hiring and project management portal with automated workforce features.
- Built responsive UI using ReactJS and Redux workflows.
- Integrated Firebase for auth, database, and file storage.
- Improved performance through code monitoring and debugging.
- Developed reusable components and collaborated with a team of 6 interns.`,
        icon: "code",
        skills: [
          "TypeScript",
          "React.js",
          "Material UI",
          "PrimeReact",
          "GSAP",
          "Redux",
          "MongoDB",
          "Firebase",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Amity University, Lucknow - 8.58/10 CGPA",
        employmentPeriod: {
          start: "08.2018",
          end: "05.2022",
        },
        icon: "education",

        skills: [
          "C++",
          "JavaScript",
          "Data Structures",
          "Algorithms",
          "Computer Architecture",
          "Databases",
          "Machine Learning",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
    ],
  },
];
