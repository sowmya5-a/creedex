// next.config.ts
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // any other settings you actually need, e.g. rewrites, env, etc.
  images: {
    domains: ['i.pravatar.cc'],
  },
};

export default nextConfig;
