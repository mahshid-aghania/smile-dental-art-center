import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BLOG_BASE, getBlogPostsForImplantPath } from "@/lib/blog/posts";

/**
 * "From our blog" block shown on implant pillar/topic pages. Surfaces the
 * articles most relevant to the current implant page and links to the blog hub.
 */
export function FromTheBlog({ path, limit = 3 }: { path: string; limit?: number }) {
  const posts = getBlogPostsForImplantPath(path, limit);
  if (posts.length === 0) return null;

  return (
    <section aria-labelledby="from-the-blog" className="mt-14">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2
          id="from-the-blog"
          className="clinic-heading text-2xl font-semibold text-[var(--clinic-navy)]"
        >
          From our blog
        </h2>
        <Link href={BLOG_BASE} className="clinic-link text-sm font-semibold">
          View all articles
        </Link>
      </div>
      <ul className="mt-6 grid gap-4 sm:grid-cols-3">
        {posts.map((post) => (
          <li key={post.href}>
            <Link
              href={post.href}
              className="group flex h-full flex-col rounded-xl border border-[var(--clinic-border)] bg-white p-5 transition hover:border-[var(--clinic-gold)] hover:shadow-sm"
            >
              <span className="font-semibold text-[var(--clinic-navy)] text-pretty group-hover:text-[var(--clinic-gold)]">
                {post.title}
              </span>
              {post.excerpt && (
                <span className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--clinic-muted)]">
                  {post.excerpt}
                </span>
              )}
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--clinic-gold)]">
                Read more
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
