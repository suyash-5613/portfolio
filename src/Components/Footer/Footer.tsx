import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h2 className="footer-heading">Let's build something amazing together.</h2>
        <p className="footer-desc">I am currently available for new projects and collaborations.</p>
        
        <div className="footer-socials">
          <a href="https://github.com/suyash-5613" target="_blank" rel="noreferrer" className="social-icon" aria-label="Github">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/suyash-sahu-914287276/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/__suyash_04__/" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="mailto:suyashsahu0405@gmail.com" className="social-icon" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Copyright © {new Date().getFullYear()} Suyash Sahu. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
