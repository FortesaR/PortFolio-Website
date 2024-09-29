import React, { useRef, useState } from 'react';
import { Link } from 'gatsby';
import './header.css';
import logo from '../../images/FORTESSA.png';
import menu1 from '../../images/toggle1.svg';
import close from '../../images/close.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
         <img src={logo} alt="MySite Logo" className="logo-image" />
        </Link>
        
        <img 
          src={menu1} 
          alt="Open Menu" 
          className="nav-mob-open" 
          onClick={toggleMenu} 
        />
      </div>
      <ul 
        ref={menuRef} 
        className={`nav-menu ${isMenuOpen ? 'active' : ''}`} 
      >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutMe">About Me</Link></li>
        <li><Link to="/project">Projects</Link></li>
      </ul>
      
    </nav>
  );
};

export default Header;
