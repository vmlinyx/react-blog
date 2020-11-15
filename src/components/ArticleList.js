import React, { useEffect, useState } from 'react';
import ArticleListItem from './ArticleListItem';

const ArticleList = () => {
  const [articleList, setArticleList] = useState([
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
  ]);

  const articleListUI = articleList.map((item) => (
    <ArticleListItem
      key={item.id}
      id={item.id}
      title={item.title}
      content={item.content}
    />
  ));

  return <div>{articleListUI}</div>;
};

export default ArticleList;
