import { Download, User, Home, Phone, Github, FolderOpenDot, CodeXml } from 'lucide-react';
// import getResume from "./image/icons/RohanGresume.pdf";

export default function Navbar() {
  return (
    <>
      
      <div className="navbar">
          <a href="#home">
            <h1 className="first">Rohan G.</h1>
          </a>
        </div>
        <div className="sidebar" id="sidebar">
        <a href="#home" className="profile-section">
            <div className="profile-logo">
              <img src="image/newlogo.png" alt="RG Logo" />
            </div>
            <div className="profile-info">
              <h1 className="profile-name">Rohan G.</h1>
              <p className="profile-role">Frontend Developer</p>
            </div>
        </a>
          <a href="#home" className="nav-item btn-shaketext">
            <Home size={20} style={{marginRight:'10px'}} />
            <span className="nav-text">Home</span>
          </a>
          <a href="#about" className="nav-item btn-shaketext">
            <User size={20} style={{marginRight:'10px'}} />
            <span className="nav-text">About Me</span>
          </a>
          <a href="#projects" className="nav-item btn-shaketext">
          <FolderOpenDot size={20} style={{marginRight:'10px'}} />
            <span className="nav-text">Projects</span>
          </a>
          <a href="#skills" className="nav-item btn-shaketext">
            <CodeXml size={20} style={{marginRight:'10px'}} />
            <span className="nav-text">Skills</span>
          </a>
          <a href="#contact" className="nav-item btn-shaketext">
            <Phone size={20} style={{marginRight:'10px'}} />
            <span className="nav-text">Contact</span>
          </a>
          <div className="bottom-buttons">
            <a href="image/icons/Rohan-Resume.pdf" className="btn-blur" download style={{ marginBottom: '20px' }}>
              <Download size={20} style={{marginRight:'10px'}} />
              Resume
            </a>
            <a href="https://github.com/RohanG2001" target="_blank" rel="noopener noreferrer" className="btn-blur" style={{ marginBottom: '20px' }}>
              <Github size={20} style={{marginRight:'10px'}} />
              GitHub
            </a>
          </div>
        </div>
        <nav className="bottom-nav">
      <a href="index.html" className="nav-item-bottom">
        <Home size={28} />
        <span>Home</span>
      </a>
      <a href="#about" className="nav-item-bottom">
        <User size={28} />
        <span>About</span>
      </a>
      <a href="#projects" className="nav-item-bottom">
        <FolderOpenDot size={28} />
        <span>Projects</span>
      </a>
      <a href="#skills" className="nav-item-bottom">
        <CodeXml size={28} />
        <span>Skills</span>
      </a>
      <a href="#contact" className="nav-item-bottom">
        <Phone size={28} />
        <span>Contact</span>
      </a>
    </nav>
      <div/>
    </>
  );
}