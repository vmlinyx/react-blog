import React from 'react';
import Layout from '../components/Layout';
import Article from '../components/Article';

const ArticleView = (props) => {
  console.log(props);
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
      <Article title={post.title} content={post.content} md={props.md} />
    </Layout>
  );
};

export default ArticleView;
