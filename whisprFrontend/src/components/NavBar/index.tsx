import React from "react";

import { TbSettings } from "react-icons/tb";
import { TbUser } from "react-icons/tb";
import { TbLogout } from "react-icons/tb";

const NavBar: React.FC = () => {
  return (
    <div className="flex p-3 justify-between w-full">
      <h1 className="font-black text-xs font-monte text-[#7741f4]">Whispr.</h1>
      <div className="flex gap-6">
        <TbSettings />
        {/* <TbUser /> */}
        <TbLogout />
      </div>
    </div>
  );
};

export default NavBar;
