import React, { useEffect } from 'react'; // Import useEffect
import { NavLink, useLocation } from 'react-router-dom';
import '../index.css';

const NavLinks = ({ categories }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/' || pathname === '/about') {
      const sectionId = pathname === '/' ? 'home' : 'about';
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname]);

  return (
    <ul className='menu-lists'>
      <label htmlFor='menu-btn' className='fa-solid fa-xmark' />

      {/* Home link */}
      <NavLink exact to='/' activeClassName='active'>
        <li>Home</li>
      </NavLink>

      {/* About Us link */}
      <NavLink to='/about' activeClassName='active'>
        <li>About Us</li>
      </NavLink>

      {/* Dropdown submenu for "Tourist Spots" */}
      <li>
        <NavLink to='/' className={pathname === '/' ? 'active' : ''}>
          Tourist Spots
        </NavLink>
        <ul className='submenu'>
          {categories?.map(category => (
            <li key={category.slug}>
              <NavLink
                to={`/posts/${category.slug}`}
                activeClassName='active'
              >
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>

      Add Products link
      <NavLink to='/products' activeClassName='active'>
        <li>Products</li>
      </NavLink>
      
      {/* Add Contact link */}
      <NavLink to='/contact' activeClassName='active'>
        <li>Contact Us</li>
      </NavLink>
    </ul>
  );
};

export default NavLinks;
