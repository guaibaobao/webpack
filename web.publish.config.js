/*
* @Author: 虚竹
* @Date:   2016-10-11 15:22:38
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-12 11:47:44
*/
var webpack = require("webpack");
var path = require("path");
// 使用这个模块移动html文件
var HtmlWebpackPlugin = require('html-webpack-plugin');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry:{
        app:path.resolve(__dirname, 'app.js'),
        vendors: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'publish/'),
        filename: 'js/bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
                loader: 'babel',// 加载模块 "babel" 是 "babel-loader" 的缩写
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/, // Only .css files
                // loader: 'style!css' // Run both loaders
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', "css!sass")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000&name=images/[name].[ext]'
            }, 
            {
                test: /\.woff$/,
                loader: 'url?limit=100000'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template using Handlebars',
            template: 'index.html',
            file: {
                js: ["js/bundle.js"]
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("app.css")
    ]
};