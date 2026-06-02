import { CLINIC } from "@/lib/clinic/content";

/** Canonical site origin (no trailing slash). */
export const SITE_URL = "https://smiledentalartscentre.com";

/** Default OpenGraph image used across implant pages. */
export const OG_IMAGE = "/clinic/implants-hero.png";

/** Geo coordinates for the Markham clinic (used in LocalBusiness schema). */
export const GEO = { latitude: 43.841063, longitude: -79.321822 } as const;

/** Real social profiles (Organization / Person sameAs). */
export const SAME_AS = [
  "https://www.facebook.com/profile.php?id=100069286303192",
  "https://www.instagram.com/smile_dental_arts_centre/",
  "https://www.linkedin.com/company/smile-dental-arts-centre",
] as const;

export const MEMBERSHIPS = [
  {
    abbr: "ODA",
    name: "Ontario Dental Association",
    url: CLINIC.external.oda,
  },
  {
    abbr: "RCDSO",
    name: "Royal College of Dental Surgeons of Ontario",
    url: CLINIC.external.rcdso,
  },
  {
    abbr: "CDA",
    name: "Canadian Dental Association",
    url: CLINIC.external.cda,
  },
] as const;

export const DOCTOR = {
  name: "Dr. Neda Kadivar, D.D.S.",
  shortName: "Dr. Neda Kadivar",
  jobTitle: "Dentist",
  image: "/clinic/hero-dr.jpg",
  bioHref: CLINIC.pages.drKadivar,
  experience: "20+ years",
  summary:
    "Markham family and cosmetic dentist with over 20 years of experience placing and restoring dental implants.",
  bio: "Dr. Neda Kadivar, D.D.S. is a Markham family and cosmetic dentist with more than 20 years of clinical experience. She provides dental implants, oral surgery, cosmetic dentistry, Invisalign and root canal therapy, guiding each patient through implant treatment with a calm, compassionate and meticulous approach from the first consultation to the final restoration.",
  knowsAbout: [
    "dental implants",
    "All-on-4 dental implants",
    "single tooth implants",
    "implant-supported dentures",
    "bone grafting",
    "sinus lift surgery",
    "cosmetic dentistry",
    "oral surgery",
  ],
} as const;

export const PILLAR_PATH = "/dental-implants";

export type ImplantOption = {
  title: string;
  href: string;
  description: string;
};

/** Cards on the pillar page that link DOWN to each subpage. */
export const IMPLANT_OPTIONS: ImplantOption[] = [
  {
    title: "Single Tooth Implants",
    href: "/dental-implants/single-tooth",
    description:
      "Replace one missing tooth with a standalone implant and crown that protects neighbouring teeth.",
  },
  {
    title: "All-on-4 Dental Implants",
    href: "/dental-implants/all-on-4",
    description:
      "A full arch of fixed teeth supported by just four implants — often in a single day.",
  },
  {
    title: "Implant-Supported Dentures",
    href: "/dental-implants/implant-dentures",
    description:
      "Snap-in or fixed dentures anchored to implants for a stable, comfortable, slip-free fit.",
  },
  {
    title: "Implant Cost in Markham",
    href: "/dental-implants/cost",
    description:
      "Transparent pricing factors, financing options and how the CDCP may help with implant costs.",
  },
  {
    title: "Same-Day Implants",
    href: "/dental-implants/same-day",
    description:
      "Immediate-load implants that let qualifying patients leave with temporary teeth the same day.",
  },
  {
    title: "Implants vs Dentures",
    href: "/dental-implants/vs-dentures",
    description:
      "Compare comfort, cost, longevity and bone health to choose the right tooth-replacement option.",
  },
  {
    title: "Bone Grafting",
    href: "/dental-implants/bone-grafting",
    description:
      "Rebuild lost jawbone so the area can securely support a long-lasting dental implant.",
  },
  {
    title: "Sinus Lift",
    href: "/dental-implants/sinus-lift",
    description:
      "Add bone height in the upper jaw to make implants possible near the sinus cavity.",
  },
  {
    title: "The Implant Procedure",
    href: "/dental-implants/procedure",
    description:
      "A step-by-step look at consultation, placement, healing and final restoration.",
  },
  {
    title: "Implant FAQ",
    href: "/dental-implants/faq",
    description:
      "Answers to the most common questions about dental implants in Markham.",
  },
];

