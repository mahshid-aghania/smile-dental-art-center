export type FormspreeFormKey = "appointment" | "contact" | "patientIntake";

const ENV_KEYS: Record<FormspreeFormKey, string[]> = {
  appointment: ["NEXT_PUBLIC_FORMSPREE_APPOINTMENT_ID", "FORMSPREE_APPOINTMENT_ID"],
  contact: ["NEXT_PUBLIC_FORMSPREE_CONTACT_ID", "FORMSPREE_CONTACT_ID"],
  patientIntake: ["NEXT_PUBLIC_FORMSPREE_PATIENT_INTAKE_ID", "FORMSPREE_PATIENT_INTAKE_ID"],
};

export function getFormspreeId(key: FormspreeFormKey): string | undefined {
  for (const envKey of ENV_KEYS[key]) {
    const value = process.env[envKey]?.trim();
    if (value) return value;
  }
  return undefined;
}

export function getFormspreeEndpoint(key: FormspreeFormKey): string | null {
  const id = getFormspreeId(key);
  return id ? `https://formspree.io/f/${id}` : null;
}

export type FormspreeResult =
  | { ok: true }
  | { ok: false; message: string; status?: number };

export async function submitToFormspree(
  key: FormspreeFormKey,
  fields: Record<string, string | number | boolean | undefined | null>
): Promise<FormspreeResult> {
  const endpoint = getFormspreeEndpoint(key);
  if (!endpoint) {
    return {
      ok: false,
      message:
        "Form submissions are not configured yet. Add your Formspree form IDs to .env.local (see README).",
    };
  }

  const body: Record<string, string> = {};
  for (const [k, v] of Object.entries(fields)) {
    if (v === undefined || v === null) continue;
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
