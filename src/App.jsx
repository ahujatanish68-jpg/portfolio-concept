import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TrustedBy from "./components/TrustedBy";
import Divisions from "./components/Divisions";
import WhyChoose from "./components/WhyChoose";
import FeaturedProjects from "./components/FeaturedProjects";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

import Media from "./Pages/Media";
import Digital from "./Pages/Digital";
import MusicProduction from "./Pages/MusicProduction";

function HomePage() {
  return (
    <>
      <div id="home">
        <Home />
      </div>

      <TrustedBy />

      <Divisions />

      <WhyChoose />

      <FeaturedProjects />

      <div id="about">
        <About />
      </div>

      <div id="portfolio">
        <Portfolio />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  );
}



function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/media" element={<Media />} />

        <Route path="/digital" element={<Digital />} />

        <Route path="/music" element={<MusicProduction />} />
      </Routes>
    </>
  );
}

export default App;