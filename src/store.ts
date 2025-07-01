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

interface ActiveChatStore {
  activeChat: string;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  setActiveChat: (id: string) => void;
}

export const useActiveChatStore = create<ActiveChatStore>((set) => ({
  activeChat: "",
  messages: [],
  setMessages: (messages) => set((state) => ({ ...state, messages })),
  setActiveChat: (id: string) => set({ activeChat: id }),
}));
