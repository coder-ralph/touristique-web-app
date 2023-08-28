import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <span className='copyright'>Copyright 2023 |</span>
        <img src="/logo.png" alt="Touristique Logo" />
        <span>Touristique</span>
      </div>
      {/* Link your name to your GitHub profile */}
      <a
        href='/'
        className='author'
        target='_blank'
        rel='noopener noreferrer'
      >
        Made with ❤️ by Team Achievers 🚀
      </a>

      <div className='footer-social'>
        {/* Replace "/" with the appropriate URLs for your social media profiles */}
        {/* Use the Link component for your social media links */}
        <Link to='https://www.facebook.com/profile.php?id=100094889472093'>
          <i className='fab fa-facebook-f'></i>
        </Link>
        <Link to='/https://www.youtube.com/'>
          <i className='fab fa-youtube'></i>
        </Link>
        <Link to='/https://twitter.com/'>
          <i className='fab fa-twitter'></i>
        </Link>
        <Link to='/https://www.instagram.com/'>
          <i className='fab fa-instagram'></i>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
