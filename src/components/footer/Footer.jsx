import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Alexis</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">À propos</a>
          </li>
          <li>
            <a href="#" className="footer__link">Compétences</a>
          </li>
          <li>
            <a href="#" className="footer__link">Services</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.linkedin.com/" className="footer__social-link" target="_blank">
            <i class="uil uil-linkedin"></i>
          </a>

          <a href="https://github.com/" className="footer__social-link" target="_blank">
            <i class="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &copy;Alexis - Tout droits réservés
        </span>
      </div>
    </footer>
  )
}

export default Footer