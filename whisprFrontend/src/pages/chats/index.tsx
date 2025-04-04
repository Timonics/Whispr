import React, { ChangeEvent, useEffect, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { CgAttachment } from "react-icons/cg";

import { TbPhone, TbUser, TbSend } from "react-icons/tb";
import { UserProfile } from "../../interfaces/user";
import useConversation from "../../hooks/useConversation";
import useAuth from "../../hooks/useAuth";
import useSocket from "../../hooks/useSocket";
import { MessageData } from "../../interfaces/conversation";

type ChatProps = {
  userProfile: UserProfile;
};

const Chat: React.FC<ChatProps> = ({ userProfile }) => {
  const { socket } = useSocket();
  const { myProfile } = useAuth();
  const { sendMessage, messages, setMessages } = useConversation();
  const [messageText, setMessageText] = useState<string>("");

  useEffect(() => {
    if (!socket) return;

    const chatParticipants = {
      senderId: myProfile._id,
      receiverId: userProfile._id,
    };

    socket.emit("fetchMessages", chatParticipants);

    socket.on("messagesFetched", (messagesData: MessageData[]) => {
      setMessages(messagesData);
    });
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMessageText(value);
  };

  const handleSendMessage = () => {
    sendMessage(messageText, userProfile._id);
    setMessageText("");
  };

  return (
    <div className="flex flex-col h-full w-full p-2">
      <div className="flex gap-2 items-center w-full ">
        <div className="flex items-center justify-between w-full mx-2">
          <div className="flex items-center gap-2">
            {userProfile?.avatar ? (
              <img
                src={userProfile.avatar}
                className="size-10 rounded-full bg-slate-600"
              />
            ) : (
              <div className="size-[40px] rounded-full bg-white/10 flex items-center justify-center text-lg">
                <TbUser />
              </div>
            )}
            <h1 className="font-bold text-sm font-pops">{userProfile?.name}</h1>
          </div>
          <div className="flex gap-3 items-center">
            <div className="p-1.5 bg-black/50 rounded-md">
              <TbPhone />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full overflow-y-auto no-scrollbar m-1 my-2 rounded-xl bg-white/5">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`flex items-center py-2 px-4 font-pops ${
              message.senderId === myProfile._id ? "justify-end" : ""
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="mt-auto flex items-center w-full p-1 gap-3">
        <div className="flex items-center gap-3">
          <BsEmojiSmile />
          <CgAttachment />
        </div>
        <div className="flex items-center gap-1.5 w-full">
          <input
            type="text"
            placeholder="Type a message"
            className="text-xs outline-none lg:text-sm bg-white/10 rounded-full w-full p-2"
            name="messageText"
            value={messageText}
            onChange={handleChange}
          />
          <button
            disabled={messageText === ""}
            className="p-2 rounded-full bg-white/5 flex items-center cursor-pointer"
            onClick={handleSendMessage}
          >
            <TbSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
