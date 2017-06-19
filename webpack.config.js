const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Only front-end libraries here, since it is what
// the server will send to the browser (bundle.js).
const BROWSER_VENDORS = [
  'react',
  'react-dom',
  'redux',
  'redux-thunk',
  'react-redux',
  'axios'
]

module.exports = {
  entry: {
    bundle: './client/src/index.js',
    vendors: BROWSER_VENDORS
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
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
    new HtmlWebpackPlugin({
      template: './client/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendors']
    })
  ]
}