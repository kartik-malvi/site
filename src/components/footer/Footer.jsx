import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Kartik</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Project
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
        <a href="https://www.instagram.com/malvi_kartik09/" className="footer__social-link" target="_blank" rel="noopener">
            <i class="uil uil-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/kartik-malviya-3a9a821b2/" className="footer__social-link" target="_blank" rel="noopener">
            <i class="uil uil-linkedin"></i>
            </a>

            <a href="https://github.com/kartik-malvi" className="footer__social-link" target="_blank" rel="noopener">
            <i class="uil uil-github-alt"></i>
            </a>
        </div>

        <span className="footer__copy">
            &#169; Kartik Malviya. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
