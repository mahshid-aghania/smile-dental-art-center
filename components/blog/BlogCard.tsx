import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { BLOG_BASE, estimateReadingTime, type BlogPost } from "@/lib/blog/posts";

const PILLAR_COLORS: Record<string, string> = {
  "Dental Implants": "bg-amber-50 text-amber-700 border-amber-200",
  "Invisalign & Orthodontics": "bg-sky-50 text-sky-700 border-sky-200",
  "Cosmetic Dentistry": "bg-rose-50 text-rose-700 border-rose-200",
  "Family & Preventive Dentistry": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Emergency & Local": "bg-orange-50 text-orange-700 border-orange-200",
};

export function BlogCard({ post }: { post: BlogPost }) {
  const readMin = estimateReadingTime(post);
  const colorClass =
    PILLAR_COLORS[post.pillar] ?? "bg-gray-50 text-gray-700 border-gray-200";

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-[var(--clinic-border)] bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--clinic-gold)] hover:shadow-md">
      {/* Pillar badge */}
      <span
        className={`inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wide ${colorClass}`}
      >
        {post.pillar}
      </span>

      {/* Title */}
      <h2 className="clinic-heading mt-4 text-lg font-semibold text-[var(--clinic-navy)] text-pretty leading-snug group-hover:text-[var(--clinic-gold)] transition-colors">
        <Link href={`${BLOG_BASE}/${post.slug}`} className="after:absolute after:inset-0">
          {post.title}
        </Link>
      </h2>

      {/* Excerpt */}
      <p className="relative mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-[var(--clinic-muted)]">
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="relative mt-5 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-xs text-[var(--clinic-muted)]">
          <Clock className="size-3.5" aria-hidden />
          {readMin} min read
        </span>
        <Link
          href={`${BLOG_BASE}/${post.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--clinic-gold)] transition-gap"
          aria-label={`Read: ${post.title}`}
        >
          Read article
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
