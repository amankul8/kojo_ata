/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
      domains: ['http://localhost:3000', 'cdn.wallpapersafari.com'],
      formats: ["image/webp"],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

module.exports = nextConfig
