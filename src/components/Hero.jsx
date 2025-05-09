const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>We Build Experiences For Your Clients</h1>
            <p>
              Revolver Template is a professional webflow template with multiple sections that you can fully customize
            </p>
            <div className="contact-form">
              <input type="email" placeholder="quickrakibull@gmail.com" />
              <button className="get-trial-btn">Get free trial</button>
            </div>
          </div>
          <div className="hero-image">
            {/* Image placeholder */}
            <div className="image-placeholder"></div>
          </div>
        </div>
        <div className="services-preview">
          <div className="service-card">
            <div className="service-icon layout-icon"></div>
            <h3>Layout Design</h3>
            <p>Curabitur auctor metus et cursus feugiat phasellus tempus nibh non.</p>
            <a href="#" className="learn-more">
              Learn more
            </a>
          </div>
          <div className="service-card">
            <div className="service-icon graphic-icon"></div>
            <h3>Graphic Designer</h3>
            <p>Curabitur auctor metus et cursus feugiat phasellus tempus nibh non.</p>
            <a href="#" className="learn-more">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
