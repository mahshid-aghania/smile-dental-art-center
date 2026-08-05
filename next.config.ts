import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/dental-services",
        permanent: true,
      },
      {
        source: "/services/:path*",
        destination: "/dental-services/:path*",
        permanent: true,
      },
      // Taxonomy corrections
      {
        source: "/dental-services/oral-surgery/root-canal-markham",
        destination: "/root-canal-markham",
        permanent: true,
      },
      {
        source: "/dental-services/oral-surgery/wisdom-teeth-surgery",
        destination: "/wisdom-teeth-removal-markham",
        permanent: true,
      },
      // Veneer consolidation
      {
        source: "/dental-services/oral-surgery/dental-veneers-markham",
        destination: "/dental-veneers-markham",
        permanent: true,
      },
      {
        source: "/dental-services/oral-surgery/porcelain-veneers-markham",
        destination: "/dental-veneers-markham",
        permanent: true,
      },
      {
        source: "/dental-services/oral-surgery/composite-veneers-markham",
        destination: "/dental-veneers-markham",
        permanent: true,
      },
      // Other oral-surgery misplacements
      {
        source: "/dental-services/oral-surgery/implant-markham",
        destination: "/dental-implants",
        permanent: true,
      },
      {
        source: "/dental-services/oral-surgery/invisalign-markham",
        destination: "/dental-services/invisalign-in-markham",
        permanent: true,
      },
      {
        source: "/dental-services/oral-surgery/bone-grafting-markham",
        destination: "/dental-services/oral-surgery/bone-grafting",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "replicate.delivery",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "smiledentalartscentre.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
