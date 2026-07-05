import type { MetadataRoute } from "next";

import { BLOG_BASE, getAllBlogSlugs } from "@/lib/blog/posts";
import { getAllClinicSlugs } from "@/lib/clinic/pages";
import { getAllImplantTopicSlugs, PILLAR_PATH, SITE_URL } from "@/lib/implants/data";

/** Priority + change frequency tuned per route type for crawl guidance. */
function priorityFor(route: string): number {
  if (route === "/") return 1;
  if (route === PILLAR_PATH) return 0.9;
  if (route === BLOG_BASE) return 0.8;
  // Top-level service/landing pages rank higher than deep articles.
  if (route.startsWith(`${PILLAR_PATH}/`)) return 0.8;
  if (route.startsWith("/dental-services")) return 0.8;
  if (route.startsWith("/about-us") || route.startsWith("/contact")) return 0.7;
  if (route.startsWith(`${BLOG_BASE}/`)) return 0.6;
  return 0.6;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["/", PILLAR_PATH, BLOG_BASE];
  const clinicRoutes = getAllClinicSlugs().map((slug) => `/${slug}`);
  const implantRoutes = getAllImplantTopicSlugs().map((slug) => `${PILLAR_PATH}/${slug}`);
  const blogRoutes = getAllBlogSlugs().map((slug) => `${BLOG_BASE}/${slug}`);

  // De-duplicate in case a clinic slug overlaps a static/implant route.
  const seen = new Set<string>();
  const routes = [...staticRoutes, ...clinicRoutes, ...implantRoutes, ...blogRoutes].filter(
    (route) => {
      if (seen.has(route)) return false;
      seen.add(route);
      return true;
    }
  );

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "/" || route === BLOG_BASE ? "weekly" : "monthly",
    priority: priorityFor(route),
  }));
}
