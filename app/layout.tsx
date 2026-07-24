import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-canadent-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_NAME = "CanaDent Education Center";
const DEFAULT_TITLE = "CanaDent Education Center | Dental Courses & Seminars";
const DEFAULT_DESCRIPTION =
  "CanaDent helps dentists revisit, retrain, and optimize their knowledge through practical seminars and theoretical classes in North York, Ontario.";

export const metadata: Metadata = {
  metadataBase: new URL("https://canadent.net"),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "CanaDent",
    "dental education Canada",
    "dental courses Toronto",
    "dental seminars North York",
    "CE dentistry Ontario",
    "endodontic courses",
    "implant dentistry courses",
  ],
  category: "Education",
  formatDetection: { telephone: true, address: true, email: true },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/canadent/hero/education-hall.jpg",
        width: 2000,
        height: 1333,
        alt: "CanaDent Education Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/canadent/hero/education-hall.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0f2a4a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${dmSans.variable} ${fraunces.variable} h-full bg-background antialiased`}
      style={
        {
          "--font-display": "var(--font-canadent-display)",
        } as React.CSSProperties
      }
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
