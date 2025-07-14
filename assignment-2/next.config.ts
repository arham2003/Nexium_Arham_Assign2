import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Allows building even with TypeScript errors (dangerous if not checked separately)
    ignoreBuildErrors: true,
  },
  eslint: {
    // Allows building even when ESLint errors are present
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        hostname: "**",
        protocol: "https",
      },
      {
        hostname: "**",
        protocol: "http",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
};

export default nextConfig;
