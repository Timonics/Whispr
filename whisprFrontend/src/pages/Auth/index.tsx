import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import NavBar from "../../components/NavBar";

const AuthLayout: React.FC = () => {
  const location = useLocation();
  const loginRoute = "/auth/login";
  return (
    <div className="h-screen flex items-center justify-center">
      <div
        className={`w-5/6 ${
          location.pathname === loginRoute && "md:w-3/5 lg:w-2/5"
        } ${location.pathname === "/auth/verify-success" && "sm:w-3/5 lg:w-2/5"} p-4 rounded-md shadow-black shadow-2xl flex flex-col gap-5 bg-[#4044486d]`}
      >
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
