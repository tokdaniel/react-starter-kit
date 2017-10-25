const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const WebpackNotifierPlugin = require('webpack-notifier');
const proxyConfig = require('./proxy');
const config = require('./runtime');

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/assets/templates/index.html',
    filename: 'index.html',
    date: new Date(),
    inject: true
  }),
  new WebpackNotifierPlugin({
    title: 'Build succesful!',
    alwaysNotify: true
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('dev')
  })
];

config.plugins = config.plugins.concat(plugins);

config.devServer = {
  //proxy: [proxyConfig.get],
  port: 80,
  inline: true,
  historyApiFallback: true

};

config.devtool = 'eval-source-map';

module.exports = config;
