import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import "../assets/script";
const Layout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
