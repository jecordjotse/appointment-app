/** @type {import('next').NextConfig} */

// next.config.js

module.exports = {
  async rewrites() {
    return [
      // Rewrite everything else to use `pages/index`
      {
        source: "/dashboard/:path*",
        destination: "/dashboard/",
      },
    ];
  },
  reactStrictMode: true,
};
