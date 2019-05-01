const path = require('path');
const webpack = require('webpack');

module.exports = () => {
  return {
    mode: 'development',
    devtool: 'source-map',

    entry: [
      'webpack-hot-middleware/client?reload=true',
      'react-hot-loader/patch',
      './App.js'
    ],
    output: {
      filename: 'main.js',
      path: path.join(__dirname, '../dist')
    },
    watch: true,

    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],

    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            name: "commons",
            chunks: 'all',
            minSize: 0,
            minChunks: 2,
          }
        }
      }
    }
  }
};
