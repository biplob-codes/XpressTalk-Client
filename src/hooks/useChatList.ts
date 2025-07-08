import {
  getChatList,
  type ChatListItem,
  type Message,
} from "@/services/chat-service";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useChatList = () => {
  const queryClient = useQueryClient();
  const { data: chatlist, isLoading } = useQuery({
    queryKey: ["chat-list"],
    queryFn: async () => (await getChatList()).data,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });
  const addMessageToChatList = (message: Message) => {
    queryClient.setQueryData(["chat-list"], (oldData: ChatListItem[]) =>
      oldData
        ? oldData.map((chat) =>
            chat.id === message.chatId
              ? {
                  ...chat,
                  last_message: message.content,
                  unreadCount: chat.unreadCount + 1,
                  updatedAt: message.createdAt,
                }
              : chat
          )
        : []
    );
  };
  return { chatlist, isLoading, addMessageToChatList };
};
