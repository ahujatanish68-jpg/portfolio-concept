import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();


 const scrollToSection = (id) => {

  if (location.pathname !== "/") {

    navigate("/", {
      state: {
        section: id
      }
    });

  } else {

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  }

};


  return (

    <nav className="navbar">


      {/* LOGO */}

      <Link to="/" className="logo">

        <span>AD</span>

        <div>

          <h2>AD Media</h2>

          <p>Networks</p>

        </div>

      </Link>



      {/* NAV LINKS */}

      <ul className="nav-links">


        <li>

          <span className="nav-item" onClick={() => scrollToSection("home")}>
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


                <Link to="/media">
                  Photography
                </Link>

                <Link to="/media">
                  Videography
                </Link>

                <Link to="/media">
                  PR & Branding
                </Link>

                <Link to="/media">
                  Content Creation
                </Link>


              </div>



              <div className="mega-column">

                <h3>💻 Digital Technology</h3>


                <Link to="/digital">
                  Website Development
                </Link>

                <Link to="/digital">
                  App Development
                </Link>

                <Link to="/digital">
                  AI Solutions
                </Link>

                <Link to="/digital">
                  SEO
                </Link>


              </div>



              <div className="mega-column">

                <h3>🎵 Music Production</h3>


                <Link to="/music">
                  Recording
                </Link>

                <Link to="/music">
                  Mixing
                </Link>

                <Link to="/music">
                  Mastering
                </Link>

                <Link to="/music">
                  Podcast Production
                </Link>


              </div>


            </div>

          )}


        </li>




        <li>

          <span
 onClick={() => scrollToSection("about")}
>
 About
</span>

        </li>




        <li>

          <span
 onClick={() => scrollToSection("portfolio")}
>
 Portfolio
</span>

        </li>




        <li>

          <span
 onClick={() => scrollToSection("contact")}
>
 Contact
</span>

        </li>


      </ul>




      <Link to="/get-quote" className="nav-btn">
  Get Quote
</Link>


    </nav>

  );

}


export default Navbar;