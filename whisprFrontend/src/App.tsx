import React, { useEffect } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Intro from "./pages/IntroPage";
import HomeLayout from "./pages/HomePage";
import Chats from "./pages/HomePage/ChatsPage";
import Groups from "./pages/HomePage/GroupsPage";
import Calls from "./pages/HomePage/CallsPage";
import AuthLayout from "./pages/Auth";
import Login from "./pages/Auth/LoginPage";
import Signup from "./pages/Auth/SignupPage";
import AuthVerifySuccess from "./pages/Auth/AuthVerify";
import Profile from "./pages/Profile";
import { useMyContext } from "./context/MyAppContextProvider";

const App: React.FC = () => {
  const navigate = useNavigate();
  const { checkIsAuthenticated, isAuthenticated, myProfile } = useMyContext();

  useEffect(() => {
    checkIsAuthenticated();
    if (isAuthenticated) {
      myProfile();
      navigate("chats");
    } else {
      navigate("auth/register");
    }
  }, [isAuthenticated]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="chats" element={<HomeLayout />}>
          <Route index element={<Chats />} />
          <Route path="groups" element={<Groups />} />
          <Route path="profile" element={<Profile />} />
          <Route path="calls" element={<Calls />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Signup />} />
          <Route path="verify-success" element={<AuthVerifySuccess />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        theme="dark"
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        style={{ width: "300px", minHeight: "30px" }}
        stacked
        closeButton={false}
      />
    </>
  );
};

export default App;
