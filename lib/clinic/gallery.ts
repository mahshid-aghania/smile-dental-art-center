export type GalleryImage = {
  src: string;
  alt: string;
};

export type GalleryTab = {
  id: string;
  label: string;
  empty: boolean;
  images: readonly GalleryImage[];
};

export const GALLERY_HEADING = "A Dental Artistry Gallery";
export const GALLERY_SUBHEADING = "Smiles Captured!";

const RESTORATION_IMAGES: readonly GalleryImage[] = [
  { src: "/clinic/gallery/composite-restoration.png", alt: "Composite restoration result" },
  { src: "/clinic/gallery/porcelain-crown.png", alt: "Porcelain crown restoration result" },
  { src: "/clinic/gallery/crown-implant.png", alt: "Crown and implant restoration result" },
];

const COSMETIC_IMAGES: readonly GalleryImage[] = [
  { src: "/clinic/gallery/porcelain-veneers.png", alt: "Porcelain veneers result" },
  { src: "/clinic/gallery/composite-veneer.png", alt: "Composite veneer result" },
  { src: "/clinic/gallery/teeth-whitening.png", alt: "Teeth whitening result" },
  { src: "/clinic/gallery/diastema-closure.png", alt: "Diastema (gap) closure result" },
  { src: "/clinic/gallery/smile-makeover.png", alt: "Full smile makeover result" },
];

export const GALLERY_TABS: readonly GalleryTab[] = [
  {
    id: "all",
    label: "All",
    empty: false,
    images: [...COSMETIC_IMAGES, ...RESTORATION_IMAGES],
  },
  {
    id: "prosthetic-dentistry",
    label: "Prosthetic Dentistry",
    empty: true,
    images: [],
  },
  {
    id: "restorations",
    label: "Restorations",
    empty: false,
    images: RESTORATION_IMAGES,
  },
  {
    id: "cosmetic-dentistry",
    label: "Cosmetic Dentistry",
    empty: false,
    images: COSMETIC_IMAGES,
  },
  {
    id: "emergency-dental-care",
    label: "Emergency Dental Care",
    empty: true,
    images: [],
  },
] as const;
