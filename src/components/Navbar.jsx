import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
  if (mobileMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [mobileMenu]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMobileMenu(false);
        setMobileServices(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobile = () => {
    setMobileMenu(false);
    setMobileServices(false);
  };

  const scrollToSection = (id) => {
    closeMobile();

    if (location.pathname !== "/") {
      navigate("/", {
        state: {
          section: id,
        },
      });
    } else {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <nav className="navbar">

      {/* Logo */}

      <Link to="/" className="logo" onClick={closeMobile}>
        <span>AD</span>

        <div>
          <h2>AD Media</h2>
          <p>Networks</p>
        </div>
      </Link>

      {/* Hamburger */}

      <button
        className={`hamburger ${mobileMenu ? "open" : ""}`}
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation */}

      <ul className={`nav-links ${mobileMenu ? "active" : ""}`}>

        <li>
          <span
            className="nav-item"
            onClick={() => scrollToSection("home")}
          >
            Home
          </span>
        </li>

        {/* SERVICES */}

        <li
          className="services-item"
          onMouseEnter={() => {
            if (window.innerWidth > 992) {
              setMenuOpen(true);
            }
          }}
          onMouseLeave={() => {
            if (window.innerWidth > 992) {
              setMenuOpen(false);
            }
          }}
        >

          <span
            className="nav-item"
            onClick={() => {
              if (window.innerWidth <= 992) {
                setMobileServices(!mobileServices);
              }
            }}
          >
            Services {window.innerWidth <= 992 ? (mobileServices ? "▲" : "▼") : "▾"}
          </span>

          {/* Desktop Mega Menu */}

          {menuOpen && (
            <div className="mega-menu">

              <div className="mega-column">

                <h3>📰 Media & News</h3>

                <Link to="/media">Photography</Link>
                <Link to="/media">Videography</Link>
                <Link to="/media">PR & Branding</Link>
                <Link to="/media">Content Creation</Link>

              </div>

              <div className="mega-column">

                <h3>💻 Digital Technology</h3>

                <Link to="/digital">Website Development</Link>
                <Link to="/digital">App Development</Link>
                <Link to="/digital">AI Solutions</Link>
                <Link to="/digital">SEO</Link>

              </div>

              <div className="mega-column">

                <h3>🎵 Music Production</h3>

                <Link to="/music">Recording</Link>
                <Link to="/music">Mixing</Link>
                <Link to="/music">Mastering</Link>
                <Link to="/music">Podcast Production</Link>

              </div>

            </div>
          )}

          {/* Mobile Services */}

          {mobileServices && (
            <div className="mobile-services">

              <Link to="/media" onClick={closeMobile}>
                📰 Media & News
              </Link>

              <Link to="/digital" onClick={closeMobile}>
                💻 Digital Technology
              </Link>

              <Link to="/music" onClick={closeMobile}>
                🎵 Music Production
              </Link>

            </div>
          )}

        </li>
        {/* ABOUT */}

        <li>
          <span
            className="nav-item"
            onClick={() => scrollToSection("about")}
          >
            About
          </span>
        </li>

        {/* PORTFOLIO */}

        <li>
          <span
            className="nav-item"
            onClick={() => scrollToSection("portfolio")}
          >
            Portfolio
          </span>
        </li>

        {/* CONTACT */}

        <li>
          <span
            className="nav-item"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </span>
        </li>

        {/* Mobile Get Quote */}

        <li className="mobile-quote">
          <Link
            to="/get-quote"
            className="mobile-quote-btn"
            onClick={closeMobile}
          >
            Get Quote
          </Link>
        </li>

      </ul>

      {/* Desktop Get Quote */}

      <Link
        to="/get-quote"
        className="nav-btn"
      >
        Get Quote
      </Link>

    </nav>
  );
}

export default Navbar;