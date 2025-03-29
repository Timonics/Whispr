import React, { ChangeEvent, useState } from "react";
// import ChatInfo from "../pages/chats/ChatInfo";
import SideNav from "../components/side-nav";
import Chats from "../pages/chats";
import { TbPlus } from "react-icons/tb";
import ChatInfo from "../pages/chats/ChatInfo";
import useConversation from "../hooks/useConversation";
import Loading from "../components/load";

const ChatsLayout: React.FC = () => {
  const { userProfile, getUserProfile, isLoading } = useConversation();
  const [userSelected, setUserSelected] = useState<string>("");
  const [isUserSelected, setIsUserSelected] = useState<boolean>(false);
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

  console.log(userProfile);

  return (
    <>
      <div className="h-full flex sm:gap-2 px-2 sm:px-0 pb-2">
        <SideNav />
        <div className="flex flex-col w-full">
          <h1 className="font-pops pt-2 font-bold text-4xl lg:text-[40px] h-[64px] flex items-center">
            Chats
          </h1>
          <div className="flex gap-3 pt-1 tabmax:mr-2">
            <div className="flex pb-10 sm:pb-0 flex-col rounded-xl bg-slate-600/75 overflow-y-auto h-[calc(100vh-128px)] no-scrollbar w-full lg:w-1/3">
              {
                /* Array(10)
              .fill(0)
              .map((_, i) => (
                <div
                key={i}
                className="flex items-center justify-between p-4 border-b border-slate-700"
                >
                a
                </div>
              )) */
                <div className="h-full flex flex-col gap-3 items-center justify-center text-8xl">
                  <TbPlus
                    className="rounded-full p-4 bg-indigo-600 text-gray-800 cursor-pointer"
                    onClick={() => setShowAddUser(true)}
                  />
                  <p className="text-base font-bold font-monte">
                    Start a new conversation
                  </p>
                </div>
              }
            </div>
            <div className="hidden lg:flex w-2/3 bg-black/30 rounded-xl mr-2">
              {isUserSelected ? <Chats /> : <ChatInfo />}
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
          </div>
        </>
      )}
    </>
  );
};

export default ChatsLayout;
