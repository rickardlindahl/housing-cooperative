/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@hc/ui"],
  experimental: {
    serverComponentsExternalPackages: ["mysql2"],
  },
};

module.exports = nextConfig;
