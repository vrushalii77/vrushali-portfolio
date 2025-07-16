// import React from "react";
// import "./Footer.css";

// function Footer() {
//   return (
//     <footer className="footer-container">
//       <div className="footer-content">
//         <p>© 2025 Vrushali's Portfolio. All rights reserved.</p>
//         <div className="footer-links">
//           <a href="#home" className="footer-link">
//             Home
//           </a>
//           <a href="#about" className="footer-link">
//             About
//           </a>
//           <a href="#projects" className="footer-link">
//             Projects
//           </a>
//           <a href="#contact" className="footer-link">
//             Contact
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>© 2025 Vrushali's Portfolio. All rights reserved.</p>
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/vrushali-jadhav007/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/vrushalii77"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaGithub />
          </a>
          <a href="mailto:vrushalinjadhav123@gmail.com" className="footer-icon">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
