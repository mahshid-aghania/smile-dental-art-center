import { CLINIC } from "@/lib/clinic/content";
import {
  DR_KADIVAR_AFFILIATIONS,
  DR_KADIVAR_MAP_EMBED,
  DR_KADIVAR_OFFICE_IMAGES,
} from "@/lib/clinic/dr-kadivar";

const UPLOADS = "https://smiledentalartscentre.com/wp-content/uploads";

export const ABOUT_US_IMAGES = {
  clinicExterior: `${UPLOADS}/2023/11/About2.jpg`,
  clinicBanner: `${UPLOADS}/2023/10/opt-DMO15779.jpg`,
} as const;

export const ABOUT_US_INTRO = {
  subtitle: "We are conveniently located in the heart of Markham, Ontario",
  paragraphs: [
    "At Smile Dental Arts Centre we strive to provide our patients with every dental service in one location in the heart of Markham Area using the latest in technological advancements to achieve the highest level of satisfaction.",
    "We make every effort to provide you with the latest and greatest treatment options. At Smile Dental Arts Centre you will feel welcomed in an environment that was designed with comfort in mind.",
    "Each dental professional in our office was selected because of their dedication to providing quality patient care through advanced skills and experience.",
    "All of the staff at Smile Dental Arts Centre have the proficiency and unique ability to provide you with all of your dental options and strive to cater to your individual needs.",
    "Ready to redefine your smile? Schedule your consultation now at Smile Dental Arts Centre, Your One of the best Markham Dental practices!",
  ],
} as const;

export const ABOUT_US_AFFILIATIONS = [
  {
    name: "Ontario Dental Assistants Association (ODAA)",
    description:
      "the certifying and membership body supporting Ontario dental assistants as regulated healthcare professionals.",
    href: "https://odaa.org/",
  },
  {
    name: "Canadian Dental Association (CDA)",
    description:
      "the national voice for dentistry in Canada, promoting optimal oral health and supporting evidence‑based dental care.",
    href: CLINIC.external.cda,
  },
  {
    name: "Royal College of Dental Surgeons of Ontario (RCDSO)",
    description:
      "the regulatory body that licenses dentists in Ontario and sets professional standards to protect the public.",
    href: CLINIC.external.rcdso,
  },
] as const;

