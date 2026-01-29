import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui"],

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@repo/ui": path.resolve(__dirname, "../../packages/ui/src"),
    };
    return config;
  }
};

export default nextConfig;
