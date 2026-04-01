import React from 'react'

export default function Footer() {
  return (
    <div>
      <>
  <footer>
    <div className="container">
      <div className="footer-inner">
        <a href="index.html" className="footer-logo">
          Dev<span>Expert</span>
        </a>
        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#tech">Technologies</a>
          <a href="portfolio.html">Projects</a>
          <a href="contact.html">Contact</a>
        </nav>
        <div className="social-links">
          <a href="#" className="social-link">
            <i className="fab fa-instagram" />
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="#" className="social-link wa">
            <i className="fab fa-whatsapp" />
          </a>
        </div>
        <div className="footer-divider" />
        <p className="footer-copy">
          © 2026 <span>DevExpert</span>. Crafted with precision &amp; passion.
          All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  <button id="back-top">
    <i className="fa fa-arrow-up" />
  </button>
</>

    </div>
  )
}
