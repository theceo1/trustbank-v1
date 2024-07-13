// babel.config.js
module.exports = {
  presets: [
    'next/babel',
    '@babel/preset-react',
    '@babel/preset-env',
  ],
  plugins: [
    '@babel/plugin-syntax-jsx',
    '@babel/plugin-transform-runtime',
  ],
};
