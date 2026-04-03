import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="bento-grid">

        <div className="card bento-myself">
          <h3 className="heading">MYSELF</h3>
          <p className="desc">
            People can use{" "}
            <a
              className="desc-link"
              href="https://github.com/suyash-5613"
              target="_blank"
              rel="noreferrer"
            >
              suyash-5613
            </a>{" "}
            to find me. I am passionate about design, want to be a stand-alone
            UI/UX designer. A disciplined person who loves to explore things
            either a place or a language.
          </p>
          <p className="desc">
            I'm a highly motivated web developer with design skills who likes to
            work hard and try every possible means to complete the work. I am
            the person who works neat and clean, who mostly uses self-made designs.
          </p>
        </div>

        <div className="card bento-profile">
          <h3 className="heading">PROFILE</h3>
          <p className="desc">
            B.Tech Computer Science and Engineering, Koneru Lakshmaiah
            University Vijayawada
          </p>
          <p className="desc role-highlight">MERN Stack Developer</p>

          <div className="details-grid">
            <div className="detail-item">
              <span className="title">Name</span>
              <span className="value">Suyash Sahu</span>
            </div>
            <div className="detail-item">
              <span className="title">Birth Date</span>
              <span className="value">04 May, 2005</span>
            </div>
            <div className="detail-item">
              <span className="title">Phone</span>
              <span className="value">+91 9302489903</span>
            </div>
            <div className="detail-item">
              <span className="title">Address</span>
              <span className="value">Raipur, Chhattisgarh</span>
            </div>
            <div className="detail-item">
              <span className="title">Email</span>
              <span className="value">suyashsahu0405@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="card bento-skills">
          <h3 className="heading">SKILLS</h3>
          <p className="desc">
            Mostly work on frontend side, but also experience of backend (MERN
            Stack). And basic knowledge of various tools such as GITHUB, FIGMA
            etc.
          </p>
          <div className="skills-list">
            <div className="skill">
              <div className="skill-header">
                <span>Data Structures and Algorithms</span>
                <span>50%</span>
              </div>
              <div className="progress-area">
                <div className="progress glow" style={{ width: '50%' }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-header">
                <span>Web Development</span>
                <span>70%</span>
              </div>
              <div className="progress-area">
                <div className="progress glow" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-header">
                <span>Gaming</span>
                <span>75%</span>
              </div>
              <div className="progress-area">
                <div className="progress glow" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-header">
                <span>Graphic Design</span>
                <span>60%</span>
              </div>
              <div className="progress-area">
                <div className="progress glow" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-area">
        <button className="resume-btn">
          <svg className="resume-icon" viewBox="0 0 512 512">
            <path d="M0,179.714v248.969c0,13.568,11.101,24.669,24.669,24.669h50.632V155.107H24.669C11.101,155.107,0,166.146,0,179.714z" />
            <path d="M487.393,155.107h-50.632v298.245h50.632c13.506,0,24.607-11.101,24.607-24.669V179.714C512,166.146,500.899,155.107,487.393,155.107z" />
            <path d="M357.765,81.621c0-12.668-10.305-22.973-22.97-22.973h-157.57c-12.672,0-22.976,10.305-22.976,22.973v73.486h-30.101v298.245h263.709V155.107h-30.09V81.621z M197.418,101.818h117.177v53.289H197.418V101.818z" />
          </svg>
          <a
            href={`${process.env.PUBLIC_URL}/Suyash_Sahu_Resume.pdf`}
            download="Suyash-Sahu-Resume"
            className="resume-text"
          >
            Download Resume
          </a>
        </button>
      </div>
    </section>
  );
}

export default About;
