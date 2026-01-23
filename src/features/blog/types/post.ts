// =============================================================================
// Base Metadata (common to all content types)
// =============================================================================

/**
 * Core metadata fields required by all content types.
 */
export type BaseMetadata = {
  /** Title of the content. */
  title: string;
  /** Short description/summary of the content. */
  description: string;
  /**
   * Social/OG image URL for the content.
   * Use an absolute URL or a path under /public. Recommended size: 1200x630.
   */
  image?: string;
  /**
   * Category identifier/slug used for filtering (see @/features/content utilities).
   */
  category?: string;
  /**
   * Flag to show a "New" badge/highlight in the UI.
   */
  new?: boolean;
};

/**
 * Metadata for content that has date tracking (used for sorting and display).
 */
export type DatedMetadata = {
  /**
   * Content creation date as an ISO date string (e.g. YYYY-MM-DD). Used for sorting.
   */
  createdAt: string;
  /**
   * Last updated date as an ISO date string (e.g. YYYY-MM-DD).
   */
  updatedAt: string;
};

/**
 * Metadata for content with external links (projects, demos).
 */
export type LinkableMetadata = {
  /**
   * GitHub repository link.
   */
  githubLink?: string;
  /**
   * Live/demo link for the project.
   */
  liveLink?: string;
  /**
   * Icon image URL for the content.
   */
  icon?: string;
};

/**
 * Metadata for content with skills/technologies (used for LLM routes).
 */
export type SkillsMetadata = {
  /**
   * List of skills/technologies used in the project.
   */
  skills?: string[];
};

// =============================================================================
// Content-Type Specific Metadata
// =============================================================================

/**
 * Metadata for blog articles.
 */
export type ArticleMetadata = BaseMetadata &
  DatedMetadata & {
    category?: "article";
  };

/**
 * Metadata for projects (with written content).
 */
export type ProjectMetadata = BaseMetadata &
  DatedMetadata &
  LinkableMetadata &
  SkillsMetadata & {
    category?: "project";
  };

/**
 * Metadata for demos (external links without article content).
 */
export type DemoMetadata = BaseMetadata &
  DatedMetadata &
  LinkableMetadata &
  SkillsMetadata & {
    category?: "demo";
    /** Live link is required for demos since they open externally. */
    liveLink: string;
  };

/**
 * Metadata for component documentation.
 */
export type ComponentMetadata = BaseMetadata &
  DatedMetadata & {
    category?: "components";
  };

// =============================================================================
// Unified Types
// =============================================================================

/**
 * Union of all possible metadata types.
 * This provides type safety while allowing flexibility in frontmatter.
 */
export type PostMetadata = BaseMetadata &
  DatedMetadata &
  Partial<LinkableMetadata> &
  Partial<SkillsMetadata>;

/**
 * Represents a content post (article, project, demo, or component).
 */
export type Post = {
  /** Parsed frontmatter metadata from the MDX file. */
  metadata: PostMetadata;
  /** Slug derived from the MDX filename (without extension). */
  slug: string;
  /** MDX content body without frontmatter. */
  content: string;
};
