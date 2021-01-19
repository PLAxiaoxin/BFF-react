import React, { lazy, Suspense }  from 'react';
import { Route, Switch, RouteProps} from 'react-router-dom';
import Home from '../components/Home';
import Demo from "../components/Demo";
import About from "../components/About";
import Nav from '@components/Nav';

interface MyTypes extends RouteProps{
  title: string
}

export const routes: MyTypes[] = [
  {
    path: '/',
    exact: true,
    component: Home,
    title: '首页',
  },
  {
    path: '/about',
    exact: true, 
    component: About,
    title: '关于'
  },
  {
    path: '/demo',
    exact: true, 
    component: Demo,
    title: 'Function Components'
  },
  {
    path: '/nav',
    exact: true, 
    component: Nav,
    title: 'Function Components'
  }
];

// 对状态属性进行监听
const Routes = () => (
  <Suspense fallback={<div />}>
    <Switch>{
      routes.map((route,index) =>{
        const { path, exact, component } = route;
        const Lazydom = component;
        return (
          <Route
            key={index}
            path={path}
            exact={exact}
            render={props => <Lazydom {...props} />}
          />
        )
      })
    }
    </Switch>
  </Suspense>
);

export default Routes;
