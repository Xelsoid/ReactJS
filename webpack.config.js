const merge = require('webpack-merge');
const clientConfigImport = require('./webpack/webpack.config.client');
const serverConfigImport = require('./webpack/webpack.config.server');
const commonConfig = require('./webpack/webpack.config.common');

const clientConfig = merge([commonConfig(), clientConfigImport()]);
const serverConfig = merge([commonConfig(), serverConfigImport()]);

module.exports = [clientConfig, serverConfig];
