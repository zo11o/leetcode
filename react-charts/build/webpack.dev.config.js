const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool:'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 3000,
    open: 'Google Chrome',
    inline: true,
    historyApiFallback: true,//不跳转,
    hot: true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin()
  ]
})
