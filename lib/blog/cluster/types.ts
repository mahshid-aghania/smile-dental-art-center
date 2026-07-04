import type { BlogSection } from "@/lib/blog/posts";

export type BlogFaq = { question: string; answer: string };

export type ServiceLink = { title: string; href: string };

export const BLOG_PILLARS = [
  "Dental Implants",
  "Invisalign & Orthodontics",
  "Cosmetic Dentistry",
  "Family & Preventive Dentistry",
  "Emergency & Local",
] as const;

export type BlogPillar = (typeof BLOG_PILLARS)[number];

/** A fully authored cluster article, including SEO metadata and linking. */
export type ClusterPost = {
  id: number;
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  pillar: BlogPillar;
  excerpt: string;
  intro: string[];
  sections: BlogSection[];
  faqs: BlogFaq[];
  /** Slugs of related articles in the same pillar. */
  relatedSlugs: string[];
  /** Relevant service pages this article links to. */
  serviceLinks: ServiceLink[];
};
