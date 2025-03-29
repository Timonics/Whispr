export interface UserResponseData {
  _id: string;
  name: string;
  email: string;
  password: string;
  friends: string[];
  avatar?: string;
  status?: string;
}

export interface UserProfile {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
}
