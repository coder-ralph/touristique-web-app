import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

import { graphcms, QUERY_SLUG_CATEGORIES } from '../Graphql/Queries'

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    graphcms.request(QUERY_SLUG_CATEGORIES)
    .then(res => setCategories(res.categories))
  }, [])


  return (
    <header>
      <input type="checkbox" id='menu-btn' hidden />
      <nav>
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Touristique Logo" />
          <span style={{ background: 'linear-gradient(to right, #7f71ff, #2b7ddf)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Touristique</span>
          {/* <span style={{ color: '#7f71ff' }}>Tourist</span>
          <span style={{ color: '#2b7ddf' }}>ique</span> */}
        </Link>
        {/* <img src="/text-logo.png" alt="Touristique Text" class="touristique-logo" /> */}
        <NavLinks categories={categories} />

        <label htmlFor="menu-btn" className='fa-solid fa-bars' />
      </nav>
    </header>
  )
}

export default Header
