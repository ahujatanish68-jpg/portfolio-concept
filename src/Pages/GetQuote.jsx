import { useEffect } from "react";
import "./GetQuote.css";

function GetQuote() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="quote-page">

      {/* Hero */}
      <section className="quote-hero">
        <div className="quote-container">

          <h4>GET FREE QUOTE</h4>

          <h1>
            Let's Discuss Your
            <br />
            Next Big Project
          </h1>

          <p>
            Whether you need Media & News, Digital Technology or
            Music Production, our experts will prepare a customized
            proposal tailored to your business.
          </p>

        </div>
      </section>

      {/* Form Section */}
      <section className="quote-section">

        <div className="quote-container quote-grid">

          <div className="quote-form">

            <h2>Request a Free Quote</h2>

            <form>

              <input type="text" placeholder="Full Name" required />
              <input type="text" placeholder="Company Name" />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />

              <select required>
                <option>Select Service</option>
                <option>Media & News</option>
                <option>Digital Technology</option>
                <option>Music Production</option>
                <option>Multiple Services</option>
              </select>

              <select>
                <option>Estimated Budget</option>
                <option>Under ₹50,000</option>
                <option>₹50,000 – ₹2,00,000</option>
                <option>₹2,00,000 – ₹5,00,000</option>
                <option>₹5,00,000+</option>
                <option>Let's Discuss</option>
              </select>

              <select>
                <option>Project Timeline</option>
                <option>ASAP</option>
                <option>Within 2 Weeks</option>
                <option>Within 1 Month</option>
                <option>1–3 Months</option>
                <option>Flexible</option>
              </select>

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
              ></textarea>

              <button type="submit">
                Request Free Quote
              </button>

            </form>

          </div>

          <div className="quote-info">

            <h2>Why Choose AD Media Networks?</h2>

            <ul>
              <li>✔ Customized Strategy</li>
              <li>✔ Experienced Professionals</li>
              <li>✔ Creative & Technical Expertise</li>
              <li>✔ Transparent Pricing</li>
              <li>✔ Dedicated Project Support</li>
            </ul>

            <div className="contact-card">
              <h3>Need Immediate Assistance?</h3>
              <p>📞 +91 XXXXX XXXXX</p>
              <p>✉ hello@admedianetworks.com</p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default GetQuote;