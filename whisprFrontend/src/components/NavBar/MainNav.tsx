import React from "react";
//import UserProfileIcon from "../UserProfileIcon";
//import { Link } from "react-router-dom";

const MainNav: React.FC = () => {
  return (
    <div className="flex justify-between">
      <h1 className="font-black font-monte text-sm text-[#7741f4]">Whispr.</h1>
      {/* <Link to="profile" className="flex items-center">
        <UserProfileIcon
          height={20}
          width={20}
          colorHex="7741f4"
          opacity={100}
        />
      </Link> */}
    </div>
  );
};

export default MainNav;
