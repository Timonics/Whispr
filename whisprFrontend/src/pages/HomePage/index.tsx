import React from "react";
import MainNav from "../../components/NavBar/MainNav";
import ChatNav from "../../components/ChatNav";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 h-screen px-2">
      <div className="h-[5%] place-content-center">
        <MainNav />
      </div>
      <div className="h-[95%] border">
        <ChatNav />
      </div>
    </div>
  );
};

export default Home;
