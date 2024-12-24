import React from "react";

import { BsThreeDots } from "react-icons/bs";
import { TbNotification } from "react-icons/tb";
import { useMyContext } from "../../context/MyAppContextProvider";
import UserProfileIcon from "../UserProfileIcon";
import NavBar from "../NavBar";

const ChatNav: React.FC = () => {
  const { userProfile } = useMyContext();
  const chatEle = Array.from({ length: 20 }).map((item, index) => {
    return (
      <div className="flex p-2 justify-between items-center" key={index}>
        <div className="flex gap-3 items-center">
          <UserProfileIcon height={25} width={25} opacity={95} colorHex="" />
          <div className="">
            <p className="text-sm font-bold font-pops">John Doe</p>
            <p className="text-[10px] font-light">Hello, how are you?</p>
          </div>
        </div>
        <p className="text-[9px] font-extralight italic">Now</p>
      </div>
    );
  });
  return (
    <div className="flex flex-col h-full p-2 border">
      <NavBar />
      <div className="flex justify-between px-2 h-[10%]">
        <div className="flex items-center gap-3">
          <div className="w-[35px] h-[35px] rounded-full bg-slate-700 indicator flex items-center justify-center">
            <span className="indicator-item badge mr-1 mt-1 badge-xs badge-success" />
            {userProfile ? (
              <img
                src=""
                alt="user-profile-pic"
                className=" w-[40px] h-[40px] rounded-full"
              />
            ) : (
              <UserProfileIcon
                height={25}
                width={25}
                opacity={95}
                colorHex=""
              />
            )}
          </div>
          <h2 className="font-bold font-monte text-base">Michael</h2>
        </div>
        <div className="flex items-center gap-5 text-lg">
          <TbNotification />
          <BsThreeDots />
        </div>
      </div>
      <div className="rounded-xl bg-[#2b343f] h-[90%]">
        <div className="flex flex-col h-full gap-3 rounded-xl overflow-y-auto">{chatEle}</div>
      </div>
    </div>
  );
};

export default ChatNav;
