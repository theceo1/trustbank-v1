const webpack = require('webpack');

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        global: require.resolve('global')
      };

      config.plugins.push(
        new webpack.ProvidePlugin({
          global: 'global'
        })
      );
    }

    return config;
  }
};
