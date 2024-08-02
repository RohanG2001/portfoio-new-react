import rohsite   from "./image/rohit3d.png";
import Constsite   from "./image/proj-contruc.png";
import nftsite   from "./image/Portfolio-4.png";
import agritsite   from "./image/aae.png";



export default function Projects() {
  return (
    <>
      <div className="content">
      <section id="projects" className="projects-section">
          <div className="projects-content">
            <h2 className="section-title" data-aos="fade-up">My Projects</h2>
            <div className="projects-grid">
              <div className="project-card" data-aos="flip-left" data-aos-delay="150">
                <div className="project-image">
                  <img
                    src={rohsite}
                    alt="3D Artist Portfolio Website"
                  />
                </div>
                <div className="project-info">
                  <h3 className="project-title">Rohit.3d</h3>
                  <p className="project-description">
                    A modern, responsive portfolio website for a 3D artist,
                    featuring their best works, bio, and contact info.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">HTML</span>
                    <span className="tech-tag">CSS</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">BootStrap</span>
                  </div>
                  <div className="project-links">
                    <a href="https://rohit-3dportfolio.netlify.app" target="_blank" className="project-link">Live Demo</a>
                    <a href="https://github.com/RohanG2001/Rohit.3d" target="_blank" className="project-link">GitHub</a>
                  </div>
                </div>
              </div>

              <div className="project-card" data-aos="flip-left" data-aos-delay="150"              >
                <div className="project-image">
                  <img
                    src={Constsite}
                    alt="Construction Company Website"
                  />
                </div>
                <div className="project-info">
                  <h3 className="project-title">EcoBuild.org</h3>
                  <p className="project-description">
                    A professional website for a construction company, featuring
                    their services, projects, and contact information.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">HTML</span>
                    <span className="tech-tag">CSS</span>
                    <span className="tech-tag">JavaScript</span>
                  </div>
                  <div className="project-links">
                    <a href="echobuild.netlify.app" target="_blank" className="project-link">Live Demo</a>
                    <a href="#" className="project-link">GitHub</a>
                  </div>
                </div>
              </div>

              <div className="project-card" data-aos="flip-left"     data-aos-delay="250">
                <div className="project-image">
                  <img
                    src={nftsite}
                    alt="Task Management App"
                  />
                </div>
                <div className="project-info">
                  <h3 className="project-title">ThatNFTguys.in</h3>
                  <p className="project-description">
                    Explore this unique digital artwork, available as an NFT. It
                    combines digital creativity with blockchain technology.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">HTML</span>
                    <span className="tech-tag">CSS</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">BootStrap</span> 
                  </div>
                  <div className="project-links">
                    <a href="https://stonedapes.netlify.app" target="_blank" className="project-link">Live Demo</a>
                    <a href="#" className="project-link">GitHub</a>
                  </div>
                </div>
              </div>

              <div className="project-card" data-aos="flip-left">
                <div className="project-image">
                  <img
                    src={agritsite}
                    alt="Construction Company Website"
                  />
                </div>
                <div className="project-info">
                  <h3 className="project-title">Agricos Agro Exports</h3>
                  <p className="project-description">
                    A professional website for an Export company, featuring
                    their services, projects, and contact information.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">HTML</span>
                    <span className="tech-tag">CSS</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">BootStrap</span>
                  </div>
                  <div className="project-links">
                    <a href="agricos-agro-exports.netlify.app" target="_blank" className="project-link">Live Demo</a>
                    <a href="#" className="project-link">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
