/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "http://fotopieAlb-dev-1588850940.ap-southeast-2.elb.amazonaws.com/api/:path*", // http://localhost:9090/ => /api/
      },

      {
        source: "/:tagString",
        destination: `${process.env.Get_Synonyms_API_Prefix}/:tagString/json`,
      },
    ];
  },
  env: {
    REQUEST_TIMEOUT: 30000,
  },
};
