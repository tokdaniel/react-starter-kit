'use strict';

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./base');

const plugins = [
  new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
  }),
  new webpack.optimize.SplitChunksPlugin({
    name: 'vendor',
    filename: 'vendor.bundle-[hash].js',
  })
];

config.plugins = config.plugins.concat(plugins);

module.exports = config;