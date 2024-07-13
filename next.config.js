// next.config.js
const withTM = require('next-transpile-modules')(['@babel/preset-env', '@babel/preset-react', 'babel-loader']);

module.exports = withTM({
  swcMinify: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel', '@babel/preset-env', '@babel/preset-react'],
        },
      },
    });

    return config;
  },
});
