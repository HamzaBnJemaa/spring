const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-content">
          <div className="welcome-section">
            <div className="welcome-image">
              {/* Image placeholder */}
              <div className="image-placeholder"></div>
            </div>
            <div className="welcome-text">
              <h2>Welcome</h2>
              <p>We help you build something amazing</p>
              <button className="learn-more-btn">Learn more</button>
            </div>
          </div>

          <div className="service-list">
            <h2>We Provide This Service</h2>
            <div className="service-grid">
              <div className="service-item highlighted">
                <h3>Layout Design</h3>
                <p>Learn more</p>
              </div>
              <div className="service-item">
                <h3>Graphic Design</h3>
                <p>Learn more</p>
              </div>
              <div className="service-item">
                <h3>Mobile Design</h3>
                <p>Learn more</p>
              </div>
              <div className="service-item">
                <h3>App Design</h3>
                <p>Learn more</p>
              </div>
              <div className="service-item">
                <h3>Web design</h3>
                <p>Learn more</p>
              </div>
              <div className="service-item">
                <h3>Landign Page</h3>
                <p>Learn more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
