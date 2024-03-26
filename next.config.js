/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d30vxck32ggp8b.cloudfront.net",
      },
    ],
  },
};

module.exports = nextConfig;
