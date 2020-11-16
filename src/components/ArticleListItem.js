import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';

const ArticleListItem = ({ id, title, content }) => {
  return (
    <section className="ArticleListItem">
      <Link className="title" to={`/post/${id}`}>
        {title}
      </Link>
      <p>{content}</p>
      <Link className="readMore" to={`/post/${id}`}>
        Read more
      </Link>
    </section>
  );
};

export default ArticleListItem;
