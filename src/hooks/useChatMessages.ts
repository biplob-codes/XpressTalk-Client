import { getChatMessages } from "@/services/chat-service";
import { useActiveChatStore } from "@/store";
import { useQuery } from "@tanstack/react-query";

export const useChatMessages = () => {
  const { activeChat, setMessages, messages } = useActiveChatStore();
  useQuery({
    queryKey: [`chat:${activeChat}`],
    queryFn: async () => {
      const result = await getChatMessages(activeChat);
      setMessages(result.data);
      return result.data;
    },
  });

  return messages;
};