export const IMPLANT_BENEFITS = [
  "Look, feel and function like natural teeth",
  "Preserve jawbone and prevent the sunken look of missing teeth",
  "Protect healthy neighbouring teeth — no grinding down for bridges",
  "Eat, speak and smile with full confidence",
  "Easy daily care — brush and floss like natural teeth",
  "The most durable, long-lasting tooth-replacement option available",
] as const;

export const WHY_CHOOSE_IMPLANTS = [
  {
    title: "20+ Years of Implant Experience",
    body: "Dr. Neda Kadivar has placed and restored implants for Markham patients for over two decades.",
  },
  {
    title: "Start-to-Finish Care Under One Roof",
    body: "Consultation, surgery, bone grafting and the final crown are all completed at our Markham clinic.",
  },
  {
    title: "Advanced 3D Imaging",
    body: "CBCT scans and digital planning make every implant placement precise, safe and predictable.",
  },
  {
    title: "Gentle, Anxiety-Friendly Approach",
    body: "Sedation options and a compassionate team keep treatment calm and comfortable.",
  },
] as const;

export type Testimonial = { name: string; quote: string; rating: number };

export const IMPLANT_TESTIMONIALS: Testimonial[] = [
  {
    name: "Mozhgan Gharasou",
    rating: 5,
    quote:
      "Dr. Neda and her team are the best. The office is quiet and clean, and I highly recommend this office for treatment and oral health.",
  },
  {
    name: "Nikoo Ghafourian",
    rating: 5,
    quote:
      "Dr. Kadivar and her team are so nice and caring. She knows how to treat every patient. I really suggest this clinic.",
  },
  {
    name: "Joseph Ghobrial",
    rating: 5,
    quote:
      "Experience was great — very clean and professional. The staff treated me like family in a comfortable environment.",
  },
];

export const AGGREGATE_RATING = { ratingValue: 4.9, reviewCount: 87 } as const;

/* ------------------------------------------------------------------ */
/* Subpage content (data-driven [topic] route)                         */
/* ------------------------------------------------------------------ */

export type ContentSection = {
  heading: string;
  body: string[];
  list?: string[];
};

export type FaqItem = { question: string; answer: string };

export type ImplantTopic = {
  slug: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  /** Name used for MedicalProcedure schema; omit on the FAQ hub page. */
  procedureName?: string;
  sections: ContentSection[];
  faqs?: FaqItem[];
};

