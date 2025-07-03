import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center flex-col text-center  h-screen">
        <h1 className="text-gray-600 text-2xl px-10">
          Experience messaging that's fast, reliable, and designed to keep your
          conversations flowing naturally
        </h1>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
