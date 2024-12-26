import React from "react";
import NavBar from "../../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

const HomeLayout: React.FC = () => {
  return (
    <div className="min-h-[100dvh] md:h-screen flex flex-col">
      <div className="md:h-[8%]"><NavBar /></div>
      <div className="md:h-[91%]"><Outlet /></div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
