import PropTypes from 'prop-types';


const ProjectCard = ({
    imageUrl,
    imageAlt,
    title,
    description,
    technologies,
    liveLink,
    githubLink,
  }) => {
    return (
      <div className="project-card" data-aos="flip-left" data-aos-delay="150">
        <div className="project-image">
          <img src={imageUrl} alt={imageAlt} />
        </div>
        <div className="project-info">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          <div className="project-tech">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
          <div className="project-links">
            <a href={liveLink} target="_blank" className="project-link">
              Live Demo
            </a>
            <a href={githubLink} target="_blank" className="project-link">
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  };

  ProjectCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    liveLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
  };
  
  export default ProjectCard;