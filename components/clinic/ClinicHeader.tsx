"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import { CLINIC, NAV_ITEMS } from "@/lib/clinic/content";
import { cn } from "@/lib/utils";

export function ClinicHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--clinic-border)] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/clinic/logo.png"
            alt={CLINIC.name}
            width={180}
            height={75}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </Link>

        <a
          href={CLINIC.phoneHref}
          className="hidden items-center gap-2 text-sm font-semibold text-[var(--clinic-navy)] lg:flex"
        >
          <Phone className="size-4 text-[var(--clinic-gold)]" aria-hidden />
          {CLINIC.phone}
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => {
            const children = "children" in item ? item.children : undefined;
            if (!children) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs font-semibold uppercase tracking-wide text-[var(--clinic-navy)] hover:text-[var(--clinic-gold)]"
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-[var(--clinic-navy)] hover:text-[var(--clinic-gold)] group-focus-within:text-[var(--clinic-gold)]"
                >
                  {item.label}
                  <ChevronDown className="size-3.5" aria-hidden />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="overflow-hidden rounded-lg border border-[var(--clinic-border)] bg-white py-1 shadow-lg">
                    {children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-sm text-[var(--clinic-navy)] hover:bg-[var(--clinic-surface)] hover:text-[var(--clinic-gold)]"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--clinic-navy)] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="clinic-mobile-nav"
        >
          Menu
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <nav
        id="clinic-mobile-nav"
        className={cn(
          "border-t border-[var(--clinic-border)] bg-white lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <ul className="mx-auto max-w-7xl divide-y divide-[var(--clinic-border)] px-4 py-2 sm:px-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block py-3 text-sm font-medium text-[var(--clinic-navy)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
              {"children" in item && item.children && (
                <ul className="mb-2 ml-4 space-y-1 border-l border-[var(--clinic-border)] pl-3">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        className="block py-1.5 text-sm text-[var(--clinic-muted)] hover:text-[var(--clinic-gold)]"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <a
              href={CLINIC.phoneHref}
              className="flex items-center gap-2 py-3 text-sm font-semibold text-[var(--clinic-gold)]"
            >
              <Phone className="size-4" aria-hidden />
              {CLINIC.phone}
            </a>
          </li>
          <li>
            <Link
              href="/smile-preview"
              className="block py-3 text-sm font-medium text-[var(--clinic-muted)]"
              onClick={() => setOpen(false)}
            >
              AI Smile Preview (demo)
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
