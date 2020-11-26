import React, { useEffect, useState } from 'react';
import mdRender from './../utils/markdown';

const Article = ({ filePath }) => {
  const [mdFile, setMdFile] = useState();

  useEffect(() => {
    (async () => {
      const md = await fetch('../' + filePath);
      const text = await md.text();
      setMdFile(mdRender(text));
    })();
  });
  return (
    <div className="Article">
      <div dangerouslySetInnerHTML={{ __html: mdFile }}></div>
    </div>
  );
};

export default Article;
