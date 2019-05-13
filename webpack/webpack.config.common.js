const path = require('path');
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = () => {
  return {
    mode: process.env.NODE_ENV,

    output: {
      filename: 'js/main.js',
      path: path.resolve('./public'),
    },

    module: {
      rules: [{
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }],
    },
    plugins: [
      isDevelopment ? new webpack.NamedModulesPlugin() : new webpack.HashedModuleIdsPlugin(),
    ],
  }
};
