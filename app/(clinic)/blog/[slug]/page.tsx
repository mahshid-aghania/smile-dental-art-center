import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Calendar, User } from "lucide-react";

import { BlogArticleBody } from "@/components/blog/BlogArticleBody";
import { BlogReadingProgress } from "@/components/blog/BlogReadingProgress";
import { BlogTableOfContents } from "@/components/blog/BlogTableOfContents";
import { RelatedBlogLinks } from "@/components/blog/RelatedBlogLinks";
import { BookingCta } from "@/components/implants/BookingCta";
import { DoctorBio } from "@/components/implants/DoctorBio";
import { ImplantBreadcrumbs } from "@/components/implants/ImplantBreadcrumbs";
import { SchemaJsonLd } from "@/components/implants/SchemaJsonLd";
import { StickyActionBar } from "@/components/implants/StickyActionBar";
import { TrustBadges } from "@/components/implants/TrustBadges";
import {
  BLOG_BASE,
  BLOG_PUBLISHED,
  estimateReadingTime,
  getAllBlogSlugs,
  getBlogPost,
} from "@/lib/blog/posts";
import { OG_IMAGE, SITE_URL } from "@/lib/implants/data";
import {
  articleSchema,
  breadcrumbSchema,
  clinicSchema,
  doctorPersonSchema,
  graph,
} from "@/lib/implants/schema";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article not found" };

  const path = `${BLOG_BASE}/${slug}`;
  return {
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: post.primaryKeyword,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: `${SITE_URL}${path}`,
      type: "article",
      images: [{ url: OG_IMAGE, width: 1200, height: 900, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
      images: [OG_IMAGE],
    },
  };
}

const PILLAR_BADGE: Record<string, string> = {
  "Dental Implants": "bg-amber-50 text-amber-700 border-amber-200",
  "Invisalign & Orthodontics": "bg-sky-50 text-sky-700 border-sky-200",
  "Cosmetic Dentistry": "bg-rose-50 text-rose-700 border-rose-200",
  "Family & Preventive Dentistry": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Emergency & Local": "bg-orange-50 text-orange-700 border-orange-200",
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const path = `${BLOG_BASE}/${slug}`;
  const readMin = estimateReadingTime(post);
  const badgeClass = PILLAR_BADGE[post.pillar] ?? "bg-gray-50 text-gray-700 border-gray-200";

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: BLOG_BASE },
    { name: post.title, path },
  ];

  const schema = graph([
    clinicSchema(),
    doctorPersonSchema(),
    breadcrumbSchema(crumbs),
    articleSchema({
      headline: post.title,
      description: post.metaDescription,
      path,
      datePublished: BLOG_PUBLISHED,
      keywords: post.primaryKeyword,
    }),
  ]);

  const tocHeadings = post.sections.map((s) => s.heading);

  return (
    <>
      <SchemaJsonLd schema={schema} />
      <BlogReadingProgress />

      {/* ── Article header ──────────────────────────────────── */}
      <header className="border-b border-[var(--clinic-border)] bg-[var(--clinic-surface)]">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:py-14">
          <ImplantBreadcrumbs crumbs={crumbs} />

          <span
            className={`mt-5 inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-semibold ${badgeClass}`}
          >
            {post.pillar}
          </span>

          <h1 className="clinic-heading mt-4 text-3xl font-semibold text-[var(--clinic-navy)] text-balance sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-[var(--clinic-muted)]">
            <span className="flex items-center gap-1.5">
              <User className="size-4" aria-hidden />
              Dr. Neda Kadivar, D.D.S.
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="size-4" aria-hidden />
              {new Date(BLOG_PUBLISHED).toLocaleDateString("en-CA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" aria-hidden />
              {readMin} min read
            </span>
          </div>

          <div className="mt-6">
            <TrustBadges />
          </div>
        </div>
      </header>

      {/* ── Two-column layout ───────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:flex lg:gap-12 lg:py-16">
        {/* Article body */}
        <article className="min-w-0 flex-1">
          <DoctorBio variant="reviewer" />

          <BlogArticleBody post={post} />

          {/* Disclaimer */}
          <p className="mt-10 rounded-xl border border-[var(--clinic-border)] bg-[var(--clinic-surface)] p-4 text-xs leading-relaxed text-[var(--clinic-muted)]">
            This article is for general educational purposes only and is not a substitute for
            professional dental advice, diagnosis or treatment. Always consult a licensed dentist
            about your specific situation. To reach Smile Dental Arts Centre in Markham call{" "}
            <a href="tel:+19056047330" className="clinic-link font-medium">
              (905) 604-7330
            </a>{" "}
            or{" "}
            <Link href="/appointments" className="clinic-link font-medium">
              book online
            </Link>
            .
          </p>

          <RelatedBlogLinks slug={slug} />
        </article>

        {/* Sticky TOC sidebar (desktop only) */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24 rounded-2xl border border-[var(--clinic-border)] bg-[var(--clinic-surface)] p-5">
            <BlogTableOfContents headings={tocHeadings} />

            <div className="mt-8 border-t border-[var(--clinic-border)] pt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--clinic-gold)]">
                Book an appointment
              </p>
              <Link
                href="/appointments"
                className="clinic-btn-primary block py-3 text-center text-sm"
              >
                Request a visit
              </Link>
              <a
                href="tel:+19056047330"
                className="mt-2 block py-2 text-center text-sm font-medium text-[var(--clinic-muted)] hover:text-[var(--clinic-navy)]"
              >
                (905) 604-7330
              </a>
            </div>
          </div>
        </aside>
      </div>

      <BookingCta />
      <StickyActionBar />
    </>
  );
}
