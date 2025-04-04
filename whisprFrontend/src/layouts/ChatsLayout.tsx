import React, { ChangeEvent, useState } from "react";
import SideNav from "../components/side-nav";
import Chats from "../pages/chats";
import { TbArrowLeft, TbPlus, TbUser } from "react-icons/tb";
import ChatInfo from "../pages/chats/ChatInfo";
import useConversation from "../hooks/useConversation";
import Loading from "../components/load";
import useAuth from "../hooks/useAuth";
import { UserProfile } from "../interfaces/user";

const ChatsLayout: React.FC = () => {
  const { myProfile } = useAuth();
  const {
    userProfile,
    getUserProfile,
    isLoading,
    showUserProfile,
    conversations,
  } = useConversation();
  const [isUserSelected, setIsUserSelected] = useState<boolean>(false);
  const [selectedUserProfile, setSelectedUserProfile] = useState<UserProfile>({
    _id: "",
    name: "",
    email: "",
    avatar: "",
  });
  const [showAddUser, setShowAddUser] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState({
    email: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserEmail({
      email: value,
    });
  };

  const handleGetUser = () => {
    getUserProfile(userEmail.email);
  };

  const conversationsMade = conversations.map((conversation) => {
    const receiver = conversation.participants.find(
      (participant) => participant._id !== myProfile._id
    );

    return receiver ? (
      <div
        key={conversation._id}
        className="p-4 border-b cursor-pointer flex items-center gap-5"
        onClick={() => {
          setSelectedUserProfile(receiver);
          setIsUserSelected(true);
        }}
      >
        {receiver.avatar ? (
          <img
            src={receiver.avatar}
            className="size-10 rounded-full bg-slate-600"
          />
        ) : (
          <div className="size-[40px] rounded-full bg-white/10 flex items-center justify-center text-lg">
            <TbUser />
          </div>
        )}
        <div>
          <h2 className="text-lg font-semibold font-pops">{receiver.name}</h2>
          <p className="text-gray-500 text-sm font-monte">
            Email: {receiver.email}
          </p>
        </div>
      </div>
    ) : null;
  });

  return (
    <>
      <div className="h-full flex sm:gap-2 px-2 sm:px-0 pb-2">
        <SideNav />
        <div className="flex flex-col w-full">
          <div className="h-[64px] flex items-center justify-between">
            <h1 className="font-pops font-bold text-4xl lg:text-[40px]">
              Chats
            </h1>
            <div className="mr-4 flex items-center gap-4">
              <TbPlus
                className="size-7 p-0.5 border-2 border-indigo-600 rounded-full bg-black text-indigo-600 cursor-pointer"
                onClick={() => setShowAddUser(true)}
              />
              {isUserSelected && (
                <div
                  className="flex items-center gap-1 bg-slate-900 rounded-lg p-2 cursor-pointer lg:hidden"
                  onClick={() => {
                    setIsUserSelected(false);
                  }}
                >
                  <TbArrowLeft />
                  <p className="opacity-40 text-xs font-monte">Back</p>
                </div>
              )}
            </div>
          </div>
          <div className="flex h-full gap-3 pt-1 tabmax:mr-2">
            <div
              className={`${
                isUserSelected ? "hidden lg:flex lg:w-1/3" : ""
              } lg:w-1/3 flex pb-10 sm:pb-0 flex-col rounded-xl bg-slate-600/75 overflow-y-auto h-[calc(100vh-128px)] mobileSm:h-[calc(100vh-172px)] no-scrollbar w-full`}
            >
              {conversations.length !== 0 ? (
                <div>{conversationsMade}</div>
              ) : (
                <div className="h-full flex flex-col gap-3 items-center justify-center text-8xl">
                  <TbPlus
                    className="rounded-full p-4 bg-indigo-600 text-gray-800 cursor-pointer"
                    onClick={() => setShowAddUser(true)}
                  />
                  <p className="text-base font-bold font-monte">
                    Start a new conversation
                  </p>
                </div>
              )}
            </div>
            <div
              className={`${
                isUserSelected
                  ? "w-full h-[calc(100vh-128px)] mobileSm:h-[calc(100vh-168px)] lg:w-2/3"
                  : "hidden"
              } lg:flex w-2/3 bg-black/30 mobileSm:h-[calc(100vh-172px)] rounded-xl mr-2`}
            >
              {isUserSelected ? (
                <Chats userProfile={selectedUserProfile} />
              ) : (
                <ChatInfo />
              )}
            </div>
          </div>
        </div>
      </div>
      {showAddUser && (
        <>
          <div
            className="absolute inset-0 backdrop-blur-sm z-10"
            onClick={() => setShowAddUser(false)}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] flex flex-col bg-slate-900 rounded-xl p-4 gap-5 items-center justify-center z-20 shadow-2xl shadow-indigo-600/40">
            {isLoading && <Loading />}
            <h2 className="text-4xl font-bold font-pops">Add User</h2>
            <label className="flex items-center gap-2 w-full border-b-[1.5px] border-[#7741f4]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-5 md:size-7 text-[#7741f4]/30"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"></path>
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"></path>
              </svg>
              <input
                type="text"
                className="p-1.5 w-full bg-[#40444800] outline-none font-monte"
                placeholder="Email"
                name="email"
                value={userEmail.email}
                onChange={handleChange}
              />
            </label>{" "}
            <button
              className="p-3 font-monte font-bold w-full bg-indigo-600 rounded-xl"
              onClick={handleGetUser}
            >
              Search user
            </button>
            {showUserProfile && (
              <div
                className="flex gap-5  w-[90%] justify-center items-center p-3 rounded-xl bg-slate-800 font-pops cursor-pointer"
                onClick={() => {
                  setShowAddUser(false);
                  setIsUserSelected(true);
                }}
              >
                {userProfile?.avatar ? (
                  <img
                    src={userProfile.avatar}
                    className="size-10 rounded-full bg-slate-600"
                  />
                ) : (
                  <div className="size-10 rounded-full bg-slate-600 flex items-center justify-center">
                    <TbUser size={25} />
                  </div>
                )}
                <p className="font-bold">{userProfile?.name}</p>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ChatsLayout;
