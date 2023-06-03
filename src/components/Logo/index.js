import "./index.scss";
import LogoM from "../../assets/images/site-m.png";
import { useEffect, useRef } from "react";
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
import gsap from "gsap-trial";

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })

      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 5,
      });
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} src={LogoM} alt="M" className="solid-logo" />
      <svg
        className="svg-container"
        id="eJLXAqkWYGD1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1692 2339"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
      >
        <path
          ref={outlineLogoRef}
          d="M96.863512,2339L86.27501,0h508.248076L885.70688,1477.095971L1187.479175,0h504.520824l-.000001,2339h-345.693301L1335.718195,746.489362L1002.180395,2339h-238.241285L440.989811,746.489362L425.107059,2339h-328.243547Z"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Logo;
