import { CLINIC } from "@/lib/clinic/content";

const UPLOADS = "https://smiledentalartscentre.com/wp-content/uploads";

export const DR_KADIVAR_IMAGES = {
  portrait: `${UPLOADS}/2023/10/Dr-Neda-1-1.jpeg`,
  secondary: `${UPLOADS}/2025/04/IMG_1803-2.jpg`,
} as const;

export const DR_KADIVAR_AFFILIATIONS = [
  {
    name: "Ontario Dental Association",
    image: `${UPLOADS}/2023/09/ODA-8.37.52-PM-300x141-1.png`,
    href: CLINIC.external.oda,
  },
  {
    name: "Royal College of Dental Surgeons of Ontario",
    image: `${UPLOADS}/2023/09/Royal-College-300x99-2.png`,
    href: CLINIC.external.rcdso,
  },
  {
    name: "Canadian Dental Association",
    image: `${UPLOADS}/2023/09/CDA-1-300x188-1.png`,
    href: CLINIC.external.cda,
  },
] as const;

export const DR_KADIVAR_OFFICE_IMAGES = [
  { src: `${UPLOADS}/2023/09/DMO15904.jpg`, alt: "Dental clinic red unit with TV" },
  { src: `${UPLOADS}/2023/09/DMO15892.jpg`, alt: "Appointment area at Smile Dental Arts Centre" },
  { src: `${UPLOADS}/2023/09/DMO15883-1.jpg`, alt: "Smile Dental Arts Centre kitchen" },
  { src: `${UPLOADS}/2023/09/DMO15880-1.jpg`, alt: "Smile Dental Arts clinic unit" },
  { src: `${UPLOADS}/2023/09/DMO15872.jpg`, alt: "Smile Dental Arts clinic unit" },
  { src: `${UPLOADS}/2023/09/DMO15871-2.jpg`, alt: "Canadian Dental Care Plan information at Smile Dental Arts Centre" },
  { src: `${UPLOADS}/2023/09/DMO15870-1.jpg`, alt: "Smile Dental Arts Centre unit" },
  { src: `${UPLOADS}/2023/09/DMO15869.jpg`, alt: "Smile Dental Arts Centre unit" },
  { src: `${UPLOADS}/2023/09/DMO15868.jpg`, alt: "Smile Dental Arts Centre unit" },
  { src: `${UPLOADS}/2023/09/DMO15866.jpg`, alt: "Smile Dental Arts Centre unit" },
  { src: `${UPLOADS}/2023/09/DMO15827.jpg`, alt: "Smile Dental Arts clinic unit" },
  { src: `${UPLOADS}/2023/09/DMO15822-1.jpg`, alt: "Smile Dental Arts Centre waiting room" },
] as const;

export const DR_KADIVAR_MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11510.983419550364!2d-79.3218648!3d43.8403673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d46853cf8b83%3A0xdffc1822350e065c!2sSmile%20Dental%20Arts%20Centre!5e0!3m2!1sen!2s!4v1688889447872!5m2!1sen!2s";
