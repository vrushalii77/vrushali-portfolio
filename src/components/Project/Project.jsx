import React from "react";
import "./Project.css";
import { FaGithub } from "react-icons/fa";

function Project() {
  const projects = [
    {
      title: "Training & Placement Management System",
      description:
        "A comprehensive web-based application designed for colleges to effectively manage Training and Placement activities. This system facilitates seamless coordination between students, TPOs (Training and Placement Officers), and recruiters. It allows students to view and apply for job openings, while TPOs can post drives, manage company data, and monitor student applications. The platform ensures streamlined record keeping, communication, and placement tracking, enhancing the overall efficiency of the campus recruitment process.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", " JQuery "],
      github:
        "https://github.com/vrushalii77/Training-And-Placement-Management",
    },
    {
      title: "QuickPoll - Live Poll Application",
      description:
        "QuickPoll allows users to create polls and view live results. Built with Spring Boot and JDBC for seamless voting experience.",
      tech: ["Spring Boot", "Java", "JDBC", "HTML/CSS"],
      github:
        "https://github.com/vrushalii77/QuickPoll---Live-Poll-Application",
    },
    {
      title: "Car-Rental Automation System",
      description:
        "A team-based web application developed during the Infosys Springboard Internship, designed to automate the car rental process for agencies. This Spring Boot-based system manages car availability, bookings, customer details, and secure payments through a user-friendly interface. Admins can easily add, update, or remove cars, while customers can browse available vehicles and make bookings seamlessly. The project ensures efficient rental operations and reduces manual workload.",
      tech: ["Spring Boot", "Java", "MySQL", "Thymeleaf"],
      github: "https://github.com/vrushali/weather-app",
    },
  ];

  return (
    <section className="projects-stack-section" id="projects">
      <h2 className="stack-title">Projects</h2>
      <div className="stacked-projects">
        {projects.map((proj, idx) => (
          <div className="stack-project-card" key={idx}>
            <div className="stack-project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tech-stack">
                {proj.tech.map((tech, i) => (
                  <span className="tech-pill" key={i}>
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={proj.github}
                className="stack-github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="github-icon" /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="more-projects-btn">
        <a
          href="https://github.com/vrushalii77?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <span>View More Projects</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </a>
      </div>
    </section>
  );
}

export default Project;
