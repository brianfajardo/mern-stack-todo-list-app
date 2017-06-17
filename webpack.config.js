const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const VENDOR_LIST = ['axios', 'body-parser', 'cors', 'express', 'mongoose', 'prop-types', 'react', 'react-dom', 'redux', 'react-redux', 'redux-thunk']

module.exports = {
  entry: {
    dist: './client/src/index.js',
    vendors: VENDOR_LIST
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: './client/index.html'
    })
  ]
}