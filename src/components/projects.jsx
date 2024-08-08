
import ProjectCard from './ProjectCard';
import projectData from './ProjectData';


const Projects = () => {
  return (
    <div className='content'>
      <section className='projects-section' id='projects'>
      <div className="projects-content">
      <h2 className="section-title" data-aos="fade-up">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
      </section>
    </div>
  );
};

export default Projects;