// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   experimental: {
//     // serverActions: true,
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  // Disable linting and type checking during build to prevent hanging
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
};
export default nextConfig;
