import React from 'react';
import { HashRouter, withRouter, Route, Switch } from 'react-router-dom';

import { routes } from './../config/.temp/routes';
import lazyLoad from './utils/lazyLoad';

import Home from './container/Home';

import './App.css';
import './../public/normalize.css';

const Page = lazyLoad(() => import('./container/ArticleView'));

const Theme = (routes) => {
  const res = routes.map((item) => {
    return (
      <Route
        exact
        key={item.path}
        path={item.path}
        render={() => {
          const MD = item.component;
          return <MD {...item} />;
        }}
      />
    );
  });

  return (
    <Switch>
      {res}
      <Route path="/home" component={Home} />
    </Switch>
  );
};

const genRoute = (props, routes) => {
  routes.forEach((r) => {
    r.component = Page;
  });

  return Theme(routes);
};

const RoutersContainer = withRouter(({ ...props }) => {
  return (
    <Switch>
      <Route path="/" render={(props) => genRoute(props, routes)} />
    </Switch>
  );
});

const AppRouter = () => {
  // TODO 动态生成 React 组件 + 动态生成路由
  // TODO 获取元数据以生成标题、文档创建时间、作者等信息
  return (
    <HashRouter>
      <div className="App">
        <RoutersContainer />
      </div>
    </HashRouter>
  );
};

export default AppRouter;
