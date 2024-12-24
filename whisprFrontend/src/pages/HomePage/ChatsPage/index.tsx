import React from "react";
import NavBar from "../../../components/NavBar";
import { TbNotification } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";
import UserProfileIcon from "../../../components/UserProfileIcon";
import { useMyContext } from "../../../context/MyAppContextProvider";
import Footer from "../../../components/Footer";

const index: React.FC = () => {
  //const { userProfile } = useMyContext();
  const chatEle = Array.from({ length: 10 }).map((item, index) => {
    return (
      <div>
        <div className="flex p-2 justify-between items-center" key={index}>
          <div className="flex gap-3 items-center">
            <UserProfileIcon height={30} width={30} opacity={95} colorHex="" />
            <div className="">
              <p className="text-[13px] font-extrabold font-pops">John Doe</p>
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
    <>
      <div className="flex justify-between px-2 flex-col gap-2">
        <div className="flex items-center gap-2">
          {/* <div className="w-[35px] h-[35px] rounded-full bg-slate-700 flex items-center justify-center">
            {userProfile ? (
              <img
                src=""
                alt="user-profile-pic"
                className=" w-[40px] h-[40px] rounded-full"
              />
            ) : (
              <UserProfileIcon
                height={20}
                width={20}
                opacity={95}
                colorHex=""
              />
            )}
          </div> */}
          <h2 className="font-extrabold text-xl font-monte">My Chats</h2>
        </div>
        {/* <div className="flex items-center gap-5 text-base">
          <TbNotification />
          <BsThreeDots />
        </div> */}
        <input
          className="bg-[#434c5491] font-pops text-xs p-1 rounded-md border-b-[1px] border-indigo-600"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="h-full mt-2 m-1.5 rounded-xl bg-[#434c544f] overflow-y-auto space-y-2 p-2">
        {chatEle}
        {/* <div className="flex flex-col items-center justify-center gap-1 py-10">
        <div className="border-4 size-[50px] rounded-full"></div>
        <p className="text-xs font-pops font-semibold">Begin a new chat</p>
      </div> */}
      </div>
      <Footer />
    </>
  );
};

export default index;
