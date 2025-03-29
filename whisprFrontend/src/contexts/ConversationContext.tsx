import React, { createContext, useState } from "react";
import { MyAppProps } from "../interfaces";
import {
  //ConversationData,
  ConversationState,
} from "../interfaces/conversation";
import axios from "axios";
import { UserProfile, UserResponseData } from "../interfaces/user";

export const ConversationContext = createContext<ConversationState | null>(
  null
);

const ConversationProvider: React.FC<MyAppProps> = ({ children }) => {
  //const [conversations, setConversations] = useState<ConversationData[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getUserProfile = async (email: string) => {
    setIsLoading(true);
    try {
      const userProfileResponse = await axios.get(
        `http://localhost:5002/api/v1/users/profile/${email}`,
        {
          withCredentials: true,
        }
      );

      const userProfileData = userProfileResponse.data as UserResponseData;
      const profileData = {
        _id: userProfileData._id,
        name: userProfileData.name,
        email: userProfileData.email,
        avatar: userProfileData.avatar,
      };
      setUserProfile(profileData);
    } catch (err) {
      console.error("Error: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  const contextValues = { userProfile, getUserProfile, isLoading };

  return (
    <ConversationContext.Provider value={contextValues}>
      {children}
    </ConversationContext.Provider>
  );
};

export default ConversationProvider;
