
var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/client/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    __dirname + '/client/index.js',
    __dirname + '/client/styles/app.less'
  ],
  output: {
    filename: "index_bundle.js",
    path: __dirname  + '/dist'
  },
  module: {
    loaders: [

      {test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"]},

      {test: /\.less$/, loader: "style!css!autoprefixer!less"},

      {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader : 'file-loader' },

      {test: /\.(png|jpg)$/, loader : 'url-loader?limit=8192'}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    HTMLWebpackPluginConfig
  ]
}
