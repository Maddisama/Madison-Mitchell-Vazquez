import "./index.scss";
import ProjectCard from "../ProjectCard";
const Projects = () => {
  return (
    <div className="projects">
      <h1>Personal Projects</h1>
      <div classname="projectList">
        <ProjectCard title={title} image={image} />
        <ProjectCard title={title} image={image} />
        <ProjectCard title={title} image={image} />
        <ProjectCard title={title} image={image} />
        <ProjectCard title={title} image={image} />
      </div>
    </div>
  );
};

export default Projects;
