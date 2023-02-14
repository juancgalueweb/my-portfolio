/** @type {import('next').NextConfig} */
/* eslint-env node */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es'
  }
}

module.exports = nextConfig