export const ABOUT_US_DENTISTS = [
  {
    id: "dr-neda-kadivar",
    name: "Dr. Neda Kadivar, D.D.S",
    image: `${UPLOADS}/2023/10/Dr-Neda-1-1.jpeg`,
    alt: "Dr. Neda Kadivar, dentist in Markham",
    href: CLINIC.pages.drKadivar,
    paragraphs: [
      "Dr. Neda Kadivar is an experienced dentist who obtained her Doctoral of Dental Surgeon (D.D.S) from the prestigious Mashad University of Medical Sciences. After graduation, she maximized her skills by observing and working with top dental professionals and specialists over the next 7 years before opening her own practice in Iran. Dr Neda was operating a successful dental office for years and has been a recognized professional in dentistry.",
      "After moving to Canada with having rich and valuable clinical experience , she successfully completed the National Dental Examining Board exams in 2014 in first attempt with high scores. Since then she has stayed active in practicing dentistry in several dental offices in Toronto . Dr.Neda started her own practice in order to provide quality and compassionate dental care to her patients.",
      "She has a passion for improving her patients' oral health, smile and confidence through exceptional dental services. Her practice philosophy is based on mutual trust, respect, and openness. She always looks forward to meeting new patients and values long term relationship with them while simultaneously helping them achieve the highest standards of care.",
      "Dr. Neda is proficient in all aspects of dentistry not limited to root canal treatment, Crown and Bridge and Denture, restoration, and cosmetic dentistry, Invisalign and delivers high quality treatment using technological advancements. She always stays up to date regarding advanced techniques and materials in modern dentistry by regularly attending dental seminars and courses which helps her to offer tailored care with more predictable results.",
      "Her dedication to continuing education is reflected in her involvement and teaching in \"ConfiDentist Group Corp\" which is a professional training center that prepares internationally trained dentists on their quest to succeed in satisfying the requirements to obtain their Canadian licensing. Dr. Kadivar is also an active member of the Royal College of Dental Surgeons of Ontario, the Ontario Dental Association, the Academy of General Dentistry, the Iranian Ontario Dental Association, Medical Council of Iran, and the Iranian Dental Association.",
      "Besides to dentistry and teaching, Dr Neda strives to stay active in community by supporting Tirgan Festival since 2017.",
    ],
  },
  {
    id: "dr-nemati",
    name: "Dr. Hamed Nemati Rezvani,D.D.S",
    image: `${UPLOADS}/2023/09/IMG_0358.jpg`,
    alt: "Dr. Hamed Nemati Rezvani, D.D.S",
    paragraphs: [
      "Dr. Hamed Nemati, an experienced internationally trained Oral and Maxillofacial Surgeon, has studied in Iran where he graduated in 2002 the Doctor of Dental Surgery program and then in 2014 the Oral and Maxillofacial Surgery specialty program. As an Assistant Professor (Sep 2014 – Sep 2018), he tought dental students and OMFS residents, supervised their practices and some of their research projects and performed various major hospital based maxillofacial surgeries (e.g. trauma, corrective jaw surgeries, pathology) and minor office based oral surgeries (e.g. impacted teeth, advanced implant surgeries and oral reconstruction surgeries).",
      "In Jan 2019, he became a licensed dentist in Ontario by participating in NDEB Equivalency program and has limited his practice to on-site oral surgery for the time being.In Jan 2020, he started an advanced program in orofacial pain management with University of Toronto.",
    ],
  },
  {
    id: "dr-sam",
    name: "Dr. Sam Barsoum,D.D.S",
    image: `${UPLOADS}/2023/09/DMO15769-1.jpg`,
    alt: "Dr. Sam Barsoum, D.D.S",
    paragraphs: [
      "At a young age Dr. Barsoum was drawn to the field of dentistry. In pursuit of his dreams he attended the University of Alexandria and received his Bachelor of Dental Surgery.",
      "He continued his education and graduated from the University of Toronto with a Doctor of Dental Surgery. To further his skill set and in pursuit of excellence he then attended UCLA for advanced crown and bridge certification.",
      "Dr. Barsoum is an advocate of higher learning and is constantly searching for ways to increase his knowledge base. He has attended countless courses on many aspects of dentistry but has a special interest in implant and cosmetic dentistry.",
      "This focus has led him to become a member of the implant study club for over ten years.",
      "Dr. Barsoum is a very valuable dental surgeon at Smile Dental Arts Centre and has over thirty years of experience.",
      "Aside from his love of dentistry, he speaks four languages and has a special ear for music.",
      "His dedication to excel at all he loves is what sets him apart.",
    ],
  },
] as const;

export const ABOUT_US_TEAM = [
  {
    name: "Yalda",
    role: "Dental Assistant",
    image: `${UPLOADS}/2023/10/7.jpg`,
    alt: "Yalda, dental assistant at Smile Dental Arts Centre",
  },
  {
    name: "Mozhgan",
    role: "Dental Assistant",
    image: `${UPLOADS}/2023/10/8.jpg`,
    alt: "Mozhgan, dental assistant at Smile Dental Arts Centre",
  },
  {
    name: "Zohreh",
    role: "Dental Hygienist",
    image: `${UPLOADS}/2023/10/1.jpg`,
    alt: "Zohreh, dental hygienist at Smile Dental Arts Centre",
  },
  {
    name: "Ghada",
    role: "Dental Hygienist",
    image: `${UPLOADS}/2023/10/5.jpg`,
    alt: "Ghada, dental hygienist at Smile Dental Arts Centre",
  },
  {
    name: "Rhoda",
    role: "Office Admin",
    image: `${UPLOADS}/2023/10/6.jpg`,
    alt: "Rhoda, office admin at Smile Dental Arts Centre",
  },
  {
    name: "Fatemeh",
    role: "Office Admin",
    image: `${UPLOADS}/2023/10/4.jpg`,
    alt: "Fatemeh, office admin at Smile Dental Arts Centre",
  },
] as const;

export const ABOUT_US_TEAM_EMAIL = "smiledentalart@rogers.com";

export { DR_KADIVAR_AFFILIATIONS, DR_KADIVAR_OFFICE_IMAGES, DR_KADIVAR_MAP_EMBED };
