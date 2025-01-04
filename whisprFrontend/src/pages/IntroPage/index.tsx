import React, { useEffect } from "react";
import { useMyContext } from "../../context/MyAppContextProvider";

const Intro: React.FC = () => {
  const { checkIsAuthenticated } = useMyContext();

  useEffect(() => {
    setTimeout(() => {
      checkIsAuthenticated();
    }, 2000);
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
