import type { UserSignInType, UserSignUpType } from "@/schema/auth-schema";
import { apiClient } from "./apiClient";
interface Response {
  success: true;
  message: string;
  data?: {
    accessToken: string;
  };
  errors?: any;
}
export const signupUser = async (user: UserSignUpType) =>
  apiClient.post<Response>("/auth/signup", user).then((r) => r.data);
export const signinUser = async (user: UserSignInType) =>
  apiClient.post<Response>("/auth/signin", user).then((r) => r.data);
