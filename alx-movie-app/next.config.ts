import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['m.media-amazon.com'], // 👈 Add this
  },
  reactStrictMode: true,
};

export default nextConfig;
