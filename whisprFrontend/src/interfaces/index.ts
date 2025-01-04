import { ReactNode } from "react";

export interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface CreateUserData {
  name: string;
  email: string;
  password: string;
}

export interface UserProfile {
  _id: string,
  name: string;
  email: string;
  avatar?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface Conversation {
  participants: string[]
  messages: string[]
  created_at?: Date
}

export interface MyAppContext {
  isLoading: boolean
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  userProfile: UserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  registerUser: (userInfo: CreateUserData) => void;
  checkIsAuthenticated: () => Promise<void>;
  userLogout: () => Promise<void>;
  userLogin: (loginData: LoginData) => Promise<void>
  myProfile: () => Promise<void>
  
}

export interface MyAppProviderProps {
  children: ReactNode;
}
