import { create } from "zustand";
import type { Message } from "./services/chat-service";
interface WebSocketStore {
  socket: WebSocket | null;
  setSocket: (s: WebSocket) => void;
  removeSocket: (s: WebSocket) => void;
}
export const useWsStore = create<WebSocketStore>((set) => ({
  socket: null,
  setSocket: (s: WebSocket) => set((state) => ({ socket: s })),
  removeSocket: () => set({ socket: null }),
}));

export interface ActiveChat {
  name: string;
  id: string;
}
export interface ChatItem {
  id: string;
  name: string;
  last_message: string;
  updatedAt: string;
  unreadCount: number;
}

interface ChatStore {
  activeChat: ActiveChat;
  messages: Message[];
  chatlist: ChatItem[];
  setChatList: (chats: ChatItem[]) => void;
  setMessages: (messages: Message[]) => void;
  setActiveChat: (chat: ActiveChat) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  activeChat: {} as ActiveChat,
  messages: [],
  chatlist: [],
  setChatList: (chatlist) => set((state) => ({ ...state, chatlist })),
  setMessages: (messages) => set((state) => ({ ...state, messages })),
  setActiveChat: (chat: ActiveChat) => set({ activeChat: chat }),
}));

interface UIStore {
  isChatOpenOnMobile: boolean;
  selectedChat: string;
  setSelectedChat: (id: string) => void;
  setIsChatPanelOpenOnMobile: (open: boolean) => void;
}
export const useUIStore = create<UIStore>((set) => ({
  isChatOpenOnMobile: false,
  selectedChat: "",
  setSelectedChat: (id: string) => set((s) => ({ ...s, selectedChat: id })),
  setIsChatPanelOpenOnMobile: (open: boolean) =>
    set({ isChatOpenOnMobile: open }),
}));
