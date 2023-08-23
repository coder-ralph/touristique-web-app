import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <span className='copyright'>Copyright 2023 | Touristique</span>
      {/* Link your name to your GitHub profile */}
      <a
        href='https://github.com/coder-ralph'
        className='author'
        target='_blank'
        rel='noopener noreferrer'
      >
        Made with ❤️ by Ralph Rosael
      </a>

      <div className='footer-social'>
        {/* Replace "/" with the appropriate URLs for your social media profiles */}
        {/* Use the Link component for your social media links */}
        <Link to='https://www.facebook.com/profile.php?id=100094889472093'>
          <i className='fab fa-facebook-f'></i>
        </Link>
        <Link to='/'>
          <i className='fab fa-youtube'></i>
        </Link>
        <Link to='/'>
          <i className='fab fa-twitter'></i>
        </Link>
        <Link to='/'>
          <i className='fab fa-instagram'></i>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
