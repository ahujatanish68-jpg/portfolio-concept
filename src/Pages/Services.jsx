function Services() {
  const services = [
    {
      title: "Website Development",
      desc: "Modern, fast and responsive websites designed to grow your business.",
      icon: "💻",
    },
    {
      title: "Digital Marketing",
      desc: "SEO, Google Ads, Meta Ads and strategies that generate real results.",
      icon: "📈",
    },
    {
      title: "Branding",
      desc: "Professional logos, brand identity and creative design solutions.",
      icon: "🎨",
    },
    {
      title: "Social Media",
      desc: "Instagram, Facebook and LinkedIn management with engaging content.",
      icon: "📱",
    },
    {
      title: "Photography",
      desc: "Professional product and business photography for your brand.",
      icon: "📸",
    },
    {
      title: "Video Editing",
      desc: "Creative reels, advertisements and promotional videos.",
      icon: "🎬",
    },
  ];

  return (
    <section id="services" className="services">

      <h4>OUR SERVICES</h4>

      <h2>Everything Your Business Needs</h2>

      <p className="service-text">
        We help brands grow online with creative ideas,
        modern technology and result-driven marketing.
      </p>

      <div className="services-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;