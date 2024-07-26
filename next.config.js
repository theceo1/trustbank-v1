// next.config.js
const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
        },
      },
    });

    if (!isServer) {
      config.resolve.alias['@'] = path.join(__dirname, 'src');
    }

    return config;
  },
};
