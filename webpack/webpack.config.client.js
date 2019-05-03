const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = () => {
  return({
    name: 'client',
    target: 'web',

    entry: [
      isDevMod && 'webpack-hot-middleware/client?reload=true',
      'react-hot-loader/patch',
      './src/client.js',
    ].filter(Boolean),

    module: {
      rules: [{
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        use: [
          isDevMod ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.css$/,
        use: [
          isDevMod ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      }]
    },

    plugins: [
      !isDevMod && new CleanWebpackPlugin('./public', {root: path.resolve(__dirname, '../')}),
      isDevMod && new webpack.HotModuleReplacementPlugin(),
      /**
       * This plugin extract CSS into separate files.
       * It creates a CSS file per JS file which contains CSS.
       * It supports On-Demand-Loading of CSS and SourceMaps.
       * @link https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
       */
      new MiniCssExtractPlugin({
        filename: 'css/main.css',
      }),
    ].filter(Boolean),
  })
};
