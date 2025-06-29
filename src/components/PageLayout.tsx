import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const PageLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
