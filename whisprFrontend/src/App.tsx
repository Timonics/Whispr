import React from "react";

import { Routes, Route } from "react-router-dom";
import Intro from "./pages/IntroPage";
import HomeLayout from "./pages/HomePage";
import Chats from "./pages/HomePage/ChatsPage";
import Groups from "./pages/HomePage/GroupsPage";
import AuthLayout from "./pages/Auth";
import Login from "./pages/Auth/LoginPage";
import Signup from "./pages/Auth/SignupPage";
import AuthVerifySuccess from "./pages/Auth/AuthVerify";
import Profile from "./pages/Profile";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="home" element={<HomeLayout />} >
        <Route index element={<Chats />} />
        <Route path="groups" element={<Groups />}/> 
        <Route path="profile" element={<Profile />}/> 
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
        <Route path="verify-success" element={<AuthVerifySuccess />} />
      </Route>
    </Routes>
  );
};

export default App;
