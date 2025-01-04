import React, { useEffect, useRef, useState } from "react";

import { BsThreeDots } from "react-icons/bs";
import { TbNotification, TbSettings } from "react-icons/tb";
import { TbLogout } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { useMyContext } from "../../context/MyAppContextProvider";

const NavBar: React.FC = () => {
  const { userLogout } = useMyContext();
  const location = useLocation();
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const targetRef = useRef(null);

  let headerName: string;
  if (location.pathname === "/home") {
    headerName = "Chats";
  } else if (location.pathname === "/home/groups") {
    headerName = "Groups";
  } else if (location.pathname === "/home/profile") {
    headerName = "Profile";
  } else {
    headerName = "Chats";
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the target element is intersecting
        setIsHeaderVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    const targetElement = targetRef.current;

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);

  const handleClick = () => {
    userLogout();
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full shadow transition-transform md:hidden backdrop-blur-md h-[30px] duration-300 z-50 flex justify-between items-center px-2 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <BsThreeDots />
        <p className="text-sm font-bold font-monte">{headerName}</p>
        <TbNotification />
      </header>
      <div
        className={`flex p-3 justify-between w-full ${
          location.pathname !== "/auth/register" &&
          location.pathname !== "/auth/login" &&
          location.pathname !== "/auth/verify-success" &&
          "md:h-full md:items-center md:bg-gray-950"
        }`}
      >
        <h1
          className="font-black text-xs font-monte text-[#7741f4]"
          ref={targetRef}
        >
          Whispr.
        </h1>
        <div className="flex gap-6">
          <TbSettings />
          <TbLogout onClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
