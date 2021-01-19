/*
 * @Author: your name
 * @Date: 2020-11-07 10:22:38
 * @LastEditTime: 2020-11-15 14:52:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vip/src/server/app.ts
 */
import { addAliases } from 'module-alias';
addAliases({
  '@root': __dirname,
  '@interfaces': `${__dirname}/shared`,
  '@config': `${__dirname}/config`,
  '@middlewares':`${__dirname}/middlewares`

});
import Koa from 'koa';
import { createContainer, Lifetime } from 'awilix';
import { scopePerRequest, loadControllers} from 'awilix-koa';
import render from 'koa-swig';
import serve from 'koa-static';
import co from 'co';
import config from '@config/index';
import ErrorHandler from '@middlewares/ErrorHandler';
import { historyApiFallback } from 'Koa2-connect-history-api-fallback';
import { configure, getLogger} from 'log4js';

configure({
  appenders: {cheese:{type: 'file',filename: `${__dirname}/logs/yd.log`}},
  categories: {default: {appenders: ['cheese'], level: 'error'}}
});

const logger = getLogger('cheese');
const {port, viewDir, memoryFlag, staticDir} = config;
const app = new Koa();

app.context.render = co.wrap(
  render<render.DefaultSettings>({
    root: viewDir,
    autoescape: true,
    cache: memoryFlag,
    writeBody: false,
    ext:'html'
  })
);

app.use(serve(staticDir));

const container = createContainer();
container.loadModules([`${__dirname}/services/*.ts`],{
  formatName: 'camelCase',
  resolverOptions: {
    lifetime: Lifetime.SCOPED
  }
});

app.use(scopePerRequest(container));

ErrorHandler.error(app, logger);

app.use(historyApiFallback({index:'/', whiteList: ['/api']}));
app.use(loadControllers(`${__dirname}/routers/*.ts`));
app.listen(port, ()=>{
  console.log('BFF启动成功！ 端口'+ port);
})


