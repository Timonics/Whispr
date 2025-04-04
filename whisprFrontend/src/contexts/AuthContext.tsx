import React, { createContext, useState } from "react";
import axios from "axios";
import { MyAppProps } from "../interfaces";
import { toast } from "react-toastify";
import { AuthState, LoginData, RegisterData } from "../interfaces/auth";
import { UserProfile } from "../interfaces/user";

export const AuthContext = createContext<AuthState | null>(null);

const AuthProvider: React.FC<MyAppProps> = ({ children }) => {
  const serverURL: string = "http://localhost:5002/api/v1/";
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authIsLoading, setAuthIsLoading] = useState<boolean>(false);
  const [myProfile, setMyProfile] = useState<UserProfile>({
    _id: "",
    name: "",
    email: "",
    avatar: "",
  });

  const registerUser = async (userRegisterData: RegisterData) => {
    setAuthIsLoading(true);
    try {
      const registerResponse = await axios.post(
        `${serverURL}users/register`,
        userRegisterData,
        {
          withCredentials: true,
        }
      );

      const profileData = registerResponse.data as UserProfile;
      setIsAuthenticated(true);
      setMyProfile(profileData);
    } catch (error: any) {
      console.error(error);
      if (error.response) {
        toast.error(error.response.data.message);
      }
    } finally {
      setAuthIsLoading(false);
    }
  };

  const loginUser = async (loginData: LoginData) => {
    setAuthIsLoading(true);
    try {
      const loginResponse = await axios.post(
        `${serverURL}users/login`,
        loginData,
        { withCredentials: true }
      );
      const profileData = loginResponse.data as UserProfile;
      setMyProfile(profileData);
      setIsAuthenticated(true);
      toast.success("Logged in successfully");
    } catch (error: any) {
      console.error(error);
      if (error.response) {
        toast.error(error.response.data.message);
      }
    } finally {
      setAuthIsLoading(false);
    }
  };

  const checkIsAuthenticated = async () => {
    try {
      await axios.get(`${serverURL}users/check-auth`, {
        withCredentials: true,
      });
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
      setIsAuthenticated(false);
    }
  };

  const logoutUser = async () => {
    try {
      await axios.get(`${serverURL}users/logout`, {
        withCredentials: true,
      });
      setMyProfile({ _id: "", name: "", email: "", avatar: "" });
      setIsAuthenticated(false);
      toast.success("Logged out successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const contextValues = {
    isAuthenticated,
    authIsLoading,
    myProfile,
    registerUser,
    loginUser,
    checkIsAuthenticated,
    logoutUser,
  };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
