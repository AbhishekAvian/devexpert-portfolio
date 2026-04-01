import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (
    <div>
      <>
  {/* HEADER */}
  <header id="header">
    <div className="container">
      <nav className="nav-inner">
        <Link to="/" className="logo">
          Dev<span>Expert</span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="#services">Services</Link>
          </li>
          <li>
            <a href="#clients">Clients</a>
          </li>
          <li>
            <a href="#tech">Tech</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
        <div className="nav-cta">
          <a
            href="#"
            className="btn btn-outline"
            style={{ padding: "10px 22px", fontSize: 13 }}
          >
            <i className="fa fa-download" /> Resume
          </a>
          <a
            href="contact.html"
            className="btn btn-primary"
            style={{ padding: "10px 22px", fontSize: 13 }}
          >
            Hire Me
          </a>
        </div>
        <button className="hamburger" id="hamburgerBtn">
          <span />
          <span />
          <span />
        </button>
      </nav>
    </div>
  </header>
  <div className="mobile-menu" id="mobileMenu">
    <a href="#about" className="mobile-link">
      About
    </a>
    <a href="#services" className="mobile-link">
      Services
    </a>
    <a href="#clients" className="mobile-link">
      Clients
    </a>
    <a href="#tech" className="mobile-link">
      Tech
    </a>
    <a href="#projects" className="mobile-link">
      Projects
    </a>
    <a href="contact.html" className="mobile-link">
      Contact
    </a>
    <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
      <a href="#" className="btn btn-outline">
        Download Resume
      </a>
      <a href="contact.html" className="btn btn-primary">
        Hire Me
      </a>
    </div>
  </div>
</>

    </div>
  )
}
