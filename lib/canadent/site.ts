export const SITE_URL = "https://canadent.net";

export const SITE = {
  name: "CanaDent",
  legalName: "CanaDent Education Center",
  tagline: "Inspired by excellence & innovation",
  description:
    "CanaDent Education Center helps dentists revisit, retrain, and optimize their knowledge through practical seminars and theoretical classes in North York, Ontario.",
  email: "canadent.edu@gmail.com",
  emailHref: "mailto:canadent.edu@gmail.com",
  phone: "",
  address: "265 Rimrock Road, Units 209, North York, ON, M3J 3A6, Canada",
  addressHref:
    "https://www.google.com/maps/search/?api=1&query=265+Rimrock+Road+Units+209+North+York+ON+M3J+3A6",
  hours: ["Monday – Friday: 10:00 AM – 4:00 PM"],
  doctorsServed: "500+",
  logo: "/canadent/logo.png",
  brandMark: "/canadent/brand-mark.png",
  heroImage: "/canadent/hero/education-hall.jpg",
  ogImage: "/canadent/logo-og.png",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Conferences", href: "/conferences" },
  { label: "Contact", href: "/contact" },
] as const;

export const HOME = {
  heroBrand: "CanaDent",
  heroHeadline: "Inspired by excellence & innovation",
  heroSupport:
    "High-quality teaching and hands-on programs for dentists who want to keep sharpening their clinical edge.",
  primaryCta: { label: "View courses", href: "/courses" },
  secondaryCta: { label: "Apply now", href: "/apply" },
  whyTitle: "Why choose CanaDent?",
  whyBody:
    "CanaDent Education Center services allow dentists to revisit, retrain, and optimize their knowledge and experience. We achieve these goals by updating dental information of dentists and dental associates through our various practical seminars and theoretical classes.",
  facilitiesTitle: "World-class facilities",
  facilitiesBody:
    "Our North York education centre is devoted to excellence in teaching, learning, and research — with practical spaces designed for clinical training.",
  valuesTitle: "Our values",
  mission: {
    title: "Our mission",
    body: "Our goal is to create a huge network that extends education to all levels and degrees of dentistry, thereby improving the quality of oral health in the community.",
  },
  vision: {
    title: "Our vision",
    body: "Today is tomorrow’s community health education. Extensive education at all levels of dentistry and in all its disciplines leads to beneficial changes in the health, prevention, and treatment of community dental problems.",
  },
  services: {
    title: "Our services",
    body: "Providing theoretical and clinical training from the beginning to the top level.",
  },
  pillars: ["Ultimate training", "Practical progress", "A stronger collective"],
  joinTitle: "Join over 500 doctors taking advantage of CanaDent",
  joinBody: "Become part of CanaDent to further your career.",
  joinCta: { label: "Apply now", href: "/apply" },
} as const;

export const ABOUT = {
  title: "About us",
  headline: "We are a registered dental education corporation",
  body: "Our company (CanaDent Education Center Corp.) services allow dentists to revisit, retrain, and optimize their knowledge and experience. We achieve these goals by updating dental information of dentists and dental associates through our various practical seminars and theoretical classes.",
} as const;
