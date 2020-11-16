import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  let slot;
  if (Array.isArray(children) && children.length >= 2) {
    slot = <div className="content-wrapper">{children}</div>;
  } else {
    slot = <>{children}</>;
  }
  return (
    <div className="layout">
      <Header />
      {slot}
      <Footer />
    </div>
  );
};

export default Layout;
