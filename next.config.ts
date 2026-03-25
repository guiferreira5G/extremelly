import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/extremelly",
  assetPrefix: "/extremelly/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
