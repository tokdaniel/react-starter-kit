const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');
const config = require('./runtime');

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/assets/templates/index.html',
    filename: 'admin.html',
    date: new Date(),
    inject: true
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true
    },
    output: {
      comments: false
    }
  }),
  new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.(js|html)$/,
    threshold: 10240,
    minRatio: 0.8
  }),
  new WebpackNotifierPlugin({
    title: 'Production build succesful!',
    alwaysNotify: true
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('prod')
  })
];

config.plugins = config.plugins.concat(plugins);

module.exports = config;
