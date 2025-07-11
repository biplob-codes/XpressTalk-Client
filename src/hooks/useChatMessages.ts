import {
  getChatMessages,
  type Message,
  type MessageStatus,
} from "@/services/chat-service";
import { useChatStore } from "@/store";
import { useQuery, useQueryClient } from "@tanstack/react-query";
interface SwapMessage {
  payload: Message;
  metadata: {
    tempId: string;
  };
}
interface UpdateMessageStatus {
  chatId: string;
  messageId: string;
  userId: string;
  status: MessageStatus;
}
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
    const oldMessages = queryClient.getQueryData<Message[]>([
      `chat:${message.chatId}`,
    ]);
    if (!oldMessages) return;
    const newMessages = [...oldMessages, message];
    queryClient.setQueryData([`chat:${message.chatId}`], newMessages);
  };
  const swapOutMessage = (message: SwapMessage) => {
    const oldMessages = queryClient.getQueryData<Message[]>([
      `chat:${message.payload.chatId}`,
    ]);
    if (!oldMessages) return;
    const updatedMessages = oldMessages.map((m) =>
      m.id === message.metadata.tempId ? message.payload : m
    );
    queryClient.setQueryData(
      [`chat:${message.payload.chatId}`],
      updatedMessages
    );
  };
  const updateMessageStatus = (message: UpdateMessageStatus) => {
    console.log("called", message);

    const oldMessages = queryClient.getQueryData<Message[]>([
      `chat:${message.chatId}`,
    ]);
    if (!oldMessages) return;
    const updatedMessages = oldMessages.map((m) =>
      m.id === message.messageId ? { ...m, status: message.status } : m
    );
    queryClient.setQueryData([`chat:${message.chatId}`], updatedMessages);
  };
  return { messages, addMessageToChat, swapOutMessage, updateMessageStatus };
};
