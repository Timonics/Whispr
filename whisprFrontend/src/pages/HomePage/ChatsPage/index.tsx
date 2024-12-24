import React from "react";
import UserProfileIcon from "../../../components/UserProfileIcon";
import Footer from "../../../components/Footer";

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
    <>
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
      <div className="h-full mt-2 m-1.5 rounded-xl bg-[#434c544f] overflow-y-auto space-y-2 p-2">
        {chatEle}
      </div>
      <Footer />
    </>
  );
};

export default index;
