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

interface ActiveChatStore {
  activeChat: ActiveChat;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  setActiveChat: (chat: ActiveChat) => void;
}

export const useActiveChatStore = create<ActiveChatStore>((set) => ({
  activeChat: {} as ActiveChat,
  messages: [],
  setMessages: (messages) => set((state) => ({ ...state, messages })),
  setActiveChat: (chat: ActiveChat) => set({ activeChat: chat }),
}));
