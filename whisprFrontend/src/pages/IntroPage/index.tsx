import React, { useEffect } from "react";
import { useMyContext } from "../../context/MyAppContextProvider";
import { useNavigate } from "react-router-dom";

const Intro: React.FC = () => {
  const { userProfile } = useMyContext();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      userProfile ? navigate("/home") : navigate("/auth/register");
    }, 1500);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-5xl font-bold font-pops md:text-6xl lg:text-8xl text-[#7741f4]">
        Whispr.
      </h1>
    </div>
  );
};

export default Intro;
