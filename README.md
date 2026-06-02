# AI Smile Design Generator

A modern Next.js (App Router) app with two experiences:

1. **Clinic site clone** (`/`) — Full Smile Dental Arts Centre mirror: homepage plus **76 internal pages** (services, about, CDCP, FAQ, contact, appointments, etc.) with scraped copy from the live site
2. **AI smile preview** (`/smile-preview`) — capture a selfie, choose a treatment direction, and call **Replicate** to generate an edited preview image

## Prerequisites

- **Node.js 20.9+** (recommended; Next.js 16 expects Node 20+)
- A [Replicate](https://replicate.com) account and API token

## Setup

1. Copy environment variables:

   ```bash
   cp .env.local.example .env.local
   ```

2. Set `REPLICATE_API_TOKEN` in `.env.local` (never commit real tokens).

3. **Formspree (forms):** Create three forms at [Formspree](https://formspree.io) and add their IDs to `.env.local`:
   - `NEXT_PUBLIC_FORMSPREE_APPOINTMENT_ID` — appointment request (homepage + `/appointments`)
   - `NEXT_PUBLIC_FORMSPREE_CONTACT_ID` — contact form (`/contact-us`)
   - `NEXT_PUBLIC_FORMSPREE_PATIENT_INTAKE_ID` — AI wizard intake (sent after a successful preview generation)

4. Optionally set `REPLICATE_MODEL` to a model slug you control. The default integration targets **`black-forest-labs/flux-kontext-max`** with inputs:

   - `prompt` — treatment-specific dental instruction plus a short identity-preservation line (see `lib/replicate-smile.ts`)
   - `input_image` — your uploaded capture (via Replicate Files)
   - `aspect_ratio` — `match_input_image`

   If you switch models, confirm its OpenAPI input schema matches or adjust `lib/replicate-smile.ts`.

## Run locally

With [pnpm](https://pnpm.io/installation):

```bash
pnpm install
pnpm dev
```

If you use npm instead:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the clinic homepage, or [http://localhost:3000/smile-preview](http://localhost:3000/smile-preview) for the AI wizard.

## Project structure

- `app/(clinic)/page.tsx` — Clinic homepage
- `app/(clinic)/[...slug]/page.tsx` — All other cloned pages (services, about, FAQ, etc.)
- `app/(clinic)/layout.tsx` — Clinic header, footer, CDCP banner
- `components/clinic/` — Hero carousel, sections, appointment & contact forms, testimonials
- `lib/clinic/content.ts` — Nav, service cards, clinic contact info
- `lib/clinic/scraped-pages.json` — Page copy scraped from smiledentalartscentre.com
- `lib/clinic/pages.ts` — Page lookup and related-service helpers
- `lib/formspree.ts` — Formspree submit helper
- `app/smile-preview/page.tsx` — Wizard flow: patient intake → treatment → camera → preview + generate
- `app/api/generate-smile/route.ts` — Validates patient + image; runs Replicate; optional intake webhook
- `components/PatientInfoForm.tsx` — Name, email, phone fields
- `components/ProcedureSteps.tsx` — Step 1–4 indicator (Your Info → Treatment → Photo → Preview)
- `components/WizardHero.tsx` — Serif headline + eyebrow + subtitle
- `components/CameraCapture.tsx` — `getUserMedia` preview and capture
- `components/TreatmentSelector.tsx` — Treatment radio options
- `components/SmilePreview.tsx` — Before / after layout
- `components/LoadingState.tsx` — Generation loading copy
- `components/ErrorMessage.tsx` — Inline errors (camera, API, env)
- `lib/patient-intake.ts` — Patient object type + validation
- `lib/patient-webhook.ts` — Sends AI intake to Formspree after generation
- `lib/replicate-smile.ts` — Replicate file upload + `replicate.run`
- `lib/treatment-prompts.ts` — Treatment IDs and exact prompts

## AI behavior note

Prompts are written to **preserve identity, face, lips, skin tone, lighting, and background** and to **focus edits on the teeth/smile**. Final adherence depends on the model you configure on Replicate.

## Disclaimer

This app shows **visualization only**—not a diagnosis or treatment plan. Always follow advice from a licensed dentist.
