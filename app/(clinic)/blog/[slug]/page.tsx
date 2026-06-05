import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogArticleBody } from "@/components/blog/BlogArticleBody";
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
  getAllBlogSlugs,
  getBlogCategory,
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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const path = `${BLOG_BASE}/${slug}`;
  const category = getBlogCategory(slug);

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

  return (
    <>
      <SchemaJsonLd schema={schema} />

      <header className="border-b border-[var(--clinic-border)] bg-[var(--clinic-surface)]">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:max-w-4xl lg:py-12">
          <ImplantBreadcrumbs crumbs={crumbs} />
          <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-[var(--clinic-gold)]">
            {category}
          </p>
          <h1 className="clinic-heading mt-2 text-3xl font-semibold text-[var(--clinic-navy)] text-balance sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-6">
            <TrustBadges />
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:max-w-4xl">
        <DoctorBio variant="reviewer" />

        <BlogArticleBody post={post} />

        <p className="mt-10 rounded-lg border border-[var(--clinic-border)] bg-[var(--clinic-surface)] p-4 text-xs leading-relaxed text-[var(--clinic-muted)]">
          This article is for general educational purposes only and is not a substitute for
          professional dental advice, diagnosis or treatment. Implant suitability, procedures,
          risks and costs vary by individual. Always consult a licensed dentist about your specific
          situation.
        </p>

        <RelatedBlogLinks slug={slug} />
      </article>

      <BookingCta />
      <StickyActionBar />
    </>
  );
}
