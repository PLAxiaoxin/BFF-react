/*
 * @Author: your name
 * @Date: 2020-11-07 21:25:50
 * @LastEditTime: 2020-11-15 15:28:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vip/webpack.config.js
 */
const path = require('path');
const argv = require('yargs-parser')(process.argv.slice(2));
const { merge } = require('webpack-merge');
const _mode = argv.mode || 'development';
const baseConfig = require(`./config/webpack.${_mode}.js`);
const _modeflag = _mode == 'production' ? true : false;
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//公共选项配置区域
let cssLoaders = [
    MiniCssExtractPlugin.loader,
    {
        loader: 'css-loader',
        options: {
        importLoaders: 1,
        },
    },
    {
        loader: 'postcss-loader',
    },
];

function assetsPath(_path) {
    return path.posix.join('./', _path);
}

const webpackBaseConfig = {
    entry: {
        app: path.resolve(__dirname, './src/web/index.tsx'),
    },
    output: {
        filename: assetsPath("js/[name].[chunkhash:5].js"),
        chunkFilename: assetsPath("js/[name].[chunkhash].js")
    },
    // externals: {
    //     'react': 'React',
    //     'react-router-dom': 'ReactRouterDOM',
    // },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                include: [path.resolve('src')],
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: cssLoaders,
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|woff|woff2|ttf|svg|otf)$/,
                type: 'asset',
            },
        ],
    },
    resolve: {
        alias: {
          '@assets': path.resolve('src/web/assets'),
          '@components': path.resolve('src/web/components'),
          '@models': path.resolve('src/web/models'),
          '@routes': path.resolve('src/web/routes'),
          '@pages': path.resolve('src/web/pages'),
          '@utils': path.resolve('src/web/utils'),
        },
        modules: ['node_modules', path.resolve('src')],
        extensions: [".ts", ".tsx", ".js", ".json"]
      },
    plugins:[
        new ProgressBarPlugin(),
        new MiniCssExtractPlugin({
            filename: _modeflag
                ? 'styles/[name].[contenthash:5].css'
                : 'styles/[name].css',
            chunkFilename: _modeflag
                ? 'styles/[id].[contenthash:5].css'
                : 'styles/[id].css',
            // allChunks: true,
            ignoreOrder: true,
        }),
    ],
    experiments: {
        asset: true,
    },
};

module.exports = merge(webpackBaseConfig, baseConfig,)
