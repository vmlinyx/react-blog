import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';

const ArticleListItem = ({ id, title }) => {
  const linkTo = `${id}`;
  return (
    <section className="ArticleListItem">
      <Link className="title" to={linkTo}>
        {title}
      </Link>
    </section>
  );
};

export default ArticleListItem;
