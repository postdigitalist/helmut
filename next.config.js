const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  ...(process.env.NETLIFY === 'true' && { target: 'serverless' }),
  images: {
    deviceSizes: [320, 500, 680, 1040, 2080, 2048, 3120],
    domains: [
      'static.gotsby.org',
      'res.cloudinary.com',
      'res-1.cloudinary.com',
      'res-2.cloudinary.com',
      'res-3.cloudinary.com',
      'res-4.cloudinary.com',
      'res-5.cloudinary.com',
      'images.unsplash.com',
      'static.ghost.org',
      'cdn.commento.io',
      'gatsby.ghost.io',
      'ghost.org',
      'repository-images.githubusercontent.com',
      'www.gravatar.com',
      'github.githubassets.com',
      'www.crio.do',
      'drive.google.com',
      'lh3.googleusercontent.com',
      'lh6.googleusercontent.com',
    ],
  },
  reactStrictMode: true,
})
