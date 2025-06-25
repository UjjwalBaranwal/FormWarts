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
  webpack: (config) => {
    // Exclude system directories from webpack scanning
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        "**/node_modules/**",
        "**/.git/**",
        "**/C:/Users/**/Cookies/**",
        "**/C:/Users/**/AppData/**",
        "**/C:/Users/**/Application Data/**",
        "**/C:/Windows/**",
        "**/System32/**",
        /C:\\Users\\.*\\AppData\\.*/,
        /C:\\Users\\.*\\Cookies/,
        /C:\\Users\\.*\\Application Data/,
      ],
    };

    // Add module resolution to prevent system directory scanning
    config.module = {
      ...config.module,
      noParse: /node_modules\/(lodash|moment)/,
    };

    // Additional webpack optimizations (optional)
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      os: false,
    };

    return config;
  },

  // Other Next.js config options you might need
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },

  // Temporarily disable problematic features if needed
  experimental: {
    serverComponentsExternalPackages: [],
  },

  // Uncomment if you need experimental features
  // experimental: {
  //   appDir: true,
  // },
};

export default nextConfig;
