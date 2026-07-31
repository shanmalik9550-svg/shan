import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configured for static export deployment (e.g. Hostinger Shared Hosting, cPanel, Nginx, Apache)
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
