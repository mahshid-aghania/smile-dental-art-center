import Image from "next/image";
import Link from "next/link";

import { DrKadivarTestimonials } from "@/components/clinic/DrKadivarTestimonials";
import { CLINIC } from "@/lib/clinic/content";
import {
  DR_KADIVAR_AFFILIATIONS,
  DR_KADIVAR_IMAGES,
  DR_KADIVAR_MAP_EMBED,
  DR_KADIVAR_OFFICE_IMAGES,
} from "@/lib/clinic/dr-kadivar";

function PortraitImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto aspect-[2/3] w-full max-w-md overflow-hidden rounded-2xl shadow-xl ring-1 ring-[var(--clinic-border)]">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 90vw, 40vw" priority />
    </div>
  );
}

export function DrKadivarPage() {
  return (
    <>
      <section className="py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <PortraitImage src={DR_KADIVAR_IMAGES.portrait} alt="Dr. Neda Kadivar, dentist in Markham" />

          <div className="space-y-6">
            <h1 className="clinic-heading text-3xl font-semibold text-[var(--clinic-navy)] sm:text-4xl">
              Dr. Neda Kadivar, D.D.S
            </h1>
            <h2 className="clinic-heading text-2xl font-medium text-[var(--clinic-navy)]">
              Trusted Family Dentist in Markham – Dr. Neda Kadivar at Smile Dental Arts Centre
            </h2>
            <p className="text-base leading-relaxed text-[var(--clinic-muted)]">
              Welcome to Smile Dental Arts Centre, where Dr. Neda Kadivar, an{" "}
              <strong className="text-[var(--clinic-navy)]">expert family dentist in Markham</strong>,
              provides exceptional dental care for patients of all ages. With over 20 years of
              experience and a deep passion for creating healthy, beautiful smiles, Dr. Kadivar has
              established herself as a trusted{" "}
              <strong className="text-[var(--clinic-navy)]">family dentist in Markham</strong>,
              serving the community with dedication and care. At our state-of-the-art Markham clinic,
              we&apos;re committed to creating a comfortable, welcoming environment for every patient,
              from young children experiencing their first dental visit to seniors seeking specialized
              care. Our mission is to ensure your family&apos;s oral health needs are met with the
              highest standards of expertise, compassion, and professionalism, making us the go-to{" "}
              <strong className="text-[var(--clinic-navy)]">family dentist in Markham</strong> for
              comprehensive dental care.
            </p>
            <p className="text-base leading-relaxed text-[var(--clinic-muted)]">
              Smile Dental Arts Centre is more than just a dental practice—it&apos;s a place where
              families in Markham can feel at home while receiving top-quality dental care. Dr. Neda
              Kadivar, a highly skilled{" "}
              <strong className="text-[var(--clinic-navy)]">family dentist in Markham</strong>,
              brings her extensive experience to every patient interaction, offering personalized
              treatments tailored to each individual&apos;s needs. Whether you&apos;re visiting for a
              routine check-up, a cosmetic procedure like teeth whitening, or an advanced treatment
              such as Invisalign, Dr. Kadivar ensures that every member of your family receives the
              best possible care. Her approach is centered on building trust and fostering long-term
              relationships, which is why so many families in Markham choose her as their preferred{" "}
              <strong className="text-[var(--clinic-navy)]">family dentist in Markham</strong>. At
              Smile Dental Arts Centre, we understand that every patient is unique, and we take the
              time to listen to your concerns, answer your questions, and develop a treatment plan that
              aligns with your goals for oral health.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--clinic-surface)] py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <PortraitImage
            src={DR_KADIVAR_IMAGES.secondary}
            alt="Dr. Neda Kadivar providing dental care in Markham"
          />

          <div className="space-y-8">
            <div>
              <h2 className="clinic-heading text-2xl font-semibold text-[var(--clinic-navy)]">
                Expert Dental Care with Dr. Neda Kadivar
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--clinic-muted)]">
                As a leading{" "}
                <strong className="text-[var(--clinic-navy)]">family dentist in Markham</strong>,
                Dr. Neda Kadivar specializes in a wide range of dental services at Smile Dental Arts
                Centre. From routine check-ups and cleanings to advanced treatments like{" "}
                <Link
                  href="/dental-services/cosmetic-dentistry/dental-implants"
                  className="clinic-link"
                >
                  Dental Implants
                </Link>
                ,{" "}
                <Link href="/dental-services/cosmetic-dentistry" className="clinic-link">
                  Cosmetic Dentistry
                </Link>
                ,{" "}
                <Link
                  href="/dental-services/endodontics/root-canal-therapy"
                  className="clinic-link"
                >
                  Root Canal
                </Link>{" "}
                and{" "}
                <Link href="/dental-services/invisalign-in-markham" className="clinic-link">
                  Invisalign Treatment
                </Link>
                , Dr. Kadivar tailors every treatment plan to suit your family&apos;s unique needs.
                Her compassionate approach makes her a go-to{" "}
                <strong className="text-[var(--clinic-navy)]">family dentist in Markham</strong> for
                both children and adults. Learn more about our full range of services on our{" "}
                <Link href={CLINIC.pages.services} className="clinic-link">
                  Services
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="clinic-heading text-2xl font-semibold text-[var(--clinic-navy)]">
                Why Choose Dr. Neda Kadivar as Your Family Dentist in Markham?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--clinic-muted)]">
                Dr. Neda Kadivar at Smile Dental Arts Centre is dedicated to creating a welcoming
                environment for every patient. Her expertise and commitment to quality care make her
                a trusted{" "}
                <strong className="text-[var(--clinic-navy)]">family dentist in Markham</strong>.
                For oral health tips, visit the{" "}
                <a
                  href="https://www.cda-adc.ca/en/oral_health/caring/"
                  className="clinic-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Canadian Dental Association&apos;s guide
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="clinic-heading text-2xl font-semibold text-[var(--clinic-navy)]">
                Professional Affiliations of Dr. Neda Kadivar
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--clinic-muted)]">
                Dr. Neda Kadivar is proud to be a member of the{" "}
                <a href={CLINIC.external.oda} className="clinic-link" target="_blank" rel="noopener noreferrer">
                  Ontario Dental Association (ODA)
                </a>
                , the{" "}
                <a href={CLINIC.external.rcdso} className="clinic-link" target="_blank" rel="noopener noreferrer">
                  Royal College of Dental Surgeons of Ontario (RCDSO)
                </a>
                , and the{" "}
                <a href={CLINIC.external.cda} className="clinic-link" target="_blank" rel="noopener noreferrer">
                  Canadian Dental Association (CDA)
                </a>
                . These affiliations reflect her commitment to maintaining the highest standards of
                dental practice and staying updated with the latest advancements in dentistry. As a
                trusted <strong className="text-[var(--clinic-navy)]">family dentist in Markham</strong>
                , Dr. Kadivar ensures her patients benefit from her professional expertise and
                adherence to industry best practices.
              </p>
            </div>

            <div>
              <h2 className="clinic-heading text-2xl font-semibold text-[var(--clinic-navy)]">
                Book Your Appointment with Dr. Neda Kadivar Today
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--clinic-muted)]">
                Ready to experience expert care from a{" "}
                <strong className="text-[var(--clinic-navy)]">family dentist in Markham</strong>?
                Contact Smile Dental Arts Centre to schedule your appointment with Dr. Neda Kadivar.
                Whether you need a check-up or Invisalign, we&apos;re here to help. Call us or{" "}
                <Link href={CLINIC.pages.appointments} className="clinic-link">
                  book online
                </Link>{" "}
                now! Explore dental programs at the{" "}
                <a
                  href="https://www.ontario.ca/page/your-health"
                  className="clinic-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ontario Ministry of Health
                </a>
                .
              </p>
              <Link
                href={CLINIC.pages.appointments}
                className="clinic-btn-primary mt-6 inline-block px-8 py-3 text-sm"
              >
                Make Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--clinic-surface)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="clinic-heading text-center text-3xl font-semibold text-[var(--clinic-navy)]">
            Our Office
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DR_KADIVAR_OFFICE_IMAGES.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 shadow-sm ring-1 ring-[var(--clinic-border)]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="clinic-heading text-center text-3xl font-semibold text-[var(--clinic-navy)]">
            Proud Members
          </h2>
          <div className="mt-10 grid items-center gap-8 sm:grid-cols-3">
            {DR_KADIVAR_AFFILIATIONS.map((affiliation) => (
              <a
                key={affiliation.name}
                href={affiliation.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center rounded-xl border border-[var(--clinic-border)] bg-white p-6 transition hover:shadow-md"
              >
                <Image
                  src={affiliation.image}
                  alt={`${affiliation.name} logo`}
                  width={300}
                  height={150}
                  className="h-auto max-h-24 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <DrKadivarTestimonials />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="clinic-heading text-center text-3xl font-semibold text-[var(--clinic-navy)]">
            Getting Here
          </h2>
          <div className="mt-8 overflow-hidden rounded-xl border border-[var(--clinic-border)] shadow-sm">
            <iframe
              title="Smile Dental Arts Centre location"
              src={DR_KADIVAR_MAP_EMBED}
              className="h-[min(500px,60vh)] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-center text-sm text-[var(--clinic-muted)]">
            <a href={CLINIC.addressHref} className="clinic-link" target="_blank" rel="noopener noreferrer">
              {CLINIC.address}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
