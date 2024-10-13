import React from "react";
import "./About.css";
import work from "../../Assets/work.svg";

function About() {
  return (
    <>
      <section id="about" className="about">
        <div className="intro">
          <h1 className="heading">MYSELF</h1>
          <p className="desc">
            People can use
            <a
              className="desc-link"
              href="https://github.com/suyash-5613"
              target="_blank"
            >
              suyash-5613
            </a>
            to find me. I am passionate about design, want to be a stand-alone
            UI/UX designer. A disciplined person who loves to explore things
            either a place or a language.
          </p>
          <p className="desc">
            I'm a highly motivated web developer with design skills who likes to
            work hard and try every possible means to complete the work .I am
            the person who work neat and clean, who most use self made designs.
          </p>
        </div>
        <div className="brief">
          <div className="intro">
            <h1 className="heading">PROFILE</h1>
            <p className="desc">
              B.Tech Computer Science and Engineering, Koneru Lakshmiah
              University Vijayawada
            </p>
            <p className="desc">MERN Stack Developer</p>
            <div className="details">
              <p>
                <span className="title">Name:</span>
                <br />
                Suyash Sahu
              </p>
              <p>
                <span className="title">Birth Date:</span>
                <br />
                04 May, 2005
              </p>
              <p>
                <span className="title">Phone Number:</span>
                <br />
                +91 9302489903
              </p>
              <p>
                <span className="title">Address:</span>
                <br />
                Raipur, Chhattisgarh
              </p>
              <p>
                <span className="title">Email:</span>
                <br />
                suyashsahu0405@gmail.com
              </p>
            </div>
          </div>
          <div className="intro">
            <h1 className="heading">SKILLS</h1>
            <p className="desc">
              Mostly work on frontend side, but also experience of backend (MERN
              Stack). And basic knowledge of various tools such as GITHUB, FIGMA
              etc.
            </p>
            <div className="skills">
              <div className="skill">
                <span>Data Structures and Algorithms</span>
                <div className="progress-area">
                  <div className="progress dsa"></div>
                </div>
              </div>
              <div className="skill">
                <span>Web Development</span>
                <div className="progress-area">
                  <div className="progress web"></div>
                </div>
              </div>
              <div className="skill">
                <span>Gaming</span>
                <div className="progress-area">
                  <div className="progress mobile"></div>
                </div>
              </div>
              <div className="skill">
                <span>Graphic Design</span>
                <div className="progress-area">
                  <div className="progress design"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-area">
          <button className="resume">
            <svg
              height="800px"
              width="800px"
              version="1.1"
              id="_x32_"
              viewBox="0 0 512 512"
            >
              <g>
                <path
                  className="st0"
                  d="M0,179.714v248.969c0,13.568,11.101,24.669,24.669,24.669h50.632V155.107H24.669
		C11.101,155.107,0,166.146,0,179.714z"
                />
                <path
                  className="st0"
                  d="M487.393,155.107h-50.632v298.245h50.632c13.506,0,24.607-11.101,24.607-24.669V179.714
		C512,166.146,500.899,155.107,487.393,155.107z"
                />
                <path
                  className="st0"
                  d="M357.765,81.621c0-12.668-10.305-22.973-22.97-22.973h-157.57c-12.672,0-22.976,10.305-22.976,22.973v73.486
		h-30.101v298.245h263.709V155.107h-30.09V81.621z M197.418,101.818h117.177v53.289H197.418V101.818z"
                />
              </g>
            </svg>{" "}
            <a
              className="resume-text"
              href="/Assets/resume.pdf"
              download="Suyash-Sahu-Resume"
            >
              RESUME
            </a>
          </button>
        </div>
      </section>
    </>
  );
}

export default About;
