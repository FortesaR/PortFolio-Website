import React from 'react';
import { Link } from 'gatsby';
import './footer.css'; 
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/AboutMe">About Me</Link></li>
          <li><Link to="/project">Projects</Link></li>
          <li><AnchorLink to="/#contact-section" title="Contact" /></li> 
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
