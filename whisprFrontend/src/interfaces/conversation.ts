import { UserProfile } from "./user";

export interface ConversationState {
  userProfile: UserProfile | null;
  getUserProfile: (email: string) => Promise<void>;
  isLoading: boolean
}

export interface ConversationData {
  _id: string;
  participants: string[];
  messages: string[];
  createdAt: Date;
}
