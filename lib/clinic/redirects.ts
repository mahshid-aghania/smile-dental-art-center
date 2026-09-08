/**
 * Single source of truth for permanent path redirects.
 *
 * Consumed by `next.config.ts` (to emit the actual 308 redirects) and by
 * `app/sitemap.ts` (to exclude redirected source paths so the sitemap only
 * advertises final canonical URLs).
 */
export type ClinicRedirect = {
  source: string;
  destination: string;
};

export const CLINIC_REDIRECTS: ClinicRedirect[] = [
  { source: "/home", destination: "/" },
  { source: "/services", destination: "/dental-services" },
  { source: "/services/:path*", destination: "/dental-services/:path*" },
  // Taxonomy corrections
  {
    source: "/dental-services/oral-surgery/root-canal-markham",
    destination: "/root-canal-markham",
  },
  {
    source: "/dental-services/oral-surgery/wisdom-teeth-surgery",
    destination: "/wisdom-teeth-removal-markham",
  },
  // Veneer consolidation
  {
    source: "/dental-services/oral-surgery/dental-veneers-markham",
    destination: "/dental-veneers-markham",
  },
  {
    source: "/dental-services/oral-surgery/porcelain-veneers-markham",
    destination: "/dental-veneers-markham",
  },
  {
    source: "/dental-services/oral-surgery/composite-veneers-markham",
    destination: "/dental-veneers-markham",
  },
  // Other oral-surgery misplacements
  {
    source: "/dental-services/oral-surgery/implant-markham",
    destination: "/dental-implants",
  },
  {
    source: "/dental-services/oral-surgery/invisalign-markham",
    destination: "/dental-services/invisalign-in-markham",
  },
  {
    source: "/dental-services/oral-surgery/bone-grafting-markham",
    destination: "/dental-services/oral-surgery/bone-grafting",
  },
];

/**
 * Set of redirect source paths (no leading slash, no wildcard segments) used to
 * filter clinic slugs out of the sitemap.
 */
export const REDIRECT_SOURCE_SLUGS = new Set(
  CLINIC_REDIRECTS.map((r) => r.source.replace(/^\//, "")).filter(
    (s) => !s.includes(":") && s.length > 0
  )
);
