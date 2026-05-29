import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      // 관리자 API
      {
        source: '/admin-api/:path*',
        destination: 'https://api.nareumdaumm.com/api/admin/:path*',
      },
      // 사용자 API
      {
        source: '/user-api/:path*',
        destination: 'https://api.nareumdaumm.com/api/:path*',
      },
    ]
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3l8r3t1t3hpx6.cloudfront.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'nareum-bucket.s3.ap-northeast-2.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
