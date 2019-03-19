const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }]
    },
    plugins: [
      new ExtractTextPlugin({filename: 'style.css'}),
      new HtmlWebpackPlugin({
        title: 'React application',
        template: './index.html'
      })
    ],
  }
};