// Footer.jsx

import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css';  

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="https://github.com/CarlosCallejaSaez" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        
        <a href="https://www.linkedin.com/in/carlos-calleja-saez/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
      </div>
      <p className="copyright">&copy; 2023 Carlos Calleja</p>
    </footer>
  );
};

export default Footer;
