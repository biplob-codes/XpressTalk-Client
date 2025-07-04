import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useUIStore } from "@/store";

const PageLayout = () => {
  const isChatOpenOnMobile = useUIStore((s) => s.isChatOpenOnMobile);

  return (
    <div className="flex flex-col lg:flex lg:flex-row">
      <div
        className={`order-2 lg:order-1 ${
          isChatOpenOnMobile ? "hidden lg:block" : ""
        }`}
      >
        <SideBar />
      </div>
      <div className="order-1 lg:order-2 flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
