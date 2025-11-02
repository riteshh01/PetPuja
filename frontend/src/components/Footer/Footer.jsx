import React, { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer-simple ${theme}`}>
      <div className="footer-wrapper">

        <div className="footer-col brand">
          <h2>PetPuja<span>.</span></h2>
          <p>Delivering happiness, one bite at a time. Enjoy your favorite meals with comfort and care.</p>
        </div>


        <div className="footer-col links">
          <h3>Explore</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>


        <div className="footer-col contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:support@petpuja.com">support@petpuja.com</a></p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Ahmedabad, India</p>
        </div>


        <div className="footer-col social">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-credit">
        <p>© {new Date().getFullYear()} <span>PetPuja</span> — Crafted with 🧡 by <b>Ritesh Patel</b></p>
      </div>
    </footer>
  );
};

export default Footer;