import type { Metadata } from "next";
import Link from "next/link";

import { BlogCard } from "@/components/blog/BlogCard";
import { BookingCta } from "@/components/implants/BookingCta";
import { ImplantBreadcrumbs } from "@/components/implants/ImplantBreadcrumbs";
import { SchemaJsonLd } from "@/components/implants/SchemaJsonLd";
import { StickyActionBar } from "@/components/implants/StickyActionBar";
import {
  BLOG_BASE,
  BLOG_CATEGORIES,
  getAllBlogPosts,
  getBlogCategory,
} from "@/lib/blog/posts";
import { OG_IMAGE, PILLAR_PATH, SITE_URL } from "@/lib/implants/data";
import { breadcrumbSchema, clinicSchema, graph } from "@/lib/implants/schema";

const TITLE = "Dental Implant Blog | Smile Dental Arts Centre, Markham";
const DESCRIPTION =
  "Expert articles on dental implants — cost, recovery, longevity, materials and new technology. Reviewed by Dr. Neda Kadivar, D.D.S. in Markham.";

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
    images: [{ url: OG_IMAGE, width: 1200, height: 900, alt: "Dental implant blog" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
};

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Blog", path: BLOG_BASE },
];

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const [featured, ...rest] = posts;

  const schema = graph([clinicSchema(), breadcrumbSchema(CRUMBS)]);

  return (
    <>
      <SchemaJsonLd schema={schema} />

      <header className="border-b border-[var(--clinic-border)] bg-[var(--clinic-surface)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <ImplantBreadcrumbs crumbs={CRUMBS} />
          <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-[var(--clinic-gold)]">
            Patient education
          </p>
          <h1 className="clinic-heading mt-2 text-3xl font-semibold text-[var(--clinic-navy)] text-balance sm:text-4xl">
            Dental Implant Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--clinic-muted)] text-pretty">
            Clear, dentist-reviewed answers to the questions patients ask most about dental
            implants — from cost and recovery to longevity, materials and the latest technology.
            Every article is medically reviewed by Dr. Neda Kadivar, D.D.S.
          </p>
          <div className="mt-6">
            <Link href={PILLAR_PATH} className="clinic-btn-primary inline-block px-7 py-3 text-sm">
              Explore dental implants in Markham
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Featured post */}
        <section aria-labelledby="featured-post" className="mb-14">
          <h2 id="featured-post" className="sr-only">
            Featured article
          </h2>
          <Link
            href={`${BLOG_BASE}/${featured.slug}`}
            className="group block rounded-2xl border border-[var(--clinic-border)] bg-white p-8 transition hover:border-[var(--clinic-gold)] hover:shadow-md sm:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--clinic-gold)]">
              Featured · {getBlogCategory(featured.slug)}
            </p>
            <h3 className="clinic-heading mt-3 text-2xl font-semibold text-[var(--clinic-navy)] text-balance sm:text-3xl group-hover:text-[var(--clinic-gold)]">
              {featured.title}
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--clinic-muted)] text-pretty">
              {featured.excerpt}
            </p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--clinic-gold)]">
              Read the full article →
            </span>
          </Link>
        </section>

        {/* Posts grouped by category */}
        {BLOG_CATEGORIES.map((category) => {
          const inCategory = rest.filter((p) => getBlogCategory(p.slug) === category);
          if (inCategory.length === 0) return null;
          return (
            <section key={category} aria-labelledby={`cat-${category}`} className="mb-14">
              <h2
                id={`cat-${category}`}
                className="clinic-heading mb-6 text-xl font-semibold text-[var(--clinic-navy)]"
              >
                {category}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {inCategory.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <BookingCta
        title="Have a question about dental implants?"
        subtitle="Book a consultation with Dr. Neda Kadivar at our Markham clinic for personalized answers."
      />
      <StickyActionBar />
    </>
  );
}
