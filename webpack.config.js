const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';
const prepare = require('./config/utils');

prepare();

module.exports = {
  // mode: isProd ? 'production' : 'development',
  // output: {
  //   path: sourceDir,
  //   fileName: isProd ? 'assets/js/[name].[chunkhash:8].js' : 'assets/js/[name].js',
  //   publicPath: base
  // },
  devtool: 'source-map', //'cheap-module-eval-source-map'
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
        },
      },
      {
        test: /\.css$/,
        use: [require.resolve('style-loader'), require.resolve('css-loader')],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: require.resolve('./lib/markdown-loader'), //!
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    // open: true,
    hot: true,
  },
  // node: {
  //   // prevent webpack from injecting mocks to Node native modules
  //   // that does not make sense for the client
  //   dgram: 'empty',
  //   fs: 'empty',
  //   net: 'empty',
  //   tls: 'empty',
  //   child_process: 'empty',
  // },
};
