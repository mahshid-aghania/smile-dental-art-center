import rawPosts from "@/lib/blog/posts.json";
import {
  BLOG_PILLARS,
  CLUSTER_POSTS,
  getClusterPost,
  getClusterPostsByPillar,
  type BlogFaq,
  type BlogPillar,
  type ClusterPost,
} from "@/lib/blog/cluster";
import { IMPLANT_OPTIONS, PILLAR_PATH, SITE_URL } from "@/lib/implants/data";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type BlogSection = {
  heading: string;
  blocks: BlogBlock[];
};

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  excerpt: string;
  intro: string[];
  sections: BlogSection[];
};

export type { BlogFaq, BlogPillar };
export { BLOG_PILLARS };

/** Original 18 in-depth implant articles (from posts.json). */
const POSTS = (rawPosts as BlogPost[]).slice().sort((a, b) => a.id - b.id);

/** Every article across the site: implant deep-dives + the Markham cluster. */
const ALL_POSTS: BlogPost[] = [...POSTS, ...(CLUSTER_POSTS as BlogPost[])];

/* ------------------------------------------------------------------ */
/* Blog metadata                                                       */
/* ------------------------------------------------------------------ */

export const BLOG_BASE = "/blog";

/** Publication date shown on each post and in Article schema. */
export const BLOG_PUBLISHED = "2026-06-05";

