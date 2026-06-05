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
        description: `- Built AI chat interfaces with streaming responses and multi-turn conversations using Next.js, Vercel AI SDK, and LLM API integrations, improving responsiveness and user interaction flow.
- Owned frontend delivery of an internal PWA with offline support, push notifications, and AI-generated worklog summaries and analytics, reducing weekly manual effort by 3 to 5 hours.
- Shipped SenseAI (AI powered React Native e-learning App) engagement features including a streak system, speech-to-text input, and data visualization.
- Improved React page rendering performance by 30% through component memoization, lazy loading, and state restructuring identified via React DevTools Profiler.
- Rebuilt the frontend architecture using Redux, Context API, and custom hooks, eliminating duplicate logic and cutting future feature development time.
- Designed and maintained Prisma schemas and database migrations for MongoDB and PostgreSQL applications.`,
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
        description: `- Refactored React.js codebase, reducing bundle size by 50% through code splitting and lazy loading.
- Improved core web vitals (LCP, CLS, and INP) by implementing Next.js SSR and SSG with render optimisation, pushing Lighthouse scores above 90.
- Integrated Google Analytics 4 with custom event tracking across web and mobile platforms.
- Wrote 60+ unit and integration tests using Jest and React Testing Library, achieving 80% code coverage across critical paths.`,
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
        description: `- Built a full hiring portal from scratch using React.js, Redux, and Firebase, delivering authentication, file storage, and real-time data in a 6-person team.
- Developed 15+ reusable UI components, collaborated in 6-person team using Git workflow with code reviews.`,
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
