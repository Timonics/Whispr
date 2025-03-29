import React from "react";
import Logo from "../components/logo";
import { Outlet } from "react-router";

const AuthLayout: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[85%] sm:w-[70%] md:min-w-[60%] lg:min-w-[50%] xl:min-w-[40%] xl:max-w-full gap-5 flex flex-col items-center px-5 py-4 rounded-xl justify-center bg-[#434c544f] shadow-2xl shadow-[#7741f4]/15">
        <div className="w-full">
          <Logo />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
