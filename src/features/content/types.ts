export const ContentCategory = {
  ARTICLE: "article",
  PROJECT: "project",
  DEMO: "demo",
  COMPONENT: "components",
} as const;

export type ContentCategoryType =
  (typeof ContentCategory)[keyof typeof ContentCategory];

export type CategoryConfig = {
  basePath: string;
  requiresContent: boolean;
  opensExternal: boolean;
  showInBlog: boolean;
  showInProjects: boolean;
};

export const CATEGORY_CONFIG: Record<ContentCategoryType, CategoryConfig> = {
  [ContentCategory.ARTICLE]: {
    basePath: "/blog",
    requiresContent: true,
    opensExternal: false,
    showInBlog: true,
    showInProjects: false,
  },
  [ContentCategory.PROJECT]: {
    basePath: "/projects",
    requiresContent: true,
    opensExternal: false,
    showInBlog: false,
    showInProjects: true,
  },
  [ContentCategory.DEMO]: {
    basePath: "/projects",
    requiresContent: false,
    opensExternal: true,
    showInBlog: false,
    showInProjects: true,
  },
  [ContentCategory.COMPONENT]: {
    basePath: "/components",
    requiresContent: true,
    opensExternal: false,
    showInBlog: false,
    showInProjects: false,
  },
};
