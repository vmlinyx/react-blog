import React, { useEffect, useState } from 'react';
import ArticleListItem from './ArticleListItem';
import { routes } from './../../config/.temp/routes';

const ArticleList = () => {
  const [list, setList] = useState(routes.map((page) => page));

  return (
    <div className="ArticleList">
      {list.map((page, index) => (
        <ArticleListItem key={index} id={page.path} title={page.title} />
      ))}
    </div>
  );
};

export default ArticleList;
