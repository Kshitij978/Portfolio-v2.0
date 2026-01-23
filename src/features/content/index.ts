export {
  ContentCategory,
  CATEGORY_CONFIG,
  type ContentCategoryType,
  type CategoryConfig,
} from "./types";

export {
  // Config & URL utilities
  getCategoryConfig,
  getContentUrl,
  isExternalContent,
  isCategory,

  // Filtering utilities
  getBlogPosts,
  getProjectPosts,
  getPostsByCategory,
  getPostsByCategories,

  // Sorting utilities
  sortByDateDesc,

  // Type guards
  isArticle,
  isProject,
  isDemo,
  isComponent,
  hasLinks,
  hasSkills,
} from "./utils";
