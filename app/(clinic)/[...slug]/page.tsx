import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ClinicPageView } from "@/components/clinic/ClinicPageView";
import { SchemaJsonLd } from "@/components/implants/SchemaJsonLd";
import {
  getAllClinicSlugs,
  getClinicPage,
  slugArrayToPath,
} from "@/lib/clinic/pages";
import { SITE_URL } from "@/lib/implants/data";
import { breadcrumbSchema, graph, type Crumb } from "@/lib/implants/schema";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return getAllClinicSlugs().map((path) => ({
    slug: path.split("/"),
  }));
}

/** Turn a slug segment into a readable breadcrumb label. */
function humanize(segment: string): string {
  return segment
    .split("-")
    .map((w) => (w.length <= 3 ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
}

/** Build a Home → … → current breadcrumb trail from the slug array. */
function buildCrumbs(slug: string[]): Crumb[] {
  const crumbs: Crumb[] = [{ name: "Home", path: "/" }];
  let acc = "";
  for (const segment of slug) {
    acc += `/${segment}`;
    crumbs.push({ name: humanize(segment), path: acc });
  }
  return crumbs;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = slugArrayToPath(slug);
  const page = getClinicPage(path);
  if (!page) return { title: "Page not found" };

  const description = page.paragraphs[0]?.slice(0, 160) ?? page.heading;
  const canonical = `/${path}`;

  return {
    title: page.title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title: page.title,
      description,
      images: ["/clinic/implants-hero.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description,
      images: ["/clinic/implants-hero.png"],
    },
  };
}

export default async function ClinicSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const path = slugArrayToPath(slug);
  const page = getClinicPage(path);
  if (!page) notFound();

  const canonical = `/${path}`;
  const description = page.paragraphs[0]?.slice(0, 200) ?? page.heading;
  const isService = path.startsWith("dental-services");

  const webPage = {
    "@type": "WebPage",
    "@id": `${SITE_URL}${canonical}#webpage`,
    url: `${SITE_URL}${canonical}`,
    name: page.title,
    description,
    inLanguage: "en-CA",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#clinic` },
    publisher: { "@id": `${SITE_URL}/#clinic` },
  };

  const serviceNode = isService
    ? {
        "@type": "Service",
        "@id": `${SITE_URL}${canonical}#service`,
        serviceType: page.heading,
        name: page.title,
        description,
        url: `${SITE_URL}${canonical}`,
        provider: { "@id": `${SITE_URL}/#clinic` },
        areaServed: {
          "@type": "City",
          name: "Markham",
        },
      }
    : null;

  const nodes: object[] = [webPage, breadcrumbSchema(buildCrumbs(slug))];
  if (serviceNode) nodes.push(serviceNode);

  return (
    <>
      <SchemaJsonLd schema={graph(nodes)} />
      <ClinicPageView path={path} page={page} />
    </>
  );
}
