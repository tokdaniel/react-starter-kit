'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./base');

const plugins = [
    new ExtractTextPlugin({
        filename: 'app-[hash].css',
        allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.bundle-[hash].js',
    })
];

config.plugins = config.plugins.concat(plugins);

module.exports = config;