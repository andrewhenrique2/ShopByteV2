// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/shopbyte-d1463.appspot.com/**',
      },
    ],
  },
};

export default nextConfig;
