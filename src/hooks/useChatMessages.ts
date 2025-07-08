import { getChatMessages, type Message } from "@/services/chat-service";
import { useChatStore } from "@/store";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useChatMessages = () => {
  const { activeChat } = useChatStore();
  const queryClient = useQueryClient();
  const { data: messages } = useQuery({
    queryKey: [`chat:${activeChat.id}`],
    queryFn: async () => (await getChatMessages(activeChat.id)).data,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: 5 * 60 * 1000,
  });
  const addMessageToChat = (message: Message) => {
    queryClient.setQueryData([`chat:${message.chatId}`], (oldData: Message[]) =>
      oldData ? [...oldData, message] : []
    );
  };
  return { messages, addMessageToChat };
};
