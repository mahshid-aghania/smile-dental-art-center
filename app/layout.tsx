import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-clinic-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_NAME = "Smile Dental Arts Centre";
const DEFAULT_TITLE = "Dentist in Markham | Invisalign, Implants & Family Dentistry";
const DEFAULT_DESCRIPTION =
  "Looking for a dentist in Markham? Smile Dental Arts Centre offers Invisalign, dental implants, root canals, whitening & family dentistry. Book today.";

export const metadata: Metadata = {
  metadataBase: new URL("https://smiledentalartscentre.com"),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Dr. Neda Kadivar, D.D.S." }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "dentist in Markham",
    "Markham dentist",
    "Invisalign Markham",
    "dental implants Markham",
    "family dentist Markham",
    "cosmetic dentist Markham",
    "emergency dentist Markham",
    "teeth whitening Markham",
    "root canal Markham",
    "Smile Dental Arts Centre",
  ],
  category: "Dentist",
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
        url: "/clinic/implants-hero.png",
        width: 1200,
        height: 630,
        alt: "Smile Dental Arts Centre — dentist in Markham",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/clinic/implants-hero.png"],
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
  themeColor: "#ffffff",
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
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${geistSans.variable} ${geistMono.variable} h-full bg-background antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
