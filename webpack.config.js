/*
 * @LineStart: -------------------------------------------
 * @Copyright: © 2022, Web技术学苑. All rights reserved
 * @LineEnd: -------------------------------------------
 * @Author: maicFir
 * @Date: 2023-02-17 11:05:09
 * @LastEditors: anne
 * @LastEditTime: 2023-02-17 16:30:34
 * @Description: 
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
    mode: 'development',
    entry: {
        app: './index.js'
    },
    output: {
        path: resolve("dist"),
        filename: '[name].bundle.js'
    },
    resolve: {
        alias: {
            "@": resolve("src")
        },
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // 将 JS 字符串生成为 style 节点
                    'style-loader',
                    // 将 CSS 转化成 CommonJS 模块
                    'css-loader',
                    // 将 Sass 编译成 CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets',
                            name: '[name].[ext]?[hash]'
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new miniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true
    }
};
