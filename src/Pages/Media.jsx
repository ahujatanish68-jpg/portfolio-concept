import "./media-temp.css";
import { useNavigate } from "react-router-dom";
function Media() {
  
const navigate = useNavigate();
const goToPortfolio = () => {

  navigate("/", {
    state: {
      section: "portfolio"
    }
  });

};
return (
  <div className="media-page">

    {/* Hero Section */}
    <section className="media-hero">

      <div className="service-content">

        <h4>MEDIA & NEWS</h4>

        <h1>
          Empowering Brands Through
          <span className="highlight"> Strategic Media</span>
        </h1>

        <p>
          We deliver premium media solutions including television production,
          news coverage, public relations, digital publishing, content creation,
          and brand storytelling—helping businesses build credibility, expand
          their reach, and create meaningful connections with their audience.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Explore Services ▼</button>

          <button
            className="secondary-btn"
            onClick={goToPortfolio}
          >
            Our Portfolio
          </button>
        </div>

      </div>

    </section>

    {/* Services */}
    <section className="media-services">

      <h2>Media & News Services</h2>

      <div className="media-options">

        <div className="media-option-card">
          <span className="icon">📰</span>
          <h3>News Coverage</h3>
          <p>Latest news updates and coverage.</p>
        </div>

        <div className="media-option-card">
          <span className="icon">🎥</span>
          <h3>Video Production</h3>
          <p>Creative video production.</p>
        </div>

        <div className="media-option-card">
          <span className="icon">📢</span>
          <h3>Public Relations</h3>
          <p>Brand promotion and media.</p>
        </div>

        <div className="media-option-card">
          <span className="icon">🌐</span>
          <h3>Digital Media</h3>
          <p>Online presence and campaigns.</p>
        </div>

      </div>

    </section>

  </div>
);
  
}

export default Media;
