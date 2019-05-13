const express = require('express');

const PORT = 9090;
const PUBLIC_PATH = __dirname + '/public';
const app = express();

const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
  const webpackConfig = require('./webpack/index');
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    historyApiFallback: true,
    hot: true,
    stats: {
      colors: true
    }
  }));
  app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
  app.use(webpackHotServerMiddleware(compiler));

} else {
  const serverRenderer = require(PUBLIC_PATH+'/js/serverRenderer').default;

  app.use(express.static(PUBLIC_PATH));
  app.use(serverRenderer());
}

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT + '...');
});
