import type { UserSignInType, UserSignUpType } from "@/schema/auth-schema";
import { apiClient } from "./apiClient";
export interface Response {
  success: true;
  message: string;
  errors?: any;
}
interface AuthResponse extends Response {
  data?: {
    accessToken: string;
  };
}
export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
  image?: string;
  bio?: string;
}
interface UserResponse extends Response {
  data?: {
    user: User;
  };
}
export const signupUser = async (user: UserSignUpType) =>
  apiClient.post<AuthResponse>("/auth/signup", user).then((r) => r.data);
export const signinUser = async (user: UserSignInType) =>
  apiClient.post<AuthResponse>("/auth/signin", user).then((r) => r.data);
export const getUser = async () =>
  apiClient.get<UserResponse>("/auth/me").then((r) => r.data);
