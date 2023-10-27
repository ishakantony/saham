/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.SAHAM_BACKEND_BASE_URL}/:path*`,
      },
    ];
  },
}

module.exports = nextConfig
