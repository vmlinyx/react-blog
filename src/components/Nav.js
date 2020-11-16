import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="Nav">
      <div className="NavBar">
        <div className="NavTitle">
          <h2>Topic</h2>
        </div>
        <Link>Careers</Link>
        <Link>Projects</Link>
        <Link>Resume</Link>
        <Link>About</Link>
      </div>
    </div>
  );
};

export default Nav;
