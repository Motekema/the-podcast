import React from "react";
import "./Style/footer.css";

const Footer = () => {
  return (
    <footer className="podcast-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>If you have any questions or feedback, feel free to reach out to us.</p>
            <button className="btn btn-contact">Contact</button>
          </div>
          <div className="footer-section">
            <h3>Subscribe</h3>
            <p>Stay updated with our latest episodes by subscribing to our podcast.</p>
            <div className="subscribe-form">
              <input type="email" placeholder="Your Email" className="subscribe-input" />
              <button className="btn btn-subscribe">Subscribe</button>
            </div>
          </div>
          <div className="footer-section">
            <h3>Explore</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/episodes">Episodes</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-legal">
          <p>&copy; {new Date().getFullYear()} L-Tido Podcast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
