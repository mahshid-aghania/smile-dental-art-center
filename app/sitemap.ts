import type { MetadataRoute } from "next";

import { getAllCourseSlugs } from "@/lib/canadent/courses";
import { SITE_URL } from "@/lib/canadent/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "/",
    "/about",
    "/courses",
    "/conferences",
    "/apply",
    "/contact",
    "/privacy",
    "/terms",
    "/smile-preview",
  ];
  const courseRoutes = getAllCourseSlugs().map((slug) => `/courses/${slug}`);

  return [...staticRoutes, ...courseRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "/" || route === "/courses" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/courses") ? 0.8 : 0.6,
  }));
}
