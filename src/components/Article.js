import React from 'react';

const Article = ({ title, content }) => {
  return (
    <div className="Article">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Article;
