const webpack = require('webpack');

const WebpackNotifierPlugin = require('webpack-notifier');
const config = require('./runtime');

const plugins = [
  new WebpackNotifierPlugin({
    title: 'Management-UI development build',
    alwaysNotify: true
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  })
];

config.plugins = config.plugins.concat(plugins);

config.devServer = {
  port: 8080,
  inline: true,
  historyApiFallback: true

};

config.devtool = 'eval-source-map';

module.exports = config;