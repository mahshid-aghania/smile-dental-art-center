import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getRelatedImplantLinks, getRelatedPosts, isClusterPost } from "@/lib/blog/posts";

/**
 * Internal-linking block at the foot of each article. Links ACROSS to related
 * articles and ACROSS/UP to the relevant treatment/service pages.
 */
export function RelatedBlogLinks({ slug }: { slug: string }) {
  const relatedPosts = getRelatedPosts(slug);
  const serviceLinks = getRelatedImplantLinks(slug);
  const serviceHeading = isClusterPost(slug)
    ? "Explore care at our Markham clinic"
    : "Explore implant treatments at our Markham clinic";

  return (
    <section
      aria-labelledby="related-reading"
      className="mt-14 border-t border-[var(--clinic-border)] pt-10"
    >
      {relatedPosts.length > 0 && (
        <>
          <h2
            id="related-reading"
            className="clinic-heading text-2xl font-semibold text-[var(--clinic-navy)]"
          >
            Related articles
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {relatedPosts.map((post) => (
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
                    <ArrowRight
                      className="size-4 transition group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {serviceLinks.length > 0 && (
        <div className="mt-10 rounded-xl border border-[var(--clinic-border)] bg-[var(--clinic-surface)] p-6">
          <h3 className="clinic-heading text-lg font-semibold text-[var(--clinic-navy)]">
            {serviceHeading}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--clinic-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--clinic-navy)] transition hover:border-[var(--clinic-gold)]"
                >
                  <span className="size-1.5 rounded-full bg-[var(--clinic-gold)]" aria-hidden />
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
