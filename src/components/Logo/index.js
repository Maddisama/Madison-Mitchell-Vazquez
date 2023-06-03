import "./index.scss";
import LogoM from "../../assets/images/site-m.png";
import { useEffect, useRef } from "react";
import gsap from "gsap-trial";

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin);

  //   gsap
  //     .timeline()
  //     .to(bgRef.current, {
  //       duration: 1,
  //       opacity: 1,
  //     })

  //     .from(outlineLogoRef.current, {
  //       drawSVG: 0,
  //       duration: 5,
  //     });
  //   gsap.fromTo(
  //     solidLogoRef.current,
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       delay: 4,
  //       duration: 4,
  //     }
  //   );
  // }, []);

  return (
    <div className="logo-container">
      <img src={LogoM} alt="M" className="solid-logo" />
    </div>
  );
};

export default Logo;
