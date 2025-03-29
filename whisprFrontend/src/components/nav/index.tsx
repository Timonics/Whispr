import React from "react";
import Logo from "../logo";
import { TbLogout, TbNotification } from "react-icons/tb";

const Nav: React.FC = () => {
  return (
    <div className="flex justify-between items-center h-full p-2 md:bg-gray-950">
      <Logo />
      <div className="flex items-center gap-12 text-xl lg:text-2xl lg:gap-15 mr-2">
        <TbNotification />
        <TbLogout />
      </div>
    </div>
  );
};

export default Nav;
