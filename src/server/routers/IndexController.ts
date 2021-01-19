/*
 * @Author: your name
 * @Date: 2020-11-10 00:46:37
 * @LastEditTime: 2020-11-10 00:49:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vip/src/server/routers/IndexController.ts
 */
import { GET, route } from 'awilix-koa';
import { Context } from '@interfaces/IKoa';

@route('/')
class IndexController {
  @route('/')
  @GET()
  async actionList(ctx: Context): Promise<void>{
    ctx.body = await ctx.render('index');
  }
}

export default IndexController;
