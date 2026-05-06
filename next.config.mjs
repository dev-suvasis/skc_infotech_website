const nextConfig = {
  allowedDevOrigins: ['192.168.0.228', '172.30.16.1'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
    ],
  },

};

export default nextConfig;