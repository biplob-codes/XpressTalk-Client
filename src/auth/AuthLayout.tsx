import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100  h-screen">
        Common Text
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
