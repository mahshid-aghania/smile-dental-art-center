export type ServiceNavItem = {
  label: string;
  href: string;
  children?: readonly ServiceNavItem[];
};

/** Dental Services dropdown — matches smiledentalartscentre.com navigation. */
export const SERVICE_NAV_ITEMS: readonly ServiceNavItem[] = [
  {
    label: "Cleanings & Prevention",
    href: "/dental-services/cleanings-prevention",
    children: [
      { label: "Complete Oral Exam", href: "/dental-services/cleanings-prevention/complete-oral-exam-cleanings" },
      { label: "Cleanings", href: "/dental-services/cleanings-prevention" },
      { label: "Dental Digital X-Rays", href: "/dental-services/cleanings-prevention/dental-digital-x-rays" },
      { label: "Panoramic X-rays", href: "/dental-services/cleanings-prevention/panoramic-x-rays" },
      { label: "Fissure sealants", href: "/dental-services/cleanings-prevention/fissure-sealants" },
      { label: "Fluoride treatment", href: "/dental-services/cleanings-prevention/fluoride-treatment" },
      { label: "Oral Hygiene and diet instruction", href: "/dental-services/cleanings-prevention/oral-hygiene-and-diet-instruction" },
    ],
  },
  {
    label: "Cosmetic Dentistry",
    href: "/dental-services/cosmetic-dentistry",
    children: [
      { label: "Composite Veneers", href: "/dental-services/cosmetic-dentistry/composite-veneers" },
      { label: "Porcelain Veneers", href: "/dental-services/cosmetic-dentistry/porcelain-veneers" },
      { label: "Bonding", href: "/dental-services/cosmetic-dentistry/bonding" },
      { label: "Dental Implants", href: "/dental-services/cosmetic-dentistry/dental-implants" },
      { label: "Empress Restorations", href: "/dental-services/cosmetic-dentistry/empress-restorations" },
      { label: "LUMINEERS", href: "/dental-services/cosmetic-dentistry/lumineers" },
      { label: "Porcelain Crowns (Caps)", href: "/dental-services/cosmetic-dentistry/porcelain-crowns-caps" },
      { label: "Porcelain Fixed Bridges", href: "/dental-services/cosmetic-dentistry/porcelain-fixed-bridges" },
      { label: "Porcelain Inlays", href: "/dental-services/cosmetic-dentistry/porcelain-inlays" },
      { label: "Porcelain Onlays", href: "/dental-services/cosmetic-dentistry/porcelain-onlays" },
      { label: "Teeth Alignment", href: "/dental-services/cosmetic-dentistry/teeth-alignment" },
      { label: "Zoom Teeth Whitening", href: "/dental-services/cosmetic-dentistry/zoom-teeth-whitening" },
    ],
  },
  {
    label: "Restorations",
    href: "/dental-services/restorations",
    children: [
      { label: "Air abrasion", href: "/dental-services/restorations/air-abrasion" },
      { label: "Amalgam Fillings", href: "/dental-services/restorations/amalgam-fillings" },
      { label: "Composite Fillings", href: "/dental-services/restorations/composite-fillings" },
      { label: "Crowns (Caps)", href: "/dental-services/restorations/crowns-caps" },
      { label: "Dentures & Partial Dentures", href: "/dental-services/restorations/dentures-partial-dentures" },
      { label: "Inlay Restorations", href: "/dental-services/restorations/inlay-restorations" },
      { label: "Onlay Restorations", href: "/dental-services/restorations/onlay-restorations" },
    ],
  },
  { label: "invisalign in markham", href: "/dental-services/invisalign-in-markham" },
  {
    label: "Oral Surgery",
    href: "/dental-services/oral-surgery",
    children: [
      { label: "Simple Tooth Extractions", href: "/dental-services/oral-surgery/simple-tooth-extractions" },
      { label: "Apicoectomy", href: "/dental-services/oral-surgery/apicoectomy" },
      { label: "Bone Grafting", href: "/dental-services/oral-surgery/bone-grafting" },
      { label: "Impacted Canines Extraction", href: "/dental-services/oral-surgery/impacted-canines-extraction" },
      { label: "Oral Pathology", href: "/dental-services/oral-surgery/oral-pathology" },
      { label: "TMJ", href: "/dental-services/oral-surgery/tmj" },
      { label: "Wisdom teeth surgery", href: "/dental-services/oral-surgery/wisdom-teeth-surgery" },
      { label: "Sinus Augmentation", href: "/dental-services/oral-surgery/sinus-augmentation" },
    ],
  },
  {
    label: "Periodontics",
    href: "/dental-services/periodontics",
    children: [
      { label: "Crown Lengthening", href: "/dental-services/periodontics/crown-lengthening" },
      { label: "Gum Grafting", href: "/dental-services/periodontics/gum-grafting" },
      { label: "Periodontal Scaling /Root Planing", href: "/dental-services/periodontics/periodontal-scaling-root-planing" },
      { label: "Pocket Irrigation", href: "/dental-services/periodontics/pocket-irrigation" },
      { label: "Pocket Reduction Surgery", href: "/dental-services/periodontics/pocket-reduction-surgery" },
      { label: "Prophylaxis (Teeth Cleaning)", href: "/dental-services/periodontics/prophylaxis-teeth-cleaning" },
      { label: "Regenerative Procedures", href: "/dental-services/periodontics/regenerative-procedures" },
      { label: "Ridge Modification", href: "/dental-services/periodontics/ridge-modification" },
      { label: "Root Amputation", href: "/dental-services/periodontics/root-amputation" },
      { label: "Soft tissue Grafting", href: "/dental-services/periodontics/soft-tissue-grafting" },
    ],
  },
  {
    label: "Endodontics",
    href: "/dental-services/endodontics",
    children: [
      { label: "Root Canal Retreatment", href: "/dental-services/endodontics/root-canal-retreatment" },
      { label: "Root Canal Therapy", href: "/dental-services/endodontics/root-canal-therapy" },
    ],
  },
  {
    label: "Prosthodontics",
    href: "/dental-services/prosthodontics",
    children: [
      { label: "Partial Denture", href: "/dental-services/prosthodontics/partial-denture" },
      { label: "Complete Denture", href: "/dental-services/prosthodontics/complete-denture" },
    ],
  },
  { label: "Dental Emergencies", href: "/dental-services/dental-emergencies" },
  { label: "Pediatric Dentistry", href: "/dental-services/pediatric-dentistry" },
  {
    label: "Local Services",
    href: "/emergency-dentist-markham",
    children: [
      { label: "Emergency Dentist", href: "/emergency-dentist-markham" },
      { label: "Root Canal Treatment", href: "/root-canal-markham" },
      { label: "Dental Cleaning", href: "/dental-cleaning-markham" },
      { label: "Family Dentist", href: "/family-dentist-markham" },
      { label: "Cosmetic Dentist", href: "/cosmetic-dentist-markham" },
      { label: "Wisdom Teeth Removal", href: "/wisdom-teeth-removal-markham" },
      { label: "Dental Veneers", href: "/dental-veneers-markham" },
      { label: "Dental Bonding", href: "/dental-bonding-markham" },
      { label: "Teeth Whitening", href: "/teeth-whitening-markham" },
      { label: "Dental Crowns", href: "/dental-crowns-markham" },
      { label: "Children's Dentist", href: "/childrens-dentist-markham" },
    ],
  },
] as const;

export function getServiceCategoryForPath(path: string): ServiceNavItem | undefined {
  return SERVICE_NAV_ITEMS.find((item) => {
    const base = item.href.replace(/^\//, "");
    return path === base || path.startsWith(`${base}/`);
  });
}

