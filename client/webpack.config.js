const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/javascript/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new Dotenv(),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    watchContentBase: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.ttf$/,
        use: ['url-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  regenerator: true,
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
