"use client";

import { useState } from "react";

import { submitToFormspree } from "@/lib/formspree";

export function ContactForm({ id = "contact-form" }: { id?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const result = await submitToFormspree("contact", {
      _subject: "Contact form — Smile Dental Arts Centre",
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });

    if (!result.ok) {
      setStatus("error");
      setMessage(result.message);
      return;
    }

    setStatus("success");
    setMessage("Thank you! Your message has been sent. We will get back to you soon.");
    form.reset();
  }

  return (
    <form
      id={id}
      onSubmit={(e) => void handleSubmit(e)}
      className="space-y-4 rounded-xl border border-[var(--clinic-border)] bg-white p-6 shadow-sm"
    >
      <label className="block space-y-1.5">
        <span className="text-sm font-medium text-[var(--clinic-navy)]">
          Full Name <span className="text-red-500">*</span>
        </span>
        <input
          name="fullName"
          required
          className="w-full rounded-md border border-[var(--clinic-border)] bg-white px-3 py-2 text-sm text-[var(--clinic-text)] outline-none placeholder:text-slate-400 focus:border-[var(--clinic-gold)] focus:ring-1 focus:ring-[var(--clinic-gold)]"
        />
      </label>
      <label className="block space-y-1.5">
        <span className="text-sm font-medium text-[var(--clinic-navy)]">
          Email <span className="text-red-500">*</span>
        </span>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-md border border-[var(--clinic-border)] bg-white px-3 py-2 text-sm text-[var(--clinic-text)] outline-none placeholder:text-slate-400 focus:border-[var(--clinic-gold)] focus:ring-1 focus:ring-[var(--clinic-gold)]"
        />
      </label>
      <label className="block space-y-1.5">
        <span className="text-sm font-medium text-[var(--clinic-navy)]">Phone</span>
        <input
          name="phone"
          type="tel"
          className="w-full rounded-md border border-[var(--clinic-border)] bg-white px-3 py-2 text-sm text-[var(--clinic-text)] outline-none placeholder:text-slate-400 focus:border-[var(--clinic-gold)] focus:ring-1 focus:ring-[var(--clinic-gold)]"
        />
      </label>
      <label className="block space-y-1.5">
        <span className="text-sm font-medium text-[var(--clinic-navy)]">
          Message <span className="text-red-500">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-md border border-[var(--clinic-border)] bg-white px-3 py-2 text-sm text-[var(--clinic-text)] outline-none placeholder:text-slate-400 focus:border-[var(--clinic-gold)] focus:ring-1 focus:ring-[var(--clinic-gold)]"
        />
      </label>

      {message && (
        <p
          className={`text-sm ${status === "success" ? "text-green-700" : "text-red-600"}`}
          role="status"
        >
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="clinic-btn-primary px-8 py-3 text-sm disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
