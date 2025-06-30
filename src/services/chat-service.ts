import { apiClient } from "./apiClient";
import { type Response } from "./auth-service";
interface ChatListResponse extends Response {
  data: {
    id: string;
    name: string;
  }[];
}
export interface Message {
  id: string;
  content: string;
  senderId: string;
  chatId: string;
  createdAt: string;
}
interface ChatMessageResponse extends Response {
  data: Message[];
}
export const getChatList = async () =>
  apiClient.get<ChatListResponse>("/chats/chat-list").then((res) => res.data);
export const getChatMessages = async (chatId: string) =>
  apiClient.get<ChatMessageResponse>(`/chats/${chatId}`).then((r) => r.data);
