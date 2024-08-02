import { Download, User, Home, Phone, Github, FolderOpenDot, CodeXml } from 'lucide-react';

export default function Navbar() {
  return (
    <>
      
        <div className="navbar">
          <a href="#home">
            <h1 className="first">Rohan G.</h1>
          </a>
        </div>
        <div className="sidebar" id="sidebar">
          <a href="#home" title="Home" className="logo">
            <h2 className="first">Rohan G.</h2>
          </a>
          <a href="#home" className="nav-item btn-shaketext">
            <Home size={30} style={{marginRight:'10px'}} />
            <span className="nav-text">Home</span>
          </a>
          <a href="#about" className="nav-item btn-shaketext">
            <User size={30} style={{marginRight:'10px'}} />
            <span className="nav-text">About Me</span>
          </a>
          <a href="#projects" className="nav-item btn-shaketext">
          <FolderOpenDot size={30} style={{marginRight:'10px'}} />
            <span className="nav-text">Projects</span>
          </a>
          <a href="#skills" className="nav-item btn-shaketext">
            <CodeXml size={30} style={{marginRight:'10px'}} />
            <span className="nav-text">Skills</span>
          </a>
          <a href="#contact" className="nav-item btn-shaketext">
            <Phone size={30} style={{marginRight:'10px'}} />
            <span className="nav-text">Contact</span>
          </a>
          <div className="bottom-buttons">
            <a href="/assets/images/icons/RohanGresume.pdf" className="btn-blur" download style={{ marginBottom: '20px' }}>
              <Download size={30} style={{marginRight:'10px'}} />
              Resume
            </a>
            <a href="https://github.com/RohanG2001" target="_blank" rel="noopener noreferrer" className="btn-blur" style={{ marginBottom: '20px' }}>
              <Github size={30} style={{marginRight:'10px'}} />
              GitHub
            </a>
          </div>
        </div>
        <nav className="bottom-nav">
          <a href="/assets/images/icons/RohanGresume.pdf" download className="nav-item-bottom">
            <Download size={30} style={{marginRight:'10px'}} />
            <span>Resume</span>
          </a>
          <a href="#about" className="nav-item-bottom">
            <User size={30} style={{marginRight:'10px'}} />
            <span>About</span>
          </a>
          <a href="#home" className="nav-item-bottom home-button">
            <Home size={30} style={{marginRight:'10px'}} />
            <span>Home</span>
          </a>
          <a href="#contact" className="nav-item-bottom">
            <Phone size={30} style={{marginRight:'10px'}} />
            <span>Contact</span>
          </a>
          <a href="https://github.com/RohanG2001" target="_blank" rel="noopener noreferrer" className="nav-item-bottom">
            <Github size={30} style={{marginRight:'10px'}} />
            <span>GitHub</span>
          </a>
        </nav>
      <div/>
    </>
  );
}