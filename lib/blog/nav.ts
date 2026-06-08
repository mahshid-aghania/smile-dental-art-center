import rawPosts from "@/lib/blog/posts.json";

export type BlogNavItem = {
  label: string;
  href: string;
};

const BLOG_BASE = "/blog";

function blogNavLabel(title: string): string {
  const questionEnd = title.indexOf("?");
  if (questionEnd !== -1) return title.slice(0, questionEnd + 1);
  return title;
}

/** Header nav links for every published blog article. */
export function getBlogNavItems(): BlogNavItem[] {
  const posts = [...(rawPosts as { id: number; slug: string; title: string }[])].sort(
    (a, b) => a.id - b.id
  );

  return [
    { label: "All Articles", href: BLOG_BASE },
    ...posts.map((post) => ({
      label: blogNavLabel(post.title),
      href: `${BLOG_BASE}/${post.slug}`,
    })),
  ];
}

export const BLOG_NAV_ITEMS: readonly BlogNavItem[] = getBlogNavItems();
