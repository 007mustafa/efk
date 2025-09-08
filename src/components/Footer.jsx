import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h3 className="footer-heading">eefkaytech.com</h3>
          <p className="footer-text">
            Eef KayTech is committed to empowering your business with
            high-quality engineering solutions. Experience the difference with
            our tailored services.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3 className="footer-heading">Contact</h3>
          <p className="footer-text">1234 Technology Avenue</p>
          <p className="footer-text">44000 Islamabad</p>
          <p className="footer-text">Phone: +92 51 1234567</p>
          <p className="footer-text">Mobile: —</p>
          <p className="footer-text">Email: info@eefkaytech.com</p>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3 className="footer-heading">Navigation</h3>
          <ul className="footer-links">
            <li>Home</li>
            <li>About Us</li>
            <li>Values</li>
            <li>Services</li>
            <li>Team</li>
            <li>Legal Notice</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h3 className="footer-heading">Social Media</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
  <FaTwitter />
</a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Eef KayTech. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
