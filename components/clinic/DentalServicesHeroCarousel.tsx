"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { DENTAL_SERVICES_HERO_SLIDES } from "@/lib/clinic/content";
import { cn } from "@/lib/utils";

export function DentalServicesHeroCarousel() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % DENTAL_SERVICES_HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const id = window.setInterval(next, 3000);
    return () => window.clearInterval(id);
  }, [next]);

  return (
    <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-xl ring-1 ring-[var(--clinic-border)]">
      {DENTAL_SERVICES_HERO_SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            i === index ? "opacity-100" : "opacity-0"
          )}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={i === 0}
          />
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {DENTAL_SERVICES_HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={cn(
              "size-2 rounded-full transition-colors",
              i === index ? "bg-[var(--clinic-gold)]" : "bg-white/70"
            )}
          />
        ))}
      </div>
    </div>
  );
}
