import React from 'react';
import Layout from '../components/Layout';
import ArticleList from '../components/ArticleList';

import './Home.css';

const Home = () => {
  return (
    <Layout>
      <ArticleList />
    </Layout>
  );
};

export default Home;
