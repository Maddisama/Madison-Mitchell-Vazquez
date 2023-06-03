import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                idx={15}
              />
            </h1>
            <p className="about-text">
              I am a conscientious junior frontend developer with a solid
              background in HTML, CSS, and JavaScript, I have a passion for
              writing clean, effective code to produce appealing user
              experiences. I strive to produce exquisitie websites with
              extensive attention to detail that not only meet the functional
              needs but also engage and excite users. I am excited to contribute
              to a dynamic development team and bring creative solutions to the
              table by keeping up with the most current industry developments
              and consistently developing my skill set.
            </p>
            <p className="about-text">
              I've always been interested with the inner mechanisms of how the
              internet and other technological systems worked from a young age,
              it seemed like magic to me, and that sparked a curiosity in me
              that grew immensely and drove me towards understanding and
              mastering this craft. I obtained practical knowledge of the React
              framework, through a variety of personal projects which has
              allowed me to improve my skills. React has allowed me to build
              responsive and interactive web applications, enabling me to create
              user interfaces.
            </p>
          </div>

          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faCss3} color="#264de4" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#FF5733" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faReact} color="#61DBFB" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faJsSquare} color="#F0DB4F" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faGitAlt} color="#f34f29" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faSass} color="#ff1e64" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate-pulse" />
    </>
  );
};

export default About;
