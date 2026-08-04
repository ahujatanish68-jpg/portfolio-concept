import { useNavigate } from "react-router-dom";


function Home() {

  const navigate = useNavigate();
  

  // Hero buttons

  const goToPortfolio = () => {

    navigate("/", {
      state: {
        section: "portfolio"
      }
    });

  };


  const goToQuote = () => {

    navigate("/get-quote");

  };



  return (

    <section className="hero">


      <div className="hero-left">


        <span className="hero-tag">
          🚀 Premium Media, Music & Digital Agency
        </span>



        <h1>
 Delivering Trusted News.

  <br />
  Building Digital Solutions.
  <br />
  <span className="highlight">
    Music creation.
  </span>
</h1>



        <p>
          AD Media Networks brings together Digital News Publishing, Professional Media Production, and Digital Technology Solutions under one roof. From breaking news and podcast production to AI-powered business automation and digital marketing, we help brands, creators, and businesses connect, engage, and grow.
        </p>



        <div className="hero-buttons">


          <button
            className="primary-btn"
            onClick={goToQuote}
          >
            Get Free Quote
          </button>



          <button
            className="secondary-btn"
            onClick={goToPortfolio}
          >
            View Portfolio
          </button>


        </div>




        <div className="hero-stats">


          <div>
            <h3>250+</h3>
            <span>
              Projects Delivered
            </span>
          </div>



          <div>
            <h3>100+</h3>
            <span>
              Happy Clients
            </span>
          </div>



          <div>
            <h3>5+</h3>
            <span>
              Years Experience
            </span>
          </div>


        </div>


      </div>





      <div className="hero-right">


        <div className="hero-image">


          <img
            src="https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="AD Media Networks"
          />



          <div className="floating-card card3">

            ⭐⭐⭐⭐⭐

            <p>
              Trusted by Businesses
            </p>

          </div>




          <div className="floating-card card2">

            🎤

            <h4>
              Digital Technology
            </h4>

          </div>




          <div className="floating-card card1">

            📰

            <h4>
              Media & News
            </h4>

          </div>




          <div className="floating-card card4">

            🎵

            <h4>
              Music Production
            </h4>

           

          </div>



        </div>


      </div>


    </section>

  );

}


export default Home;