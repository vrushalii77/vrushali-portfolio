import React from "react";
import "./Project.css";

function Project() {
  return (
    <div className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Training & Placement Management System</h3>
          <p>
            The Training and Placement Management System is a web-based platform
            designed to streamline and automate the training and placement
            activities in a college. It helps students, placement officers, and
            recruiters efficiently manage placement-related tasks, including job
            postings, student applications, and placement drives.
          </p>
          <a
            href="https://github.com/vrushalii77/Training-And-Placement-Management"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>QuickPoll - A Simple Polling Application</h3>
          <p>
            QuickPoll is a lightweight and easy-to-use polling application built
            using Spring Boot and JDBC. This application allows users to create
            polls, add options, vote on their preferred options, and view poll
            results in real-time.
          </p>
          <a
            href="https://github.com/vrushalii77/QuickPoll---Live-Poll-Application"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Car-Rental-Automation-System – Spring Boot</h3>
          <p>
            CARCADDY is a Spring Boot-based Car Rental Automation System that
            simplifies vehicle management, bookings, and payments for rental
            agencies. It ensures secure authentication, real-time availability
            tracking, and a seamless rental experience.
          </p>
          <a
            href="https://github.com/vrushali/weather-app"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            View on GitHub
          </a>
        </div>
      </div>

      <div className="more-projects">
        <a
          href="https://github.com/vrushalii77"
          target="_blank"
          rel="noopener noreferrer"
          className="more-button"
        >
          ➕ See More Projects
        </a>
      </div>
    </div>
  );
}

export default Project;
