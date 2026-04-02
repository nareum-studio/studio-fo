import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://54.180.79.241:8081/:path*',
      },
    ]
  },

  images: {
    domains: ['nareum-bucket.s3.ap-northeast-2.amazonaws.com'],
  },
}

export default nextConfig
