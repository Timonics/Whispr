import React from "react";
import { Outlet } from "react-router";
import Nav from "../components/nav";
import Footer from "../pages/footer";

const HomeLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-16">
        <Nav />
      </div>
      <div className="h-[calc(100vh-64px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
