import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   async redirects() {
    return [
      { source: '/music',   destination: '/?to=music',   permanent: true },
      { source: '/video',   destination: '/?to=video',   permanent: true },
      { source: '/contact', destination: '/?to=contact', permanent: true },
    ];
  },
};

export default nextConfig;
