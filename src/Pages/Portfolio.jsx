function Portfolio() {
  const projects = [
    {
      title: "Business Website",
      category: "Website Development",
    },
    {
      title: "Social Media Campaign",
      category: "Digital Marketing",
    },
    {
      title: "Brand Identity Design",
      category: "Branding",
    },
    {
      title: "Product Photography",
      category: "Photography",
    },
    {
      title: "Promotional Video",
      category: "Video Editing",
    },
    {
      title: "SEO Growth Project",
      category: "SEO Optimization",
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <h4>Portfolio</h4>
      <h2>Recent Projects</h2>

      <p className="portfolio-text">
        Here are some of the digital solutions we create for businesses to help
        them grow online.
      </p>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <div className="portfolio-image">
              <span>Project Preview</span>
            </div>

            <h3>{project.title}</h3>
            <p>{project.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;