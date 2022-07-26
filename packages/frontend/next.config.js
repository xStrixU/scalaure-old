/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: '/account',
        destination: '/account/details',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
