import type { Metadata } from "next";

import { HeroCarousel } from "@/components/clinic/HeroCarousel";
import {
  AppointmentSection,
  BookCtaSection,
  FamilySection,
  GettingHereSection,
  HighlightServicesSection,
  IntroSection,
  ServiceCardsSection,
  ServiceIconsSection,
  WhyChooseSection,
} from "@/components/clinic/HomeSections";
import { TestimonialsCarousel } from "@/components/clinic/TestimonialsCarousel";
import { SchemaJsonLd } from "@/components/implants/SchemaJsonLd";
import { SITE_URL } from "@/lib/implants/data";
import {
  breadcrumbSchema,
  clinicSchema,
  doctorPersonSchema,
  graph,
} from "@/lib/implants/schema";

const TITLE = "Dentist in Markham | Invisalign, Implants & Family Dentistry";
const DESCRIPTION =
  "Smile Dental Arts Centre is a trusted dentist in Markham offering Invisalign, dental implants, cosmetic dentistry, root canals, whitening & family dental care. Book your visit today.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/clinic/implants-hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/clinic/implants-hero.png"],
  },
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Smile Dental Arts Centre",
  inLanguage: "en-CA",
  publisher: { "@id": `${SITE_URL}/#clinic` },
};

const homeSchema = graph([
  websiteSchema,
  clinicSchema(true),
  doctorPersonSchema(),
  breadcrumbSchema([{ name: "Home", path: "/" }]),
]);

export default function ClinicHomePage() {
  return (
    <>
      <SchemaJsonLd schema={homeSchema} />
      <HeroCarousel />
      <IntroSection />
      <HighlightServicesSection />
      <WhyChooseSection />
      <FamilySection />
      <BookCtaSection />
      <ServiceCardsSection />
      <ServiceIconsSection />
      <AppointmentSection />
      <TestimonialsCarousel />
      <GettingHereSection />
    </>
  );
}
