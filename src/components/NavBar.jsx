"use client"

import { useState, useEffect } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="logo">SPRING</div>
          <div className={`menu-items ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <a href="#home" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#blog" onClick={() => setIsMenuOpen(false)}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#support" onClick={() => setIsMenuOpen(false)}>
                  Support
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>
                  About
                </a>
              </li>
            </ul>
            <button className="get-started-btn">Get Start →</button>
          </div>
          <div
            className={`mobile-menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            
            <span></span>
            <span></span>
            <span></span>
          </div>
          {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
