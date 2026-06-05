import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { BookingCta } from "@/components/implants/BookingCta";
import { DoctorBio } from "@/components/implants/DoctorBio";
import { FaqBlock } from "@/components/implants/FaqBlock";
import { FromTheBlog } from "@/components/implants/FromTheBlog";
import { ImplantBreadcrumbs } from "@/components/implants/ImplantBreadcrumbs";
import { RelatedImplantLinks } from "@/components/implants/RelatedImplantLinks";
import { SchemaJsonLd } from "@/components/implants/SchemaJsonLd";
import { StickyActionBar } from "@/components/implants/StickyActionBar";
import { TrustBadges } from "@/components/implants/TrustBadges";
import {
  getAllImplantTopicSlugs,
  getImplantTopic,
  OG_IMAGE,
  PILLAR_PATH,
  SITE_URL,
} from "@/lib/implants/data";
import {
  breadcrumbSchema,
  clinicSchema,
  doctorPersonSchema,
  faqSchema,
  graph,
  medicalProcedureSchema,
} from "@/lib/implants/schema";

type PageProps = { params: Promise<{ topic: string }> };

export function generateStaticParams() {
  return getAllImplantTopicSlugs().map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { topic } = await params;
  const data = getImplantTopic(topic);
  if (!data) return { title: "Page not found" };

  const path = `${PILLAR_PATH}/${topic}`;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `${SITE_URL}${path}`,
      type: "article",
      images: [{ url: OG_IMAGE, width: 1200, height: 900, alt: data.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
      images: [OG_IMAGE],
    },
  };
}

export default async function ImplantTopicPage({ params }: PageProps) {
  const { topic } = await params;
  const data = getImplantTopic(topic);
  if (!data) notFound();

  const path = `${PILLAR_PATH}/${topic}`;
  const isFaqHub = topic === "faq";

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Dental Implants", path: PILLAR_PATH },
    { name: data.navLabel, path },
  ];

  const schemaNodes: object[] = [clinicSchema(), doctorPersonSchema(), breadcrumbSchema(crumbs)];
  if (data.procedureName) {
    schemaNodes.push(medicalProcedureSchema(data.procedureName, data.lead, path));
  }
  if (data.faqs && data.faqs.length > 0) {
    schemaNodes.push(faqSchema(data.faqs));
  }

  return (
    <>
      <SchemaJsonLd schema={graph(schemaNodes)} />

      <header className="border-b border-[var(--clinic-border)] bg-[var(--clinic-surface)]">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:max-w-4xl lg:py-12">
          <ImplantBreadcrumbs crumbs={crumbs} />
          <h1 className="clinic-heading mt-5 text-3xl font-semibold text-[var(--clinic-navy)] text-balance sm:text-4xl">
            {data.h1}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--clinic-muted)] text-pretty">
            {data.lead}
          </p>
          <div className="mt-6">
            <TrustBadges />
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:max-w-4xl">
        <DoctorBio variant="reviewer" />

        {!isFaqHub && (
          <figure className="mt-10 overflow-hidden rounded-xl border border-[var(--clinic-border)]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/clinic/implant-procedure.png"
                alt={`${data.h1} at Smile Dental Arts Centre in Markham`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
            </div>
          </figure>
        )}

        <div className="prose-clinic mt-10 space-y-10">
          {data.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="clinic-heading text-2xl font-semibold text-[var(--clinic-navy)]">
                {section.heading}
              </h2>
              {section.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="mt-4 text-base leading-relaxed text-[var(--clinic-muted)]"
                >
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="mt-4 space-y-2">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-2 text-[var(--clinic-text)]">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--clinic-gold)]" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {data.faqs && data.faqs.length > 0 && (
          <div className="mt-14">
            <FaqBlock faqs={data.faqs} />
          </div>
        )}

        <div className="mt-14">
          <RelatedImplantLinks currentHref={path} />
        </div>

        <FromTheBlog path={path} />
      </article>

      <BookingCta />
      <StickyActionBar />
    </>
  );
}
