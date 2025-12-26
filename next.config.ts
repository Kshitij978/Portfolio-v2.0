import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  turbopack: {
    root: path.join(__dirname, "."),
  },
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: "/blog/:slug.mdx",
        destination: "/blog.mdx/:slug",
      },
      {
        source: "/components/:slug.mdx",
        destination: "/blog.mdx/:slug",
      },
      {
        source: "/rss",
        destination: "/blog/rss",
      },
    ];
  },
};

export default nextConfig;

