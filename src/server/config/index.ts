/*
 * @Author: your name
 * @Date: 2020-11-09 23:49:53
 * @LastEditTime: 2020-11-15 15:21:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vip/src/server/config/index.ts
 */
import { extend } from 'lodash';
import { join } from 'path';

let config = {
  viewDir: join(__dirname, '..', 'views'),
  staticDir: join(__dirname, '..', 'assets'),
  port: 0,
  memoryFlag: false
}

if (process.env.NODE_ENV === 'development') {
  let localConfig = {
    port: 3000
  }
  config = extend(config, localConfig);
};

if (process.env.NODE_ENV === 'production') {
  let prodConfig = {
    prot: 8082,
    memoryFlag: 'memory'
  }
  config = extend(config, prodConfig)
}
export default config;

