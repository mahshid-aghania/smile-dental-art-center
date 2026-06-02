import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ClinicPageView } from "@/components/clinic/ClinicPageView";
import {
  getAllClinicSlugs,
  getClinicPage,
  slugArrayToPath,
} from "@/lib/clinic/pages";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return getAllClinicSlugs().map((path) => ({
    slug: path.split("/"),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = slugArrayToPath(slug);
  const page = getClinicPage(path);
  if (!page) return { title: "Page not found" };
  return {
    title: page.title,
    description: page.paragraphs[0]?.slice(0, 160),
  };
}

export default async function ClinicSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const path = slugArrayToPath(slug);
  const page = getClinicPage(path);
  if (!page) notFound();

  return <ClinicPageView path={path} page={page} />;
}
