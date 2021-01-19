/*
 * @Author: your name
 * @Date: 2020-11-07 17:35:02
 * @LastEditTime: 2020-11-15 15:26:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vip/config/webpack.development.js
 */
const { resolve, join } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const friendlyErrorsPlugin = require('friendly-errors-webpack-plugin'); // 识别某些类别的webpack错误，并清理，聚合和优先级，以提供更好的开发人员体验
const  notifier = require('node-notifier');
const ICON = join(__dirname, 'icon.png');

module.exports = {
    devServer:{
        stats: "errors-only",
        open: false,
        // quiet: true, // webpack的错误或警告是不可见的。
        historyApiFallback: true, // 使用HTML5历史记录API时，index.html可能必须在该页面上代替任何404响应。
        inline: true, //改动后是否自动刷新
        proxy:{
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        },
        port: 8082,
        hot: true, // 启用模块热更新
        watchContentBase: true, // 默认情况下是禁用的。启用后，文件更改将触发整个页面重新加载。
    },
    plugins: [
        new friendlyErrorsPlugin({
            compilationSuccessInfo:{
                message:['You application is running here'],
                notes:['Project is running at http://localhost:8082/'],
            },
            clearConsole:true,
            onErrors: function(serverity, errors){
                if(serverity !== 'error'){
                    return;
                }
                const error = errors[0];
                notifier.notify({
                    title: 'webpack error',
                    message: serverity + ':' + error.name,
                    subtitle: error.file || '',
                    icon: ICON 
                })
            }
        }),
        new htmlWebpackPlugin({
            template: resolve(__dirname, '../src','./web/index-dev.html'),
            filename: "index.html",
            inject: true
        })
    ]
}
