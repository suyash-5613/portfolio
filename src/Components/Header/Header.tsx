import React from "react";
import "./Header.css";
import hero_image from "../../Assets/Prof Image 2.0.png";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <section className="header" id="home">
      <div className="header-left">
        <div className="header-left-content">
          <h1>Suyash Sahu</h1>
          <div className="desc">
            <p>Software Developer</p>
            <hr />
          </div>
          <p className="about-me">
            I'm a passionate software developer with a focus on solving complex
            problems through innovative code. I build efficient solutions that
            enhance user experiences and drive results.
          </p>
          <div className="social-links">
            <a href="https://github.com/suyash-5613" target="_blank" rel="noreferrer">
              <FaGithub></FaGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/suyash-sahu-914287276/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin></FaLinkedin>
            </a>
            <a href="https://www.instagram.com/__suyash_04__/" target="_blank" rel="noreferrer">
              <FaInstagram></FaInstagram>
            </a>
          </div>
            <button className="hire-me" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Hire me
            </button>
        </div>
      </div>
      <div className="header-right">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <img className="profile premium-portrait" src={hero_image} alt="Suyash Sahu" />
      </div>
    </section>
  );
}

export default Header;
