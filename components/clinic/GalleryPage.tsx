"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  GALLERY_HEADING,
  GALLERY_SUBHEADING,
  GALLERY_TABS,
  type GalleryImage,
  type GalleryTab,
} from "@/lib/clinic/gallery";
import { CLINIC } from "@/lib/clinic/content";
import { cn } from "@/lib/utils";

function GalleryImageCard({ image }: { image: GalleryImage }) {
  return (
    <a
      href={image.src}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl border border-[var(--clinic-border)] bg-white shadow-sm ring-1 ring-[var(--clinic-border)] transition hover:shadow-md"
    >
      <div className="relative aspect-[809/318] w-full bg-slate-50">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain p-1 transition duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {image.alt && !image.alt.startsWith("Screenshot") ? (
        <p className="border-t border-[var(--clinic-border)] px-3 py-2 text-center text-xs capitalize text-[var(--clinic-muted)]">
          {image.alt}
        </p>
      ) : null}
    </a>
  );
}

function GalleryGrid({ tab }: { tab: GalleryTab }) {
  if (tab.empty || tab.images.length === 0) {
    return (
      <p className="py-16 text-center text-[var(--clinic-muted)]">
        Empty tab. Edit page to add content here.
      </p>
    );
  }

  const rows: GalleryImage[][] = [];
  for (let i = 0; i < tab.images.length; i += 2) {
    rows.push(tab.images.slice(i, i + 2) as GalleryImage[]);
  }

  return (
    <div className="space-y-6">
      {rows.map((pair, rowIndex) => (
        <div key={`${tab.id}-row-${rowIndex}`} className="grid gap-6 sm:grid-cols-2">
          {pair.map((image) => (
            <GalleryImageCard key={image.src} image={image} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function GalleryPage() {
  const [activeTabId, setActiveTabId] = useState(GALLERY_TABS[0].id);
  const activeTab = GALLERY_TABS.find((tab) => tab.id === activeTabId) ?? GALLERY_TABS[0];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header className="text-center">
        <h1 className="clinic-heading text-3xl font-semibold text-[var(--clinic-navy)] sm:text-4xl">
          {GALLERY_HEADING}
        </h1>
        <h2 className="clinic-heading mt-4 text-2xl font-medium text-[var(--clinic-navy)]">
          {GALLERY_SUBHEADING}
        </h2>
      </header>

      <div className="mt-10">
        <div
          className="flex flex-wrap justify-center gap-2 border-b border-[var(--clinic-border)] pb-4"
          role="tablist"
          aria-label="Gallery categories"
        >
          {GALLERY_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTabId === tab.id}
              aria-controls={`gallery-panel-${tab.id}`}
              id={`gallery-tab-${tab.id}`}
              onClick={() => setActiveTabId(tab.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition",
                activeTabId === tab.id
                  ? "bg-[var(--clinic-gold)] text-white shadow-sm"
                  : "text-[var(--clinic-muted)] hover:bg-[var(--clinic-surface)] hover:text-[var(--clinic-navy)]"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          id={`gallery-panel-${activeTab.id}`}
          role="tabpanel"
          aria-labelledby={`gallery-tab-${activeTab.id}`}
          className="mt-8"
        >
          <GalleryGrid tab={activeTab} />
        </div>
      </div>

      <div className="mt-12 rounded-xl border border-[var(--clinic-border)] bg-[var(--clinic-surface)] p-6 text-center">
        <p className="text-[var(--clinic-muted)]">Ready to transform your smile?</p>
        <Link href={CLINIC.pages.appointments} className="clinic-btn-primary mt-4 inline-block px-8 py-3 text-sm">
          Book a consultation
        </Link>
      </div>
    </div>
  );
}
