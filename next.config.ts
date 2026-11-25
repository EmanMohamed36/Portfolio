import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: path.dirname(fileURLToPath(import.meta.url)),
  },
  async redirects() {
    return [
      "web-development",
      "ai-solutions",
      "mobile-apps",
      "cloud-devops",
      "backend-systems",
      "ui-ux-design",
    ].map((slug) => ({
      source: `/services/${slug}`,
      destination: "/#skills",
      permanent: false,
    }));
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
    ],
  },
};

export default nextConfig;
