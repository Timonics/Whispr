import React from "react";

import { Routes, Route } from "react-router-dom";
import Intro from "./pages/IntroPage";
import Home from "./pages/HomePage";
import AuthLayout from "./pages/Auth";
import Login from "./pages/Auth/LoginPage";
import Signup from "./pages/Auth/SignupPage";
import AuthVerifySuccess from "./pages/Auth/AuthVerify";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="home" element={<Home />} />
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
        <Route path="verify-success" element={<AuthVerifySuccess />} />
      </Route>
    </Routes>
  );
};

export default App;
