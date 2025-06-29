import { apiClient } from "./apiClient";
import { type Response } from "./auth-service";
interface ChatListResponse extends Response {
  data: {
    id: string;
    name: string;
  }[];
}
export const getChatList = async () =>
  apiClient.get<ChatListResponse>("/chats/chat-list").then((res) => res.data);
