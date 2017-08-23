const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// Create the html plugin
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
});

// Create the source map plugin
const SourceMapPlugin = new webpack.SourceMapDevToolPlugin({
  filename: 'app.js.map',
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      }
    ]
  },
  plugins: [
    SourceMapPlugin,
    HtmlWebpackPluginConfig
  ]
}
