export const CLINIC = {
  name: "Smile Dental Arts Centre",
  tagline: "Dentist in Markham – Family & Cosmetic Dental Care",
  phone: "+1 (905) 604-7330",
  phoneHref: "tel:+19056047330",
  email: "info@smiledentalartscentre.com",
  address: "3980 14th Ave #6, Markham, ON L3R 0B1, Canada",
  addressHref:
    "https://www.google.com/maps/search/?api=1&query=3980+14th+Ave+%236+Markham+ON+L3R+0B1",
  hours: [
    "Monday–Friday: 9:30 AM – 7:00 PM",
    "Saturday: 9:00 AM – 4:00 PM (every other week)",
    "Sunday: Closed",
  ],
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100069286303192",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  pages: {
    services: "/dental-services",
    cdcp: "/canadian-dental-care-plan-cdcp",
    drKadivar: "/about-us/dr-neda-kadivar",
    team: "/about-us",
    faq: "/dental-faq-guide",
    gallery: "/gallery",
    contact: "/contact-us",
    appointments: "/appointments",
    blog: "/blog",
    news: "/news",
  },
  external: {
    rcdso: "https://www.rcdso.org/",
    oda: "https://www.oda.ca/",
    cda: "https://www.cda-adc.ca/",
    review: "https://g.page/r/",
  },
} as const;

export const HERO_SLIDES = [
  {
    image: "/clinic/hero-dr.jpg",
    eyebrow: "ONLY ONE KIND OF TREATEMENT",
    title: "YOUR NEW SMILE",
    ctaTitle: "Plan Your Visit Now",
    ctaSubtitle: "Begin the Change",
    ctaLabel: "Book Now!",
  },
  {
    image: "/clinic/hero-team.jpg",
    eyebrow: "EXPERT CARE IN MARKHAM",
    title: "YOUR DENTAL TEAM",
    ctaTitle: "Plan Your Visit Now",
    ctaSubtitle: "Begin the Change",
    ctaLabel: "Book Now!",
  },
  {
    image: "/clinic/hero-invisalign.jpg",
    eyebrow: "DISCREET ORTHODONTICS",
    title: "INVISALIGN®",
    ctaTitle: "Plan Your Visit Now",
    ctaSubtitle: "Begin the Change",
    ctaLabel: "Book Now!",
  },
  {
    image: "/clinic/hero-office.jpg",
    eyebrow: "MODERN DENTISTRY",
    title: "WELCOME HOME",
    ctaTitle: "Plan Your Visit Now",
    ctaSubtitle: "Begin the Change",
    ctaLabel: "Book Now!",
  },
  {
    image: "/clinic/hero-smile.jpg",
    eyebrow: "CONFIDENT SMILES",
    title: "COSMETIC CARE",
    ctaTitle: "Plan Your Visit Now",
    ctaSubtitle: "Begin the Change",
    ctaLabel: "Book Now!",
  },
] as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: CLINIC.pages.team,
    children: [
      { label: "Dr Neda Kadivar", href: CLINIC.pages.drKadivar },
      { label: "Our Team", href: CLINIC.pages.team },
      { label: "Gallery", href: CLINIC.pages.gallery },
      { label: "FAQ", href: CLINIC.pages.faq },
    ],
  },
  { label: "CDCP", href: CLINIC.pages.cdcp },
  { label: "Dental Services", href: CLINIC.pages.services },
  { label: "Contact Us", href: CLINIC.pages.contact },
  { label: "Appointment Request", href: CLINIC.pages.appointments },
] as const;

export const HIGHLIGHT_SERVICES = [
  {
    title: "Invisalign® Clear Aligners in Markham",
    description:
      "Achieve a straighter smile with Invisalign clear aligners. Invisalign is a discreet and comfortable orthodontic solution provided by our experienced dentist in Markham for teens and adults.",
  },
  {
    title: "Dental Implants",
    description:
      "Replace missing teeth permanently with dental implants that look, feel, and function like natural teeth. Our dentist in Markham provides implant solutions designed for long-term success.",
  },
  {
    title: "Root Canal Therapy",
    description:
      "Root canal therapy helps eliminate infection and relieve dental pain while preserving your natural tooth. Our clinic uses modern techniques to ensure comfort and efficiency.",
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional teeth whitening brightens your smile safely and effectively, producing results far superior to over-the-counter options.",
  },
  {
    title: "Dental Fillings & Restorative Dentistry",
    description:
      "We offer tooth-colored dental fillings and restorative treatments to repair cavities and protect your long-term oral health.",
  },
] as const;

export const WHY_CHOOSE = [
  "Personalized treatment planning for every patient",
  "Modern dental technology and sterilization protocols",
  "Comfortable, family-friendly dental environment",
  "Clear communication and transparent recommendations",
  "Commitment to long-term oral health, not just short-term fixes",
] as const;

