"use client"

import { useState } from "react"

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null)
    } else {
      setOpenFaq(index)
    }
  }

  const faqItems = [
    { id: "01", question: "Can you design My website" },
    { id: "02", question: "Can you design My website" },
    { id: "03", question: "Can you design My website" },
    { id: "04", question: "Can you design My website" },
    { id: "05", question: "Can you design My website" },
    { id: "06", question: "Can you design My website" },
  ]

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-header">
          <h2>FAQ</h2>
          <p>
            The purpose of a FAQ is generally to provide information on frequent questions or concerns. however, the
            format is a useful means of organizing information, and text
          </p>
        </div>

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div key={item.id} className={`faq-item ${openFaq === index ? "open" : ""}`}>
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <div className="faq-question-text">
                  <span className="faq-number">{item.id}</span>
                  <h3>{item.question}</h3>
                </div>
                <div className="faq-icon">{openFaq === index ? "+" : "-"}</div>
              </div>
              {openFaq === index && (
                <div className="faq-answer">
                  <p>
                    This is the answer to the frequently asked question. We provide detailed information here to help
                    our customers understand our services better.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
