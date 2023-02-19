/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.BACKEND_API}${process.env.BACKEND_PORT}/:path*`,
      },
    ];
  },
  env: {
    REQUEST_TIMEOUT: 10000,
  },
};
