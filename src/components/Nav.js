import React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';
import '../../styles.scss';

const Nav = () => {
  return (
    <div className="site-nav">
      <ul>
        <li className="site-logo-item">
          <Link to="/">
              <Logo />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
