/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/flow-ai",
        destination: "/projects/flowai",
        permanent: true,
      },
      {
        source: "/projects/snapchat-app",
        destination: "/projects/snapchat",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
