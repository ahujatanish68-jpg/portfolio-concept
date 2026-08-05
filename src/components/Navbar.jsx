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
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMobileMenu(false);
        setMobileServices(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenu(false);

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

  <Link to="/" className="logo">
    <span>AD</span>

    <div>
      <h2>AD Media</h2>
      <p>Networks</p>
    </div>
  </Link>

  <div
    className={`hamburger ${mobileMenu ? "open" : ""}`}
    onClick={() => setMobileMenu(!mobileMenu)}
  >
    <span></span>
    <span></span>
    <span></span>
  </div>

  <ul className={`nav-links ${mobileMenu ? "active" : ""}`}>



        <li>
  <span
    className="nav-item"
    onClick={() => {scrollToSection("home")
      setMobileMenu(false);}
    }
  >
    Home
  </span>
</li>
        {/* SERVICES */}

        <li

          className="services-item"

          onMouseEnter={() => setMenuOpen(true)}

          onMouseLeave={() => setMenuOpen(false)}

        >

          <span>
            Services ▾
          </span>



          {menuOpen && (

            <div className="mega-menu">


              <div className="mega-column">

                <h3>📰 Media & News</h3>


                <Link to="/media"
                onClick={() => setMobileMenu(false)}>
                  Photography
                </Link>

                <Link to="/media"
                onClick={() => setMobileMenu(false)}>
                  Videography
                </Link>

                <Link to="/media"
                onClick={() => setMobileMenu(false)}>
                  PR & Branding
                </Link>

                <Link to="/media"onClick={() => setMobileMenu(false)}>
                  Content Creation
                </Link>


              </div>



              <div className="mega-column">

                <h3>💻 Digital Technology</h3>


                <Link to="/digital"
                onClick={() => setMobileMenu(false)}>
                  Website Development
                </Link>

                <Link to="/digital"
                onClick={() => setMobileMenu(false)}>
                  App Development
                </Link>

                <Link to="/digital"
                onClick={() => setMobileMenu(false)}>
                  AI Solutions
                </Link>

                <Link to="/digital"
                onClick={() => setMobileMenu(false)}>
                  SEO
                </Link>


              </div>



              <div className="mega-column">

                <h3>🎵 Music Production</h3>


                <Link to="/music"
                onClick={() => setMobileMenu(false)}>
                  Recording
                </Link>

                <Link to="/music"
                onClick={() => setMobileMenu(false)}>
                  Mixing
                </Link>

                <Link to="/music"
                onClick={() => setMobileMenu(false)}>
                  Mastering
                </Link>

                <Link to="/music"
                onClick={() => setMobileMenu(false)}>
                  Podcast Production
                </Link>


              </div>


            </div>

          )}


        </li>




        <li>

         <span
  className="nav-item"
  onClick={() => {scrollToSection("about")
    setMobileMenu(false);}
  }
>
 About
</span>

        </li>




        <li>

<span
  className="nav-item"
  onClick={() => {scrollToSection("portfolio")
    setMobileMenu(false);}
  }
>
 Portfolio
</span>

        </li>




        <li>

          <span
  className="nav-item"
  onClick={() => {scrollToSection("contact")
    setMobileMenu(false);}
  }
>
 Contact
</span>

        </li>


      </ul>




      <Link to="/get-quote"
      onClick={() => setMobileMenu(false)} className="nav-btn">
  Get Quote
</Link>


    </nav>

  );

}


export default Navbar;