import { submitToFormspree } from "@/lib/formspree";
import type { PatientIntake } from "@/lib/patient-intake";

/**
 * Sends patient intake + preview details to Formspree after a successful AI generation.
 * Failures are logged only; the UI still shows the preview.
 */
export async function forwardPatientIntakeToWebhook(payload: {
  patient: PatientIntake;
  treatmentId: string;
  previewImageUrl: string;
}): Promise<void> {
  const result = await submitToFormspree("patientIntake", {
    fullName: payload.patient.fullName,
    email: payload.patient.email,
    phone: payload.patient.phone,
    treatmentId: payload.treatmentId,
    previewImageUrl: payload.previewImageUrl,
    submittedAt: new Date().toISOString(),
  });

  if (!result.ok) {
    console.warn("[patient-intake-formspree]", result.message, result.status ?? "");
  }
}
