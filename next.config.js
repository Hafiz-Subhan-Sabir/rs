import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "gsap",
      "@heroicons/react",
      "react-icons",
    ],
    staleTimes: {
      dynamic: 30,
      static: 300,
    },
  },
  // Fixes Turbopack "Next.js package not found" when project path has spaces (e.g. "main rs")
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
