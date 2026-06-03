import type { MetadataRoute } from "next";

import { getAllImplantTopicSlugs, PILLAR_PATH, SITE_URL } from "@/lib/implants/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["/", PILLAR_PATH];
  const implantRoutes = getAllImplantTopicSlugs().map((slug) => `${PILLAR_PATH}/${slug}`);

  return [...staticRoutes, ...implantRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === PILLAR_PATH ? 0.9 : route === "/" ? 1 : 0.7,
  }));
}
