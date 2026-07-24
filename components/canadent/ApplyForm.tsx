"use client";

import { useState, type FormEvent } from "react";

import { submitToFormspree } from "@/lib/formspree";

type Props = {
  courseName?: string;
  heading?: string;
  subheading?: string;
};

export function ApplyForm({
  courseName,
  heading = "Apply to CanaDent",
  subheading = "Tell us a little about yourself and we’ll follow up by email.",
}: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("loading");
    setMessage("");

    const result = await submitToFormspree("contact", {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      telephone: String(data.get("telephone") || ""),
      message: String(data.get("message") || ""),
      interest: courseName || String(data.get("interest") || "General application"),
      _subject: `CanaDent application — ${courseName || "General"}`,
    });

    if (result.ok) {
      setStatus("success");
      setMessage("Thank you — your message has been sent.");
      form.reset();
      return;
    }
    setStatus("error");
    setMessage(result.message);
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-xl space-y-5">
      <div>
        <h2 className="cd-heading text-3xl sm:text-4xl">{heading}</h2>
        <p className="mt-2 text-[var(--cd-muted)]">{subheading}</p>
      </div>

      <label className="block space-y-1.5 text-sm">
        <span className="font-medium text-[var(--cd-navy)]">Full name</span>
        <input
          name="name"
          required
          autoComplete="name"
          className="w-full rounded-md border border-[var(--cd-border)] px-3 py-2.5 outline-none ring-[var(--cd-gold)] focus:ring-2"
        />
      </label>

      <label className="block space-y-1.5 text-sm">
        <span className="font-medium text-[var(--cd-navy)]">Email</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-md border border-[var(--cd-border)] px-3 py-2.5 outline-none ring-[var(--cd-gold)] focus:ring-2"
        />
      </label>

      <label className="block space-y-1.5 text-sm">
        <span className="font-medium text-[var(--cd-navy)]">Phone</span>
        <input
          name="telephone"
          type="tel"
          autoComplete="tel"
          className="w-full rounded-md border border-[var(--cd-border)] px-3 py-2.5 outline-none ring-[var(--cd-gold)] focus:ring-2"
        />
      </label>

      {!courseName ? (
        <label className="block space-y-1.5 text-sm">
          <span className="font-medium text-[var(--cd-navy)]">Course interest</span>
          <input
            name="interest"
            placeholder="e.g. Endodontics, implants, AI in dentistry"
            className="w-full rounded-md border border-[var(--cd-border)] px-3 py-2.5 outline-none ring-[var(--cd-gold)] focus:ring-2"
          />
        </label>
      ) : (
        <input type="hidden" name="interest" value={courseName} />
      )}

      <label className="block space-y-1.5 text-sm">
        <span className="font-medium text-[var(--cd-navy)]">Message</span>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-md border border-[var(--cd-border)] px-3 py-2.5 outline-none ring-[var(--cd-gold)] focus:ring-2"
          placeholder="Share your goals, preferred dates, or questions."
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="cd-btn-primary w-full rounded-md px-4 py-3 text-sm disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Submit application"}
      </button>

      {message ? (
        <p
          role="status"
          className={
            status === "success"
              ? "text-sm text-emerald-700"
              : "text-sm text-red-700"
          }
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
