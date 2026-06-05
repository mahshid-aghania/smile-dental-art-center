import type { MetadataRoute } from "next";

import { BLOG_BASE, getAllBlogSlugs } from "@/lib/blog/posts";
import { getAllImplantTopicSlugs, PILLAR_PATH, SITE_URL } from "@/lib/implants/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["/", PILLAR_PATH, BLOG_BASE];
  const implantRoutes = getAllImplantTopicSlugs().map((slug) => `${PILLAR_PATH}/${slug}`);
  const blogRoutes = getAllBlogSlugs().map((slug) => `${BLOG_BASE}/${slug}`);

  return [...staticRoutes, ...implantRoutes, ...blogRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority:
      route === "/" ? 1 : route === PILLAR_PATH ? 0.9 : route === BLOG_BASE ? 0.8 : 0.7,
  }));
}
