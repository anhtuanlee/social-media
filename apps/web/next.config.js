/** @type {import('next').NextConfig} */
var path = require('path');

const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  trailingSlash: true,
  output: 'standalone',
  experimental: {
    outputFileTracingIncludes: {
      '/api': ['./api/**/*'],
    },
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost:3000/',
      },
      {
        protocol: 'https',
        hostname: 'social-media-sooty-delta.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'climate.onep.go.th',
      },
      {
        protocol: 'https',
        hostname: 'images3.alphacoders.com',
      },
      {
        protocol: 'https',
        hostname: 'wallpapers.com',
      },
      {
        protocol: 'https',
        hostname: 'thicc-af.mywaifulist.moe',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  experimental: {
    turbo: {
      resolveAlias: {
        underscore: 'lodash',
        mocha: { browser: 'mocha/browser-entry.js' },
      },
    },
  },
  transpilePackages: ['@repo/ui'],
  sassOptions: {
    additionalData: `
    @import "@Styles/_tool.scss";
    @import "@Styles/_variable.scss";
      `,
  },
};

module.exports = nextConfig;
