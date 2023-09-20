import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className='footer-social'>
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
        <a href='https://github.com/coder-ralph/touristique-web-app' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-github'></i>
        </a>
      </div>

      <div className="footer-text">
        <span className='copyright'>Copyright © 2023</span>
        <span> | </span>
        <span>Touristique. All Rights Reserved.</span>
        <br />
        <a
          href='/'
          className='author'
          // target='_blank'
          // rel='noopener noreferrer'
        >
          Made with ❤️ by Team Achievers
        </a>
      </div>

      <Link to="/the-team" className="the-team-link">
        The Team
      </Link>
    </footer>
  );
};

export default Footer;
