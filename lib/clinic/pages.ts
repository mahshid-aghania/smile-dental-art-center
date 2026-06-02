import scraped from "@/lib/clinic/scraped-pages.json";

export type ClinicPageContent = {
  title: string;
  heading: string;
  paragraphs: string[];
};

const pages = scraped as Record<string, ClinicPageContent>;

export function decodeClinicText(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—");
}

function cleanParagraphs(paragraphs: string[]): string[] {
  return paragraphs
    .map((p) => decodeClinicText(p))
    .filter(
      (p) =>
        p.length > 0 &&
        !/^Home\s*[>&]/i.test(p) &&
        !p.includes("contentReference") &&
        !/^elementor/i.test(p)
    );
}

export function getClinicPage(path: string): ClinicPageContent | null {
  const raw = pages[path];
  if (!raw) return null;
  return {
    title: decodeClinicText(raw.title),
    heading: decodeClinicText(raw.heading),
    paragraphs: cleanParagraphs(raw.paragraphs ?? []),
  };
}

export function getAllClinicSlugs(): string[] {
  return Object.keys(pages).filter((key) => key !== "home");
}

export function slugArrayToPath(slug: string[]): string {
  return slug.join("/");
}

export function pathToHref(path: string): string {
  return path === "home" ? "/" : `/${path}`;
}

/** Child service pages under the same category (e.g. cosmetic-dentistry/*). */
export function getRelatedServicePaths(path: string, limit = 8): string[] {
  if (!path.startsWith("dental-services/")) return [];
  const parts = path.split("/");
  if (parts.length < 2) return [];

  const prefix =
    parts.length >= 3 ? `${parts[0]}/${parts[1]}` : path;

  return getAllClinicSlugs()
    .filter((p) => p.startsWith(`${prefix}/`) && p !== path)
    .slice(0, limit);
}

export function getServiceCategoryPaths(): string[] {
  return getAllClinicSlugs().filter(
    (p) =>
      p.startsWith("dental-services/") &&
      p.split("/").length === 2 &&
      !p.includes("markham")
  );
}
