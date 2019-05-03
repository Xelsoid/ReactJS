const nodeExternals = require('webpack-node-externals');

module.exports = () => {
  return({
    name: 'server',
    target: 'node',
    entry: './src/serverRenderer.js',
    externals: [nodeExternals()],
    output: {
      filename: 'js/serverRenderer.js',
      libraryTarget: 'commonjs2',
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: [
          'css-loader',
          'sass-loader'
        ]}, {
          test: /\.css$/,
          include: /src/,
          use: [
            'css-loader',
          ],
        },
      ],
    },
  })
};
