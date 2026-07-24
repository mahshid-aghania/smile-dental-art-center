import pagesData from "./pages-data.json";

export type StaticPage = {
  id?: number;
  slug?: string;
  title?: string;
  excerpt?: string;
  content?: string;
  link?: string;
};

export const STATIC_PAGES = pagesData as {
  about: StaticPage;
  privacy: StaticPage;
  terms: StaticPage;
  conferences: StaticPage;
  toyotaArticle: StaticPage;
  agenda: StaticPage;
};

export function paragraphsFromContent(content: string | undefined, fallback: string[] = []): string[] {
  if (!content?.trim()) return fallback;
  return content
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0 && !/^terms and conditions$/i.test(p) && !/^privacy policy$/i.test(p));
}
