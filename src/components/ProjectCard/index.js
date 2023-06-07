import "./index.scss";

function ProjectCard({ image, title, projectUrl }) {
  const handleClick = () => {
    window.open(projectUrl, "_blank");
  };

  return (
    <div className="projectItem" onClick={handleClick}>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h2 className="project-title"> {title} </h2>
    </div>
  );
}

export default ProjectCard;
