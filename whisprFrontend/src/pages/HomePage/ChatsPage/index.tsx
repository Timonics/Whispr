import React from "react";
import Footer from "../../../components/Footer";

import { PiChatsCircleBold } from "react-icons/pi";
import { MdOutlineGroups } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbUser } from "react-icons/tb";
import { TbMenu3, TbSettings } from "react-icons/tb";
import SendMessageInfo from "../../../components/SendMessage";
import { Link, NavLink } from "react-router-dom";

const index: React.FC = () => {
  const chatEle = Array.from({ length: 20 }).map(() => {
    return (
      <>
        <NavLink to={""} className="flex p-2 justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="size-[40px] rounded-full bg-black/30 flex items-center justify-center">
              <TbUser />
            </div>
            <div className="">
              <p className="text-[13px] font-extrabold font-pops">John Doe </p>
              <p className="text-[9px] font-light">Hello, how are you?</p>
            </div>
          </div>
          <p className="text-[8px] font-extralight italic">Now</p>
        </NavLink>
        <hr className="opacity-5" />
      </>
    );
  });

  return (
    <div className="sm:flex h-full gap-">
      <aside className="w-[40px] lg:w-[50px] mobileSm:hidden flex flex-col items-center gap-5 text-xl md:bg-gray-950 pt-4 tabletmini:pl-1 tabletmini:text-lg h-full">
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
      <div className="sm:w-full md:w-2/5 h-full">
        <div className="h-full items-center justify-center">
          <div className="flex px-2 flex-col gap-2 lg:h-[15%] sm:h-[18%] justify-center ">
            <div className="flex items-center gap-2">
              <h2 className="font-extrabold lg:text-[27px] text-xl font-monte">
                My Chats
              </h2>
            </div>
            <input
              className="bg-[#434c5491] font-pops text-xs p-1 rounded-md border-b-[1px] border-indigo-600"
              type="text"
              placeholder={`Search`}
            />
          </div>
          <div className="lg:h-[85%] sm:h-[82%] lg:p-2 md:p-1 md:pb-1.5 px-2 py-2">
            <div className="mobileSm:mb-10 mobile:rounded-xl md:rounded-xl bg-[#434c544f] space-y-2 p-2 h-full sm:overflow-y-auto flex flex-col shadow-2xl">
              {chatEle}
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div className="w-3/5 p-2 pb-1.5 mobile:hidden">
        <div className="rounded-xl bg-black/40 h-full shadow-2xl">
          <SendMessageInfo />
          {/* <Chat /> */}
        </div>
      </div>
    </div>
  );
};

export default index;
