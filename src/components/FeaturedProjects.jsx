function FeaturedProjects() {
  return (
    <section className="featured-projects">

      <h4>OUR WORK</h4>

      <h2>Featured Projects</h2>

      <p className="featured-text">
        A glimpse of the creative solutions we deliver across Media,
        Technology and Music Production.
      </p>

      <div className="projects-grid">

        <div className="project-card">

          <div className="project-image media-bg">
            📰
          </div>

          <div className="project-content">
            <span>Media & News</span>

            <h3>Corporate Brand Campaign</h3>

            <p>
              Professional photography, videography and digital branding
              for a growing business.
            </p>

            <button>View Case Study</button>

          </div>

        </div>

        <div className="project-card">

          <div className="project-image digital-bg">
            💻
          </div>

          <div className="project-content">

            <span>Digital Technology</span>

            <h3>Business Website</h3>

            <p>
              Responsive website with SEO optimisation and modern UI/UX.
            </p>

            <button>View Case Study</button>

          </div>

        </div>

        <div className="project-card">

          <div className="project-image music-bg">
            🎵
          </div>

          <div className="project-content">

            <span>Music Production</span>

            <h3>Podcast Studio Setup</h3>

            <p>
              Recording, editing and mastering for premium podcast content.
            </p>

            <button>View Case Study</button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FeaturedProjects;