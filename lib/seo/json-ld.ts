import { CLINIC } from "@/lib/clinic/content";
import { getSiteUrl } from "@/lib/seo/site";

/** Schema.org Dentist + WebSite graph (aligned with live site SEO data). */
export function buildDentistJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Place",
        "@id": `${siteUrl}/#place`,
        name: CLINIC.name,
        geo: {
          "@type": "GeoCoordinates",
          latitude: 43.841063453129784,
          longitude: -79.32182208465498,
        },
        hasMap:
          "https://www.google.com/maps/search/?api=1&query=43.841063453129784,-79.32182208465498",
        address: {
          "@type": "PostalAddress",
          streetAddress: "3980 14th Ave #6",
          addressLocality: "Markham",
          addressRegion: "ON",
          postalCode: "L3R 0B1",
          addressCountry: "CA",
        },
      },
      {
        "@type": ["Dentist", "Organization", "LocalBusiness"],
        "@id": `${siteUrl}/#organization`,
        name: CLINIC.name,
        url: siteUrl,
        logo: `${siteUrl}/clinic/logo.png`,
        image: `${siteUrl}/clinic/hero-office.jpg`,
        telephone: "+1-905-604-7330",
        email: CLINIC.email,
        sameAs: [CLINIC.social.facebook],
        address: {
          "@type": "PostalAddress",
          streetAddress: "3980 14th Ave #6",
          addressLocality: "Markham",
          addressRegion: "ON",
          postalCode: "L3R 0B1",
          addressCountry: "CA",
        },
        openingHoursSpecification: [
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
            description: "Every other week",
          },
        ],
        priceRange: "$$",
        description:
          "Family and cosmetic dental clinic in Markham offering preventive care, Invisalign, implants, root canals, whitening, and emergency dentistry.",
        areaServed: {
          "@type": "City",
          name: "Markham",
          containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Dental Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Invisalign" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dental Implants" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Root Canal Therapy" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Teeth Whitening" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Family Dentistry" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: CLINIC.name,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-CA",
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "Dentist in Markham | Invisalign, Implants & Family Dentistry",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        description:
          "Looking for a dentist in Markham? Smile Dental Arts Centre offers Invisalign, dental implants, root canals, whitening & family dentistry.",
        inLanguage: "en-CA",
      },
    ],
  };
}
