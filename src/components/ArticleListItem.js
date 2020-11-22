import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';

const ArticleListItem = ({ id, title, content }) => {
  const linkTo = `/post/${id}`;
  return (
    <section className="ArticleListItem">
      <Link className="title" to={linkTo}>
        {title}
      </Link>
      <p>{content}</p>
      <Link className="readMore" to={linkTo}>
        Read more
      </Link>
    </section>
  );
};

export default ArticleListItem;
