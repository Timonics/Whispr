import React, { createContext, useEffect, useState } from "react";
import { MyAppProps } from "../interfaces";
import {
  ConversationData,
  ConversationState,
  Message,
  MessageData,
} from "../interfaces/conversation";
import axios from "axios";
import { UserProfile, UserResponseData } from "../interfaces/user";
import useSocket from "../hooks/useSocket";
import useAuth from "../hooks/useAuth";

export const ConversationContext = createContext<ConversationState | null>(
  null
);

const ConversationProvider: React.FC<MyAppProps> = ({ children }) => {
  const { socket } = useSocket();
  const { myProfile } = useAuth();
  const [userProfile, setUserProfile] = useState<UserProfile>({
    _id: "",
    name: "",
    email: "",
    avatar: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showUserProfile, setShowUserProfile] = useState<boolean>(false);
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [conversations, setConversations] = useState<ConversationData[]>([]);

  useEffect(() => {
    if (!socket) return;
    const handleMessageReceive = (message: Message) => {
      setMessages((prevState) => [...prevState, message]);
    };

    socket.on("receiveMessage", handleMessageReceive);

    return () => {
      socket.off("receiveMessage");
    };
  }, [socket, myProfile._id]);


  const sendMessage = (message: string, receiverId: string) => {
    if (!message.trim() || !socket) return;

    const newMessage: Message = {
      text: message,
      senderId: myProfile._id,
      receiverId: receiverId,
    };

    socket.emit("sendMessage", newMessage);
  };

  const getUserProfile = async (email: string) => {
    setIsLoading(true);
    try {
      const userProfileResponse = await axios.post(
        `http://localhost:5002/api/v1/users/profile/get-user`,
        { email },
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
      setShowUserProfile(true);
    } catch (err) {
      console.error("Error: ", err);
      setUserProfile({ _id: "", name: "", email: "", avatar: "" });
      setShowUserProfile(false);
    } finally {
      setIsLoading(false);
    }
  };

  const getAllConversations = async () => {
    try {
      const conversationsResponse = await axios.get(
        "http://localhost:5002/api/v1/conversations",
        {
          withCredentials: true,
        }
      );

      const conversationData = conversationsResponse.data as ConversationData[];
      setConversations(conversationData);
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  const getMessages = async (userId: string) => {
    try {
      const messagesResponse = await axios.get(
        `http://localhost:5002/api/v1/messages/${userId}`,
        {
          withCredentials: true,
        }
      );

      const messagesData = messagesResponse.data as MessageData[];
      setMessages(messagesData);
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  useEffect(() => {
    getAllConversations();
  }, []);


  const contextValues = {
    userProfile,
    getUserProfile,
    isLoading,
    showUserProfile,
    sendMessage,
    messages,
    conversations,
    setMessages,
  };

  return (
    <ConversationContext.Provider value={contextValues}>
      {children}
    </ConversationContext.Provider>
  );
};

export default ConversationProvider;
