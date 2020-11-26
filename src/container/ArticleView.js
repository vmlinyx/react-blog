import React from 'react';
import Layout from '../components/Layout';
import Article from '../components/Article';

const ArticleView = (props) => {
  console.log(props);
  return (
    <Layout>
      <Article filePath={props.filePath} />
    </Layout>
  );
};

export default ArticleView;
