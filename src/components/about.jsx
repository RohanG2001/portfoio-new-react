
import pg22 from "./image/pg22.jpg";  // Adjust this path if necessary

export default function About() {
  return (
    <div className="content">
        <section id="about" className="about-section">
      <div className="about-content">
        <div className="hero-background">
          <div className="dev-shape"></div>
          <div className="dev-shape"></div>
          <div className="dev-shape"></div>
        </div>
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        <div className="about-grid">
          <div className="about-image" data-aos="flip-left" data-aos-delay="50">
            <img
              src={pg22}
              alt="Rohan Ghorpade working"
              className="profile-image2"
            />
          </div>
          <div className="about-text">
            <p data-aos="fade-up" data-aos-delay="100">
              Hello! I&aposm Rohan Ghorpade, a passionate frontend developer, crafting responsive and user-friendly web
              applications. My journey in web development began with a
              fascination for creating visually appealing and intuitive user
              interfaces.
            </p>
            <p style={{textAlign: 'left'}} data-aos="fade-up" data-aos-delay="150">I specialize in:</p>
            <ul className="skills-list" data-aos="fade-up" data-aos-delay="200">
              <li>HTML5, CSS3, and JavaScript</li>
              <li>React.js</li>
              <li>Responsive web design</li>
              <li>UI/UX best practices</li>
              <li>Performance optimization</li>
            </ul>
            <p data-aos="fade-up" data-aos-delay="250">
              When I&aposm not coding, you can find me exploring new web
              technologies, contributing to open-source projects, or
              enjoying a good cup of coffee while solving coding challenges.
            </p>
            <a href="#contact" className="cta-button btn-82" data-aos="fade-up" data-aos-delay="300">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}