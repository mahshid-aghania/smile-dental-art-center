"use client";

import { useState } from "react";

import { submitToFormspree } from "@/lib/formspree";

const DAYS = ["Any Day", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const TIMES = ["Any Time", "Morning", "Afternoon"];
const REASONS = [
  "Exam & Cleaning",
  "Consultation",
  "Treatment",
  "Urgent Dental Care",
  "Other",
];

export function AppointmentForm({ id = "appointment" }: { id?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const result = await submitToFormspree("appointment", {
      _subject: "Appointment request — Smile Dental Arts Centre",
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      currentPatient: data.currentPatient,
      preferredDays: data.preferredDays,
      preferredTime: data.preferredTime,
      reason: data.reason,
      details: data.details,
    });

    if (!result.ok) {
      setStatus("error");
      setMessage(result.message);
      return;
    }

    setStatus("success");
    setMessage("Thank you! Your appointment request has been received. Our team will contact you shortly.");
    form.reset();
  }

  return (
    <form
      id={id}
      onSubmit={(e) => void handleSubmit(e)}
      className="space-y-4 rounded-xl border border-[var(--clinic-border)] bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-1.5 sm:col-span-2">
          <span className="text-sm font-medium text-[var(--clinic-navy)]">
            Full Name <span className="text-red-500">*</span>
          </span>
          <input
            name="fullName"
            required
            placeholder="Enter your full name"
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
            placeholder="Email Address"
            className="w-full rounded-md border border-[var(--clinic-border)] bg-white px-3 py-2 text-sm text-[var(--clinic-text)] outline-none placeholder:text-slate-400 focus:border-[var(--clinic-gold)] focus:ring-1 focus:ring-[var(--clinic-gold)]"
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm font-medium text-[var(--clinic-navy)]">
            Phone/Mobile <span className="text-red-500">*</span>
          </span>
          <input
            name="phone"
            type="tel"
            required
            placeholder="Mobile Number"
            className="w-full rounded-md border border-[var(--clinic-border)] bg-white px-3 py-2 text-sm text-[var(--clinic-text)] outline-none placeholder:text-slate-400 focus:border-[var(--clinic-gold)] focus:ring-1 focus:ring-[var(--clinic-gold)]"
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm font-medium text-[var(--clinic-navy)]">Are you a current patient?</span>
          <select
            name="currentPatient"
            defaultValue=""
            className="w-full rounded-md border border-[var(--clinic-border)] bg-white px-3 py-2 text-sm text-[var(--clinic-text)] outline-none focus:border-[var(--clinic-gold)]"
          >
            <option value="">- Select -</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm font-medium text-[var(--clinic-navy)]">
            Preferred day(s) of the week for an appointment?
          </span>
          <select
            name="preferredDays"
            defaultValue="Any Day"
            className="w-full rounded-md border border-[var(--clinic-border)] bg-white px-3 py-2 text-sm text-[var(--clinic-text)]"
          >
            {DAYS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm font-medium text-[var(--clinic-navy)]">
            Preferred time(s) for an appointment? <span className="text-red-500">*</span>
          </span>
          <select
            name="preferredTime"
            required
            defaultValue="Any Time"
            className="w-full rounded-md border border-[var(--clinic-border)] bg-white px-3 py-2 text-sm text-[var(--clinic-text)]"
          >
            {TIMES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className="block space-y-1.5 sm:col-span-2">
          <span className="text-sm font-medium text-[var(--clinic-navy)]">
            Reason for Your Visit <span className="text-red-500">*</span>
          </span>
          <select
            name="reason"
            required
            defaultValue="Exam & Cleaning"
            className="w-full rounded-md border border-[var(--clinic-border)] bg-white px-3 py-2 text-sm text-[var(--clinic-text)]"
          >
            {REASONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
        <label className="block space-y-1.5 sm:col-span-2">
          <span className="text-sm font-medium text-[var(--clinic-navy)]">
            Please describe the nature of your appointment (e.g., consultation, check-up, etc.):
          </span>
          <textarea
            name="details"
            rows={4}
            className="w-full rounded-md border border-[var(--clinic-border)] bg-white px-3 py-2 text-sm text-[var(--clinic-text)] outline-none placeholder:text-slate-400 focus:border-[var(--clinic-gold)] focus:ring-1 focus:ring-[var(--clinic-gold)]"
          />
        </label>
      </div>

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
        {status === "loading" ? "Sending…" : "Request Appointment"}
      </button>
    </form>
  );
}
