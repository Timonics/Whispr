export interface UserResponseData {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
  isActive?: boolean
}

export interface UserProfile {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
}
