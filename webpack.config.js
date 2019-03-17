const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  if(env === 'development'){
    return {
      context: path.resolve(__dirname, 'src'),
      mode: "development",
      devtool: 'source-map', //none,eval

      entry: './init.js',
      output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
      },
      watch: true,

      devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9090
      },

      module: {
        rules: [
          {
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test:/\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader']
            })
          }
        ]
      },

      plugins: [
        new HtmlWebpackPlugin({
          title: 'React application',
          template: './index.html'
        }),
        new ExtractTextPlugin({filename: 'style.css'})
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
  }

  if(env === "production") {
    return {
      context: path.resolve(__dirname, 'src'),
      mode: "production",
      devtool: 'eval',

      entry: './init.js',
      output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
      },

      module: {
        rules: [
          {
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test:/\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader']
            })
          }
        ]
      },

      plugins: [
        new HtmlWebpackPlugin({
          title: 'React application',
          template: './index.html'
        }),
        new ExtractTextPlugin({filename: 'style.css'})
      ],
    }
  }
};