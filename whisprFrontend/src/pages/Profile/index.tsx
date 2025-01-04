import React from "react";
import { TbUser } from "react-icons/tb";
import { useMyContext } from "../../context/MyAppContextProvider";

const index: React.FC = () => {
  const { userProfile } = useMyContext();
  return (
    <div className="flex flex-col items-center justify-center p-2 pt-4 gap-8">
      <div className="size-[150px] rounded-full relative items-center justify-center flex text-5xl bg-black/40">
        <TbUser />
        <div className="absolute bottom-0 right-1 size-[35px] rounded-full bg-white/45"></div>
      </div>
      <div className="w-full rounded-xl flex flex-col gap-4 font-pops p-3 py-4 bg-black/40 mb-10">
        <div className="flex flex-col gap-1 bg-white/5 rounded-xl p-2">
          <h1 className="font-monte text-lg font-bold mb-2">
            Personal Information
          </h1>
          <div>
            <h3 className="text-[11px] opacity-50">Name</h3>
            <p className="font-medium text-[13px]">{userProfile.name}</p>
          </div>
          <div>
            <h3 className="text-[11px] opacity-50">Bio</h3>
            <p className="text-[11px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1 bg-white/5 rounded-xl p-2">
          <h1 className="font-monte text-lg font-bold mb-2">Contact Details</h1>
          <div>
            <h3 className="text-[11px] opacity-50">Email</h3>
            <p className="font-medium text-[13px]">{userProfile.email}</p>
          </div>
          <div>
            <h3 className="text-[11px] opacity-50">Phone</h3>
            <p className="font-medium text-[11px]">09176355647</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
