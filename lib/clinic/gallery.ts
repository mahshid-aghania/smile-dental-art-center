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

/** Scraped from https://smiledentalartscentre.com/gallery/ */
export const GALLERY_TABS: readonly GalleryTab[] = [
  {
    id: "all",
    label: "All",
    empty: false,
    images: [
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/Screenshot-2024-04-26-140221-2.png",
        alt: "replacing old composite restorations",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/19.png",
        alt: "replacing old composite restorations",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/Screenshot-2024-04-25-231444.png",
        alt: "Composite veneer",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/3-1.png",
        alt: "Composite veneer",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/Screenshot-2024-04-25-230650.png",
        alt: "Composite veneer",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/5-1.png",
        alt: "Composite veneer",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/7-1.png",
        alt: "Composite veneer",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/8-1.png",
        alt: "Composite veneer",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/Screenshot-2024-04-26-140221.png",
        alt: "Composite veneer and removable denture",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/9-1.png",
        alt: "Composite veneer and removable denture",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/12-1.png",
        alt: "whitening and diastema closure",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/Screenshot-2024-04-26-140221-1.png",
        alt: "whitening and diastema closure",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/14-1.png",
        alt: "Restoration with composite",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/13-1.png",
        alt: "Restoration with composite",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/16-1.png",
        alt: "diastema closure",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/15-1.png",
        alt: "diastema closure",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/18.png",
        alt: "whitening and crown implant",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/17.png",
        alt: "whitening and crown implant",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/11/Screenshot-2024-11-05-211258.png",
        alt: "Screenshot 2024-11-05 211258",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/11/Screenshot-2024-11-05-212333.png",
        alt: "Screenshot 2024-11-05 212333",
      },
    ],
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
    images: [
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/Screenshot-2024-04-26-140221-2.png",
        alt: "replacing old composite restorations",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/19.png",
        alt: "replacing old composite restorations",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/14-1.png",
        alt: "Restoration with composite",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/13-1.png",
        alt: "Restoration with composite",
      },
    ],
  },
  {
    id: "cosmetic-dentistry",
    label: "Cosmetic Dentistry",
    empty: false,
    images: [
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/Screenshot-2024-04-25-231159.png",
        alt: "Porcelain veneer and porcelain crown",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/2-3.png",
        alt: "Porcelain veneer and porcelain crown",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/Screenshot-2024-04-25-231444.png",
        alt: "Composite veneer",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/3-1.png",
        alt: "Composite veneer",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/Screenshot-2024-04-25-230650.png",
        alt: "Composite veneer",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/5-1.png",
        alt: "Composite veneer",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/Screenshot-2024-04-26-140221.png",
        alt: "Composite veneer and removable denture",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/9-1.png",
        alt: "Composite veneer and removable denture",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/7-1.png",
        alt: "Composite veneer",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/8-1.png",
        alt: "Composite veneer",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/12-1.png",
        alt: "whitening and diastema closure",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/Screenshot-2024-04-26-140221-1.png",
        alt: "whitening and diastema closure",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/18.png",
        alt: "whitening and crown implant",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/17.png",
        alt: "whitening and crown implant",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/Screenshot-2024-04-26-140221-2.png",
        alt: "replacing old composite restorations",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/11/Screenshot-2024-11-05-211258.png",
        alt: "Screenshot 2024-11-05 211258",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/04/19.png",
        alt: "replacing old composite restorations",
      },
      {
        src: "https://smiledentalartscentre.com/wp-content/uploads/2024/11/Screenshot-2024-11-05-212333.png",
        alt: "Screenshot 2024-11-05 212333",
      },
    ],
  },
  {
    id: "emergency-dental-care",
    label: "Emergency Dental Care",
    empty: true,
    images: [],
  },
] as const;
