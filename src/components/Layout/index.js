import Loader from "react-loaders";
import Sidebar from "../Sidebar";
import "./index.scss";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="App">
        <Sidebar />
        <div className="page">
          <span className="tags top-tags unselectable">&lt;body&gt;</span>

          <Outlet />

          <span className="tags bottom-tags unselectable">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html">&lt;/html&gt;</span>
          </span>
        </div>
      </div>
      <Loader type="ball-clip-rotate-pulse" />
    </>
  );
};

export default Layout;
