import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  MyAppProviderProps,
  MyAppContext,
  CreateUserData,
  UserProfile,
  LoginData,
  Conversation,
} from "../interfaces";

const MyContext = createContext<MyAppContext | undefined>(undefined);

const MyAppContextProvider: React.FC<MyAppProviderProps> = ({ children }) => {
  const serverURL: string = "http://localhost:5002/api/v1/";
  const [userProfile, setUserProfile] = useState<UserProfile>({
    _id: "",
    name: "",
    email: "",
    avatar: "",
  });
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      participants: [],
      messages: [],
    },
  ]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = async (userData: CreateUserData) => {
    setIsLoading(true);
    try {
      const registerResponse = await axios.post(
        `${serverURL}users/register`,
        userData,
        {
          withCredentials: true,
        }
      );
      const profileData = registerResponse.data as UserProfile;
      setUserProfile(profileData);
      setIsAuthenticated(true);
    } catch (error: any) {
      console.error(error);
      if (error.response) {
        toast.error(error.response.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const userLogin = async (loginData: LoginData) => {
    setIsLoading(true);
    try {
      const loginResponse = await axios.post(
        `${serverURL}users/login`,
        loginData,
        {
          withCredentials: true,
        }
      );
      const profileData = loginResponse.data as UserProfile;
      setUserProfile(profileData);
      setIsAuthenticated(true);
      toast.success("Logged in successfully");
    } catch (error: any) {
      console.error(error);
      if (error.response) {
        toast.error(error.response.data.message);
      }
    } finally {
      setIsLoading(false);
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

  const userLogout = async () => {
    try {
      await axios.get(`${serverURL}users/logout`, {
        withCredentials: true,
      });
      setUserProfile({ _id: "", name: "", email: "", avatar: "" });
      setIsAuthenticated(false);
      toast.success("Logged out successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const myProfile = async () => {
    try {
      const profileResponse = await axios.get(
        `${serverURL}users/profile/my-profile`,
        {
          withCredentials: true,
        }
      );
      const profileData = profileResponse.data as UserProfile;
      setUserProfile(profileData);
    } catch (error) {
      console.error(error);
    }
  };

  const getConversations = async () => {
    try {
      const conversationsResponse = await axios.get(
        `${serverURL}conversations`,
        {
          withCredentials: true,
        }
      );
      const conversationsData = conversationsResponse.data as Conversation[];
      setConversations(conversationsData);
    } catch (error) {
      console.error(error);
    }
  };

  const contextValues = {
    isAuthenticated,
    isLoading,
    setIsAuthenticated,
    userLogin,
    userProfile,
    setUserProfile,
    registerUser,
    checkIsAuthenticated,
    userLogout,
    myProfile,
    conversations,
    getConversations,
  };
  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("context must be applied with MyAppContextProvider");
  }
  return context;
};

export default MyAppContextProvider;
