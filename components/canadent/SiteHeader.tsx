"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { NAV_ITEMS, SITE } from "@/lib/canadent/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--cd-border)] bg-[color-mix(in_srgb,var(--cd-bg)_92%,white)] backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="relative block h-10 w-[9.5rem] shrink-0 sm:h-11 sm:w-44">
          <Image
            src={SITE.brandMark}
            alt={SITE.name}
            fill
            className="object-contain object-left"
            sizes="180px"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-[var(--cd-navy)] transition-colors hover:text-[var(--cd-gold-hover)]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="cd-btn-primary rounded-md px-4 py-2 text-sm"
          >
            Apply now
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[var(--cd-navy)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-[var(--cd-border)] bg-[var(--cd-surface)] md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2.5 text-base font-medium text-[var(--cd-navy)] hover:bg-[var(--cd-fog)]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="cd-btn-primary mt-2 rounded-md px-3 py-2.5 text-center text-base"
            onClick={() => setOpen(false)}
          >
            Apply now
          </Link>
        </nav>
      </div>
    </header>
  );
}
