import { CLINIC } from "@/lib/clinic/content";
import {
  AGGREGATE_RATING,
  DOCTOR,
  GEO,
  MEMBERSHIPS,
  OG_IMAGE,
  SAME_AS,
  SITE_URL,
} from "@/lib/implants/data";
import type { FaqItem } from "@/lib/implants/data";

const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: "3980 14th Ave #6",
  addressLocality: "Markham",
  addressRegion: "ON",
  postalCode: "L3R 0B1",
  addressCountry: "CA",
};

const openingHours = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:30",
    closes: "19:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: "09:00",
    closes: "16:00",
  },
];

/** Person schema for Dr. Neda Kadivar — reused as author/reviewer. */
export function doctorPersonSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}${DOCTOR.bioHref}#person`,
    name: DOCTOR.name,
    jobTitle: DOCTOR.jobTitle,
    description: DOCTOR.bio,
    image: abs(DOCTOR.image),
    url: abs(DOCTOR.bioHref),
    worksFor: { "@id": `${SITE_URL}/#clinic` },
    memberOf: MEMBERSHIPS.map((m) => ({
      "@type": "Organization",
      name: m.name,
      url: m.url,
    })),
    knowsAbout: [...DOCTOR.knowsAbout],
    sameAs: [...SAME_AS],
  };
}

/** Dentist / MedicalClinic schema with full NAP, geo, hours and sameAs. */
export function clinicSchema(withRating = false) {
  return {
    "@type": ["Dentist", "MedicalClinic"],
    "@id": `${SITE_URL}/#clinic`,
    name: CLINIC.name,
    image: abs(OG_IMAGE),
    url: SITE_URL,
    telephone: CLINIC.phone,
    email: CLINIC.email,
    address: postalAddress,
    geo: { "@type": "GeoCoordinates", latitude: GEO.latitude, longitude: GEO.longitude },
    openingHoursSpecification: openingHours,
    sameAs: [...SAME_AS],
    ...(withRating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: AGGREGATE_RATING.ratingValue,
            reviewCount: AGGREGATE_RATING.reviewCount,
          },
        }
      : {}),
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

/** MedicalProcedure with the doctor as author and reviewer (E-E-A-T). */
export function medicalProcedureSchema(name: string, description: string, path: string) {
  return {
    "@type": "MedicalProcedure",
    "@id": `${abs(path)}#procedure`,
    name,
    description,
    procedureType: "https://schema.org/SurgicalProcedure",
    bodyLocation: "Jaw",
    howPerformed:
      "A titanium implant is placed into the jawbone and restored with a custom crown, bridge or denture.",
    url: abs(path),
    author: { "@id": `${SITE_URL}${DOCTOR.bioHref}#person` },
    reviewedBy: { "@id": `${SITE_URL}${DOCTOR.bioHref}#person` },
    provider: { "@id": `${SITE_URL}/#clinic` },
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Wrap one or more schema nodes in a single @graph document. */
export function graph(nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
