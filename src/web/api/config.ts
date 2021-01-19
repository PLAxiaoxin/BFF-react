/*
 * @Author: your name
 * @Date: 2020-11-15 11:35:25
 * @LastEditTime: 2020-11-15 14:47:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vip/src/web/api/config.ts
 */
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '',
  timeout: 2000,
  headers: { 'X-Custom-Header': 'foobar' }
})


export default axiosInstance;
