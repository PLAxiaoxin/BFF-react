/*
 * @Author: your name
 * @Date: 2020-11-07 17:35:06
 * @LastEditTime: 2020-11-15 15:28:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vip/config/webpack.production.js
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  output: {
    path: path.join(__dirname,'../dist/assets'),
    assetModuleFilename: 'scripts/[name].[contenthash:5].bundule.[ext]',
    filename: 'scripts/[name].[contenthash:5].bundule.js',
  },
//   externals: {
//     react: "React",
//     "react-router-dom": "ReactRouterDOM"
//   },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true, // 是否并行打包
      })
    ],
    runtimeChunk: {
      name: "runtime"
    },
    splitChunks: {
      chunks: "async",
      minChunks: 1,
      maxAsyncRequests: 5,
      // maxSize: 300000,
      maxInitialRequests: 3,
      name: false,
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2,
          maxInitialRequests: 5,
          // minSize: 0,
          name: "commons"
        }
      },
      //最小的文件大小 超过之后将不予打包
      minSize: {
        javascript: 100000,
        style: 100000
      },
      //最大的文件 超过之后继续拆分
      maxSize: {
        javascript: 300000, //故意写小的效果更明显
        style: 300000
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      },
      canPrint: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src", "./web/index-prod.html"),
      filename: "../views/index.html",
      inject: true,
      minify: {
        minifyJS: true,
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    })
  ]
};
