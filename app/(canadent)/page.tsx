import type { Metadata } from "next";

import {
  ContactStrip,
  FacilitiesValuesSection,
  FeaturedCoursesSection,
  HeroSection,
  JoinSection,
  WhySection,
} from "@/components/canadent/HomeSections";
import { SITE, SITE_URL } from "@/lib/canadent/site";

export const metadata: Metadata = {
  title: "CanaDent Education Center | Dental Courses & Seminars",
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "CanaDent Education Center",
    description: SITE.description,
    images: [{ url: SITE.heroImage, alt: "CanaDent Education Center" }],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <FacilitiesValuesSection />
      <FeaturedCoursesSection />
      <JoinSection />
      <ContactStrip />
    </>
  );
}
