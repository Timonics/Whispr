import React from "react";

import { BsThreeDots } from "react-icons/bs";
import { TbNotification } from "react-icons/tb";
import { useMyContext } from "../../context/MyAppContextProvider";
import UserProfileIcon from "../UserProfileIcon";

const ChatNav: React.FC = () => {
  const { userProfile } = useMyContext();
  return (
    <div className="">
      <div className="flex justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="w-[45px] h-[45px] rounded-lg bg-slate-700 indicator flex items-center justify-center">
            <span className="indicator-item badge mr-0.5 mt-0.5 badge-xs badge-success" />
            {userProfile ? (
              <img
                src=""
                alt="user-profile-pic"
                className="border w-[50px] h-[50px] rounded-full"
              />
            ) : (
              <UserProfileIcon
                height={48}
                width={48}
                opacity={95}
                colorHex=""
              />
            )}
          </div>
          <h2 className="font-bold font-monte text-xl">Michael</h2>
        </div>
        <div className="flex items-center gap-5 text-xl">
          <TbNotification />
          <BsThreeDots />
        </div>
      </div>
      <div className="border"></div>
    </div>
  );
};

export default ChatNav;
