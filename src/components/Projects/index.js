import { useEffect, useState } from "react";
import "./index.scss";
import ProjectCard from "../ProjectCard";
import mdp from "../../assets/images/project_images/Markdown_Previewer.png";
import dm from "../../assets/images/project_images/Drum_Machine.png";
import pc from "../../assets/images/project_images/Pomodoro_Clock.png";
import jsc from "../../assets/images/project_images/JavaScript_Calculator.png";
import rqg from "../../assets/images/project_images/Random_Quotes_Generator.png";
import Blog from "../../assets/images/project_images/Blog_Site.png";
import Dentist from "../../assets/images/project_images/Dentist_Site.png";
import Ecommerce from "../../assets/images/project_images/E-commersion.png";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";

const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container projects">
        <br />
        <div className="web-apps">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Web Apps".split("")}
              indx={15}
            />
          </h1>
          <p className="disclaimer">
            *Web apps may need to be loaded twice to function
          </p>
          <div className="projectList">
            <ProjectCard
              title={"Blog"}
              image={Blog}
              projectUrl={
                "https://drive.google.com/file/d/1gwfJpYwfosnu4ETM7UzH5rujNMlJ5yS3/view?usp=drive_link"
              }
            />
            <ProjectCard
              title={"TheDentalHub"}
              image={Dentist}
              projectUrl={"http://thedentalhub.wuaze.com/"}
            />
            <ProjectCard
              title={"E-commersion"}
              image={Ecommerce}
              projectUrl={"https://e-commersion.42web.io/"}
            />
          </div>
        </div>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"React mini-projects".split("")}
            idx={15}
          />{" "}
        </h1>
        <div className="projectList">
          <ProjectCard
            title={"Markdown Previewer"}
            image={mdp}
            projectUrl={
              "https://maddisama.github.io/markdown-previewer-webvers/"
            }
          />
          <ProjectCard
            title={"Pomodoro Clock"}
            image={pc}
            projectUrl={"https://maddisama.github.io/Pomodoro-Clock/"}
          />
          <ProjectCard
            title={"Drum Machine"}
            image={dm}
            projectUrl={"https://maddisama.github.io/drum-machine/"}
          />
          <ProjectCard
            title={"JavaScript Calculator"}
            image={jsc}
            projectUrl={"https://maddisama.github.io/javascript_calculator/"}
          />
          <ProjectCard
            title={"Random Quotes Generator"}
            image={rqg}
            projectUrl={"https://maddisama.github.io/Random-Quotes-Generator/"}
          />
        </div>
      </div>
      <Loader type="ball-clip-rotate-pulse" />
    </>
  );
};

export default Projects;
