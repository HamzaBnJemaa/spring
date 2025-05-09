"use client"

import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="logo">SPRING</div>
          <div className={`menu-items ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
            <button className="get-started-btn">Get Start →</button>
          </div>
          <div className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
