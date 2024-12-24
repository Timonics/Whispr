import React from "react";
import { NavLink } from "react-router-dom";

import { PiChatsCircleBold } from "react-icons/pi";
import { MdOutlineGroups } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbUser } from "react-icons/tb";

const Footer: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between h-[40px] backdrop-blur-sm bg-black/20 md:hidden px-5">
      <NavLink to="chats" className="flex flex-col items-center">
        <PiChatsCircleBold size={18}/>
        <span className="text-xs font-bold font-pops">Chats</span>
      </NavLink>
      <NavLink to="groups" className="flex flex-col items-center">
        <MdOutlineGroups size={18} />
        <span className="text-xs font-bold font-pops">Groups</span>
      </NavLink>
      <NavLink to="calls" className="flex flex-col items-center">
        <IoCallSharp size={18} />
        <span className="text-xs font-bold font-pops">Calls</span>
      </NavLink>
      <NavLink to="profile" className="flex flex-col items-center">
        <TbUser size={18} />
        <span className="text-xs font-bold font-pops">Profile</span>
      </NavLink>
    </div>
  );
};

export default Footer;
