import { create } from "zustand";
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
