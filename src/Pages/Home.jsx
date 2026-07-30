function Home() {
  return (
    <section id="home" className="hero">

      <div className="hero-left">

        <h4>WELCOME TO AD MEDIA NETWORKS</h4>

        <h1>
          Transforming Ideas Into
          <br />
          Digital Success
        </h1>

        <p>
          AD Media Networks is a full-service digital agency delivering premium
          websites, branding, digital marketing, social media management,
          photography, and creative media solutions that help businesses grow,
          connect, and succeed in the digital world.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Get a Free Quote</button>
          <button className="secondary-btn">View Portfolio</button>
        </div>

        {/* 👇 Add the hero stats here */}
        <div className="hero-stats">

          <div>
            <h3>250+</h3>
            <span>Projects</span>
          </div>

          <div>
            <h3>100+</h3>
            <span>Happy Clients</span>
          </div>

          <div>
            <h3>24/7</h3>
            <span>Support</span>
          </div>

        </div>

      </div>

      <div className="hero-right">

        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=700"
          alt="Digital Agency"
        />

      </div>

    </section>
  );
}

export default Home;