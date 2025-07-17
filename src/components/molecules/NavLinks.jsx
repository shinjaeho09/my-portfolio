import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ className = '' }) => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ];
  
  const baseClasses = 'flex space-x-8 items-center';
  const classes = `${baseClasses} ${className}`;
  
  const linkClasses = ({ isActive }) => 
    `text-text hover:text-accent-500 font-medium transition-colors duration-200 ${
      isActive ? 'text-accent-500 border-b-2 border-accent-500' : ''
    }`;

  return (
    <nav className={classes}>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={linkClasses}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavLinks; 