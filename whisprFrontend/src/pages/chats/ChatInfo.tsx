import React from "react";
import { RiChatSmile3Fill } from "react-icons/ri";

const ChatInfo: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center relative gap-5">
      <div className="flex flex-col items-center">
        <div className="p-3 w-[50px] h-[50px] lg:w-[50px] lg:h-[50px] flex justify-center items-center rounded-xl bg-black/70 text-3xl animate-bounce text-[#7741f4] gap-0.5">
          <RiChatSmile3Fill />
        </div>
        <h1 className="text-2xl lg:text-3xl font-extrabold font-pops text-[#7741f4]">
          Whispr.
        </h1>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <h1 className="font-bold font-monte lg:text-lg">Ready to Connect?</h1>
        <div className="flex flex-col items-center gap-0.5">
          <p className="text-[11px] lg:text-sm font-pops opacity-35">
            Add a friend or contact to connect with
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInfo;
