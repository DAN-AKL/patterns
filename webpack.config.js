/* global __dirname, require, module*/

const webpack = require("webpack");
const path = require("path");

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
      }
    ]
  }
};
