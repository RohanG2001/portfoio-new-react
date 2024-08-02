export default function Skills() {
  return (
    <>
       <div className="content">
       <section id="skills" className="skills-section">
          <div className="skills-content">
            <div className="hero-background">
              <div className="dev-shape"></div>
              {/* <!-- Code Bracket --> */}
              <div className="dev-shape"></div>
              {/* <!-- Screen/Monitor --> */}
              <div className="dev-shape"></div>
              {/* <!-- Gear --> */}
              <div className="dev-shape"></div>
              {/* <!-- Database --> */}
              <div className="dev-shape"></div>
              {/* <!-- Responsive Design (Phone) --> */}
              <div className="dev-shape"></div>
              {/* <!-- Cloud --> */}
              <div className="dev-shape"></div>
            </div>
            <h2 className="section-title" data-aos="fade-up">My Skills</h2>
            <div className="skills-container">
              <div className="skill-category" data-aos="fade-up-right">
                <h3 className="category-title">Frontend</h3>
                <ul className="skills-list">
                  <li className="skill-item" data-aos="fade-up-right">
                    <span className="skill-name">HTML5</span>
                  </li>
                  <li className="skill-item" data-aos="fade-up-right">
                    <span className="skill-name">CSS3</span>
                  </li>
                  <li className="skill-item" data-aos="fade-up-right">
                    <span className="skill-name">JavaScript</span>
                  </li>
                  <li className="skill-item" data-aos="fade-up-right">
                    <span className="skill-name">React.js</span>
                  </li>
                  <li className="skill-item" data-aos="fade-up-right">
                    <span className="skill-name">TypeScript</span>
                  </li>
                </ul>
              </div>
              <div className="skill-category" data-aos="fade-up">
                <h3 className="category-title">Tools & Others</h3>
                <ul className="skills-list">
                  <li className="skill-item" data-aos="fade-up-left">
                    <span className="skill-name">Git</span>
                  </li>
                  <li className="skill-item" data-aos="fade-up-left" data-aos-offset="50">
                    <span className="skill-name">Responsive Design</span>
                  </li>
                  <li className="skill-item" data-aos="fade-up-left" data-aos-offset="50">
                    <span className="skill-name">Photoshop</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
       </div>
    </>
  )
}
