const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');
const config = require('./runtime');

const plugins = [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.(js|html)$/,
    threshold: 10240,
    minRatio: 0.8
  }),
  new WebpackNotifierPlugin({
    title: 'Management-UI production build',
    alwaysNotify: true
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
];

config.plugins = config.plugins.concat(plugins);

module.exports = config;