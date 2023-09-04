import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Search from './Search';
import '../index.css';

const NavLinks = ({ categories }) => {
  const { pathname } = useLocation();
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [setActiveMenuItem] = useState('');

  // const [activeMenuItem, setActiveMenuItem] = useState('');

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

  const closeSubmenu = () => {
    setSubmenuOpen(false);
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    closeSubmenu();
  };

  return (
    <ul className='menu-lists'>
      <label htmlFor='menu-btn' className='#' />
      {/* className='fa-solid fa-xmark */}

      <NavLink exact to='/' activeClassName='active' onClick={() => handleMenuItemClick('home')}>
        <li>Home</li>
      </NavLink>

      <NavLink to='/about' activeClassName='active' onClick={() => handleMenuItemClick('about')}>
        <li>About Us</li>
      </NavLink>

      <li className={`submenu-item ${submenuOpen ? 'open' : ''}`}>
        <div className='submenu-toggle' onClick={toggleSubmenu}>
          <span>Tourist Spots</span>
          <i className={`fa-solid fa-chevron-${submenuOpen ? 'up' : 'down'}`} />
        </div>
        <ul className={`submenu ${submenuOpen ? 'open' : ''}`}>
          {categories?.map(category => (
            <li key={category.slug}>
              <NavLink
                to={`/posts/${category.slug}`}
                activeClassName='active'
                onClick={() => handleMenuItemClick(category.name)}
              >
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>

      <NavLink to='/products' activeClassName='active' onClick={() => handleMenuItemClick('products')}>
        <li>Products</li>
      </NavLink>
      
      <NavLink to='/contact' activeClassName='active' onClick={() => handleMenuItemClick('contact')}>
        <li>Contact Us</li>
      </NavLink>

      <li>
        <Search />
      </li>
    </ul>
  );
};

export default NavLinks;
