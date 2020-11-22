import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="Nav">
      <div className="NavBar">
        <div className="NavTitle">
          <h2>Topic</h2>
        </div>
        <Link to="/">Careers</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Resume</Link>
        <Link to="/">About</Link>
      </div>
    </div>
  );
};

export default Nav;
