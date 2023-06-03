import "./index.scss";
import LogoM from "../../assets/images/site-m.png";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={LogoM} alt="M" className="solid-logo" />
    </div>
  );
};

export default Logo;
