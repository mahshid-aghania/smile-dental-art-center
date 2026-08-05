import rawPosts from "@/lib/blog/posts.json";
import { PILLAR_PATH, SITE_URL } from "@/lib/implants/data";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "h3"; text: string }
  | { type: "callout"; text: string }
  | { type: "youtube"; videoId: string; title?: string };

export type BlogSection = {
  heading: string;
  blocks: BlogBlock[];
};

export type BlogPost = {
  id: number;
  slug: string;
  pillar: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  excerpt: string;
  intro: string[];
  sections: BlogSection[];
  relatedPostSlugs?: string[];
  relatedServiceLinks?: { title: string; href: string }[];
  sources?: { title: string; url: string }[];
};

const POSTS = (rawPosts as BlogPost[]).slice().sort((a, b) => a.id - b.id);

/* ------------------------------------------------------------------ */
/* Blog metadata                                                       */
/* ------------------------------------------------------------------ */

export const BLOG_BASE = "/blog";

export const BLOG_PUBLISHED = "2026-06-05";

export const BLOG_PILLARS = [
  "Dental Implants",
  "Invisalign & Orthodontics",
  "Cosmetic Dentistry",
  "Family & Preventive Dentistry",
  "Emergency & Local",
] as const;

export type BlogPillar = (typeof BLOG_PILLARS)[number];

/** Backward-compat alias used by existing blog index. */
export const BLOG_CATEGORIES = BLOG_PILLARS;

/* ------------------------------------------------------------------ */
/* Accessors                                                           */
/* ------------------------------------------------------------------ */

export function getAllBlogPosts(): BlogPost[] {
  return POSTS;
}

export function getAllBlogSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}

export function getBlogPost(slug: string): BlogPost | null {
  return POSTS.find((p) => p.slug === slug) ?? null;
}

export function getBlogCategory(slug: string): string {
  return getBlogPost(slug)?.pillar ?? "Dental Implants";
}

export function getPostsByPillar(pillar: string): BlogPost[] {
  return POSTS.filter((p) => p.pillar === pillar);
}

export type BlogLink = { title: string; href: string; excerpt?: string };

export function getRelatedPosts(slug: string): BlogLink[] {
  const post = getBlogPost(slug);
  return (post?.relatedPostSlugs ?? [])
    .map((s) => getBlogPost(s))
    .filter((p): p is BlogPost => Boolean(p))
    .map((p) => ({ title: p.title, href: `${BLOG_BASE}/${p.slug}`, excerpt: p.excerpt }));
}

export function getRelatedImplantLinks(slug: string): BlogLink[] {
  const post = getBlogPost(slug);
  return post?.relatedServiceLinks ?? [{ title: "Dental Implants in Markham", href: PILLAR_PATH }];
}

export function getBlogPostsForImplantPath(path: string, limit = 3): BlogLink[] {
  const matches = POSTS.filter((p) =>
    (p.relatedServiceLinks ?? []).some((l) => l.href === path)
  );
  const pool = matches.length > 0 ? matches : POSTS;
  return pool.slice(0, limit).map((p) => ({
    title: p.title,
    href: `${BLOG_BASE}/${p.slug}`,
    excerpt: p.excerpt,
  }));
}

export function estimateReadingTime(post: BlogPost): number {
  const words = [
    ...post.intro,
    ...post.sections.flatMap((s) => [
      s.heading,
      ...s.blocks.flatMap((b) => {
        if (b.type === "p" || b.type === "h3" || b.type === "callout") return [b.text];
        if (b.type === "ul" || b.type === "ol") return b.items;
        return [];
      }),
    ]),
  ]
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export { SITE_URL };
