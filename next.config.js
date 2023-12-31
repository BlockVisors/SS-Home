/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "tailwindui.com",
      "res.cloudinary.com"
    ]
  }
};

module.exports = nextConfig;
