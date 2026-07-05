import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { getRelatedImplantLinks, getRelatedPosts } from "@/lib/blog/posts";

export function RelatedBlogLinks({ slug }: { slug: string }) {
  const relatedPosts = getRelatedPosts(slug);
  const serviceLinks = getRelatedImplantLinks(slug);

  return (
    <section
      aria-labelledby="related-heading"
      className="mt-16 border-t border-[var(--clinic-border)] pt-12"
    >
      {relatedPosts.length > 0 && (
        <>
          <h2
            id="related-heading"
            className="clinic-heading text-2xl font-semibold text-[var(--clinic-navy)]"
          >
            Continue reading
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {relatedPosts.map((post) => (
              <li key={post.href}>
                <Link
                  href={post.href}
                  className="group flex h-full flex-col rounded-2xl border border-[var(--clinic-border)] bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--clinic-gold)] hover:shadow-md"
                >
                  <span className="font-semibold text-[var(--clinic-navy)] text-pretty leading-snug group-hover:text-[var(--clinic-gold)] transition-colors">
                    {post.title}
                  </span>
                  {post.excerpt && (
                    <span className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--clinic-muted)]">
                      {post.excerpt}
                    </span>
                  )}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--clinic-gold)]">
                    Read more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {serviceLinks.length > 0 && (
        <div className="mt-10 rounded-2xl border border-[var(--clinic-border)] bg-[var(--clinic-surface)] p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--clinic-gold)]">
            Our services
          </p>
          <h3 className="clinic-heading mt-2 text-lg font-semibold text-[var(--clinic-navy)]">
            Explore treatments at Smile Dental Arts Centre
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--clinic-border)] bg-white px-4 py-2 text-sm font-medium text-[var(--clinic-navy)] shadow-sm transition hover:border-[var(--clinic-gold)] hover:shadow"
                >
                  <span className="size-1.5 rounded-full bg-[var(--clinic-gold)]" aria-hidden />
                  {link.title}
                  <ExternalLink className="size-3 opacity-40" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
