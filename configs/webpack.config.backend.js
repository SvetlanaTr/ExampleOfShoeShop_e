const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve('./dist/backend'),
  entry: {
    'app': path.resolve('backend/app.ts'),
    'controller': path.resolve('backend/controller.ts'),
    'model': path.resolve('backend/model.ts'),
    'router': path.resolve('backend/router.ts'),
  },
  target: 'node',
  devtool: 'source-map',
  mode: 'development',
  output: {
    path: path.resolve('./dist/backend'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    fallback: {
      'zlib': false,
      'fs': false,
      'path': false,
      'util': false,
      'stream': false,
      'buffer': false,
      'mime': false,
      'http': false,
      'stream-http': false,
      'lib': false,
      'crypto': false,
      'net': false,
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve('./backend/db.json'),
          to: path.resolve('./dist/backend/db.json')
        }
      ]
    })
  ]
}