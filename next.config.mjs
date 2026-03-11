/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "farisgroup.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.farisgroup.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
