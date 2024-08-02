import profileImage from "./image/profile.jpg";

export default function Home() {
  return (
     <>
     <div className="content">
     <section id="home" className="hero-section">
          <div className="hero-background">
            <div className="dev-shape"></div>
            <div className="dev-shape"></div>
            <div className="dev-shape"></div>
            <div className="dev-shape"></div>
            <div className="dev-shape"></div>
            <div className="dev-shape"></div>
            <div className="dev-shape"></div>
          </div>
          <div className="hero-content">
            <img
              src= {profileImage}
              alt="A Hndsome Guy"
              className="profile-image"
            />
            <h1 className="name" >Rohan Ghorpade</h1>
            <h2 className="title">Frontend Developer</h2>
            <p className="tagline">
              Crafting beautiful and responsive web experiences with a passion
              for clean code and user-centric design.
            </p>
            <div className="social-links">
              <a
                href="https://github.com/RohanG2001"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="www.linkedin.com/in/rohan-ghorpade-90b3b2232"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:ghorpaderohan6169@gmail.com" className="social-icon">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <a href="#projects" className="cta-button btn-82">View My Work</a>
          </div>
        </section>


     </div>
     </>
  )
}
