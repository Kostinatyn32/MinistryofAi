import type { NextConfig } from 'next';
const config: NextConfig = {
  poweredByHeader: false,
  // Keep local preview artifacts separate from production builds so a build
  // cannot invalidate the running review session.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
};
export default config;
