import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavLinks = ({ categories }) => {
  const { pathname } = useLocation();

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
    </ul>
  );
};

export default NavLinks;
