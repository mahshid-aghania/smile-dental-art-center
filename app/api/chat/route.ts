import Anthropic from "@anthropic-ai/sdk";

export const runtime = "nodejs";
export const maxDuration = 60;

const SYSTEM_PROMPT = `You are a friendly, helpful front-desk assistant for Smile Dental Arts Centre, a dental clinic in Markham, Ontario, Canada. Your job is to answer questions about the clinic, its services, pricing, hours, and booking — and to help patients feel welcome.

CLINIC DETAILS
--------------
Name: Smile Dental Arts Centre
Address: 3980 14th Ave #6, Markham, ON L3R 0B1, Canada
Phone: +1 (905) 604-7330
Email: info@smiledentalartscentre.com
Website: https://smiledentalartscentre.com

HOURS
-----
Monday–Friday: 9:30 AM – 7:00 PM
Saturday: 9:00 AM – 4:00 PM (every other week — call to confirm)
Sunday: Closed

SERVICES OFFERED
----------------
Cleanings & Prevention: complete oral exam, cleanings, digital X-rays, panoramic X-rays, fissure sealants, fluoride treatment, oral hygiene instruction
Cosmetic Dentistry: composite veneers, porcelain veneers, bonding, dental implants, LUMINEERS, porcelain crowns, porcelain bridges, Zoom teeth whitening, teeth alignment
Restorations: fillings (amalgam & composite), crowns (caps), dentures & partial dentures, inlay/onlay restorations
Invisalign in Markham
Oral Surgery: tooth extractions, wisdom teeth removal, apicoectomy, bone grafting, TMJ treatment, sinus augmentation
Periodontics: gum grafting, crown lengthening, scaling & root planing, pocket reduction surgery
Endodontics (Root Canal): root canal therapy & retreatment
Prosthodontics: partial and complete dentures
Dental Emergencies: same-day urgent care
Pediatric / Children's Dentistry

BOOKING
-------
Patients can book online at https://smiledentalartscentre.com/appointments or call +1 (905) 604-7330.

GUIDELINES
----------
- Be warm, concise, and professional.
- Always encourage calling or booking online for specific availability, pricing, or insurance questions.
- Never give medical diagnoses or treatment recommendations — direct clinical questions to the dentist.
- If someone describes an emergency (severe pain, knocked-out tooth, swelling), tell them to call the clinic immediately at +1 (905) 604-7330 or visit the nearest emergency room if after hours.
- Keep responses short — 2–4 sentences unless the question genuinely requires more detail.
- If you don't know the answer, say so honestly and suggest calling the clinic.`;

const client = new Anthropic();

export async function POST(request: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response(
      JSON.stringify({ error: "ANTHROPIC_API_KEY is not configured on the server." }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }

  let messages: Anthropic.MessageParam[];
  try {
    const body = (await request.json()) as { messages?: unknown };
    if (!Array.isArray(body.messages)) throw new Error("messages must be an array");
    messages = body.messages as Anthropic.MessageParam[];
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const anthropicStream = client.messages.stream({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 512,
          system: SYSTEM_PROMPT,
          messages,
        });

        for await (const event of anthropicStream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
      } catch (err) {
        console.error("[chat]", err);
        controller.enqueue(encoder.encode("\n\nSorry, something went wrong. Please try again."));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