export const IMPLANT_TOPICS: Record<string, ImplantTopic> = {
  cost: {
    slug: "cost",
    navLabel: "Implant Cost",
    metaTitle: "Dental Implant Cost in Markham | Smile Dental Arts Centre",
    metaDescription:
      "How much do dental implants cost in Markham? Learn the price factors, financing and how the CDCP may help. Reviewed by Dr. Neda Kadivar, D.D.S.",
    h1: "Dental Implant Cost in Markham",
    lead: "The cost of a dental implant depends on your unique mouth — the number of teeth being replaced, whether you need bone grafting and the type of restoration. Here is an honest breakdown so you can plan with confidence.",
    procedureName: "Dental implant cost consultation",
    sections: [
      {
        heading: "What goes into the cost of a dental implant?",
        body: [
          "A complete single dental implant in Markham generally includes three parts: the titanium implant post, the abutment that connects to it, and the custom crown on top. Each part contributes to the total, and additional procedures can change the final price.",
        ],
        list: [
          "The titanium implant post placed in the jawbone",
          "The abutment connecting the post to the crown",
          "The custom crown, bridge or denture restoration",
          "3D CBCT imaging and digital surgical planning",
          "Any bone grafting or sinus lift needed beforehand",
          "Tooth extraction if a damaged tooth must be removed",
        ],
      },
      {
        heading: "Why implants are worth the investment",
        body: [
          "While implants often cost more up front than a bridge or denture, they routinely last decades — and frequently a lifetime — with proper care. Because they preserve jawbone and protect neighbouring teeth, implants usually cost less over time than repeatedly repairing or replacing other restorations.",
        ],
      },
      {
        heading: "Financing and the Canadian Dental Care Plan (CDCP)",
        body: [
          "We believe a healthy smile should be attainable. Our Markham clinic offers flexible payment options and will help you understand whether the Canadian Dental Care Plan (CDCP) or your private insurance can offset part of your treatment.",
          "Bring your insurance details to your consultation and our team will prepare a clear, written estimate before any treatment begins — no surprises.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a single dental implant cost in Markham?",
        answer:
          "The total depends on your individual needs, including whether bone grafting is required and the type of crown chosen. After a 3D scan and exam, Dr. Kadivar provides a precise, written estimate so you know the full cost before treatment begins.",
      },
      {
        question: "Does insurance or the CDCP cover dental implants?",
        answer:
          "Coverage varies by plan. Many private plans cover a portion of implant treatment, and the Canadian Dental Care Plan (CDCP) may help eligible patients. Our team will review your coverage and maximize any benefits available to you.",
      },
      {
        question: "Are payment plans available?",
        answer:
          "Yes. Smile Dental Arts Centre offers flexible financing options so you can spread the cost of treatment over time. We will discuss the choices that fit your budget at your consultation.",
      },
    ],
  },

  "single-tooth": {
    slug: "single-tooth",
    navLabel: "Single Tooth Implant",
    metaTitle: "Single Tooth Dental Implant in Markham | Smile Dental Arts",
    metaDescription:
      "Replace one missing tooth in Markham with a single dental implant and crown. Natural look, no damage to nearby teeth. Reviewed by Dr. Neda Kadivar.",
    h1: "Single Tooth Implants in Markham",
    lead: "A single tooth implant is the gold standard for replacing one missing tooth. It restores your bite and smile without grinding down the healthy teeth on either side, the way a traditional bridge does.",
    procedureName: "Single tooth dental implant",
    sections: [
      {
        heading: "How a single tooth implant works",
        body: [
          "Dr. Kadivar places a small titanium post into the jawbone where the tooth is missing. Over a healing period the bone fuses to the post (a process called osseointegration), creating a stable foundation. A custom crown, colour-matched to your natural teeth, is then attached on top.",
        ],
      },
      {
        heading: "Why choose an implant over a bridge?",
        body: [
          "A dental bridge relies on the two adjacent teeth, which must be filed down to hold it. A single implant stands on its own, preserving your healthy teeth and the jawbone beneath the gap.",
        ],
        list: [
          "Protects neighbouring teeth — nothing is ground down",
          "Prevents bone loss where the tooth is missing",
          "Cleans like a natural tooth — just brush and floss",
          "Typically lasts far longer than a bridge",
        ],
      },
      {
        heading: "Caring for your single tooth implant",
        body: [
          "An implant crown is cared for exactly like a natural tooth: brush twice daily, floss around it and keep your regular hygiene visits at our Markham clinic. With good care, single tooth implants can last a lifetime.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a single tooth implant better than a bridge?",
        answer:
          "For most patients, yes. An implant does not require altering healthy neighbouring teeth, preserves the jawbone and usually lasts much longer than a bridge.",
      },
      {
        question: "How long does a single tooth implant take?",
        answer:
          "After placement, healing typically takes a few months while the bone fuses to the implant. Once healed, the permanent crown is attached. Dr. Kadivar will give you a personalised timeline at your consultation.",
      },
    ],
  },

  "all-on-4": {
    slug: "all-on-4",
    navLabel: "All-on-4",
    metaTitle: "All-on-4 Dental Implants in Markham | Smile Dental Arts",
    metaDescription:
      "All-on-4 dental implants in Markham — a full arch of fixed teeth on just four implants, often in one day. Reviewed by Dr. Neda Kadivar, D.D.S.",
    h1: "All-on-4 Dental Implants in Markham",
    lead: "All-on-4 replaces a full arch of missing or failing teeth with a fixed, natural-looking bridge supported by just four strategically placed implants — a life-changing solution for denture wearers.",
    procedureName: "All-on-4 dental implants",
    sections: [
      {
        heading: "What is All-on-4?",
        body: [
          "All-on-4 uses four titanium implants to anchor a complete arch of fixed teeth. The back implants are angled to take advantage of available bone, which often means qualifying patients can avoid bone grafting and receive a temporary set of teeth the same day as surgery.",
        ],
      },
      {
        heading: "Benefits of All-on-4 implants",
        body: [],
        list: [
          "A full arch of fixed teeth — they never come out",
          "Often no bone graft needed thanks to angled implants",
          "Leave with temporary teeth the same day in many cases",
          "Restores full chewing power and a confident smile",
          "Stops the bone loss caused by missing teeth and dentures",
        ],
      },
      {
        heading: "Is All-on-4 right for you?",
        body: [
          "All-on-4 is ideal if you are missing most or all of your teeth, are tired of removable dentures, or have failing teeth that need to be replaced. Dr. Kadivar uses 3D imaging to confirm you are a candidate and to plan the precise position of each implant.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I really get teeth in one day with All-on-4?",
        answer:
          "Many qualifying patients receive a fixed set of temporary teeth on the day of surgery. After healing, these are replaced with your final, permanent bridge. Candidacy is confirmed with a 3D scan beforehand.",
      },
      {
        question: "Do All-on-4 implants feel like real teeth?",
        answer:
          "Yes. Because they are fixed to implants rather than resting on the gums, All-on-4 teeth are stable and let you eat and speak with confidence — unlike removable dentures.",
      },
    ],
  },

  "implant-dentures": {
    slug: "implant-dentures",
    navLabel: "Implant Dentures",
    metaTitle: "Implant-Supported Dentures in Markham | Smile Dental Arts",
    metaDescription:
      "Stop loose, painful dentures. Implant-supported dentures in Markham snap securely onto implants. Reviewed by Dr. Neda Kadivar, D.D.S.",
    h1: "Implant-Supported Dentures in Markham",
    lead: "Implant-supported dentures combine the affordability of a denture with the stability of implants. Instead of resting on your gums, they clip securely onto implants so they never slip while you eat or speak.",
    procedureName: "Implant-supported dentures",
    sections: [
      {
        heading: "Removable vs fixed implant dentures",
        body: [
          "There are two main options. A removable overdenture snaps onto two or more implants and can be taken out for cleaning. A fixed implant denture is secured permanently and only removed by your dentist. Dr. Kadivar will help you choose based on your bone, budget and lifestyle.",
        ],
      },
      {
        heading: "Why patients love implant dentures",
        body: [],
        list: [
          "No more denture adhesives or embarrassing slipping",
          "Eat the foods you love again with confidence",
          "A secure, comfortable fit that protects the jawbone",
          "Fewer implants needed than a full set of single implants",
        ],
      },
    ],
    faqs: [
      {
        question: "How many implants are needed for implant dentures?",
        answer:
          "A lower overdenture often needs just two implants, while fixed dentures usually use four or more. Dr. Kadivar determines the right number after reviewing your 3D scan.",
      },
      {
        question: "Can my existing denture be converted?",
        answer:
          "In some cases an existing, well-fitting denture can be modified to snap onto implants. We will assess this during your consultation in Markham.",
      },
    ],
  },

  "vs-dentures": {
    slug: "vs-dentures",
    navLabel: "Implants vs Dentures",
    metaTitle: "Dental Implants vs Dentures in Markham | Smile Dental Arts",
    metaDescription:
      "Dental implants vs dentures in Markham — compare comfort, cost, bone health and longevity. Reviewed by Dr. Neda Kadivar, D.D.S.",
    h1: "Dental Implants vs Dentures in Markham",
    lead: "Both dental implants and dentures replace missing teeth, but they work very differently. Understanding the trade-offs in comfort, cost and long-term health will help you make the right choice.",
    procedureName: "Dental implants versus dentures consultation",
    sections: [
      {
        heading: "Comfort and stability",
        body: [
          "Implants are fixed in the jaw, so they never move, click or slip. Traditional dentures rest on the gums and can shift while eating or speaking, sometimes requiring adhesive.",
        ],
      },
      {
        heading: "Bone health and longevity",
        body: [
          "Implants stimulate the jawbone just like natural tooth roots, preventing the bone loss that gives long-term denture wearers a sunken appearance. Dentures do not preserve bone and typically need relining or replacing over time, whereas implants can last a lifetime.",
        ],
      },
      {
        heading: "Cost over time",
        body: [
          "Dentures cost less up front, but implants are often more economical across a lifetime because they rarely need replacement. Many patients choose a hybrid solution — implant-supported dentures — to balance cost and stability.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are dental implants better than dentures?",
        answer:
          "Implants offer superior comfort, stability and bone preservation and usually last far longer. Dentures have a lower up-front cost. The best choice depends on your health, bone and budget, which Dr. Kadivar will review with you.",
      },
      {
        question: "Can I switch from dentures to implants?",
        answer:
          "Yes. Many long-time denture wearers move to implants or implant-supported dentures. A 3D scan will show whether you have enough bone or would benefit from grafting first.",
      },
    ],
  },

  "same-day": {
    slug: "same-day",
    navLabel: "Same-Day Implants",
    metaTitle: "Same-Day Dental Implants in Markham | Smile Dental Arts",
    metaDescription:
      "Same-day dental implants in Markham let qualifying patients leave with teeth the same day. Reviewed by Dr. Neda Kadivar, D.D.S.",
    h1: "Same-Day Dental Implants in Markham",
    lead: "Same-day (immediate-load) implants allow qualifying patients to receive a temporary tooth or arch on the same day as implant surgery — so you never have to leave with a gap in your smile.",
    procedureName: "Same-day dental implants",
    sections: [
      {
        heading: "How same-day implants work",
        body: [
          "When you have enough healthy bone and the implant achieves strong initial stability, Dr. Kadivar can attach a temporary restoration immediately after placement. The implant continues to heal beneath it, and a permanent crown or bridge is fitted once integration is complete.",
        ],
      },
      {
        heading: "Who is a candidate?",
        body: [
          "Same-day implants are not right for everyone. Good candidates have adequate bone density and healthy gums, and do not smoke heavily. A 3D CBCT scan during your consultation confirms whether immediate loading is safe for you.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will the same-day tooth be my final tooth?",
        answer:
          "No. The same-day restoration is a temporary that protects the implant while it heals. Your final, permanent crown or bridge is placed after the implant has fully fused with the bone.",
      },
      {
        question: "Is everyone a candidate for same-day implants?",
        answer:
          "Not always. Sufficient bone, healthy gums and strong implant stability are required. Dr. Kadivar uses a 3D scan to determine whether you qualify.",
      },
    ],
  },

  "bone-grafting": {
    slug: "bone-grafting",
    navLabel: "Bone Grafting",
    metaTitle: "Dental Bone Grafting in Markham | Smile Dental Arts Centre",
    metaDescription:
      "Bone grafting in Markham rebuilds jawbone so it can support a dental implant. Reviewed by Dr. Neda Kadivar, D.D.S., 20+ years experience.",
    h1: "Bone Grafting for Dental Implants in Markham",
    lead: "When a tooth has been missing for a while, the jawbone shrinks. Bone grafting rebuilds that lost bone so it can securely hold a dental implant — making implants possible for many patients who were once told they had too little bone.",
    procedureName: "Dental bone grafting",
    sections: [
      {
        heading: "Why bone grafting may be needed",
        body: [
          "Bone needs stimulation from tooth roots to stay strong. After tooth loss, gum disease or injury, the bone in that area gradually resorbs. If there is not enough healthy bone, an implant cannot be placed securely — a graft restores the foundation.",
        ],
      },
      {
        heading: "What to expect from the procedure",
        body: [
          "Dr. Kadivar places grafting material into the deficient area, where it acts as a scaffold for your body to build new bone. After a healing period, the site is strong enough to support an implant. The procedure is performed gently with local anaesthetic and sedation options for comfort.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does bone grafting hurt?",
        answer:
          "The procedure is performed under local anaesthetic, so you should not feel pain during treatment. Mild soreness afterward is normal and easily managed with the aftercare instructions we provide.",
      },
      {
        question: "How long after a bone graft can I get an implant?",
        answer:
          "Healing typically takes several months to allow new bone to mature. Dr. Kadivar will confirm the right timing for your implant with a follow-up scan.",
      },
    ],
  },

  "sinus-lift": {
    slug: "sinus-lift",
    navLabel: "Sinus Lift",
    metaTitle: "Sinus Lift Surgery in Markham | Smile Dental Arts Centre",
    metaDescription:
      "A sinus lift adds bone to the upper jaw so implants can be placed safely near the sinus. Reviewed by Dr. Neda Kadivar, D.D.S., in Markham.",
    h1: "Sinus Lift Surgery in Markham",
    lead: "A sinus lift adds bone height to the upper back jaw, where the sinus cavity often sits too low for implants. This procedure makes implants possible for patients who have lost bone in the upper molar area.",
    procedureName: "Sinus lift surgery",
    sections: [
      {
        heading: "Why a sinus lift is needed",
        body: [
          "The upper back jaw frequently has the least bone and is closest to the maxillary sinuses. After tooth loss in this region, there may not be enough vertical bone to anchor an implant. A sinus lift gently raises the sinus membrane and adds grafting material to create room for new bone.",
        ],
      },
      {
        heading: "The sinus lift procedure",
        body: [
          "Using detailed 3D imaging to map your anatomy, Dr. Kadivar accesses the sinus floor, lifts the membrane and places graft material beneath it. After the area heals and new bone forms, implants can be placed securely in the upper jaw.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a sinus lift safe?",
        answer:
          "Yes. With careful 3D planning and an experienced surgeon, sinus lifts are a safe, routine and predictable procedure. Dr. Kadivar has performed implant surgery for over 20 years.",
      },
      {
        question: "Can the implant be placed at the same time as the sinus lift?",
        answer:
          "Sometimes. If enough existing bone is present, the implant may be placed during the sinus lift. Otherwise the area heals first. Your 3D scan determines the best approach.",
      },
    ],
  },

  procedure: {
    slug: "procedure",
    navLabel: "Implant Procedure",
    metaTitle: "Dental Implant Procedure in Markham | Step-by-Step Guide",
    metaDescription:
      "What to expect from the dental implant procedure in Markham — consultation, placement, healing and final crown. Reviewed by Dr. Neda Kadivar, D.D.S.",
    h1: "The Dental Implant Procedure in Markham",
    lead: "Getting a dental implant is a carefully planned, step-by-step process. Knowing what happens at each stage helps you feel calm and confident from your first consultation to your finished smile.",
    procedureName: "Dental implant procedure",
    sections: [
      {
        heading: "Step 1 — Consultation and 3D planning",
        body: [
          "Your journey begins with an exam and a 3D CBCT scan. Dr. Kadivar reviews your bone, gums and overall health, answers your questions and creates a personalised treatment plan with a clear written estimate.",
        ],
      },
      {
        heading: "Step 2 — Implant placement",
        body: [
          "The titanium implant is gently placed into the jawbone under local anaesthetic, with sedation available for comfort. Most patients are surprised by how straightforward and comfortable the appointment is.",
        ],
      },
      {
        heading: "Step 3 — Healing and osseointegration",
        body: [
          "Over the following weeks the bone naturally fuses to the implant, creating a rock-solid foundation. A temporary restoration can often be worn during this period so you are never without a tooth.",
        ],
      },
      {
        heading: "Step 4 — Final restoration",
        body: [
          "Once healed, your custom crown, bridge or denture is attached and adjusted for a perfect, natural-looking fit. You leave with a complete, confident smile and instructions to keep it healthy for life.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is the dental implant procedure painful?",
        answer:
          "Placement is done under local anaesthetic, so you should not feel pain during the procedure. Most patients report only mild soreness afterward, similar to a routine extraction, which is easily managed.",
      },
      {
        question: "How long does the whole implant process take?",
        answer:
          "From placement to the final crown typically spans a few months to allow for healing, though same-day options exist for qualifying patients. Dr. Kadivar provides a personalised timeline at your consultation.",
      },
    ],
  },

  faq: {
    slug: "faq",
    navLabel: "Implant FAQ",
    metaTitle: "Dental Implant FAQ in Markham | Smile Dental Arts Centre",
    metaDescription:
      "Common questions about dental implants in Markham answered by Dr. Neda Kadivar, D.D.S. — cost, pain, success rates, healing and candidacy.",
    h1: "Dental Implant FAQ — Markham",
    lead: "Answers to the questions our Markham patients ask most about dental implants. Still unsure? Dr. Neda Kadivar is happy to answer your questions at a personal consultation.",
    sections: [],
    faqs: [
      {
        question: "Are dental implants safe?",
        answer:
          "Yes. Dental implants are one of the most researched and successful procedures in modern dentistry, with success rates above 95%. Dr. Kadivar has placed implants for over 20 years using advanced 3D planning for safety and precision.",
      },
      {
        question: "How long do dental implants last?",
        answer:
          "With good oral hygiene and regular check-ups, dental implants can last a lifetime. The crown on top may eventually need replacement after many years of use, but the implant itself is designed to be permanent.",
      },
      {
        question: "Am I a candidate for dental implants?",
        answer:
          "Most healthy adults with one or more missing teeth are candidates. Even patients with bone loss can often qualify after bone grafting or a sinus lift. A 3D scan and exam confirm your candidacy.",
      },
      {
        question: "Does getting an implant hurt?",
        answer:
          "Implant placement is performed under local anaesthetic with sedation options available, so the procedure is comfortable. Mild post-operative soreness is normal and easily managed.",
      },
      {
        question: "How much do dental implants cost in Markham?",
        answer:
          "Cost depends on the number of implants, the restoration type and whether grafting is needed. We provide a clear written estimate after your scan, and our team will review insurance and CDCP coverage with you.",
      },
      {
        question: "How do I care for my dental implant?",
        answer:
          "Care for an implant just like a natural tooth: brush twice a day, floss daily and keep your regular hygiene visits at our Markham clinic. Good care is the key to a lifetime of service from your implant.",
      },
    ],
  },
};

export function getImplantTopic(slug: string): ImplantTopic | null {
  return IMPLANT_TOPICS[slug] ?? null;
}

export function getAllImplantTopicSlugs(): string[] {
  return Object.keys(IMPLANT_TOPICS);
}
