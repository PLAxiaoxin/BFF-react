/*
 * @Author: your name
 * @Date: 2020-11-10 00:54:02
 * @LastEditTime: 2020-11-14 15:59:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vip/src/server/shared/IKoa.ts
 */
import * as Koa from 'koa';
import render from 'koa-swig';

export interface Context extends Koa.Context{
  render: typeof render;
}
