/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
