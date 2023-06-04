import "./index.scss";

const ProjectCard = ({ image, title }) => {
  return (
    <div className="project-card">
      <div className="project-title">
        <h1>{title}</h1>
      </div>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="project-image"
      ></div>
    </div>
  );
};

export default ProjectCard;
