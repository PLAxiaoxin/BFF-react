/*
 * @Author: your name
 * @Date: 2020-11-09 23:55:32
 * @LastEditTime: 2020-11-14 16:03:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vip/src/server/middlewares/ErrorHandler.ts
 */
import Koa from 'koa';
import { Context } from '@interfaces/IKoa';
import { Logger } from 'log4js';

class ErrorHandler {
  static error(app: Koa, logger: Logger) {
    app.use(async (ctx: Context, next:()=> Promise<unknown>)=>{
      try {
        await next();
      } catch (e) {
        logger.error(e);
        ctx.body = '500 请求恢复中...';
      }
    });

    app.use(async (ctx: Context,next:() => Promise<unknown>)=>{
      await next();
      if (ctx.status !== 404){ return;}
      ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>';
    })
  }
}


export default ErrorHandler;
