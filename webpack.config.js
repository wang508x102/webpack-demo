const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry:{
 	main: './src/index.js',
  vendor: [
    'lodash'
  ]
},
 // devtool: 'source-map',
 // devServer: {
   // contentBase: './dist',
//	   hot: true
 // },
  plugins: [
   // new UglifyJSPlugin()
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
       title: 'Caching'
     }),
     new webpack.optimize.CommonsChunkPlugin({
       name: 'vendor'
     })

  	// new webpack.NamedModulesPlugin(),
  	// new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    // filename: '[name].bundle.js',
    filename: '[name].[chunkhash].js',
    // chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
    //publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};
