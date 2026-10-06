import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Pin the project root (a parent folder also contains a lockfile).
  outputFileTracingRoot: process.cwd(),
  // Allows a production build alongside a running `next dev` (e.g. NEXT_DIST_DIR=.next-build).
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
