import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineGroups } from "react-icons/md";
import { PiChatsCircleBold } from "react-icons/pi";
import { TbMenu3, TbUser, TbSettings } from "react-icons/tb";
import { Link } from "react-router";

const SideNav: React.FC = () => {
  return (
    <div>
      <aside className="w-[40px] lg:w-[50px] mobileSm:hidden flex flex-col items-center gap-5 text-xl md:bg-gray-950 pt-4 tabletmini:pl-1 tabletmini:text-lg h-[calc(100vh-65px)]">
        <div className="p-1.5 rounded-md bg-slate-700">
          <TbMenu3 />
        </div>
        <div className="p-1.5 rounded-md bg-slate-00">
          <PiChatsCircleBold />
        </div>
        <div className="p-1.5 rounded-md bg-slate-70">
          <MdOutlineGroups />
        </div>
        <div className="p-1.5 rounded-md bg-slate-00">
          <IoCallSharp />
        </div>
        <div className="mt-auto flex flex-col items-center gap-5 pb-4 w-full">
          <hr className="w-4/5 opacity-30 border" />
          {/* <TbNotification /> */}
          <Link to="profile">
            <TbUser />
          </Link>
          <div>
            <TbSettings />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideNav;
