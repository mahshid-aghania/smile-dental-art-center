import type { Metadata } from "next";
import Link from "next/link";

import { BlogCard } from "@/components/blog/BlogCard";
import { BookingCta } from "@/components/implants/BookingCta";
import { ImplantBreadcrumbs } from "@/components/implants/ImplantBreadcrumbs";
import { SchemaJsonLd } from "@/components/implants/SchemaJsonLd";
import { StickyActionBar } from "@/components/implants/StickyActionBar";
import {
  BLOG_BASE,
  BLOG_PILLARS,
  estimateReadingTime,
  getAllBlogPosts,
  getPostsByPillar,
} from "@/lib/blog/posts";
import { OG_IMAGE, PILLAR_PATH, SITE_URL } from "@/lib/implants/data";
import { breadcrumbSchema, clinicSchema, graph } from "@/lib/implants/schema";
import { Clock } from "lucide-react";

const TITLE = "Dental Health Blog | Smile Dental Arts Centre, Markham";
const DESCRIPTION =
  "Expert articles on dental implants, Invisalign, cosmetic dentistry, family dental care and emergencies — reviewed by Dr. Neda Kadivar, D.D.S. in Markham.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: BLOG_BASE },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${BLOG_BASE}`,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 900, alt: "Dental health blog" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
};

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Blog", path: BLOG_BASE },
];

const PILLAR_ICONS: Record<string, string> = {
  "Dental Implants": "🦷",
  "Invisalign & Orthodontics": "😁",
  "Cosmetic Dentistry": "✨",
  "Family & Preventive Dentistry": "👨‍👩‍👧",
  "Emergency & Local": "🚨",
};

const PILLAR_COLORS: Record<string, string> = {
  "Dental Implants": "border-amber-400 bg-amber-50",
  "Invisalign & Orthodontics": "border-sky-400 bg-sky-50",
  "Cosmetic Dentistry": "border-rose-400 bg-rose-50",
  "Family & Preventive Dentistry": "border-emerald-400 bg-emerald-50",
  "Emergency & Local": "border-orange-400 bg-orange-50",
};

export default function BlogIndexPage() {
  const allPosts = getAllBlogPosts();
  const [featured] = allPosts;
  const schema = graph([clinicSchema(), breadcrumbSchema(CRUMBS)]);
  const featuredRead = estimateReadingTime(featured);

  return (
    <>
      <SchemaJsonLd schema={schema} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <header className="border-b border-[var(--clinic-border)] bg-[var(--clinic-surface)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <ImplantBreadcrumbs crumbs={CRUMBS} />
          <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-[var(--clinic-gold)]">
            Patient education · 50 articles
          </p>
          <h1 className="clinic-heading mt-2 text-4xl font-semibold text-[var(--clinic-navy)] text-balance sm:text-5xl">
            Dental Health Blog
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--clinic-muted)] text-pretty">
            Clear, dentist-reviewed answers to the questions patients ask most — from implants and
            Invisalign to cosmetic care, prevention and emergencies. Every article is reviewed by{" "}
            <Link href="/about-us/dr-neda-kadivar" className="clinic-link font-medium">
              Dr. Neda Kadivar, D.D.S.
            </Link>{" "}
            at our Markham clinic.
          </p>
        </div>
      </header>

      {/* ── Pillar nav pills ─────────────────────────────────── */}
      <div className="sticky top-0 z-30 border-b border-[var(--clinic-border)] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl overflow-x-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex gap-1 py-3" role="list">
            <li>
              <a
                href="#all"
                className="inline-block rounded-full px-4 py-1.5 text-sm font-semibold text-[var(--clinic-navy)] ring-1 ring-[var(--clinic-border)] hover:ring-[var(--clinic-gold)] whitespace-nowrap"
              >
                All articles
              </a>
            </li>
            {BLOG_PILLARS.map((p) => (
              <li key={p}>
                <a
                  href={`#${p.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="inline-block rounded-full px-4 py-1.5 text-sm font-medium text-[var(--clinic-muted)] ring-1 ring-[var(--clinic-border)] hover:ring-[var(--clinic-gold)] hover:text-[var(--clinic-navy)] whitespace-nowrap"
                >
                  {PILLAR_ICONS[p]} {p}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div id="all" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        {/* ── Featured ─────────────────────────────────────────── */}
        <section aria-labelledby="featured-heading" className="mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--clinic-gold)]">
            Featured article
          </p>
          <Link
            href={`${BLOG_BASE}/${featured.slug}`}
            className="group block rounded-2xl border border-[var(--clinic-border)] bg-gradient-to-br from-white to-[var(--clinic-surface)] p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--clinic-gold)] hover:shadow-lg sm:p-10"
          >
            <span className="inline-block rounded-full border border-amber-200 bg-amber-50 px-3 py-0.5 text-xs font-semibold text-amber-700">
              {featured.pillar}
            </span>
            <h2
              id="featured-heading"
              className="clinic-heading mt-4 text-2xl font-semibold text-[var(--clinic-navy)] text-balance group-hover:text-[var(--clinic-gold)] transition-colors sm:text-3xl"
            >
              {featured.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--clinic-muted)] text-pretty">
              {featured.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-5">
              <span className="inline-flex items-center gap-1.5 text-xs text-[var(--clinic-muted)]">
                <Clock className="size-3.5" aria-hidden />
                {featuredRead} min read
              </span>
              <span className="text-sm font-semibold text-[var(--clinic-gold)]">
                Read the full article →
              </span>
            </div>
          </Link>
        </section>

        {/* ── Pillar sections ───────────────────────────────────── */}
        {BLOG_PILLARS.map((pillar) => {
          const posts = getPostsByPillar(pillar);
          if (posts.length === 0) return null;
          const pillarId = pillar.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          const borderClass = PILLAR_COLORS[pillar] ?? "border-gray-300 bg-gray-50";
          return (
            <section
              key={pillar}
              id={pillarId}
              aria-labelledby={`heading-${pillarId}`}
              className="mb-16 scroll-mt-24"
            >
              {/* Pillar header */}
              <div className={`mb-8 flex items-center gap-4 rounded-2xl border px-6 py-4 ${borderClass}`}>
                <span className="text-3xl" aria-hidden>
                  {PILLAR_ICONS[pillar]}
                </span>
                <div>
                  <h2
                    id={`heading-${pillarId}`}
                    className="clinic-heading text-xl font-semibold text-[var(--clinic-navy)]"
                  >
                    {pillar}
                  </h2>
                  <p className="mt-0.5 text-sm text-[var(--clinic-muted)]">
                    {posts.length} articles
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <BookingCta
        title="Ready to book your appointment?"
        subtitle="Dr. Neda Kadivar and the team at Smile Dental Arts Centre in Markham are here to help."
      />
      <StickyActionBar />
    </>
  );
}
