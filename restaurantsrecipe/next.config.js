/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "jvay2d8555bc",
    CONTENTFUL_ACCESS_KEY: "3c3HwAoCKxffJgQbd6Ma7x9qvEQYDO9ctGXoVXVtmiQ"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
