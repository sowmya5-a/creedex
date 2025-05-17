// next.config.ts
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // any other settings you actually need, e.g. rewrites, env, etc.
  images: {
    domains: ['i.pravatar.cc'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
