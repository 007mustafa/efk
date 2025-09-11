import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-heading">Eef KayTech</h3>
        <p className="footer-text">
          Cell: +92 331-26095220 / +92 313-2509817
        </p>
        <p className="footer-text">
          Email:{" "}
          <a href="mailto:info@eefkaytech.com">info@eefkaytech.com</a> |{" "}
          <a href="mailto:fasih@eefkaytech.com">fasih@eefkaytech.com</a> |{" "}
          <a href="mailto:eefkaytech@gmail.com">eefkaytech@gmail.com</a>
        </p>
        <p className="footer-text">
          Address: PLT 909 C, FLT 5, 2ND FLOOR, BLK 2, P.E.C.H.S SOCIETY,
          Karachi.
        </p>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Eef KayTech. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
