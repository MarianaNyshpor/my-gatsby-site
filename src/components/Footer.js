import React from 'react';
import '../../styles.scss';

const Footer = () => {
  return (
    <footer>
      <p className="site-footer-center">&copy; Best Wines {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
