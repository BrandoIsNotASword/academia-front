'use strict';

var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './src/js/App.js'
  ],

  cache: true,

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          cacheDirectory: true
        }
      }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader?outputStyle=expanded'
      }, {
        test: /\.(png|jpg|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
