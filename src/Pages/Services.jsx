import { Link } from "react-router-dom";

function Services() {
  return (
    <section className="services-page">

      <div className="services-hero">

        <h4>OUR EXPERTISE</h4>

        <h1>
          Three Powerful Divisions.
          <br />
          One Creative Partner.
        </h1>

        <p>
          AD Media Networks combines creative storytelling, cutting-edge
          technology, and professional music production to help brands grow,
          engage audiences, and create unforgettable experiences.
        </p>

      </div>

      <div className="division-grid">

        <Link to="/media" className="division-card media-card">

          <div className="division-icon">📰</div>

          <h2>Media & News</h2>

          <p>
            Photography, Videography, News Coverage,
            Social Media, PR & Brand Communication.
          </p>

          <span>Explore Division →</span>

        </Link>


        <Link to="/digital" className="division-card digital-card">

          <div className="division-icon">💻</div>

          <h2>Digital Technology</h2>

          <p>
            Website Development, AI Solutions,
            UI/UX Design, SEO & Digital Marketing.
          </p>

          <span>Explore Division →</span>

        </Link>


        <Link to="/music" className="division-card music-card">

          <div className="division-icon">🎵</div>

          <h2>Music Production</h2>

          <p>
            Recording, Mixing, Mastering,
            Podcasts and Audio Branding.
          </p>

          <span>Explore Division →</span>

        </Link>

      </div>

    </section>
  );
}

export default Services;