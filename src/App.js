import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from './container/Home';
import ArticleView from './container/ArticleView';
import './../public/normalize.css';

function App() {
  return (
    <HashRouter>
      <>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/post/:id"
          render={(props) => <ArticleView {...props} />}
        />
      </>
    </HashRouter>
  );
}

export default App;
