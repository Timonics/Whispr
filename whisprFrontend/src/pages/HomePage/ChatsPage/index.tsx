import React from "react";
import UserProfileIcon from "../../../components/UserProfileIcon";
import Footer from "../../../components/Footer";

import { PiChatsCircleBold } from "react-icons/pi";
import { MdOutlineGroups } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbUser } from "react-icons/tb";
import { TbMenu2, TbSettings } from "react-icons/tb";

const index: React.FC = () => {
  const chatEle = Array.from({ length: 10 }).map(() => {
    return (
      <div>
        <div className="flex p-2 justify-between items-center">
          <div className="flex gap-3 items-center">
            <UserProfileIcon height={30} width={30} opacity={95} colorHex="" />
            <div className="">
              <p className="text-[13px] font-extrabold font-pops">John Doe </p>
              <p className="text-[9px] font-light">Hello, how are you?</p>
            </div>
          </div>
          <p className="text-[8px] font-extralight italic">Now</p>
        </div>
        <hr className="opacity-5" />
      </div>
    );
  });

  return (
    <div className="md:flex h-full gap-2">
      <aside className="w-[40px] lg:w-[50px] mobile:hidden flex flex-col items-center gap-5 text-xl bg-gray-950 pt-4 backdrop-blur-sm">
        <TbMenu2 />
        <PiChatsCircleBold />
        <MdOutlineGroups />
        <IoCallSharp />
        <div className="mt-auto flex flex-col items-center gap-5 pb-4 w-full">
          <hr className="w-4/5 opacity-30 border"/>
        {/* <TbNotification /> */}
        <TbUser />
        <TbSettings />
        </div>
      </aside>
      <div className="h-full md:w-2/4 lg:w-2/5 md:mt-3">
        <div className="flex justify-between px-2 flex-col gap-2">
          <div className="flex items-center gap-2">
            <h2 className="font-extrabold text-xl font-monte">My Chats</h2>
          </div>
          <input
            className="bg-[#434c5491] font-pops text-xs p-1 rounded-md border-b-[1px] border-indigo-600"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="mt-2 mb-12 m-1.5 mobile:rounded-xl md:rounded-t-xl bg-[#434c544f] space-y-2 p-2 md:h-[83%] lg:h-[85%] md:overflow-y-auto">
          {chatEle}
        </div>
        <Footer />
      </div>
      <div className="w-2/4 lg:w-3/5 mobile:hidden"></div>
    </div>
  );
};

export default index;
