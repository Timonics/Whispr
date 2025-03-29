import { UserProfile } from "./auth";

export interface ApiState {
  userProfile: UserProfile | null;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>;
}
