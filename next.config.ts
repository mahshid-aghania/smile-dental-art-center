import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
