/*
 * @Author: your name
 * @Date: 2020-11-10 00:58:40
 * @LastEditTime: 2020-11-14 11:20:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vip/src/server/typings/koa-swig.d.ts
 */
declare module 'koa-swig' {
  function render<T>(value: T | render.DefaultSettings): any;
  namespace render {
    interface DefaultSettings {
      autoescape: boolean;
      root: string;
      cache: string | boolean;
      ext: string;
      writeBody: boolean;
      memory?: string | boolean;
    }
  }
  export default render;
}
