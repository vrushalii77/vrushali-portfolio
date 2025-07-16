import React from "react";
import { motion } from "framer-motion";
import "./Aboutme.css";

function Aboutme() {
  return (
    <>
      <motion.div
        className="aboutme"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2>About Me</h2>
        <div className="my-description">
          <span className="branch-desc">
            Hello! I'm Vrushali Jadhav, a Computer Science and Engineering
            graduate (B.Tech, June 2025) with a deep passion for Java Full Stack
            Development. I’ve gained hands-on experience in building responsive
            and dynamic web applications using Spring Boot, React JS, MySQL, and
            RESTful APIs. My journey includes working on real-time projects like
            CampusKart, EcoTracker, and a Weather Application, where I applied
            both frontend and backend skills to create practical solutions. I
            also completed an internship at Infosys Springboard, where I further
            strengthened my understanding of full stack architecture and
            development workflows.
          </span>

          <span className="branch-desc">
            I’m a quick learner, detail-oriented, and enthusiastic about working
            in collaborative environments. I enjoy turning ideas into efficient
            code and continuously strive to keep up with evolving technologies.
            Whether it’s building backend services, managing databases, or
            designing clean UI/UX, I love the entire development process. As a
            fresher, I’m eager to contribute to innovative projects, grow
            professionally, and make a meaningful impact as a Full Stack
            Developer in the tech industry.
          </span>
        </div>
        <div className="personal-info">
          <div className="info1">
            <span className="details">Name:</span>
            <span className="details1">Vrushali</span>
          </div>
          <div className="info1">
            <span className="details">Email:</span>
            <span className="details1">vrushali@example.com</span>
          </div>
          <div className="info2">
            <span className="details">Phone:</span>
            <span className="details1">+91 1234567890</span>
          </div>
          <div className="info2">
            <span className="details">Location:</span>
            <span className="details1">Latur, Maharashtra</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="experience-container"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="experience-title">Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Java Full Stack Intern</h3>
              <span>
                Techeon IT Services Pvt Ltd · Mar 2025 - Current (upto sep-2025)
              </span>
              <p>
                Currently working on the <strong>PreeNeet</strong> project, a
                live web platform designed to manage educational content and
                user workflows. I’ve contributed to both frontend and backend
                development, gaining hands-on experience with the complete tech
                stack.
              </p>
              <p>
                On the backend, I developed and integrated RESTful APIs using{" "}
                <strong>Spring Boot</strong> for modules like student management
                and course flow. On the frontend, I worked on the{" "}
                <strong>PreeNeet Admin Panel</strong> using{" "}
                <strong>React.js</strong> and <strong>Tailwind CSS</strong>,
                building responsive and modular UI components.
              </p>
              <p>
                I collaborated closely with the senior development team,
                followed Agile practices, and used Git for version control. This
                internship helped me understand real-time architecture, clean
                code practices, and full-stack project flow from start to
                deployment.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Java Full Stack Intern</h3>
              <span>Infosys Springboard · Dec 2024 - Feb 2025</span>
              <p>
                Successfully completed a team-based internship project titled{" "}
                <strong>CarCaddy – Car Rental Automation System</strong>, under
                the Infosys Springboard Java Full Stack Development Program. The
                project aimed to automate and streamline the car rental process
                using modern web technologies.
              </p>
              <p>
                Our team worked in{" "}
                <strong>Agile methodology with sprint-based planning</strong>,
                and I was responsible for different roles across four sprints.
                In <strong>Sprint 1</strong>, I contributed as a{" "}
                <strong>Backend Developer</strong>, where I created RESTful APIs
                for car registration, availability, and booking using{" "}
                <strong>Java and Spring Boot</strong>. In{" "}
                <strong>Sprint 2</strong>, I worked on the{" "}
                <strong>frontend</strong> using{" "}
                <strong>HTML, CSS, JavaScript, and Thymeleaf</strong> to build
                dynamic and responsive UI for the Car module.
              </p>
              <p>
                In <strong>Sprint 3</strong>, I took on the role of a{" "}
                <strong>Tester</strong>, validating API responses and UI
                functionality using tools like Postman and performing manual
                testing to ensure quality and correctness. Finally, in{" "}
                <strong>Sprint 4</strong>, I led as the{" "}
                <strong>Scrum Master</strong>, handling team coordination,
                sprint planning, and daily stand-ups to ensure smooth progress
                and delivery.
              </p>
              <p>
                This project enhanced my end-to-end development skills, taught
                me real-world team collaboration, and gave hands-on experience
                in the full software development lifecycle.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Web Development Intern</h3>
              <span>
                Operand Technologies and IT solutions · Aug 2024 - Oct 2024
              </span>
              <p>
                Developed a Training and Placement Management System for the
                college, working on both frontend and backend. Designed
                responsive user interfaces using HTML, CSS, JavaScript, and
                jQuery, and implemented backend functionalities with PHP and
                MySQL for efficient data handling and user management.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Aboutme;
