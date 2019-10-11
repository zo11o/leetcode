const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'../dist')
  },

  mode: 'production',

  devtool: "source-map",

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'] // 扩展名
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },

  plugins: [
		//插件配置
		// new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			inject: true,
			template: 'index.html',
			appMountId: 'app',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true,
			},
		}),
	],
}
