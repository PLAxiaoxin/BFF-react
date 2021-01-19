/*
 * @Author: your name
 * @Date: 2020-11-14 16:12:22
 * @LastEditTime: 2020-11-14 16:12:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /my-vip/postcss.config.js
 */
module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 0,
      features: {
        'nesting-rules': true,
      },
    },
  },
};
