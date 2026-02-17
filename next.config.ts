import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Skip TypeScript checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint checking during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Allow external images (for user avatars, etc.)
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'avatars.slack-edge.com',
      'lh4.googleusercontent.com',
      'lh5.googleusercontent.com',
      'lh6.googleusercontent.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imagekit.io',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
    ],
    unoptimized: true,
  },
  // Disable strict mode for faster builds
  reactStrictMode: false,
  serverExternalPackages: [],
  transpilePackages: ['next-mdx-remote'],
};

export default nextConfig;
