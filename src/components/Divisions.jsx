import { Link } from "react-router-dom";

function Divisions() {
  return (
    <section className="divisions">

      <h4>OUR DIVISIONS</h4>

      <h2>Everything Your Brand Needs</h2>

      <p className="division-text">
        AD Media Networks brings together creative media, modern technology,
        and professional music production under one roof to help businesses
        grow faster.
      </p>

      <div className="division-grid">

        <Link to="/media" className="division-card media">

          <div className="division-icon">📰</div>

          <h3>Media & News</h3>

          <p>
            Photography, Videography, PR, Branding,
            Content Creation and Digital Storytelling.
          </p>

          <span>Explore →</span>

        </Link>

        <Link to="/digital" className="division-card digital">

          <div className="division-icon">💻</div>

          <h3>Digital Technology</h3>

          <p>
            Website Development, AI Solutions,
            App Development, SEO and Marketing.
          </p>

          <span>Explore →</span>

        </Link>

        <Link to="/music" className="division-card music">

          <div className="division-icon">🎵</div>

          <h3>Music Production</h3>

          <p>
            Recording, Mixing, Mastering,
            Podcasts and Professional Audio Services.
          </p>

          <span>Explore →</span>

        </Link>

      </div>

    </section>
  );
}

export default Divisions;