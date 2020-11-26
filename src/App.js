import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from './container/Home';
import ArticleView from './container/ArticleView';

import './App.css';
import './../public/normalize.css';

function App() {
  // TODO combine Router
  return (
    <HashRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/post/:id"
          render={(props) => {
            return <ArticleView {...props} />;
          }}
        />
      </div>
    </HashRouter>
  );
}

export default App;
