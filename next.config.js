/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/test-app',
  assetPrefix: '/test-app/',
};

module.exports = nextConfig;
