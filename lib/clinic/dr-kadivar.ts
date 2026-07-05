import { CLINIC } from "@/lib/clinic/content";

export const DR_KADIVAR_IMAGES = {
  portrait: "/clinic/team/dr-kadivar-portrait.png",
  secondary: "/clinic/team/dr-kadivar-secondary.png",
} as const;

export const DR_KADIVAR_AFFILIATIONS = [
  {
    name: "Ontario Dental Association",
    abbr: "ODA",
    href: CLINIC.external.oda,
  },
  {
    name: "Royal College of Dental Surgeons of Ontario",
    abbr: "RCDSO",
    href: CLINIC.external.rcdso,
  },
  {
    name: "Canadian Dental Association",
    abbr: "CDA",
    href: CLINIC.external.cda,
  },
] as const;

export const DR_KADIVAR_OFFICE_IMAGES = [
  { src: "/clinic/office/office-1.png", alt: "Dental treatment room with chair and wall-mounted TV" },
  { src: "/clinic/office/office-2.png", alt: "Reception and waiting area at Smile Dental Arts Centre" },
  { src: "/clinic/office/office-3.png", alt: "Modern dental treatment room with equipment and cabinets" },
  { src: "/clinic/office/office-4.png", alt: "Bright clinic hallway with treatment rooms" },
  { src: "/clinic/office/office-5.png", alt: "Consultation room with monitor showing dental scans" },
  { src: "/clinic/office/office-6.png", alt: "Sterilization and equipment area" },
  { src: "/clinic/office/office-7.png", alt: "Patient lounge with coffee station" },
  { src: "/clinic/office/office-8.png", alt: "Treatment room with large window and modern equipment" },
] as const;

export const DR_KADIVAR_MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11510.983419550364!2d-79.3218648!3d43.8403673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d46853cf8b83%3A0xdffc1822350e065c!2sSmile%20Dental%20Arts%20Centre!5e0!3m2!1sen!2s!4v1688889447872!5m2!1sen!2s";
