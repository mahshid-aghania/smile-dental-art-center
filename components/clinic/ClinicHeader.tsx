"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import { ServiceSubmenuList } from "@/components/clinic/ServiceSubmenuList";
import { CLINIC, NAV_ITEMS } from "@/lib/clinic/content";
import type { ServiceNavItem } from "@/lib/clinic/service-nav";
import { cn } from "@/lib/utils";

type NavChild = {
  label: string;
  href: string;
  children?: readonly NavChild[];
};

function hasNestedChildren(children: readonly NavChild[]): boolean {
  return children.some((child) => child.children && child.children.length > 0);
}

function DesktopServiceMenuItem({
  item,
  isOpen,
  onOpen,
  onClose,
}: {
  item: ServiceNavItem;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  if (!item.children?.length) {
    return (
      <li className="border-b border-[var(--clinic-border)] last:border-b-0">
        <Link
          href={item.href}
          className="block px-4 py-2.5 text-sm text-[var(--clinic-navy)] hover:bg-[var(--clinic-surface)] hover:text-[var(--clinic-gold)]"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      className="relative border-b border-[var(--clinic-border)] last:border-b-0"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={onClose}
    >
      <Link
        href={item.href}
        className={cn(
          "flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-[var(--clinic-navy)] hover:bg-[var(--clinic-surface)] hover:text-[var(--clinic-gold)]",
          isOpen && "bg-[var(--clinic-surface)] text-[var(--clinic-gold)]"
        )}
      >
        <span>{item.label}</span>
        <ChevronRight className="size-3.5 shrink-0 opacity-60" aria-hidden />
      </Link>
      {isOpen && (
        <div
          className="absolute left-full top-0 z-[70] flex pl-1"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          <div className="min-w-[15rem]">
            <ServiceSubmenuList items={item.children} />
          </div>
        </div>
      )}
    </li>
  );
}

function MobileServiceMenuItem({
  item,
  onNavigate,
}: {
  item: ServiceNavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.children?.length) {
    return (
      <li>
        <Link
          href={item.href}
          className="block py-1.5 text-sm text-[var(--clinic-muted)] hover:text-[var(--clinic-gold)]"
          onClick={onNavigate}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <div className="flex items-center justify-between gap-2">
        <Link
          href={item.href}
          className="py-1.5 text-sm text-[var(--clinic-muted)] hover:text-[var(--clinic-gold)]"
          onClick={onNavigate}
        >
          {item.label}
        </Link>
        <button
          type="button"
          className="rounded p-1 text-[var(--clinic-muted)] hover:text-[var(--clinic-gold)]"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={`Expand ${item.label} submenu`}
        >
          <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} aria-hidden />
        </button>
      </div>
      {open && (
        <ul className="mb-2 ml-3 space-y-1 border-l border-[var(--clinic-border)] pl-3">
          {item.children.map((child) => (
            <li key={child.label}>
              <Link
                href={child.href}
                className="block py-1 text-xs text-[var(--clinic-muted)] hover:text-[var(--clinic-gold)]"
                onClick={onNavigate}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function DesktopNavDropdown({
  label,
  href,
  menuItems,
}: {
  label: string;
  href: string;
  menuItems: readonly NavChild[];
}) {
  const isServicesMenu = hasNestedChildren(menuItems);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <div className="group relative">
      <Link
        href={href}
        className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-[var(--clinic-navy)] hover:text-[var(--clinic-gold)] group-focus-within:text-[var(--clinic-gold)]"
      >
        {label}
        <ChevronDown className="size-3.5" aria-hidden />
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div
          className={cn(
            "rounded-lg border border-[var(--clinic-border)] bg-white shadow-lg",
            isServicesMenu ? "w-64 overflow-visible" : "w-64 overflow-hidden"
          )}
          onMouseLeave={() => setOpenSubmenu(null)}
        >
          <ul className="relative py-1">
            {isServicesMenu
              ? (menuItems as readonly ServiceNavItem[]).map((child) => (
                  <DesktopServiceMenuItem
                    key={child.label}
                    item={child}
                    isOpen={openSubmenu === child.label}
                    onOpen={() => setOpenSubmenu(child.label)}
                    onClose={() => setOpenSubmenu(null)}
                  />
                ))
              : menuItems.map((child) => (
                  <li key={child.label} className="border-b border-[var(--clinic-border)] last:border-b-0">
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
    </div>
  );
}

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

        <nav className="hidden items-center gap-6 overflow-visible lg:flex" aria-label="Main">
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
              <DesktopNavDropdown
                key={item.label}
                label={item.label}
                href={item.href}
                menuItems={children}
              />
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
                  {hasNestedChildren(item.children)
                    ? (item.children as readonly ServiceNavItem[]).map((child) => (
                        <MobileServiceMenuItem
                          key={child.label}
                          item={child}
                          onNavigate={() => setOpen(false)}
                        />
                      ))
                    : item.children.map((child) => (
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
