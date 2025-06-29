import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex gap 2">
      <div>Common Text</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
