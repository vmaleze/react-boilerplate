const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  context: resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    './index.tsx'
  ],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
    port: 3000
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],

  module: {
    rules: [
      { test: /\.tsx?$/, use: ['react-hot-loader/webpack', 'awesome-typescript-loader'], exclude: /node_modules/ },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader', ], },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: "file-loader" },
			{ test: /\.(woff|woff2)$/, use:"url-loader?prefix=font/&limit=5000" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=image/svg+xml" }
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
};
