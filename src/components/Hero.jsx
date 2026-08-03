function Hero() {

  const scrollToPortfolio = () => {
    const section = document.getElementById("portfolio");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };


  return (
    <section className="hero">

      <div className="hero-content">

        <h1>Grow Your Brand with AD Media Networks</h1>

        <p>
          We help businesses grow through Website Development, Social Media
          Marketing, SEO, Branding, and Paid Advertising.
        </p>


        <div className="hero-buttons">

          <button onClick={scrollToPortfolio}>
            View Portfolio
          </button>


          <button>
            Our Services
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;