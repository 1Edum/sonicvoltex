// next.config.mjs

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sonicvoltex.appspot.com',
        pathname: '/**',
      },
    ],
  },
}
  
  export default nextConfig;
  