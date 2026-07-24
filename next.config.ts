import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about-us-2", destination: "/about", permanent: true },
      { source: "/courses-2", destination: "/courses", permanent: true },
      { source: "/upcoming-courses", destination: "/courses", permanent: true },
      { source: "/previous-courses", destination: "/courses", permanent: true },
      { source: "/upcoming-conferences", destination: "/conferences", permanent: true },
      { source: "/shop", destination: "/courses", permanent: true },
      { source: "/product/:slug", destination: "/courses/:slug", permanent: true },
      {
        source: "/courses/advanced-adhesive-dentistry-the-master-blueprint-copy",
        destination: "/courses/advanced-adhesive-dentistry-the-master-blueprint",
        permanent: true,
      },
      {
        source: "/product/advanced-adhesive-dentistry-the-master-blueprint-copy",
        destination: "/courses/advanced-adhesive-dentistry-the-master-blueprint",
        permanent: true,
      },
      {
        source: "/courses/yourr-first-financial-steps-as-a-dentist",
        destination: "/courses/your-first-financial-steps-as-a-dentist",
        permanent: true,
      },
      {
        source: "/product/yourr-first-financial-steps-as-a-dentist",
        destination: "/courses/your-first-financial-steps-as-a-dentist",
        permanent: true,
      },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      // Legacy Smile Dental paths from prior site clone
      { source: "/services", destination: "/courses", permanent: true },
      { source: "/services/:path*", destination: "/courses", permanent: true },
      { source: "/dental-services", destination: "/courses", permanent: true },
      { source: "/dental-services/:path*", destination: "/courses", permanent: true },
      { source: "/dental-implants", destination: "/courses", permanent: true },
      { source: "/dental-implants/:path*", destination: "/courses", permanent: true },
      { source: "/blog", destination: "/", permanent: false },
      { source: "/blog/:path*", destination: "/", permanent: false },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "replicate.delivery",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
