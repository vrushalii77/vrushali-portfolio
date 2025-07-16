import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";

function Intro() {
  return (
    <>
      <section id="intro">
        <div className="intro-content">
          <span className="hi">Hello,</span>
          <br />
          <span className="im">
            I'm <span className="name">Vrushali</span>
          </span>
          <br />
          <span className="profession">Java Full Stack Developer</span>
          <p>
            I am a dedicated Java Full Stack Developer who loves building
            user-friendly websites and applications with a strong focus on
            performance, design, and functionality.
          </p>
        </div>
        <div className="btn-content">
          <Link to="/Contact">
            <button className="hireme-btn">
              <img className="hireme-img" src="./hireme.png" alt="hire me" />
              Get In Touch
            </button>
          </Link>
          <Link to="/Project">
            <button className="hireme-btn">
              <img className="hireme-img" src="./hireme.png" alt="hire me" />
              View Projects
            </button>
          </Link>
        </div>
        {/* <div className="intro-img">
        <img className="selfimg" src="./VrushaliSelfPic.jpg" alt="Vrushali" />
      </div> */}
      </section>
      {/* <section id="about">
        <span className="about-heading">About Me</span>

        <div className="about-box">
          <div className="abt-me">
            <span className="i-am">Who I Am</span>
            <span className="about-description">
              I am Vrushali Jadhav, a passionate and dedicated Java Full Stack
              Developer with a strong foundation in both front-end and back-end
              development. I specialize in building user-friendly, responsive,
              and performance-driven web applications. With hands-on experience
              in technologies like Java, Spring Boot, React, MySQL, and more.
            </span>
            <span className="about-description">
              I enjoy transforming ideas into real-world solutions. I am
              continuously learning, exploring new tech, and striving to grow as
              a developer every day. My goal is to contribute to impactful
              projects and be a part of innovative teams that value clean code
              and creative problem-solving
            </span>
            <div className="abt-btn">
              <Link to="/aboutme">
                <button className="abt-btn1">More About Me</button>
              </Link>
              <Link to="/project">
                <button className="abt-btn1">See my work</button>
              </Link>
            </div>
          </div>
          <div className="about-img">
            <img src="./girl2.png" alt="girl with laptop" />
          </div>
        </div>
      </section> */}
      <section id="about">
        <span className="about-heading">About Me</span>

        <div className="about-box">
          <div className="abt-me">
            <span className="i-am">Who I Am</span>

            {/* Grouped description and buttons */}
            <div className="about-body">
              <span className="about-description">
                I am Vrushali Jadhav, a passionate and dedicated Java Full Stack
                Developer with a strong foundation in both front-end and
                back-end development. I specialize in building user-friendly,
                responsive, and performance-driven web applications. With
                hands-on experience in technologies like Java, Spring Boot,
                React, MySQL, and more.
              </span>
              <span className="about-description">
                I enjoy transforming ideas into real-world solutions. I am
                continuously learning, exploring new tech, and striving to grow
                as a developer every day. My goal is to contribute to impactful
                projects and be a part of innovative teams that value clean code
                and creative problem-solving.
              </span>
              <div className="abt-btn">
                <Link to="/aboutme">
                  <button className="abt-btn1">More About Me</button>
                </Link>
                <Link to="/project">
                  <button className="abt-btn1">See my work</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="about-img">
            <img src="./girl2.png" alt="girl with laptop" />
          </div>
        </div>
      </section>

      <section className="skills">
        <span className="skills-heading">My Skills</span>
        <div className="skill-boxes">
          <div className="skill-box1">
            <span className="skill-name">Languages</span>
            <button className="lang">Java</button>
            <button className="lang">Python</button>
            <button className="lang">C</button>
            <button className="lang">SQL</button>
          </div>

          <div className="skill-box1">
            <span className="skill-name">Web Development</span>
            <button className="lang">HTML</button>
            <button className="lang">CSS</button>
            <button className="lang">Tailwind CSS</button>
            <button className="lang">JavaScript</button>
            <button className="lang">React</button>
          </div>

          <div className="skill-box1">
            <span className="skill-name">Tools & Others</span>
            <button className="lang">VS Code</button>
            <button className="lang">Eclipse IDE</button>
            <button className="lang">Visual Studio 2022</button>
            <button className="lang">GIT</button>
          </div>
        </div>
        <div className="work-together">
          <span className="head1">Let's Work Together</span>
          <span className="head2">
            I'm Always open to discussing about new Projects, internship
            oportunities, or ways to contribute to your team{" "}
          </span>
          <Link to="/contact">
            <button className="work-btn">Get In Touch</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Intro;
