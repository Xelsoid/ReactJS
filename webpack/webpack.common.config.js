const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  return {
    context: path.resolve(__dirname, '../src'),

    module: {
      rules: [{
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },{
        test:/\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },{
        test:/\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css',
        chunkFilename: "style.css"
      }),
      new HtmlWebpackPlugin({
        title: 'React application',
        template: './index.html'
      })
    ],
  }
};