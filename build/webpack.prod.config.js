const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: {
    main: './library/index.js'
  },
  output: {
    // 以原始文件名的输出文件名
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    // 自动清空dist文件夹
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsPlugin()
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        }
      }
    },
  }
})