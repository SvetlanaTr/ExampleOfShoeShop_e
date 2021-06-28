const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OUTPUT_PATH = './dist/frontend';

module.exports = {
  context: path.resolve('./dist/frontend/'),
  entry: {
    'controller': path.resolve('frontend/dev/controller.ts'),
    'vue': path.resolve('frontend/dev/vue.js')
  },
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(OUTPUT_PATH),
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: path.resolve(OUTPUT_PATH),
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      vue: 'vue/dist/vue.js'
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(html)$/,
        use: [
          {
            loader: 'html-loader',
            options: {
                minimize: false
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('./frontend/index.html'),
      chunks: ['vue', 'controller'],
      inject: 'head'
    })
  ]
};