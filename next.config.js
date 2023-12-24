// next.config.js
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  basePath: '/github-pages',
  webpack: (config, { isServer }) => {
    // Additional Webpack configurations can be added here

    // Example: Add a custom alias for imports
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    };

    // Example: Add a rule to handle SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Add other Webpack configurations as needed

    return config;
  },
};

module.exports = nextConfig;
