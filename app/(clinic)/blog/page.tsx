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
  getBlogCategory,
  getClusterGroups,
  getImplantBlogPosts,
} from "@/lib/blog/posts";
import { OG_IMAGE, PILLAR_PATH, SITE_URL } from "@/lib/implants/data";
import { breadcrumbSchema, clinicSchema, graph } from "@/lib/implants/schema";

const TITLE = "Dental Blog | Smile Dental Arts Centre, Markham";
const DESCRIPTION =
  "Dentist-reviewed articles on dental implants, Invisalign, cosmetic dentistry, family care and dental emergencies in Markham. Reviewed by Dr. Neda Kadivar, D.D.S.";

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
  const implantPosts = getImplantBlogPosts();
  const [featured, ...rest] = implantPosts;
  const clusterGroups = getClusterGroups();

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
            The Smile Dental Arts Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--clinic-muted)] text-pretty">
            Clear, dentist-reviewed answers to the questions patients in Markham ask most — covering
            dental implants, Invisalign, cosmetic dentistry, family and preventive care, and dental
            emergencies. Every article is medically reviewed by Dr. Neda Kadivar, D.D.S.
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

        {/* Cluster articles grouped by pillar (Markham topical authority) */}
        {clusterGroups.map((group) => (
          <section key={group.pillar} aria-labelledby={`pillar-${group.pillar}`} className="mb-14">
            <h2
              id={`pillar-${group.pillar}`}
              className="clinic-heading mb-6 text-xl font-semibold text-[var(--clinic-navy)]"
            >
              {group.pillar}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {group.posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        ))}

        {/* In-depth implant guides grouped by topic */}
        <div className="mb-10 border-t border-[var(--clinic-border)] pt-12">
          <h2 className="clinic-heading text-2xl font-semibold text-[var(--clinic-navy)]">
            In-depth dental implant guides
          </h2>
          <p className="mt-2 max-w-2xl text-[var(--clinic-muted)]">
            Detailed articles for patients researching dental implants in more depth.
          </p>
        </div>
        {BLOG_CATEGORIES.map((category) => {
          const inCategory = rest.filter((p) => getBlogCategory(p.slug) === category);
          if (inCategory.length === 0) return null;
          return (
            <section key={category} aria-labelledby={`cat-${category}`} className="mb-14">
              <h3
                id={`cat-${category}`}
                className="clinic-heading mb-6 text-xl font-semibold text-[var(--clinic-navy)]"
              >
                {category}
              </h3>
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
