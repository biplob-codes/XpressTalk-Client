import { getChatMessages } from "@/services/chat-service";
import { useChatStore } from "@/store";
import { useQuery } from "@tanstack/react-query";

export const useChatMessages = () => {
  const { activeChat, setMessages, messages } = useChatStore();
  useQuery({
    queryKey: [`chat:${activeChat.id}`],
    queryFn: async () => {
      const result = await getChatMessages(activeChat.id);
      setMessages(result.data);
      return result.data;
    },
  });

  return messages;
};
