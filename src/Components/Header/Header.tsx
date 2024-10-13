import React from "react";
import "./Header.css";
import hero_image from "../../Assets/hero-image.png";
import arrow from "../../Assets/arrow-1.svg";
import line_1 from "../../Assets/line-1.svg";
import line_2 from "../../Assets/line-2.svg";
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
            <a href="https://github.com/suyash-5613" target="_blank">
              <FaGithub></FaGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/suyash-sahu-914287276/"
              target="_blank"
            >
              <FaLinkedin></FaLinkedin>
            </a>
            <a href="https://www.instagram.com/__suyash_04__/" target="_blank">
              <FaInstagram></FaInstagram>
            </a>
          </div>
            <button className="hire-me" >
              Hire me
            </button>
        </div>
      </div>
      <div className="header-right">
        <div className="circle"></div>
        <img className="profile" src={hero_image} alt="" />
        <img className="arrow-1" src={arrow} alt="" />
        <img className="line-1" src={line_1} alt="" />
        <img className="line-2" src={line_2} alt="" />
      </div>
    </section>
  );
}

export default Header;
