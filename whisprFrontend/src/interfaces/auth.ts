import { UserProfile } from "./user";

export interface AuthState {
  isAuthenticated: boolean;
  authIsLoading: boolean;
  myProfile: UserProfile;
  registerUser: (registerData: RegisterData) => Promise<void>;
  loginUser: (loginData: LoginData) => Promise<void>;
  checkIsAuthenticated: () => Promise<void>;
  logoutUser: () => Promise<void>;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
