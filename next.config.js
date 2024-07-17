const path = require('path');
const withTM = require('next-transpile-modules')([]);

module.exports = withTM({
  webpack: (config, { dev, isServer }) => {
    if (dev &&!isServer) {
      config.resolve.alias['react-dom$'] = 'react-dom/profiling';
      config.resolve.alias['scheduler/tracing'] = 'scheduler/tracing-profiling';
    }

    // Disable source maps
    config.devtool = false;

    // Exclude LICENSE files from being processed by Webpack
    config.module.rules.push({
      test: /LICENSE$/,
      use: 'ignore-loader',
    });

    // Ensure compatibility with different file types and modules
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });

    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });

    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
      use: ['file-loader'],
    });

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
});

