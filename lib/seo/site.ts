import type { Metadata } from "next";

import { CLINIC } from "@/lib/clinic/content";

/** Production site — https://smiledentalartscentre.com/ */
export const PRODUCTION_SITE_URL = "https://smiledentalartscentre.com";

/** Override with NEXT_PUBLIC_SITE_URL for previews/staging. */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";
  return PRODUCTION_SITE_URL;
}

export const SEO = {
  siteName: CLINIC.name,
  title: "Dentist in Markham | Invisalign, Implants & Family Dentistry",
  titleTemplate: "%s | Smile Dental Arts Centre",
  description:
    "Looking for a dentist in Markham? Smile Dental Arts Centre offers Invisalign, dental implants, root canals, teeth whitening, and family dentistry. New patients welcome — book online or call (905) 604-7330.",
  keywords: [
    "dentist in Markham",
    "family dentist Markham",
    "cosmetic dentist Markham",
    "Invisalign Markham",
    "dental implants Markham",
    "root canal Markham",
    "teeth whitening Markham",
    "dental clinic Markham Ontario",
    "Smile Dental Arts Centre",
    "emergency dentist Markham",
    "CDCP dentist Markham",
  ],
  locale: "en_CA",
  ogImagePath: "/clinic/hero-office.jpg",
  twitterHandle: undefined as string | undefined,
} as const;

export function buildRootMetadata(): Metadata {
  const siteUrl = getSiteUrl();
  const ogImage = `${siteUrl}${SEO.ogImagePath}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: SEO.title,
      template: SEO.titleTemplate,
    },
    description: SEO.description,
    keywords: [...SEO.keywords],
    authors: [{ name: CLINIC.name, url: siteUrl }],
    creator: CLINIC.name,
    publisher: CLINIC.name,
    category: "health",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: SEO.locale,
      url: siteUrl,
      siteName: SEO.siteName,
      title: SEO.title,
      description: SEO.description,
      images: [
        {
          url: ogImage,
          width: 1920,
          height: 1280,
          alt: "Smile Dental Arts Centre — dentist in Markham, Ontario",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SEO.title,
      description: SEO.description,
      images: [ogImage],
      ...(SEO.twitterHandle ? { site: SEO.twitterHandle, creator: SEO.twitterHandle } : {}),
    },
    other: {
      "geo.region": "CA-ON",
      "geo.placename": "Markham",
      "geo.position": "43.841063;-79.321822",
      ICBM: "43.841063, -79.321822",
    },
  };
}
