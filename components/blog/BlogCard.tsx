import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BLOG_BASE, getBlogCategory, getBlogPillar, type BlogPost } from "@/lib/blog/posts";

export function BlogCard({ post }: { post: BlogPost }) {
  const category = getBlogPillar(post.slug) ?? getBlogCategory(post.slug);
  return (
    <article className="flex h-full flex-col rounded-xl border border-[var(--clinic-border)] bg-white p-6 transition hover:border-[var(--clinic-gold)] hover:shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--clinic-gold)]">
        {category}
      </p>
      <h2 className="clinic-heading mt-3 text-lg font-semibold text-[var(--clinic-navy)] text-pretty">
        <Link href={`${BLOG_BASE}/${post.slug}`} className="hover:text-[var(--clinic-gold)]">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-[var(--clinic-muted)]">
        {post.excerpt}
      </p>
      <Link
        href={`${BLOG_BASE}/${post.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--clinic-gold)]"
        aria-label={`Read: ${post.title}`}
      >
        Read article
        <ArrowRight className="size-4" aria-hidden />
      </Link>
    </article>
  );
}
