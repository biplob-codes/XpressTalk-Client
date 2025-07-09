import { create } from "zustand";

export interface ActiveChat {
  name: string;
  id: string;
}

interface ChatStore {
  activeChat: ActiveChat;
  setActiveChat: (chat: ActiveChat) => void;
}
export const useChatStore = create<ChatStore>((set) => ({
  activeChat: {} as ActiveChat,
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
