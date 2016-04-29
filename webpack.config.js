var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var htmlPlugin = require('html-webpack-plugin');

// webpack.config.js - default file for webpack config
// __dirname - absolute path of current file
// entry - file webpack looks for to bundle, default to index.js
// output must include filename
module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      // expects regex
      test: /\.js$/,
      loader: 'babel-loader',
      // exclude or include paths
      exclude: '/node_modules/',
      // pass params to loader like querystring
      // instead of using .babelrc
      query: {
        presets: ['react'],
        compact: false
      }
    }, {
      test: /\.css$/,
      loader: 'style!css' // 2 loaders style and css
    }]
  },
  plugins: [new htmlPlugin({
    template: path.join(__dirname, '/app/index.html'),
    filename: 'index.html',
    inject: 'body'
  })]
}
