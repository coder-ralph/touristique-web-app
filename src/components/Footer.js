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
        <a href='https://www.facebook.com/profile.php?id=100094889472093' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-facebook-f'></i>
        </a>
        <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-youtube'></i>
        </a>
        <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-twitter'></i>
        </a>
        <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-instagram'></i>
        </a>
      </div>

      {/* Add the Privacy Policy link using the Link component */}
      <Link to="/privacy-policy" className="privacy-policy-link">
        Privacy Policy
      </Link>
      
    </footer>
  )
}

export default Footer