export const SERVICE_CARDS = [
  {
    title: "Cleanings & Prevention",
    href: "/dental-services/cleanings-prevention",
    description:
      "Regular cleaning & prevention of teeth in order to support and protect oral health, ensure a beautiful smile and prevent dental problems.",
    image: "https://smiledentalartscentre.com/wp-content/uploads/2023/09/1.webp",
  },
  {
    title: "Cosmetic Dentistry",
    href: "/dental-services/cosmetic-dentistry",
    description:
      "Cosmetic dentistry focuses on enhancing the appearance of a person's teeth, gums, and smile through various procedures and treatment.",
    image: "https://smiledentalartscentre.com/wp-content/uploads/2023/09/3.webp",
  },
  {
    title: "Restorations",
    href: "/dental-services/restorations",
    description:
      "Dental restorations include repairing or replacing damaged or missing teeth to restore the function and appearance of those teeth.",
    image: "https://smiledentalartscentre.com/wp-content/uploads/2023/09/6.webp",
  },
  {
    title: "Invisalign®",
    href: "/dental-services/invisalign-in-markham",
    description:
      "Transform your smile discreetly with Invisalign's clear aligners the modern, comfortable way to achieve the perfect smile you've always wanted.",
    image: "https://smiledentalartscentre.com/wp-content/uploads/2023/10/Invisalign-scaled.jpg",
  },
  {
    title: "Oral Surgery",
    href: "/dental-services/oral-surgery",
    description:
      "Oral surgery in dentistry involves surgical procedures that address complex dental issues, such as tooth extraction, dental implant placement, jaw surgery, and the treatment of oral diseases.",
    image: "https://smiledentalartscentre.com/wp-content/uploads/2023/09/9.jpg",
  },
  {
    title: "Endodontics",
    href: "/dental-services/endodontics",
    description:
      "Endodontics aims to save and maintain natural teeth whenever possible, focusing on diagnosing and treating issues related to the dental pulp and the tissues surrounding the roots of teeth.",
    image: "https://smiledentalartscentre.com/wp-content/uploads/2023/10/Endo-4.webp",
  },
  {
    title: "Dental Emergencies",
    href: "/dental-services/dental-emergencies",
    description:
      "If you or a family member is facing a dental emergency, please reach out to us without delay. Our team is here to provide the prompt attention and care you need to safeguard your oral health.",
    image: "https://smiledentalartscentre.com/wp-content/uploads/2023/09/10.webp",
  },
  {
    title: "Periodontics",
    href: "/dental-services/periodontics",
    description:
      "Uncover healthy gums and a confident smile with periodontics. Our specialized care prioritizes gum disease prevention, diagnosis, and treatment, ensuring optimal oral health.",
    image: "https://smiledentalartscentre.com/wp-content/uploads/2023/09/DMO15832.jpg",
  },
] as const;

export const SERVICE_ICONS = [
  { label: "WHITENING", slug: "whitening", href: "/dental-services/cosmetic-dentistry/zoom-teeth-whitening" },
  { label: "PREVENTION", slug: "prevention", href: "/dental-services/cleanings-prevention" },
  { label: "Implants", slug: "implants", href: "/dental-services/cosmetic-dentistry/dental-implants" },
  { label: "Emergencies", slug: "emergencies", href: "/dental-services/dental-emergencies" },
  { label: "X-Rays", slug: "x-rays", href: "/dental-services/cleanings-prevention/dental-digital-x-rays" },
  { label: "Endodontics", slug: "endodontics", href: "/dental-services/endodontics" },
  { label: "Composite", slug: "composite", href: "/dental-services/restorations/composite-fillings" },
  { label: "Periodontics", slug: "periodontics", href: "/dental-services/periodontics" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Joseph Ghobrial",
    quote:
      "Experience was great, it's very clean and professional. Staff treated me like family and it was a comfortable environment.",
  },
  {
    name: "bahar sohrabi",
    quote:
      "The best and very kind dentist and very knowledgeable toddy I had cleaning with their hygienist so I'm so happy",
  },
  {
    name: "Jamshid Mojaver",
    quote:
      "This office is very clean with professional and caring team. I am satisfied attending to this office. Highly recommended.",
  },
  {
    name: "Mozhgan Gharasou",
    quote:
      "Dr. Neda and her team are the best, the office space is quiet and clean, and I recommend this office for treatment and oral health.",
  },
  {
    name: "Nikoo Ghafourian",
    quote:
      "Dr.Kadivar and her team are so nice and caring. She knows how to treat with patient. I really suggest this clinic.",
  },
] as const;

export const FOOTER_LINKS = {
  about: [
    { label: "Dr Neda Kadivar", href: CLINIC.pages.drKadivar },
    { label: "Our Team", href: CLINIC.pages.team },
    { label: "FAQ", href: CLINIC.pages.faq },
  ],
  services: [
    { label: "Dental Implants in Markham", href: "/dental-implants" },
    { label: "Cleanings & Prevention", href: "/dental-services/cleanings-prevention" },
    { label: "Cosmetic Dentistry", href: "/dental-services/cosmetic-dentistry" },
    { label: "Restorations", href: "/dental-services/restorations" },
    { label: "CDCP", href: CLINIC.pages.cdcp },
    { label: "All Services", href: CLINIC.pages.services },
  ],
} as const;
