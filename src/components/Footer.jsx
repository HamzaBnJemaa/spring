"use client"

import { useState } from "react"

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (index) => {
    if (expandedSection === index) {
      setExpandedSection(null)
    } else {
      setExpandedSection(index)
    }
  }

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", url: "#" },
        { name: "Why Cequence", url: "#" },
        { name: "Technology", url: "#" },
        { name: "Security", url: "#" },
        { name: "Pricing", url: "#" },
      ],
    },
    {
      title: "Solution",
      links: [
        { name: "Procurement", url: "#" },
        { name: "Sales", url: "#" },
        { name: "Legal", url: "#" },
        { name: "Medium Businesses", url: "#" },
        { name: "Enterprises", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Careers", url: "#" },
        { name: "Case study", url: "#" },
      ],
    },
    {
      title: "Links",
      links: [
        { name: "Facebook", url: "#" },
        { name: "LinkedIn", url: "#" },
      ],
    },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {footerSections.map((section, index) => (
            <div key={section.title} className="footer-column">
              <div className="footer-heading" onClick={() => toggleSection(index)}>
                <h3>{section.title}</h3>
                <span className={`footer-toggle ${expandedSection === index ? "active" : ""}`}>
                  {expandedSection === index ? "−" : "+"}
                </span>
              </div>
              <ul className={`footer-links ${expandedSection === index ? "expanded" : ""}`}>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Spring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
