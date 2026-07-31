function Home() {
  return (
    <section id="home" className="hero">

      <div className="hero-left">

        <span className="hero-tag">
          🚀 Premium Media, Music & Digital Agency
        </span>

        <h1>
          Building Powerful
          <br />
          Brands Through
          <span className="highlight"> Media & Technology</span>
        </h1>

        <p>
          AD Media Networks is a creative agency specializing in Media &
          News, Digital Technology, and Music Production. We create
          high-quality digital experiences that help brands grow, engage,
          and stand out.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Get Free Quote
          </button>

          <button className="secondary-btn">
            View Portfolio
          </button>

        </div>

        <div className="hero-stats">

          <div>
            <h3>250+</h3>
            <span>Projects Delivered</span>
          </div>

          <div>
            <h3>100+</h3>
            <span>Happy Clients</span>
          </div>

          <div>
            <h3>5+</h3>
            <span>Years Experience</span>
          </div>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900"
            alt="AD Media Networks"
          />

          <div className="floating-card card1">
            ⭐⭐⭐⭐⭐
            <p>Trusted by Businesses</p>
          </div>

          <div className="floating-card card2">
            🚀
            <h4>Digital Growth</h4>
          </div>

          <div className="floating-card card3">
            🎬
            <h4>Creative Media</h4>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;