export const BLOG_CATEGORIES = [
  "Basics & Longevity",
  "Health & Candidacy",
  "Procedure & Recovery",
  "Cost & Insurance",
  "Technology & Materials",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

/** Maps each post slug to a display category. */
const CATEGORY_BY_SLUG: Record<string, BlogCategory> = {
  "are-dental-implants-permanent": "Basics & Longevity",
  "how-long-do-dental-implants-last": "Basics & Longevity",
  "dental-implant-longevity-life-changes": "Basics & Longevity",
  "dental-implants-health-outcomes": "Basics & Longevity",

  "dental-implants-osteoporosis": "Health & Candidacy",
  "dental-implants-for-seniors": "Health & Candidacy",
  "psychological-factors-dental-implant-success": "Health & Candidacy",

  "diet-after-dental-implants": "Procedure & Recovery",
  "do-dental-implants-require-hospitalization": "Procedure & Recovery",
  "dental-implant-pain-management": "Procedure & Recovery",
  "dental-implant-aftercare": "Procedure & Recovery",
  "dental-implant-checkups-schedule": "Procedure & Recovery",

  "dental-implant-cost": "Cost & Insurance",
  "dental-implant-insurance-options": "Cost & Insurance",

  "choosing-dental-implant-type-and-brand": "Technology & Materials",
  "3d-printing-dental-implant-customization": "Technology & Materials",
  "dental-implant-materials-titanium-zirconia": "Technology & Materials",
  "new-dental-implant-technology": "Technology & Materials",
};

/* ------------------------------------------------------------------ */
/* Internal linking maps (E-E-A-T + SEO)                               */
/* ------------------------------------------------------------------ */

/** Related blog posts (by slug) shown at the foot of each article. */
const RELATED_POSTS: Record<string, string[]> = {
  "are-dental-implants-permanent": [
    "how-long-do-dental-implants-last",
    "dental-implant-longevity-life-changes",
    "dental-implants-health-outcomes",
  ],
  "dental-implants-osteoporosis": [
    "dental-implants-for-seniors",
    "choosing-dental-implant-type-and-brand",
    "dental-implant-materials-titanium-zirconia",
  ],
  "diet-after-dental-implants": [
    "dental-implant-aftercare",
    "dental-implant-pain-management",
    "dental-implant-checkups-schedule",
  ],
  "do-dental-implants-require-hospitalization": [
    "dental-implant-pain-management",
    "dental-implant-aftercare",
    "new-dental-implant-technology",
  ],
  "dental-implants-health-outcomes": [
    "dental-implants-for-seniors",
    "are-dental-implants-permanent",
    "dental-implant-longevity-life-changes",
  ],
  "dental-implants-for-seniors": [
    "dental-implants-health-outcomes",
    "dental-implants-osteoporosis",
    "how-long-do-dental-implants-last",
  ],
  "dental-implant-longevity-life-changes": [
    "how-long-do-dental-implants-last",
    "dental-implant-checkups-schedule",
    "dental-implant-aftercare",
  ],
  "choosing-dental-implant-type-and-brand": [
    "dental-implant-materials-titanium-zirconia",
    "new-dental-implant-technology",
    "3d-printing-dental-implant-customization",
  ],
  "psychological-factors-dental-implant-success": [
    "dental-implant-pain-management",
    "dental-implants-health-outcomes",
    "dental-implant-aftercare",
  ],
  "3d-printing-dental-implant-customization": [
    "new-dental-implant-technology",
    "choosing-dental-implant-type-and-brand",
    "dental-implant-materials-titanium-zirconia",
  ],
  "how-long-do-dental-implants-last": [
    "are-dental-implants-permanent",
    "dental-implant-longevity-life-changes",
    "dental-implant-checkups-schedule",
  ],
  "dental-implant-pain-management": [
    "dental-implant-aftercare",
    "do-dental-implants-require-hospitalization",
    "diet-after-dental-implants",
  ],
  "dental-implant-cost": [
    "dental-implant-insurance-options",
    "dental-implant-materials-titanium-zirconia",
    "choosing-dental-implant-type-and-brand",
  ],
  "dental-implant-aftercare": [
    "diet-after-dental-implants",
    "dental-implant-pain-management",
    "dental-implant-checkups-schedule",
  ],
  "dental-implant-insurance-options": [
    "dental-implant-cost",
    "dental-implants-for-seniors",
    "how-long-do-dental-implants-last",
  ],
  "dental-implant-materials-titanium-zirconia": [
    "choosing-dental-implant-type-and-brand",
    "new-dental-implant-technology",
    "3d-printing-dental-implant-customization",
  ],
  "new-dental-implant-technology": [
    "3d-printing-dental-implant-customization",
    "dental-implant-materials-titanium-zirconia",
    "choosing-dental-implant-type-and-brand",
  ],
  "dental-implant-checkups-schedule": [
    "dental-implant-aftercare",
    "dental-implant-longevity-life-changes",
    "how-long-do-dental-implants-last",
  ],
};

/**
 * Relevant implant service/treatment pages each article should link to.
 * These connect the blog (informational) to the implant pillar/service
 * pages (transactional), which is the core internal-linking goal.
 */
const RELATED_IMPLANT_PATHS: Record<string, string[]> = {
  "are-dental-implants-permanent": [PILLAR_PATH, "/dental-implants/procedure"],
  "dental-implants-osteoporosis": ["/dental-implants/bone-grafting", "/dental-implants/sinus-lift"],
  "diet-after-dental-implants": ["/dental-implants/procedure", PILLAR_PATH],
  "do-dental-implants-require-hospitalization": ["/dental-implants/procedure", "/dental-implants/same-day"],
  "dental-implants-health-outcomes": [PILLAR_PATH, "/dental-implants/vs-dentures"],
  "dental-implants-for-seniors": ["/dental-implants/implant-dentures", "/dental-implants/all-on-4"],
  "dental-implant-longevity-life-changes": ["/dental-implants/procedure", PILLAR_PATH],
  "choosing-dental-implant-type-and-brand": ["/dental-implants/single-tooth", "/dental-implants/all-on-4"],
  "psychological-factors-dental-implant-success": [PILLAR_PATH, "/dental-implants/procedure"],
  "3d-printing-dental-implant-customization": ["/dental-implants/procedure", "/dental-implants/same-day"],
  "how-long-do-dental-implants-last": [PILLAR_PATH, "/dental-implants/vs-dentures"],
  "dental-implant-pain-management": ["/dental-implants/procedure", "/dental-implants/same-day"],
  "dental-implant-cost": ["/dental-implants/cost", "/dental-implants/vs-dentures"],
  "dental-implant-aftercare": ["/dental-implants/procedure", PILLAR_PATH],
  "dental-implant-insurance-options": ["/dental-implants/cost", PILLAR_PATH],
  "dental-implant-materials-titanium-zirconia": ["/dental-implants/single-tooth", PILLAR_PATH],
  "new-dental-implant-technology": ["/dental-implants/same-day", "/dental-implants/procedure"],
  "dental-implant-checkups-schedule": ["/dental-implants/procedure", PILLAR_PATH],
};

/** href -> human label for implant service pages used in related links. */
const IMPLANT_LABELS: Record<string, string> = {
  [PILLAR_PATH]: "Dental Implants in Markham",
  ...Object.fromEntries(IMPLANT_OPTIONS.map((o) => [o.href, o.title])),
};

/* ------------------------------------------------------------------ */
/* Accessors                                                           */
/* ------------------------------------------------------------------ */

/** The original 18 implant deep-dives (used for the implant-focused index sections). */
export function getImplantBlogPosts(): BlogPost[] {
  return POSTS;
}

/** Every article on the site. */
export function getAllBlogPosts(): BlogPost[] {
  return ALL_POSTS;
}

export function getAllBlogSlugs(): string[] {
  return ALL_POSTS.map((p) => p.slug);
}

export function getBlogPost(slug: string): BlogPost | null {
  return ALL_POSTS.find((p) => p.slug === slug) ?? null;
}

export function getBlogCategory(slug: string): BlogCategory {
  return CATEGORY_BY_SLUG[slug] ?? "Basics & Longevity";
}

/** True when a slug belongs to the Markham 5-pillar cluster. */
export function isClusterPost(slug: string): boolean {
  return Boolean(getClusterPost(slug));
}

/** FAQ items for a cluster article (empty for the original implant deep-dives). */
export function getBlogFaqs(slug: string): BlogFaq[] {
  return getClusterPost(slug)?.faqs ?? [];
}

/** The pillar an article belongs to, if it is part of the cluster. */
export function getBlogPillar(slug: string): BlogPillar | null {
  return getClusterPost(slug)?.pillar ?? null;
}

/** Cluster articles grouped by pillar for the blog index. */
export function getClusterGroups(): { pillar: BlogPillar; posts: BlogPost[] }[] {
  return getClusterPostsByPillar().map((g) => ({
    pillar: g.pillar,
    posts: g.posts as BlogPost[],
  }));
}

export type BlogLink = { title: string; href: string; excerpt?: string };

export function getRelatedPosts(slug: string): BlogLink[] {
  // Cluster posts carry their own related-slug list.
  const cluster = getClusterPost(slug);
  const slugs = cluster ? cluster.relatedSlugs : RELATED_POSTS[slug] ?? [];
  return slugs
    .map((s) => getBlogPost(s))
    .filter((p): p is BlogPost => Boolean(p))
    .map((p) => ({
      title: p.title,
      href: `${BLOG_BASE}/${p.slug}`,
      excerpt: p.excerpt,
    }));
}

export function getRelatedImplantLinks(slug: string): BlogLink[] {
  // Cluster posts link to their own relevant service pages.
  const cluster = getClusterPost(slug);
  if (cluster) {
    return cluster.serviceLinks.map((s) => ({ title: s.title, href: s.href }));
  }
  const paths = RELATED_IMPLANT_PATHS[slug] ?? [PILLAR_PATH];
  return paths.map((href) => ({
    title: IMPLANT_LABELS[href] ?? href,
    href,
  }));
}

/**
 * Reverse lookup: blog posts that reference a given implant page.
 * Used to surface "From our blog" links on the implant pillar/topic pages.
 * Falls back to the most recent posts when nothing maps directly.
 */
export function getBlogPostsForImplantPath(path: string, limit = 3): BlogLink[] {
  const matches = POSTS.filter((p) =>
    (RELATED_IMPLANT_PATHS[p.slug] ?? []).includes(path)
  );
  const pool = matches.length > 0 ? matches : POSTS;
  return pool.slice(0, limit).map((p) => ({
    title: p.title,
    href: `${BLOG_BASE}/${p.slug}`,
    excerpt: p.excerpt,
  }));
}

export { SITE_URL };
