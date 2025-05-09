const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <div className="container">
        <div className="about-section">
          <div className="about-image">
            {/* Image placeholder */}
            <div className="circular-image"></div>
          </div>
          <div className="about-text">
            <h2>Not just your regular design agency</h2>
            <p>
              Quis ipsoum suspendisses ultrices gravida rusus commodo viverra maecenas accumsan. Quis ipsoum
              suspendisses ultrices gravida rusus commodo viverra maecenas accumsan
            </p>
            <button className="learn-more-btn">Learn more</button>
          </div>
        </div>

        <div className="about-section reverse">
          <div className="about-text">
            <h2>We design products that users love</h2>
            <p>
              Quis ipsoum suspendisses ultrices gravida rusus commodo viverra maecenas accumsan. Quis ipsoum
              suspendisses ultrices gravida rusus commodo viverra maecenas accumsan
            </p>
            <button className="learn-more-btn">Learn more</button>
          </div>
          <div className="about-image">
            {/* Image placeholder */}
            <div className="circular-image"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
