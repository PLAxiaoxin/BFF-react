/*
 * @Author: your name
 * @Date: 2020-11-10 00:50:20
 * @LastEditTime: 2020-11-15 15:49:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vip/src/server/services/ApiService.ts
 */
import { IApi } from '@interfaces/IApi';
import { IData } from '@interfaces/IData';

class ApiService implements IApi {
  getInfo() {
    return new Promise<IData>((resolve)=>{
      resolve({
          item: '我是后台数据',
          result: [1,'next']
      })
    })
  }
}


export default ApiService;
