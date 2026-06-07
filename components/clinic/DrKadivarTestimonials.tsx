"use client";

import { useCallback, useEffect, useState } from "react";
import { Star } from "lucide-react";

import { TESTIMONIALS } from "@/lib/clinic/content";
import { cn } from "@/lib/utils";

export function DrKadivarTestimonials() {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleCount);

  const next = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  useEffect(() => {
    const id = window.setInterval(next, 3000);
    return () => window.clearInterval(id);
  }, [next]);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="clinic-heading text-center text-3xl font-semibold text-[var(--clinic-navy)]">
          Our Testimonial&apos;s
        </h2>

        <div className="relative mt-10 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * (100 / visibleCount)}%)` }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <article
                key={testimonial.name}
                className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3"
              >
                <div className="h-full rounded-xl border border-[var(--clinic-border)] bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-[var(--clinic-navy)]">{testimonial.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--clinic-muted)]">
                    {testimonial.quote}
                  </p>
                  <div className="mt-4 flex gap-0.5 text-[var(--clinic-gold)]" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" aria-hidden />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial group ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={cn(
                "size-2 rounded-full transition-colors",
                i === index ? "bg-[var(--clinic-gold)]" : "bg-slate-300"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
