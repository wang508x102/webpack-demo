const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CleanWebpackPlugin = require('clean-webpack-plugin');

//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry:{
 	index: './src/index.js'
},
 // devtool: 'source-map',
 // devServer: {
   // contentBase: './dist',
//	   hot: true
 // },
  plugins: [
   // new UglifyJSPlugin()
     new HtmlWebpackPlugin({
       title: 'Code Splitting'
     })
     // new webpack.optimize.CommonsChunkPlugin({
     //   name: 'common'
     // })
    // new CleanWebpackPlugin(['dist']),
  	// new webpack.NamedModulesPlugin(),
  	// new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
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
