import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../index.css';

const NavLinks = ({ categories }) => {
  const { pathname } = useLocation();
  const [submenuOpen, setSubmenuOpen] = useState(false);

  useEffect(() => {
    if (pathname === '/' || pathname === '/about') {
      const sectionId = pathname === '/' ? 'home' : 'about';
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname]);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <ul className='menu-lists'>
      <label htmlFor='menu-btn' className='fa-solid fa-xmark' />

      <NavLink exact to='/' activeClassName='active'>
        <li>Home</li>
      </NavLink>

      <NavLink to='/about' activeClassName='active'>
        <li>About Us</li>
      </NavLink>

      {/* Dropdown submenu for "Tourist Spots" */}
      <li className={`submenu-item ${submenuOpen ? 'open' : ''}`}>
        <div className='submenu-toggle' onClick={toggleSubmenu}>
          <span>Tourist Spots</span>
          <i className={`fa-solid fa-chevron-${submenuOpen ? 'up' : 'down'}`} />
        </div>
        <ul className={`submenu ${submenuOpen ? 'open' : ''}`}>
          {categories?.map(category => (
            <li key={category.slug}>
              <NavLink to={`/posts/${category.slug}`} activeClassName='active'>
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>

      <NavLink to='/products' activeClassName='active'>
        <li>Products</li>
      </NavLink>
      
      <NavLink to='/contact' activeClassName='active'>
        <li>Contact Us</li>
      </NavLink>
    </ul>
  );
};

export default NavLinks;