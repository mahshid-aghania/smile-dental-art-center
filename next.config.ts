import type { NextConfig } from "next";

import { CLINIC_REDIRECTS } from "./lib/clinic/redirects";

const nextConfig: NextConfig = {
  async redirects() {
    return CLINIC_REDIRECTS.map((r) => ({ ...r, permanent: true }));
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
      {
        protocol: "https",
        hostname: "www.smiledentalartscentre.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
