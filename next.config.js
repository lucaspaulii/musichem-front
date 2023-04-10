/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    NEXT_PUBLIC_MAPS_KEY: process.env.NEXT_PUBLIC_MAPS_KEY,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
        port: '',
        pathname: '/img/**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
