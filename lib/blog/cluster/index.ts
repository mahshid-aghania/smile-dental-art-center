import { PILLAR_IMPLANTS } from "./pillar-implants";
import { PILLAR_INVISALIGN } from "./pillar-invisalign";
import { PILLAR_COSMETIC } from "./pillar-cosmetic";
import { PILLAR_FAMILY } from "./pillar-family";
import { PILLAR_EMERGENCY } from "./pillar-emergency";
import {
  BLOG_PILLARS,
  type BlogFaq,
  type BlogPillar,
  type ClusterPost,
  type ServiceLink,
} from "./types";

export { BLOG_PILLARS };
export type { BlogFaq, BlogPillar, ClusterPost, ServiceLink };

/** All 30 cluster articles, in pillar then intended reading order. */
export const CLUSTER_POSTS: ClusterPost[] = [
  ...PILLAR_IMPLANTS,
  ...PILLAR_INVISALIGN,
  ...PILLAR_COSMETIC,
  ...PILLAR_FAMILY,
  ...PILLAR_EMERGENCY,
];

/** Slug -> cluster post for fast lookups. */
export const CLUSTER_BY_SLUG: Record<string, ClusterPost> = Object.fromEntries(
  CLUSTER_POSTS.map((p) => [p.slug, p]),
);

export function getClusterPost(slug: string): ClusterPost | undefined {
  return CLUSTER_BY_SLUG[slug];
}

/** Cluster posts grouped by pillar, preserving pillar order. */
export function getClusterPostsByPillar(): { pillar: BlogPillar; posts: ClusterPost[] }[] {
  return BLOG_PILLARS.map((pillar) => ({
    pillar,
    posts: CLUSTER_POSTS.filter((p) => p.pillar === pillar),
  })).filter((group) => group.posts.length > 0);
}
