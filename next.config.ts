import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    // Inline CSS as <style> tags instead of render-blocking <link> requests.
    // Fixes the PageSpeed "Render-blocking requests" flag (LCP/FCP). Small
    // atomic CSS (Tailwind) is the ideal case for this per Next.js docs.
    inlineCss: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Never let the browser cache anything in development, so every
  // refresh always shows the latest code without a hard refresh.
  async headers() {
    if (process.env.NODE_ENV === "production") return [];
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, no-cache, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
