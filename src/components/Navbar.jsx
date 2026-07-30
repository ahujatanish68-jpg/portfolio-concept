function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <h2>AD Media Networks</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="nav-btn">Get Started</button>

    </nav>
  );
}

export default Navbar;