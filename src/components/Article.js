import React from 'react';
const Article = ({ title, content, md }) => {
  return (
    <div className="Article">
      <h1>{title}</h1>
      <p>{content}</p>
      <div dangerouslySetInnerHTML={{ __html: md }}></div>
    </div>
  );
};

export default Article;
