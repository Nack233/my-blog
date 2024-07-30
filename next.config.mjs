/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NESTJS_API_URL: 'http://localhost:3000', // URL ของ API ใน NestJS
  },
  async headers() {
    return [
      {
        source: '/(.*)', // Apply headers to all pages
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
