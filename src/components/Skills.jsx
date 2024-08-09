export default function Skills() {
  const frontendSkills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 75 },
    { name: "TypeScript", level: 70 }
  ];

  const otherSkills = [
    { name: "Git", level: 85 },
    { name: "Responsive Design", level: 90 },
    { name: "Photoshop", level: 65 }
  ];

  return (
    <div className="content">
      <section id="skills" className="skills-section">
        <div className="skills-content">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3 className="category-title">Frontend</h3>
              <ul className="skills-list">
                {frontendSkills.map((skill, index) => (
                  <li key={index} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: `${skill.level}%`}}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="category-title">Tools & Others</h3>
              <ul className="skills-list">
                {otherSkills.map((skill, index) => (
                  <li key={index} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: `${skill.level}%`}}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}