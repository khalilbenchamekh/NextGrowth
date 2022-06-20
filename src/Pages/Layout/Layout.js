import { Outlet } from "react-router-dom";
import "./Layout.css";


const Layout = () => {
  return(
      <div className="Layout">
          <div className="container">
              <Outlet />
          </div>

      </div>
  );
}

export default Layout;