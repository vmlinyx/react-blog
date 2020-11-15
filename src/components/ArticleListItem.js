import React from 'react';
import { Link } from 'react-router-dom';

const ArticleListItem = ({ id, title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <small>
        <Link to={`/post/${id}`}>Read more</Link>
      </small>
    </div>
  );
};

export default ArticleListItem;
