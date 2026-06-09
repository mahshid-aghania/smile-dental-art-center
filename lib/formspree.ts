export type FormspreeFormType = "appointment" | "contact" | "patientIntake";

/** Public Formspree form — https://formspree.io/f/xojzwvzd */
export const FORMSPREE_FORM_ID = "xojzwvzd";

const FORM_TYPE_LABELS: Record<FormspreeFormType, string> = {
  appointment: "Appointment request",
  contact: "Contact message",
  patientIntake: "AI smile preview intake",
};

const FORM_ID_ENV_KEYS = [
  "NEXT_PUBLIC_FORMSPREE_FORM_ID",
  "FORMSPREE_FORM_ID",
  // Legacy (all map to the same endpoint if set)
  "NEXT_PUBLIC_FORMSPREE_APPOINTMENT_ID",
  "FORMSPREE_APPOINTMENT_ID",
];

export function getFormspreeId(): string {
  for (const envKey of FORM_ID_ENV_KEYS) {
    const value = process.env[envKey]?.trim();
    if (value) return value;
  }
  return FORMSPREE_FORM_ID;
}

export function getFormspreeEndpoint(): string {
  return `https://formspree.io/f/${getFormspreeId()}`;
}

export type FormspreeResult =
  | { ok: true }
  | { ok: false; message: string; status?: number };

export async function submitToFormspree(
  formType: FormspreeFormType,
  fields: Record<string, string | number | boolean | undefined | null>
): Promise<FormspreeResult> {
  const endpoint = getFormspreeEndpoint();

  const body: Record<string, string> = {
    formType,
    _subject: `${FORM_TYPE_LABELS[formType]} — Smile Dental Arts Centre`,
  };
  for (const [k, v] of Object.entries(fields)) {
    if (v === undefined || v === null) continue;
    if (k === "_subject") continue;
    body[k] = String(v);
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15_000),
    });

    if (res.ok) {
      return { ok: true };
    }

    let message = "Could not submit the form. Please try again.";
    try {
      const data = (await res.json()) as { error?: string };
      if (data.error) message = data.error;
    } catch {
      /* ignore */
    }
    return { ok: false, message, status: res.status };
  } catch {
    return { ok: false, message: "Network error. Please try again or call the clinic." };
  }
}
