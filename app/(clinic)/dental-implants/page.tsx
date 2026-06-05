import type { Metadata } from "next";
import Link from "next/link";

import { BookingCta } from "@/components/implants/BookingCta";
import { DoctorBio } from "@/components/implants/DoctorBio";
import { FaqBlock } from "@/components/implants/FaqBlock";
import { FromTheBlog } from "@/components/implants/FromTheBlog";
import {
  ImplantMap,
  ImplantOptionsGrid,
  ImplantTestimonials,
  PillarHero,
  WhatAreImplants,
  WhyChooseSmile,
} from "@/components/implants/PillarSections";
import { SchemaJsonLd } from "@/components/implants/SchemaJsonLd";
import { StickyActionBar } from "@/components/implants/StickyActionBar";
import { IMPLANT_TOPICS, OG_IMAGE, PILLAR_PATH, SITE_URL } from "@/lib/implants/data";
import {
  breadcrumbSchema,
  clinicSchema,
  doctorPersonSchema,
  faqSchema,
  graph,
} from "@/lib/implants/schema";

const TITLE = "Dental Implants in Markham | Smile Dental Arts Centre";
const DESCRIPTION =
  "Permanent dental implants in Markham by Dr. Neda Kadivar, D.D.S., with 20+ years of experience. Single tooth, All-on-4 & implant dentures. Book a consultation.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PILLAR_PATH },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${PILLAR_PATH}`,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 900, alt: "Dental implants in Markham" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
};

// Short FAQ shown on the pillar (links to full FAQ page).
const PILLAR_FAQS = IMPLANT_TOPICS.faq.faqs!.slice(0, 4);

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Dental Implants", path: PILLAR_PATH },
];

export default function DentalImplantsPillarPage() {
  const schema = graph([
    clinicSchema(true),
    doctorPersonSchema(),
    breadcrumbSchema(CRUMBS),
    faqSchema(PILLAR_FAQS),
  ]);

  return (
    <>
      <SchemaJsonLd schema={schema} />

      <PillarHero crumbs={CRUMBS} />
      <WhatAreImplants />
      <ImplantOptionsGrid />
      <DoctorBio variant="feature" />
      <WhyChooseSmile />
      <ImplantTestimonials />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <FaqBlock faqs={PILLAR_FAQS} />
        <p className="mt-6 text-center text-sm text-[var(--clinic-muted)]">
          Have more questions? Read our full{" "}
          <Link href="/dental-implants/faq" className="clinic-link">
            dental implant FAQ
          </Link>
          .
        </p>
      </section>

      <ImplantMap />
      <BookingCta />
      <StickyActionBar />
    </>
  );
}
