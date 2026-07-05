import Image from "next/image";
import Link from "next/link";

import { ServiceSubmenuList } from "@/components/clinic/ServiceSubmenuList";
import { CLINIC } from "@/lib/clinic/content";
import type { ClinicPageContent } from "@/lib/clinic/pages";
import type { ServiceNavItem } from "@/lib/clinic/service-nav";

type ServiceCategoryHubPageProps = {
  category: ServiceNavItem & { children: readonly ServiceNavItem[] };
  page: ClinicPageContent;
  heroImage: string;
  heroAlt: string;
  subtitle?: string;
};

export function ServiceCategoryHubPage({
  category,
  page,
  heroImage,
  heroAlt,
  subtitle = "The Services Your Markham Dentist Offers",
}: ServiceCategoryHubPageProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[16rem_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <ServiceSubmenuList
            title={category.label}
            items={category.children}
            activeHref={category.href}
          />
        </aside>

        <article>
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-[var(--clinic-border)]">
              <Image
                src={heroImage}
                alt={heroAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>

            <div>
              <h1 className="clinic-heading text-3xl font-semibold text-[var(--clinic-navy)] sm:text-4xl">
                {page.heading}
              </h1>
              <h2 className="clinic-heading mt-4 text-xl font-medium text-[var(--clinic-navy)]">
                {subtitle}
              </h2>
              <div className="prose-clinic mt-6 space-y-4 text-base leading-relaxed text-[var(--clinic-muted)]">
                {page.paragraphs
                  .filter((p) => !p.startsWith("Home >") && !p.startsWith("Home &"))
                  .slice(0, 2)
                  .map((paragraph, i) => (
                    <p key={`${i}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
                  ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={CLINIC.pages.services}
                  className="inline-block rounded-lg border-2 border-[var(--clinic-gold)] px-5 py-2.5 text-sm font-semibold text-[var(--clinic-gold)] transition hover:bg-[var(--clinic-gold)] hover:text-white"
                >
                  Our Services
                </Link>
                <Link
                  href={CLINIC.pages.appointments}
                  className="clinic-btn-primary inline-block px-5 py-2.5 text-sm"
                >
                  Appointment Request
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:hidden">
            <h2 className="clinic-heading mb-4 text-lg font-semibold text-[var(--clinic-navy)]">
              {category.label} Services
            </h2>
            <ServiceSubmenuList items={category.children} activeHref={category.href} />
          </div>
        </article>
      </div>
    </div>
  );
}
