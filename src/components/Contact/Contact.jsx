import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Message sent successfully!");
  };

  return (
    <motion.div
      className="contact-section"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="contact-title">Get In Touch</h2>

      <div className="contact-box">
        <div className="contact-details">
          <p>
            <FaEnvelope /> vrushalinjadhav123@gmail.com
          </p>
          <p>
            <FaPhone /> +91 9373635461
          </p>
          <p>
            <FaMapMarkerAlt /> Pune, Maharashtra
          </p>
          <p>
            <FaLinkedin />{" "}
            <a
              href="https://www.linkedin.com/in/vrushali-jadhav007"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p>
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

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button type="submit">Send Message</button>
          {status && <p>{status}</p>}
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
