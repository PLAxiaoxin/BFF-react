/*
 * @Author: your name
 * @Date: 2020-11-10 00:53:47
 * @LastEditTime: 2020-11-14 16:01:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vip/src/server/shared/IApi.ts
 */
import { IData } from './IData';

export interface IApi {
  getInfo(): Promise<IData>;
}
