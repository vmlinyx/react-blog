import React from 'react';
import Layout from '../components/Layout';
import ArticleList from '../components/ArticleList';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <Layout>
      <Nav />
      <ArticleList />
    </Layout>
  );
};

export default Home;
