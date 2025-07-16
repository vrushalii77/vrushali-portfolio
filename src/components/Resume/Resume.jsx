import React from "react";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import "./Resume.css";

function Resume() {
  return (
    <motion.div
      className="resume-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="resume-title">My Resume</h2>

      <div className="resume-box">
        <div className="resume-header">
          <h1 className="resume-name">Vrushali Jadhav</h1>
          <p className="resume-links">
            <FaPhone /> +91 9373635461 &nbsp; | &nbsp;
            <FaEnvelope /> vrushalinjadhav123@gmail.com &nbsp; | &nbsp;
            <FaMapMarkerAlt /> Pune, Maharashtra
          </p>
          <p className="resume-links">
            <FaLinkedin />{" "}
            <a
              href="https://www.linkedin.com/in/vrushali-jadhav007"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            &nbsp; | &nbsp;
            <FaGithub />{" "}
            <a
              href="https://github.com/vrushalii77"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>

        <div className="resume-content">
          <section>
            <h3>Objective</h3>
            <p>
              Enthusiastic Computer Science graduate (May 2025) with hands-on
              experience in Java Full Stack Development including Spring Boot,
              MySQL, and React. Seeking a Full Stack or Java Developer role to
              apply technical skills and grow in a dynamic team environment.
            </p>
          </section>

          <section>
            <h3>Experience</h3>
            <ul>
              <li>
                <strong>Techeon IT Services Pvt. Ltd.</strong> – Java Full Stack
                Intern (Mar 2025 – Present)
              </li>
              <li>
                <strong>Infosys Springboard</strong> – Java Full Stack Developer
                Intern (Dec 2024 – Feb 2025)
              </li>
              <li>
                <strong>Operand Technologies</strong> – Full Stack Intern (Oct
                2023 – Dec 2023)
              </li>
            </ul>
          </section>

          <section>
            <h3>Projects</h3>
            <ul>
              <li>
                <strong>Training & Placement Management</strong> –{" "}
                <a
                  href="https://github.com/vrushalii77/Training-And-Placement-Management"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <strong>CarCaddy – Car Rental Automation</strong> –{" "}
                <a
                  href="https://github.com/vrushalii77/Car-Rental-Automation-System"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <strong>Medical Management System</strong> – Inventory & Digital
                Drawer App
              </li>
            </ul>
          </section>

          <section>
            <h3>Skills</h3>
            <p>
              <strong>Languages:</strong> C, Java, HTML, CSS, JavaScript
            </p>
            <p>
              <strong>Frameworks:</strong> React, Spring Boot, Hibernate
            </p>
            <p>
              <strong>Databases:</strong> MySQL
            </p>
            <p>
              <strong>Tools:</strong> Git, STS, Postman, XAMPP
            </p>
          </section>

          <section>
            <h3>Education</h3>
            <p>
              <strong>B.Tech (CSE)</strong>, DBATU – 2025 – 8.06 CGPA
            </p>
            <p>
              <strong>Diploma (CSE)</strong>, MSBTE – 2022 – 86.47%
            </p>
          </section>

          <section>
            <h3>Certifications</h3>
            <ul>
              <li>Java Programming – Infosys Springboard</li>
              <li>Database Management – Infosys Springboard</li>
              <li>MERN Stack Intro – Simplilearn</li>
            </ul>
          </section>

          <section>
            <h3>Personal Details</h3>
            <p>
              <strong>Date of Birth:</strong> 25/06/2003
            </p>
            <p>
              <strong>Languages:</strong> English, Hindi, Marathi
            </p>
            <p>
              <strong>Hobbies:</strong> Listening to music, Reading books,
              Watching movies
            </p>
          </section>

          <div className="resume-download">
            <a
              href="/Vrushali Jadhav(CV).pdf"
              download
              className="download-btn"
            >
              <FaDownload /> Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
