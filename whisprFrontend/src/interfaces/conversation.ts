import { UserProfile, UserResponseData } from "./user";

export interface ConversationState {
  userProfile: UserProfile;
  getUserProfile: (email: string) => Promise<void>;
  isLoading: boolean;
  showUserProfile: boolean;
  sendMessage: (message: string, receiverId: string) => void;
  messages: MessageData[];
  conversations: ConversationData[];
  setMessages: React.Dispatch<React.SetStateAction<MessageData[]>>}

export interface ConversationData {
  _id: string;
  participants: UserResponseData[];
  last_message: MessageData;
  created_at: Date;
  updated_at?: Date;
}

export type Message = {
  senderId?: string;
  text: string;
  image?: string;
  receiverId: string;
};

export interface MessageData {
  _id?: string;
  conversationId?: string;
  text: string;
  image?: string;
  senderId?: string;
  receiverId?: string;
  timestamp?: Date;
}
