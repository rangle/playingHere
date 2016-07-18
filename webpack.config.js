var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var template = new HtmlWebpackPlugin({
  title: 'Dev Server',
  template: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './src/home.jsx',
  output: { path: './build', filename: 'bundle.js' },
  plugins: [template],
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      }
    ]
  }
};
