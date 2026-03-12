import type { NextConfig } from "next";

const immutableCacheHeaders = [
  { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  headers: async () => [
    { source: "/videos/:path*", headers: immutableCacheHeaders },
    { source: "/images/:path*", headers: immutableCacheHeaders },
  ],
};

export default nextConfig;
