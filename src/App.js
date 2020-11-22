import React, { useEffect, useState } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';

import Home from './container/Home';
import ArticleView from './container/ArticleView';

import { routes } from './../config/.temp/routes';
import './App.css';
import './../public/normalize.css';

function App() {
  console.log(routes);
  const [mdFile, setMdFile] = useState();

  // TODO 动态生成 React 组件 + 动态生成路由
  // TODO 获取元数据以生成标题、文档创建时间、作者等信息
  useEffect(() => {
    (async () => {
      const md = await import('./../docs/test.md');
      setMdFile(md.default);
    })();
  });

  return (
    <HashRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/post/:id"
          render={(props) => {
            props.md = mdFile;
            return <ArticleView {...props} />;
          }}
          {...renderRoutes(routes)}
        />
      </div>
    </HashRouter>
  );
}

export default App;
