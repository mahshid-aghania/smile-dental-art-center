import coursesData from "./courses-data.json";

export type CoursePriceRange = {
  min: number | null;
  max: number | null;
};

export type Course = {
  id: number;
  slug: string;
  name: string;
  summary: string;
  description: string;
  price: number | null;
  regularPrice: number | null;
  salePrice: number | null;
  priceRange: CoursePriceRange | null;
  currency: string;
  image: string | null;
  category: string;
  featured: boolean;
};

export const COURSES = coursesData as Course[];

export function getAllCourseSlugs(): string[] {
  return COURSES.map((c) => c.slug);
}

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export function getFeaturedCourses(limit = 6): Course[] {
  return COURSES.filter((c) => c.featured).slice(0, limit);
}

export function formatCad(amount: number | null | undefined): string | null {
  if (amount == null || Number.isNaN(amount)) return null;
  if (amount === 0) return "Free / invitation";
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount);
}

export function formatCoursePrice(course: Course): string {
  if (course.priceRange?.min != null && course.priceRange?.max != null) {
    const min = formatCad(course.priceRange.min);
    const max = formatCad(course.priceRange.max);
    if (min && max && course.priceRange.min !== course.priceRange.max) {
      return `${min} – ${max}`;
    }
  }
  const sale = course.salePrice;
  const regular = course.regularPrice;
  if (sale != null && regular != null && sale < regular) {
    return `${formatCad(sale)} (was ${formatCad(regular)})`;
  }
  return formatCad(course.price) ?? "Contact for pricing";
}
