/* global __dirname, require, module*/

const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: __dirname + "/src/index.js",
  devtool: "inline-source-map",
  output: {
    path: __dirname + "/lib",
    filename: "index.js",
    library: "patterns",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ]
};
