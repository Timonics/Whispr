import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../../components/NavBar";

const AuthLayout: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <div className="flex items-center justify-center h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
