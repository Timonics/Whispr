import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { CgAttachment } from "react-icons/cg";

import { TbSearch, TbPhone, TbUser, TbSend } from "react-icons/tb";

const Chat: React.FC = () => {
  return (
    <div className="flex flex-col h-full p-2">
      <div className="flex gap-2 items-center w-full border-b border-white/40 pb-1.5">
        <div className="flex items-center justify-between w-full ">
          <div className="flex items-center gap-2">
            <div className="size-[40px] rounded-full bg-white/10 flex items-center justify-center text-lg">
              <TbUser />
            </div>
            <h1 className="font-bold text-sm font-pops">Oderinde Michael</h1>
          </div>
          <div className="flex gap-3 items-center">
            <div className="p-1.5 bg-black/50 rounded-md">
              <TbPhone />
            </div>
            <TbSearch />
          </div>
        </div>
      </div>
      <div className="h-full"></div>
      <div className="mt-auto flex items-center w-full p-1 gap-3">
        <div className="flex items-center gap-2">
          <BsEmojiSmile />
          <CgAttachment />
        </div>
        <div className="flex items-center gap-1.5 w-full">
          <input
            type="text"
            placeholder="Type a message"
            className="text-xs outline-none lg:text-sm bg-white/10 rounded-full w-full p-2"
          />
          <button
            disabled={true}
            className="p-2 rounded-full bg-white/5 flex items-center"
          >
            <TbSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
