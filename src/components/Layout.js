import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import '../../styles.scss';

const Layout = ({ children }) => {
  return (
    <div className="site-border">
      <div className="site-content">
        <Nav />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
