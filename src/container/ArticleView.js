import React from 'react';
import Layout from '../components/Layout';

const ArticleView = (props) => {
  const validId = parseInt(props.match.params.id);
  const data = [
    {
      id: 1,
      title: '1st title',
      content: 'blahblahblah',
    },
    {
      id: 2,
      title: '2nd title',
      content: 'blahblahblah',
    },
    {
      id: 3,
      title: '3rd title',
      content: 'blahblahblah',
    },
  ];
  const post = data.find((p) => p.id === validId);

  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </Layout>
  );
};

export default ArticleView;
