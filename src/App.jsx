import "./App.css";
import profile from "./assets/profile.jpeg";

function App() {
  return (
    <div className="container">
      <div className="hero">

        <div className="left">
          <img
            src={profile}
            alt="Tanish Ahuja"
            className="profile-image"
          />

        </div>

        <div className="right">
          <h3>Hey, I'm</h3>

          <h1>Tanish Ahuja</h1>

          <h2>B.Tech CSE (AI & ML) Student</h2>

          <p>
            I'm a passionate second-year B.Tech student pursuing Computer
            Science Engineering (AI & ML) at <strong>Panipat Institute of
            Engineering and Technology (PIET)</strong>.
          </p>

          <p>
            I enjoy creating modern websites with React, exploring Artificial
            Intelligence, designing creative user interfaces, and creating
            engaging content on social media.
          </p>

          <div className="info">
            <div className="card">
              <h4>🎓 Education</h4>
              <p>PIET, Panipat</p>
            </div>

            <div className="card">
              <h4>💻 Branch</h4>
              <p>CSE (AI & ML)</p>
            </div>

            <div className="card">
              <h4>📍 Year</h4>
              <p>Second Year</p>
            </div>

            <div className="card">
              <h4>🎥 Passion</h4>
              <p>Content Creation</p>
            </div>
          </div>

          <div className="buttons">
            <button>Download Resume</button>
            <button>Contact Me</button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;