import React from "react";
import NavBar from "../../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

const HomeLayout: React.FC = () => {
  return (
    <div className="min-h-[100dvh] h-dvh">
      <div className="sm:h-[8%]"><NavBar /></div>
      <div className="sm:h-[92%]"><Outlet /></div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
