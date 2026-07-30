function Contact() {
  return (
    <section id="contact" className="contact">

      <h4>CONTACT US</h4>

      <h2>Let's Build Something Amazing</h2>

      <p>
        Ready to grow your business? Get in touch with us today.
      </p>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;