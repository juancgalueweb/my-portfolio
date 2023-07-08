/** @type {import('next').NextConfig} */
/* eslint-env node */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es'
  },
  images: {
    remotePatterns: [
      {
        hostname: 'certifications-and-courses.s3.sa-east-1.amazonaws.com'
      }
    ]
  }
}

module.exports = nextConfig
