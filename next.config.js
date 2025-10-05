/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow serving images from the public folder and remote patterns if needed
    remotePatterns: [],
  },
};

module.exports = nextConfig;
