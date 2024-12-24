import React from "react";
import NavBar from "../../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

const HomeLayout: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
